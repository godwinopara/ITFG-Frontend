import React from "react";
import {  PopularTreasure } from "./PopularTreasures";
import { OtherTreasure } from "./OtherTreasures";

type Props = {};

export const MoreTreasuresFx = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold ">
          50+ rates and bonds at your fingertips
        </h2>
        <p className="text-gray-500 max-w-2xl text-center mx-auto">
          Get exposure to interest rates and government debt obligations, with
          spreads from as low as 1 point.
        </p>
      </div>
      <PopularTreasure />
      <OtherTreasure />
    </section>
  );
};
