import React, { ReactNode } from "react";
import {
  FaArrowRight,
  FaBitcoin,
  FaEthereum,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardDataStatsProps {
  title: string;
  totalUsd?: string;
  totalBtc?: string;
  totalEth?: string;
  desc?: string;
  action?: string;
  url?: string;
  icon?: ReactNode;
  verify?: boolean;
  classname?: string;
  linkClassname?: string;
}

export const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  totalUsd,
  totalBtc,
  totalEth,
}) => {
  return (
    <div className="w-full rounded-md border border-strokedark  bg-boxdark text-white py-4 px-7 shadow-default ">
      <div className="w-full my-2 flex items-end justify-between">
        <div>
          <span className="text-xl font-semibold mb-2 block">{title}</span>

          {totalUsd && (
            <h4 className="text-lg font-medium text-white mb-1 flex items-center gap-x-2">
              <span className="text-meta-3">
                <FaMoneyCheckAlt />
                {"  "}
              </span>
              ${totalUsd}
            </h4>
          )}
          {totalBtc && (
            <h4 className="text-lg   dark:text-white flex items-center gap-x-2 mb-1">
              <span className="text-amber-500">
                <FaBitcoin />
                {"  "}
              </span>
              {totalBtc} BTC
            </h4>
          )}
          {totalEth && (
            <h4 className="text-lg  dark:text-white flex items-center gap-x-2">
              <span>
                <FaEthereum />
                {"  "}
              </span>
              {totalEth} ETH
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export const SummaryCardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  icon,
  desc,
  action,
  url,
  verify,
}) => {
  return (
    <div className="pb-5">
      <div className="flex  items-center gap-x-2 px-3 py-3">
        {/* <div className="">{icon}</div> */}

        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-medium block">{title}</p>
          <p className="text-base font-medium block">{desc}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Link
          to={`${url}`}
          className={` py-2 px-4 ${
            verify ? "bg-[#10B981]" : "bg-primary-hover"
          } rounded-[6px] text-white`}
        >
          {action}
        </Link>
      </div>
    </div>
  );
};

export const AdminCardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  icon,
  desc,
  action,
  url,
  verify,
  classname,
  linkClassname,
}) => {
  return (
    <div
      className={`flex flex-col justify-between  bg-boxdark text-white rounded-lg hover:scale-105 duration-300 ${classname}`}
    >
      <div className="flex items-center justify-between px-3 py-5">
        <div className="flex flex-col  text-white">
          <p className="text-3xl font-semibold block">{desc}</p>
          <p className="text-lg font-medium block">{title}</p>
        </div>
        <div className="">{icon}</div>
      </div>

      <Link
        to={`${url}`}
        className={`flex justify-end mt-7 bg-boxdark-2 py-1 px-2.5 ${linkClassname}`}
      >
        <div className="flex items-center gap-2">
          <span>{action}</span>
          <FaArrowRight />
        </div>
      </Link>
    </div>
  );
};
