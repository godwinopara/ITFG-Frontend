import React from "react";

type Props = {
  reverse?: boolean;
  white?: boolean;
  heading?: string;
  desc?: string;
  img?: string | undefined;
  btnText?: string;
};

export const Card = ({
  white,
  reverse,
  heading,
  desc,
  img,
  btnText,
}: Props) => {
  return (
    <section className={`${white ? "bg-white" : "bg-primary"} `}>
      <div
        className={` flex flex-col xl:flex-row items-center gap-10 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 flex flex-col gap-10 px-6 xl:px-32 text-center xl:text-left py-16 xl:py-0 ">
          <h2 className={`text-4xl  ${white ? "text-gray2" : "text-white"}`}>
            {heading}
          </h2>
          <div
            className={`${white ? "bg-primary" : "bg-white"}  w-24 h-1.5
              mx-auto xl:mx-0
            `}
          />
          <p
            className={`text-xl font-medium ${
              white ? "text-gray2" : "text-white"
            } leading-9`}
          >
            {desc}
          </p>
          {btnText && (
            <button
              className={`w-fit py-3 px-8 font-bold rounded-md text-center border border-[#00c5e8] ${
                white ? "text-[#00c5e8]" : "text-white"
              } mx-auto xl:mx-0 `}
            >
              {btnText}
            </button>
          )}
        </div>
        <div className="flex-1 ">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};
