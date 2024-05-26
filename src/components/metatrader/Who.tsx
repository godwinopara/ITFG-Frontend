import React from "react";

type Props = {};

export const Who = (props: Props) => {
  return (
    <div className=" bg-primary py-16 xl:py-0 text-white ">
      <section className=" xl:mb-0 min-h-[80vh] max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10 ">
        <div className="text-center mb-20 xl:text-left xl:mb-0 flex-1">
          <h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
            Who is MetaTrader designed for?
          </h1>
          <p className="text-lg mb-10">
            Whatever your skill level, MT4 can give you a competitive edge. It
            offers a rich, user-friendly interface in a highly customisable
            trading environment to help improve your trading performance. MT4 is
            free to download and can be used in both our demo and live accounts.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={
              "https://eu-images.contentstack.com/v3/assets/bltaec35894448c7261/bltbc24b716269eecbc/5e5c9c8ebaae820ab65b28f1/fb-mt4.jpg?height=512&quality=100"
            }
            alt="hero"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};
