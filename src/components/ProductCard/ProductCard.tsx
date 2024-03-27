import Computer from "@/types/Computer";
import { formatDollar } from "@/utils/utils";
import classes from './ProductCard.module.css';

type Props = {
    data: Computer;
};

const ProductCard = (props: Props) => {
    const {
        type,
        name,
        imageUrl,
        specification,
        originalPrice,
        discountPrice,
        installmentAmount,
        estimatedArrival
    } = props.data;

    const btnText = type === 'Prebuilt' ? 'Buy Now' : 'Customize';
    const formattedOriginalPrice = formatDollar(originalPrice);
    const formattedDiscountPrice = formatDollar(discountPrice);
    const saveDollar = originalPrice - discountPrice;

	return (
        <li className={`flex flex-col justify-between box-border rounded-2xl text-normal ${classes['custom-shadow']}`}>
            <div className="flex flex-col items-start px-7 py-6">
                <div className='inline-block text-description text-xs font-bold border border-description rounded-full px-2.5 py-0.5'>{type} PC</div>
                <img className='self-center' src={imageUrl} />
                <h2 className="text-xl font-bold my-3 overflow-hidden whitespace-nowrap text-ellipsis w-full">{name}</h2>
                {specification.map(spec => <p key={spec}>{spec}</p>)}
            </div>
            <div className="bg-[#F2F6FA] px-7 pt-6 pb-8">
                <p className="inline-block bg-alert text-white text-sm rounded-full px-3 py-1">SAVE ${saveDollar}</p>
                <div className="flex items-end mt-1">
                    <h3 className="text-3xl font-bold mr-4">${formattedDiscountPrice}</h3>
                    <s className="text-description">${formattedOriginalPrice}</s>
                </div>
                <div className="flex items-center">
                    <p className="flex text-sm mr-1">
                        Starting at 
                        <span className="text-price">&nbsp;${installmentAmount}/mo&nbsp;</span>
                        with
                    </p>
                    <img className="w-[55px]" src='/icon-affirm.svg' />
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p className="font-bold mt-1">Free Shipping</p>
                        <p className="mt-1">Delivery By {estimatedArrival}</p>
                    </div>
                    <button className="border border-alert rounded-full text-alert px-5 py-1.5">{btnText}</button>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
