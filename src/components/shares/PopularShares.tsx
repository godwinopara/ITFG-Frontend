import React from "react";
import { SymbolInfo } from "react-ts-tradingview-widgets";

type Props = {};

export const PopularShares = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl xl:text-2xl  font-semibold ">
        Most popular shares
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <SymbolInfo colorTheme="dark" autosize></SymbolInfo>
        <SymbolInfo colorTheme="dark" autosize symbol="TSLA"></SymbolInfo>
        <SymbolInfo colorTheme="dark" autosize symbol="AMZN"></SymbolInfo>
      </div>
      <p className="text-gray-500">
        Past performance is not a reliable indicator of future results.
      </p>
    </div>
  );
};
