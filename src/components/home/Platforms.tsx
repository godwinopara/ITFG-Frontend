import meta4 from "../../images/meta-trader4.webp";
import meta5 from "../../images/meta-trader5.webp";
import tradingview from "../../images/tradingview.webp";
import spread from "../../images/spread4.webp";
import { FaCheck } from "react-icons/fa";

export default function Platforms() {
	return (
		<section className="max-w-7xl mx-auto grid px-6 my-20 lg:grid-cols-2 lg:gap-x-16 xl:px-0">
			<div>
				<h2 className="text text-4xl font-bold leading-10 mb-10 xl:mb-5">
					Powerful Trading Platforms
				</h2>
				<div className="flex items-center gap-8 mb-8 xl:mb-5">
					<img src={meta4} alt="" />
					<img src={meta5} alt="" />
				</div>
				<div className="mb-8 xl:mb-0">
					<img src={tradingview} alt="" />
				</div>
				<ul className="grid grid-cols-2 gap-5 my-10">
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
							<FaCheck />
						</div>
						Windows
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
							<FaCheck />
						</div>
						Web Browser
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
							<FaCheck />
						</div>
						MAC
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
							<FaCheck />
						</div>
						IOS
					</li>
				</ul>
			</div>
			<div>
				<img src={spread} alt="" />
			</div>
		</section>
	);
}
