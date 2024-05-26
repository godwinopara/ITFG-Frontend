import React from "react";
import { Desc, Heading } from "../sharedUi/Contents";
import Button from "../Button";

type Props = {};

export const TradingOpportunity = (props: Props) => {
  return (
    <section className="bg-white flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-16 py-24 text-center md:w-3/4">
        <Heading title="More trading opportunities" center />
        <Desc desc="With thousands of spread betting and CFD instruments to trade, including forex, forex indices, indices, commodities, cryptocurrencies, shares, share baskets, ETFs and treasuries, you're able to create a diverse portfolio, increasing your potential trading opportunities." />
        <Button btnText="View Our Product Range" className="w-fit py-3 px-8 font-bold rounded-md text-center border border-[#00c5e8] text-[#00c5e8] mx-auto" />
      </div>
    </section>
  );
};
