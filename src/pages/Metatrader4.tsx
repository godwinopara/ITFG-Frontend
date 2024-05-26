import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Instructions } from "../components/metatrader/Instructions";
import { Who } from "../components/metatrader/Who";
import { Meta4FAQ } from "../components/metatrader/Meta4FAQ";

type Props = {};

const instructions = [
  {
    id: 1,
    desc: "Customise the platform to the way you trade",
  },
  {
    id: 2,
    desc: "Build and run your EAs using MetaQuotes Language 4 (MQL4)",
  },
  {
    id: 3,
    desc: "Identify statistically significant market movements with Autochartist",
  },
  {
    id: 4,
    desc: "Access 28 indicators and EAs with our Smart Trader Tools",
  },
  {
    id: 5,
    desc: "Choose from thousands of other online tools to plug into MT4",
  },
];

const benefits = [
  {
    id: 1,
    desc: "85 pre-installed indicators available on the desktop app for greater insight into market trends",
  },
  {
    id: 2,
    desc: "Automated trading allowing you to trade the markets 24/5 without any intervention",
  },
  {
    id: 3,
    desc: "Analysis tools that empower you to make better informed decisions",
  },
  {
    id: 4,
    desc: "Backtesting capability for more robust Expert Advisors",
  },
  {
    id: 5,
    desc: "Flexible order types to suit your strategies",
  },
  {
    id: 6,
    desc: "Multiple chart setups to help you to control your positions quickly and efficiently",
  },
  {
    id: 7,
    desc: "Access 28 additional Smart Trader Tools",
  },
];

const Metatrader4 = (props: Props) => {
  return (
    <MainLayout>
      <div className=" xl:mb-0  py-28 xl:my-0 max-w-7xl mx-auto px-6 ">
        <div className=" flex flex-col gap-5">
          <h2 className="text-3xl font-bold  tracking-wide leading-[120%]  mx-auto">
            Why choose MetaTrader 4?
          </h2>
          <p className="text-lg leading-8 text-[#141e30] ">
            MetaTrader 4 (MT4) is one of the world's most popular trading
            platforms for Forex and CFD traders. <br /> It offers a wide range
            of features, including advanced charting tools, interactive charts,
            automated trading systems (Expert Advisors), copy trading, custom
            indicators, algorithmic trading, scripts, and more. <br /> With MT4,
            you can access the markets from anywhere in the world with an
            internet connection. <br /> You can also trade on multiple devices
            at once, allowing you to monitor your positions and manage your
            trades from any location. <br /> MT4 is designed to be a
            user-friendly and intuitive online trading platform. Its interface
            is easy to navigate and it provides a range of helpful features such
            as one-click trading, real-time quotes and news feeds, technical
            analysis tools, customizable charts and indicators, and much more.{" "}
            <br /> It also has a built-in programming language called MQL4 which
            allows users to create their own Expert Advisors or customise
            existing ones. <br /> Whether you're a beginner or an experienced
            trader, MetaTrader 4 provides everything you need to start trading
            in the financial markets. <br /> With its powerful features and
            intuitive design, MT4 makes it easy for anyone to get started with
            online trading.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {instructions.map((item) => (
              <Instructions key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Who />
      <div className="xl:mb-0  py-28 xl:my-0 max-w-7xl px-6 mx-auto flex flex-col gap-5 ">
        <h2 className="text-4xl font-bold  tracking-wide leading-[120%]  mx-auto">
          Key features and benefits
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {benefits.map((item) => (
            <Instructions key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Meta4FAQ />
    </MainLayout>
  );
};

export default Metatrader4;
