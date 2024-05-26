import React from "react";
import { Question } from "../educations/Question";
import { Contents } from "../educations/Contents";
import Button from "../Button";
import { Link } from "react-router-dom";

type Props = {};

export const ReadyToTrade = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <Question title="Ready to trade?" />
      <Contents desc="It is quick and easy to get started. Apply in minutes with our simple application process." />
      <Link to={"/signin"}>
        <Button
          btnText="Get Started"
          className="bg-primary py-4 px-10 text-white text-sm rounded-[30px] font-semibold w-[156px] hover:bg-primary-hover transition-all"
        />
      </Link>
    </div>
  );
};
