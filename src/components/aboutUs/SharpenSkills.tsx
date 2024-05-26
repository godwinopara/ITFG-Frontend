import React from "react";
import { Desc, Heading } from "../sharedUi/Contents";

type Props = {};

export const SharpenSkills = (props: Props) => {
  return (
    <section className="bg-white flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-16 py-24 text-center md:w-3/4">
        <Heading title="Sharpen your skills" center />
        <Desc desc="No matter your level of trading experience, our dedicated range of education resources can help you learn more, while our step-by-step guides will help you make the most of our advanced trading platform." />
      </div>
    </section>
  );
};
