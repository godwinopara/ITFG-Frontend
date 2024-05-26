import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import Button from "../Button";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";

type Props = {
  details: any;
};

export const FundamentalAnalysis = ({ details }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Button
        btnText={details.cat}
        className={`text-xs rounded-sm px-4 ${
          details.cat === "Beginner" ? "bg-[#9bdfce]" : "bg-[#bfbbe9]"
        }  w-fit text-[#141e30]`}
      />
      <div className="flex flex-col gap-3 ">
        <Question title={details?.title} />
        <Contents desc={details?.desc} />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="What is fundamental analysis?" />
        <Contents desc="While technical and price action analysis probes on the ‘what’, fundamental analysis is interested in the ‘why’." />
        <Contents desc="Fundamental analysis is an incredibly diverse discipline and can take time to master, which is why so many retail traders start their trading journey by studying technical analysis." />
        <Contents desc="So, whether we're anticipating and subsequently reacting to news, corporate earnings, economic data, central bank action or politics, trading using fundamentals is about gathering knowledge as to why a market is reacting the way it does. It also helps us understand whether these variables will continue to influence price going forward - and to what degree." />
        <Contents desc="Unlike technical or price action analysis, which in many ways attributes very little to the individual market in question other than different the trading hours and the cost to trade, how you analyse fundamentals can differ depending on the specific instrument or market involved." />
        <Contents desc="For example, we know that an unexpected change of communication from the Federal Reserve is going to affect all markets but fundamental analysis allows us to understand to what degree. A substantial political surprise, as we saw in the Brexit referendum, would affect the GBP, but it would also impact the FTSE 100 and the UK bond market." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Macro versus micro considerations" />
        <Contents desc="Macro and micro considerations are interpreted differently by different types of investors and traders." />
        <Contents desc="Once we strip out the overreaching macro influences, an equity investor would look closely at a company’s expected cash flows, liquidity and balance sheet risk and whether its dividend is sustainable." />
        <Contents desc="A forex trader would be more interested in interest rate pricing and which upcoming events could impact this pricing structure, and then how that would influence the currency. Of course, other factors such as government bond yield differentials, current account and relative terms of trade dynamics, not to mention positioning are all important considerations too." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Combining technical and fundamental analysis" />
        <Contents desc="Even the staunchest of technical traders can use fundamental analysis with good results. Whether you’re new to trading or a seasoned pro, understanding the connection between upcoming event risk and the potential for volatility can greatly assist with risk management and position sizing." />
        <Contents desc="If we know there's going to be an event that could move markets significantly, and the risks are two-way, then it’s worth considering if we should have exposure over the event at all, even if the technical set-up is bullish." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="How to get started" />
        <Contents desc="We encourage our clients to learn as much as they can about both analysis and pair this with a set of indicators and tools to help support and simplify their trading strategies. Get started by subscribing to the Daily Fix, our go-to daily market update combining fundamentals and technicals along with actionable trade ideas for every trader." />
      </div>
      <ReadyToTrade />
    </div>
  );
};
