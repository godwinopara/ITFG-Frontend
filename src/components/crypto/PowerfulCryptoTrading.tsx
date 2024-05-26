import React from "react";
import Button from "../Button";
import img from "../../images/img_homev2_mobile_app1.webp";
import img2 from "../../images/mobile.webp";

type Props = {};

export const PowerfulTrading = (props: Props) => {
  return (
    <section className=" xl:mb-0 min-h-[80vh] py-16 xl:py-0 max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10 ">
      <div className="text-center mb-20 xl:text-left xl:mb-0 flex-1">
        <h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
          Powerful trading wherever you are
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Trade like you’re on a desktop, on your mobile. Our award-winning
          mobile trading app allows you to seamlessly open and close trades,
          track your positions, set-up notifications and analyse mobile
          optimised charts.
        </p>
        <div className="">
          <Button
            btnText="Start Trading"
            className="bg-primary py-3 px-8 hover:bg-primary-hover text-white rounded-[50px]"
          />
        </div>
      </div>
      <div className="flex-1 flex gap-5">
        <img src={img} alt="hero" className="h-[600px]" />
        <img src={img2} alt="hero" className="h-[600px] mt-20" />
      </div>
    </section>
  );
};
