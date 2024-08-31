import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiTruck } from "react-icons/gi";
import { TiArrowUp } from "react-icons/ti";
import { SiTether, SiEthereum, SiBitcoin } from "react-icons/si";

export default function InvestmentSummary() {
  return (
    <>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="text-base text-primary">Wallet Balance</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <div></div>
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-x-2">
                <span className="text-[#F7931A]">
                  <SiBitcoin />
                </span>
                <h3 className="mb-1">Bitcoin</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">0.00BTC = </p>
                <p className="font-bold"> $0.00</p>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center gap-x-2">
                <SiEthereum />
                <h3 className="mb-1">Ethereum</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">0 ETH = </p>
                <p className="font-bold"> $0.00</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-2">
                <span className="text-green-500">
                  <SiTether />
                </span>
                <h3 className="mb-1">USDT Tether</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">0 USDT = </p>
                <p className="font-bold"> $0.00</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-5">
        <CardHeader>
          <CardTitle className="text-base text-primary">Investment Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 mb-6">
            <div>
              <div className="mb-8">
                <h3 className="mb-1">Invested Amount</h3>
                <p className="font-bold text-2xl mb-2 text-primary"> $0.00</p>
                <div className="flex items-center gap-x-2 text-sm">
                  <p>+ $0.00 ( profits )</p>

                  <TiArrowUp className="text-green-500 text-lg" />
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-xs mb-1">PAID OUT PROFITS</h3>
                <div className="flex items-center gap-x-1">
                  <p className="font-bold text-primary text-lg"> $0.00</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="mb-1">Next Investment</h3>
                <p className="font-bold text-2xl mb-2 text-primary"> $0.00</p>
                <div className="flex items-center gap-x-2 text-sm">
                  <p>+ $0.00 ( profits )</p>

                  <TiArrowUp className="text-green-500 text-lg" />
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-xs mb-1">ACCURED PROFITS</h3>
                <div className="flex items-center gap-x-1">
                  <p className="font-bold text-primary text-lg"> $0.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/dashboard/active-investments"
              className="flex items-center justify-center rounded-lg w-[150px] gap-x-2 bg-primary text-white text-sm px-4 py-3"
            >
              View More
              <span className="block text-lg font-bold">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-3 bg-primary text-white">
        <CardHeader>
          <CardDescription className="flex justify-center items-center mb-3">
            <div className="bg-blue-500 text-white h-[50px] w-[50px] rounded-full flex items-center justify-center text-2xl">
              <GiTruck />
            </div>
          </CardDescription>
          <CardTitle className="text-center text-lg">Oil and Gas Option</CardTitle>
        </CardHeader>
        <CardContent className="flex text-center items-center justify-center flex-col text-sm">
          <div className="mb-3">
            <p className="font-bold">Min: $1000</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">Max: Unlimited</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">RIO: 25%</p>
          </div>
          <div className="mb-5">
            <p className="font-bold">Capital Return: Yes</p>
          </div>
          <Link
            to="/dashboard/investment-options"
            className="flex items-center justify-center gap-x-2 bg-white text-primary text-sm rounded-md px-4 py-2"
          >
            View More{" "}
            <span>
              <IoIosArrowRoundForward />
            </span>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
