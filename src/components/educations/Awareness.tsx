import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";
import Button from "../Button";

type Props = {
  details: any;
};

export const Awareness = ({ details }: Props) => {
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
        <Contents desc="For example, using a latency arbitrage EA, or an EA engaged in front-running or insider trading, is not allowed. The latter is illegal. Some brokers may not allow hyperactive EAs." />
        <Contents desc="There are a couple of things you can do to ensure your EA can be used without issues. The first relates to message frequency. Where possible, you want to limit the number of messages the EA sends to the server to less than 30,000 in a day. This is a very high range already, so if it's sending more than this, there’s a problem with your EA. This is what’s known as a hyperactive EA, and typically occurs where excessively frequent changes are made to orders (we’re talking nearly every second) or where your EA is trying to place trades which you don’t have the capital for." />
        <Contents desc="Such EAs can cause issues for a broker’s server during times where it needs to process a high volume of orders, and if not rectified the EA may be banned from use. Generally this can be fixed by throttling the frequency by which the EA can make changes to orders, or by building logic to check the free margin of the account before placing order open requests." />
        <Contents desc="If a broker doesn’t allow high frequency EAs, you can limit the number of orders it sends per day, or change the criteria for which it will place orders." />
      </div>

      <ReadyToTrade />
    </div>
  );
};
