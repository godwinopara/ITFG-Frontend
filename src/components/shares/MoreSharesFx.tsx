import React from "react";
import { PopularShares } from "./PopularShares";
import {  OtherShares } from "./OtherShares";

type Props = {};

export const MoreSharesFx = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold ">
          Over 10,000 shares
        </h2>
        <p className="text-gray-500 max-w-2xl text-center mx-auto">
          Get exposure to the world’s largest companies, from Apple to Lloyds
          Banking Group, through spread betting in the UK and Ireland, or CFD
          trading, with spreads from as low as 0.10 points.
        </p>
      </div>
      <PopularShares />
      <OtherShares />
    </section>
  );
};
