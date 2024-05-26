import React from "react";
import { StockMarket } from "react-ts-tradingview-widgets";

type Props = {};

export const OtherShares = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl xl:text-2xl  font-semibold ">
        Other popular instruments
      </h2>
      <StockMarket colorTheme="dark" height={600} width="100%" showChart></StockMarket>
      <p className="text-gray-500">
        Pricing is indicative. Past performance is not a reliable indicator of
        future results.
      </p>
    </div>
  );
};
