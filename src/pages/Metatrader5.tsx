import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Instructions } from "../components/metatrader/Instructions";
import { Meta5FAQ } from "../components/metatrader/Meta5FAQ";

type Props = {};

const instructions = [
  {
    id: 1,
    desc: "Optimised processing of expert advisors and indicators",
  },
  {
    id: 2,
    desc: "Easier to use",
  },
  {
    id: 3,
    desc: "Access Smart Trader Tools and Autochartist for market analysis",
  },
  {
    id: 4,
    desc: "Easy-to-code trading signals using the MQL5 programming language",
  },
  {
    id: 5,
    desc: "Ability to hedge your positions",
  },
  {
    id: 6,
    desc: "Advanced platform customisation options",
  },
  {
    id: 7,
    desc: "38 inbuilt indicators to choose from",
  },
  {
    id: 8,
    desc: "21 timeframes to choose from",
  },
];

const differencies = [
  {
    id: 1,
    desc: "Object-oriented programming",
  },
  {
    id: 2,
    desc: "Improved debugging tools",
  },
  {
    id: 3,
    desc: "Similar syntax to that of C++ programming language",
  },
  {
    id: 4,
    desc: "Advanced events management model",
  },
];

const Metatrader5 = (props: Props) => {
  return (
    <MainLayout>
      <div className=" xl:mb-0  py-28 xl:my-0 max-w-7xl mx-auto px-6 ">
        <div className=" flex flex-col gap-5">
          <h2 className="text-4xl font-bold  tracking-wide leading-[120%]  mx-auto">
            MetaTrader 5
          </h2>
          <p className="text-lg leading-8 text-[#141e30] ">
            The MetaTrader 5 platform is widely regarded as one of the top forex
            trading platforms out there. Expect faster processing times,
            advanced order entry capabilities, and the latest tools when trading
            on MT5. <br /> MT5 provides exceptional features to help you stay
            ahead in your trading journey including a strategy tester for those
            interested in automating and testing their trading strategies and
            expert advisors, a highly intuitive and easy to use interface, and
            advanced charting with endless possibilities.
          </p>
          <div className=" mx-auto flex flex-col gap-5 py-24">
            <h2 className="text-4xl font-bold  tracking-wide leading-[120%]  mx-auto">
              Why choose MetaTrader 5?
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {instructions.map((item) => (
                <Instructions key={item.id} data={item} />
              ))}
            </div>
          </div>
          <div className=" mx-auto flex flex-col gap-5 py-24">
            <h2 className="text-4xl font-bold  tracking-wide leading-[120%]  mx-auto">
              MQL5 vs MQL4
            </h2>
            <p className="text-lg leading-8 text-[#141e30] ">
              The MQL programming language is an integrated language designed
              for programming trading strategies specifically on MetaTrader. MT5
              employs MQL5, which provides several benefits compared to MT4's
              MQL4. You can see some of those benefits below:
            </p>
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {differencies.map((item) => (
                <Instructions key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Meta5FAQ />
    </MainLayout>
  );
};

export default Metatrader5;
