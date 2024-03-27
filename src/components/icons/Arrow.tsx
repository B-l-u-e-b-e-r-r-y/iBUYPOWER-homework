import clsx from 'clsx';

type Props = {
	className: string;
	size?: string;
};

const Arrow = (props: Props) => {
	const { className, size = '24' } = props;
	const rootClassName = clsx(
		'fill-current',
		className,
	);

	return (
		<svg
			className={rootClassName}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
		</svg>
	);
};

export default Arrow;
