import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import Button from "../Button";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";

type Props = {
  details: any;
};

export const ShareTrading = ({ details }: Props) => {
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
        <Question title="An introduction to share trading " />
        <Contents desc="The ‘traditional’ method of buying and selling company shares sees an investor purchase a stock and wait for an increase in the value, in the hope of making a profit. This relative long-term strategy means you hold the stock for a period of time so to have partial ownership in that company." />
        <Contents desc="Some stocks will provide income in the form of dividends even if the stock has lost market value. You can use this income to fund other investments or reinvest." />
        <Contents desc="The huge rise of simple financial derivatives based on an underlying market have opened up financial markets to a mass of people who may not have accessed them before." />
        <Contents desc="Share spread betting allows traders to simply speculate on whether a stock price will move up or down. You're betting on a range of possible outcomes." />
        <Contents desc="Share CFDs are based on the underlying market where traders buy or sell contracts which represent an amount per point in that share price. This is similar to what you do when share investing, but you do not have any ownership of the company." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="What instruments can you trade with InvestInspire.?" />
        <Contents desc="Non-leveraged trading (the trading and ownership of physical stocks) is not offered through InvestInspire. " />
        <Contents desc="Leveraged trading via share CFDs and spread betting is offered through InvestInspire, which will allow you to speculate on the price movements of well-known US and Australian companies. Spread betting instruments are only offered to residents of the UK and Ireland through our FCA regulated entity. " />
        <Contents desc="Instruments on offer include megacaps in some of the biggest companies in the world, like Amazon and Facebook. Domestic multinationals include mining giant BHP Group and banking and financial services groups like National Australia Bank and Westpac Banking Corporation." />
      </div>

      <ReadyToTrade />
    </div>
  );
};
