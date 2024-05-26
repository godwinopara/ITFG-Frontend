import Button from "../Button";

type Props = {};

export const TradeForex = (props: Props) => {
	return (
		<div className="bg-black text-white py-16 xl:py-0">
			<section className=" xl:mb-0 min-h-[80vh] max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10 ">
				<div className="text-center mb-20 xl:text-left xl:mb-0 flex-1">
					<h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
						Trade on forex indices
					</h1>
					<p className="text-lg text-white mb-10">
						Expecting big news from the White House? Our forex indices are a collection of related,
						strategically-selected pairs, grouped into a single basket. Trade on our 12 baskets of
						FX pairs, including the InvestInspire USD Index.
					</p>
					<div className="">
						<Button
							btnText="Explore forex indices"
							className="bg-primary py-3 px-8 hover:bg-primary-hover text-white rounded-[50px]"
						/>
					</div>
				</div>
				<div className="flex-1">
					<img
						src={"https://assets.cmcmarkets.com/web_redesign/img_forex_fx_1_small.png"}
						alt="hero"
						className="w-full h-full"
					/>
				</div>
			</section>
		</div>
	);
};
