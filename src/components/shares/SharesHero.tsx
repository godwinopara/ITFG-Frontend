import React from "react";
import heroImage from "../../images/img_commodities_hero_extra.png";
import Button from "../Button";

type Props = {};

export const SharesHero = (props: Props) => {
	return (
		<section className="bg-black text-white">
			<div className="xl:mb-0 min-h-[100vh] py-28 xl:my-0 max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-32">
				<div className="text-center mb-20 xl:text-left xl:mb-0 w-full lg:w-2/3">
					<h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
						Shares trading
					</h1>
					<p className="text-lg text-gray-300 mb-10">
						Spread bet or trade CFDs on 10,000+ shares with leverage, on our award-winning
						platform*. With tight spreads, lightning-fast execution and 24/5 UK-based customer
						service.
					</p>
					<div className="">
						<Button
							btnText="Start trading shares"
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
