import React from "react";
import { Screener } from "react-ts-tradingview-widgets";

type Props = {};

export const OtherTreasure = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl xl:text-2xl  font-semibold ">
        Other popular treasuries
      </h2>
      <Screener colorTheme="dark" width="100%" height={600}></Screener>
      <p className="text-gray-500">
        Pricing is indicative. Past performance is not a reliable indicator of
        future results.
      </p>
    </div>
  );
};
