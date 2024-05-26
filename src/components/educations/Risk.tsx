import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";
import Button from "../Button";

type Props = {
  details: any;
};

export const Risk = ({ details }: Props) => {
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
        <Question title="In the case of managing risk, correct position sizing is critical." />
        <Contents desc="This means achieving the correct exposure on each position relative to the size of your account and taking the time to understand how volatility and the recent moves in price affect how much risk you’re prepared to take." />
        <Contents desc="It also includes assessing the event risk to better understand the potential market-moving catalysts that could affect price and your open trades." />
        <Contents desc="If you’re concerned about a potentially adverse move based on an announcement that’s completely out of your control, we always suggest you look to reduce your exposure into that event." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="The primary job of a trader" />
        <Contents desc="As traders, our job is to grow the capital in our trading accounts." />
        <Contents desc="All successful traders try to do this in a disciplined manner to manage risk on every trade they make, good or bad." />
        <Contents desc="For example, if your trade didn't go the way you wanted it to, it's important to try and learn how to identify where you went wrong and cut your losses early the next time it happens." />
        <Contents desc="Equally, risk management can teach you how to master the art of letting your winners run without changing your strategy, something we believe is an equal challenge." />
        <Contents desc="Anticipating upcoming event risk and interpreting how important the market thinks the news could be is important, but then so is assessing which markets will be most sensitive to this news." />
        <Contents desc="Understanding news events can take time to get right and does require time to research so one way to get a better understanding of what's important and what you need to look out for when considering your risk management plan is to sign up for relevant and timely expert guides." />
        <Contents desc="Some traders look to reduce risk by using an expert advisor (EA) or focusing on their own technical studies to make trading decisions. While this can help automate the process and, in the case of EAs, reduce psychological interference in decision-making, your role as a trader seeking profitable outcomes is the same: manage your risk at all times when holding a position and when the facts change, you change." />
      </div>

      <ReadyToTrade />
    </div>
  );
};
