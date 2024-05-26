import React from "react";
import { PopularCommodities } from "./PopularCommodities";
import { OtherCommodities } from "./OtherCommodities";

type Props = {};

export const MoreCommodityFx = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold ">
          Over 100 cash and forward commodities
        </h2>
        <p className="text-gray-500 max-w-2xl text-center mx-auto">
          Get exposure to volatility across cash and forward commodities
          including favourites like Gold, Silver, crude oils and Natural Gas,
          with spreads from as low as 0.3 points.
        </p>
      </div>
      <PopularCommodities />
      <OtherCommodities />
    </section>
  );
};
