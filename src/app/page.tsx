import Slider from "@/components/Slider/Slider";
import ProductCard from "@/components/ProductCard/ProductCard";
import computerList from "@/mock/computer-list";

export default function Home() {
	return (
		<div className='mt-10 box-border'>
			<div className="flex flex-col items-center text-normal">
				<h1 className="text-5xl font-bold md:text-4xl">Best Seller Gaming PC</h1>
				<h2 className="text-3xl font-bold mt-3 mb-2 md:text-xl md:mt-1">Prebuilt & Custom</h2>
			</div>
			<Slider>
				{computerList.map((item) => (
					<ProductCard key={item.name} data={item} />
				))}
			</Slider>
		</div>
	);
}
