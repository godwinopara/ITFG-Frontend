import React from "react";
import Button from "../Button";

type Props = {};

export const TradeCrypto = (props: Props) => {
  return (
    <div className="bg-black text-white py-16 xl:py-0">
      <section className=" xl:mb-0 min-h-[80vh] max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10 ">
        <div className="text-center mb-20 xl:text-left xl:mb-0 flex-1">
          <h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
          Increase your exposure to the cryptocurrency market
          </h1>
          <p className="text-lg text-white mb-10">
          Expecting big things from crypto? We’ve grouped different cryptocurrencies together in order to create three new crypto baskets, allowing you to trade on multiple cryptos with a single position.
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
            src={
              "https://assets.cmcmarkets.com/web_redesign/img_forex_fx_1_small.png"
            }
            alt="hero"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};
