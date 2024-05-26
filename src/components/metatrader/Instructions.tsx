import React from "react";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  data: any;
};

export const Instructions = ({ data }: Props) => {
  return (
    <ul>
      <li className="flex  gap-6">
        <FiCheckCircle size={24} className="text-primary w-[10%]" />
        <p className="text-lg pb-4 border-b border-b-[#d7dee2] w-[90%]">{data.desc}e</p>
      </li>
    </ul>
  );
};
