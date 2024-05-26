import React from "react";
import { PopularPairs } from "./PopularPairs";
import { OtherPairs } from "./OtherPairs";

type Props = {};

export const MoreFx = (props: Props) => {
	return (
		<section className="max-w-7xl mx-auto my-24 px-6 flex flex-col gap-10">
			<div className="flex flex-col gap-6">
				<h2 className="text-2xl xl:text-4xl text-center font-semibold ">
					More FX pairs than anyone else
				</h2>
				<p className="text-gray-500 max-w-2xl text-center mx-auto">
					Get exposure to over 330 currency pairs on the world’s most liquid market. Trade on
					favourites like GBP, USD and EUR through to less popular currencies like the Turkish lira
					and Norwegian krone with spreads from as low as 0.7 pips.
				</p>
			</div>
			<PopularPairs />
			<OtherPairs />
		</section>
	);
};
