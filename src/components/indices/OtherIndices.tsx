import React from "react";
import { MarketData } from "react-ts-tradingview-widgets";

type Props = {};

export const OtherIndices = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl xl:text-2xl  font-semibold ">
        Other popular instruments
      </h2>
      <MarketData colorTheme="dark" width="100%" height={600}></MarketData>
      <p className="text-gray-500">
        Pricing is indicative. Past performance is not a reliable indicator of
        future results.
      </p>
    </div>
  );
};
