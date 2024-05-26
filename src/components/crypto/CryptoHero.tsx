import React from "react";
import heroImage from "../../images/img_crypto_hero2x_medium.png";
import Button from "../Button";

type Props = {};

export const CryptoHero = (props: Props) => {
	return (
		<section className="bg-black text-white">
			<div className="xl:mb-0 min-h-[80vh] py-28 xl:my-0 max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-32">
				<div className="text-center mb-20 xl:text-left xl:mb-0 w-full lg:w-2/3">
					<h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
						Cryptocurrency trading
					</h1>
					<p className="text-lg text-gray-300 mb-10">
						Trade on popular cryptocurrencies with leverage, from bitcoin and ethereum to TRON and
						NEO, on our award-winning spread betting and CFD platform. With tight spreads,
						lightning-fast execution and the highest customer satisfaction in the industry.*
					</p>
					<div className="">
						<Button
							btnText="Start trading on cryptos"
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
