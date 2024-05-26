import React from "react";
import { MiniChart } from "react-ts-tradingview-widgets";

type Props = {};

export const PopularPairs = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl xl:text-2xl  font-semibold ">
        Most popular forex pairs
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <MiniChart colorTheme="dark" width="100%" symbol=""></MiniChart>
        <MiniChart colorTheme="dark" width="100%" symbol="AUDUSD"></MiniChart>
        <MiniChart colorTheme="dark" width="100%" symbol="GBPUSD"></MiniChart>
      </div>
      <p className="text-gray-500">
        Past performance is not a reliable indicator of future results.
      </p>
    </div>
  );
};
