import React from "react";
import heroImage from "../../images/img_commodities_hero_extra.png";
import Button from "../Button";

type Props = {};

export const CommoditiesHero = (props: Props) => {
	return (
		<section className="bg-black text-white">
			<div className="xl:mb-0 min-h-[80vh] py-28 xl:my-0 max-w-7xl mx-auto px-6  xl:grid xl:grid-cols-2 xl:items-center xl:gap-x-32">
				<div className="text-center mb-20 xl:text-left xl:mb-0 w-full ">
					<h1 className="text-3xl xl:text-5xl font-bold mb-5 tracking-wide leading-[120%]">
						Commodity trading
					</h1>
					<p className="text-lg mb-10 text-gray-300">
						Spread bet and trade CFDs with leverage on Gold, Silver, Brent and West Texas Crude Oil
						plus commodity indices, on our award-winning platform. With tight spreads,
						lightning-fast execution* and the highest customer satisfaction in the industry.**
					</p>
					<div className="">
						<Button
							btnText="Start trading commodities"
							className="bg-primary py-3 px-8 hover:bg-primary-hover text-white rounded-[50px]"
						/>
					</div>
				</div>
				<div>
					<img src={heroImage} alt="hero" className="" />
				</div>
			</div>
		</section>
	);
};
