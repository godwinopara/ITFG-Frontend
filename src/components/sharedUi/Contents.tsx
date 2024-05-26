import React, { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  className?: string;
  white?: boolean;
  center?: boolean;
};

type DescProps = {
  desc: string;
  className?: string;
  white?: boolean;
  center?: boolean;
};

export const Heading = ({ icon, title, className, white, center }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto ">{icon}</div>
      <h2 className={`text-4xl text-gray2 ${className}`}>{title}</h2>
      <div
        className={`${white ? "bg-white" : "bg-primary"}  w-24 h-1.5  ${
          center ? "mx-auto" : ""
        } ${className}`}
      />
    </div>
  );
};

export const Desc = ({ desc, className }: DescProps) => {
  return (
    <p className={`text-xl text-gray2 font-medium ${className} leading-9`}>
      {desc}
    </p>
  );
};
