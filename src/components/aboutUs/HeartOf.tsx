import React from "react";
import { Desc, Heading } from "../sharedUi/Contents";
import { CiHeart } from "react-icons/ci";

type Props = {};

export const HeartOf = (props: Props) => {
  return (
    <section className="bg-white flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-16 py-24 text-center md:w-3/4">
        <Heading title="You're at the heart of all we do" center icon={<CiHeart size={40} />} />
        <Desc desc="Our comprehensive and advanced charts provide a host of features to support your chart analysis, including multiple chart types, over 115 technical indicators and drawing tools, a pattern recognition feature and our chart forum community." />
      </div>
    </section>
  );
};
