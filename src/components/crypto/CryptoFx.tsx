import React from "react";
import { PopularCryptoPairs } from "./PopularCryptoPairs";
import { CryptoPairs } from "./CryptoPairs";

type Props = {};

export const CryptoFx = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold ">
          18 major and alt coins
        </h2>
        <p className="text-gray-500 max-w-2xl text-center mx-auto">
          Get exposure to volatility on favourites like bitcoin and ethereum, as
          well as alt coins like polygon with spreads from as low as 0.65
          points.
        </p>
      </div>
      <PopularCryptoPairs />
      <CryptoPairs />
    </section>
  );
};
