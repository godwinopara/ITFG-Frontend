import React from "react";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {
  item: any;
};

export const LearnCard = ({ item }: Props) => {
  const path = useLocation()
  const truncatedDesc = item.desc.substring(0, 50);

  return (
    <Link
      to={`${path.pathname}/${item?.title}`}
      className="flex flex-col group duration-200 w-full transform hover:-translate-y-2"
    >
      <img src={item?.img} alt="forex" className="w-full h-40 object-cover" />
      <div className="flex flex-col gap-5 p-8 border-t-4 border-t-[#06af85] bg-white shadow rounded-sm h-[350px]">
        <Button
          btnText={item.cat}
          className={`text-xs rounded-sm px-4 ${
            item.cat === "Beginner" ? "bg-[#9bdfce]" : "bg-[#bfbbe9]"
          }  w-fit text-[#141e30]`}
        />
        <h2 className=" text-2xl font-medium tracking-wide leading-[120%] text-gray-600 group-hover:text-primary">
          {item.title}
        </h2>
        <span className=" text-base font-medium tracking-wider leading-[120%] text-gray-600">
          {truncatedDesc}
          {item.desc.length > 50 && "..."}
        </span>
        <div className="flex items-center gap-x-6 text-primary font-bold  mt-auto">
          <Link to={"/"}>Read More</Link>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
    </Link>
  );
};
