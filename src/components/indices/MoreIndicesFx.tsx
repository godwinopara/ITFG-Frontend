import React from "react";
import {  PopularIndices } from "./PopularIndices";
import {  OtherIndices } from "./OtherIndices";

type Props = {};

export const MoreIndicesFx = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold ">
          Trade on over 80 indices
        </h2>
        <p className="text-gray-500 max-w-2xl text-center mx-auto">
          Trade on more than 80 cash and forward indices based on the FTSE 100
          as well as regional indices including Australia, Asia-Pacific, US and
          Europe.
        </p>
      </div>
      <PopularIndices />
      <OtherIndices />
    </section>
  );
};
