"use client";

import React, { useState, useEffect, useRef } from "react";
import classes from './Slider.module.css';
import Arrow from "../icons/Arrow";

let moveDiff = 0;

type ConfigType = {
    normal: number;
    xl: number;
    md: number;
    sm: number;
};

const getVisibleItems = (screenWidth: number): number => {
    const screenConfig: ConfigType = {
        normal: 1920,
        xl: 1280,
        md: 767,
        sm: 600
    };

    const visibleItemsConfig : ConfigType = {
        normal: 4,
        xl: 3,
        md: 2,
        sm: 1
    };

    // 根據 screenWidth 來判斷對應的 visibleItems
    let visibleItems = visibleItemsConfig.normal;
    if (screenWidth <= screenConfig.xl && screenWidth > screenConfig.md) {
        visibleItems = visibleItemsConfig.xl;
    } else if (screenWidth <= screenConfig.md && screenWidth > screenConfig.sm) {
        visibleItems = visibleItemsConfig.md;
    } else if (screenWidth <= screenConfig.sm) {
        visibleItems = visibleItemsConfig.sm;
    }

    return visibleItems;
}

interface SliderProps {
    children?: JSX.Element[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
	const [currentIndex, setCurrentIndex] = useState(0); // 最左邊卡片的 index
	const [isDragging, setIsDragging] = useState(false); // 拖曳狀態
	const [startX, setStartX] = useState(0);             // 紀錄滑鼠點下去的起始值，計算 diff 用
    const [width, setWidth] = useState(0);               // 網頁寬度
	const [translation, setTranslation] = useState(0);   // 最左邊卡片的 index

	const containerRef = useRef<HTMLDivElement>(null);

    const visibleItems = getVisibleItems(width);
    const dataLength = React.Children.count(children);

    // 計算 diff 最靠近哪張卡片的 index
    const getClosestIndex = (diff: number): null | number => {
        const normalizedDiff = Math.abs((diff * visibleItems) / width);

        /**
         * threshold
         * 0~1
         * 滑動多少才能換到下一頁
         * - 0 為最小幅度
         * - 1 為最大幅度
         */
        const threshold = 0.05;

        // 根據滑動方向和閾值計算最接近的索引
        if (moveDiff > 0) {
            // 向前滑動
            const prevNextIndex = currentIndex - (visibleItems * threshold);
            if (normalizedDiff > prevNextIndex) {
                return null;
            }

            return Math.max(
                currentIndex - visibleItems,
                0
            );
        } else {
            // 向後滑動
            const prevNextIndex = currentIndex + (visibleItems * threshold);
            if (normalizedDiff < prevNextIndex) {
                return null;
            }

            return Math.min(
                currentIndex + visibleItems,
                dataLength - visibleItems
            );
        }
    }

    // 取得 index 的位移量，回傳負數
    const getIndexTranslation = (index: number): number => {
        return -Math.abs((index / visibleItems) * width);
    }

    // <
	const prevClickHandler = () => {
        if (isDragging) {
            setIsDragging(false);
        }

        // currentIndex 大於第 0 個才可以再往前
        if (currentIndex > 0) {
            // 如果會超出第 0 個卡片就設定為 0
            if (currentIndex - visibleItems < 0) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(prevIndex => prevIndex - visibleItems);
            }
        }
	};

    // >
	const nextClickHandler = () => {
        if (isDragging) {
            setIsDragging(false);
        }

        // currentIndex 必須小於 maxIndex 才可以再往後
        const maxIndex = dataLength - 1;
        if (currentIndex < maxIndex) {
            // 如果會超出最後一張卡片，則設定為最後一組卡片的起始位置
            if (currentIndex + visibleItems > dataLength - visibleItems) {
                setCurrentIndex(dataLength - visibleItems);
            } else {
                setCurrentIndex(prevIndex => prevIndex + visibleItems);
            }
        }
	};

    const getClientX = (e: React.TouchEvent<HTMLUListElement> | React.MouseEvent<HTMLUListElement>) => {
        if (e.hasOwnProperty('touches')) {
            const typedEvent = e as React.TouchEvent<HTMLUListElement>;
            return typedEvent.touches[0].clientX;
        } else {
            const typedEvent = e as React.MouseEvent<HTMLUListElement>;
            return typedEvent.clientX;
        }
    }

    // 開始滑動 (滑鼠/手指按下的瞬間)
	const moveStartHandler = (e: React.TouchEvent<HTMLUListElement> | React.MouseEvent<HTMLUListElement>) => {
		setIsDragging(true);
        const startX = getClientX(e);
        setStartX(startX);
	};

    // 滑動中
	const moveMoveHandler = (e: React.TouchEvent<HTMLUListElement> | React.MouseEvent<HTMLUListElement>) => {
		if (!isDragging) {
            return;
        }

        const currentX = getClientX(e);
		const diff = currentX - startX;
        const currentIndexTranslation = getIndexTranslation(currentIndex);
		setTranslation(currentIndexTranslation + diff);

        moveDiff = diff;  // 用來記錄是往前還是往後滑動
	};

    // 結束滑動 (滑鼠/手指放開的瞬間)
	const moveEndHandler = () => {
		setIsDragging(false);
        
        const maxIndexTranslation = getIndexTranslation(dataLength - visibleItems);

        if (translation <= maxIndexTranslation) {
            setTranslation(maxIndexTranslation);
            return;
        }

        if (translation >= 0) {
            setTranslation(0);
            return;
        }

        const closestIndex = getClosestIndex(translation);
        if (closestIndex !== null) {
            setCurrentIndex(closestIndex);
        } else {
            const currentIndexTranslation = getIndexTranslation(currentIndex);
            setTranslation(currentIndexTranslation);
        }
	};

    // 綁定 resize 事件的 handler
    useEffect(() => {
		const resizeHandler = () => {
			if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth);
			}
		};

		resizeHandler();
		window.addEventListener("resize", resizeHandler);
        
		return () => {
            window.removeEventListener("resize", resizeHandler);
        }
	}, []);

    // 計算偏移量
	useEffect(() => {
        if (width > 0) {
            const currentIndexTranslation = getIndexTranslation(currentIndex);
            setTranslation(currentIndexTranslation);
        }
	}, [width, currentIndex]);

    const btnClassName = `bg-white text-gray-800 p-3 cursor-pointer ${classes['button-shadow']} group hover:bg-normal`;

	return (
		<div className="relative py-3 overflow-x-hidden" ref={containerRef}>
            <div className="flex justify-end mr-2 mb-4">
                <button
					className={`${btnClassName} mr-3`}
					onClick={prevClickHandler}
					disabled={currentIndex === 0}
				>
					<Arrow className='text-normal group-hover:text-white' size='24' />
				</button>
                <button
					className={btnClassName}
					onClick={nextClickHandler}
					disabled={currentIndex === dataLength - 1}
				>
					<Arrow className='text-normal rotate-180 group-hover:text-white' size='24' />
				</button>
            </div>
			<ul
				className={`flex box-border select-none cursor-grab ${classes.slider}`}
				style={{
					transform: `translateX(${translation}px)`,
					transition: isDragging ? "none" : "transform 0.3s ease-out",
				}}
				onMouseDown={moveStartHandler}
				onMouseMove={moveMoveHandler}
				onMouseUp={moveEndHandler}
				onTouchStart={moveStartHandler}
				onTouchMove={moveMoveHandler}
				onTouchEnd={moveEndHandler}
			>
                {children}
			</ul>
		</div>
	);
};

export default Slider;
