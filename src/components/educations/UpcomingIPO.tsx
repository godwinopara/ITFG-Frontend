import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";
import Button from "../Button";

type Props = {
  details: any;
};

export const UpcomingIPO = ({ details }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Button
        btnText={details.cat}
        className={`text-xs rounded-sm px-4 ${
          details.cat === "Beginner" ? "bg-[#9bdfce]" : "bg-[#bfbbe9]"
        }  w-fit text-[#141e30]`}
      />
      <div className="flex flex-col gap-3 ">
        <Question title={details?.title + "?"} />
        <Contents desc={details?.desc} />
        <Contents desc="Having now successfully launched the IPOs of Coinbase, Didi & Robinhood, you can count on Pepperstone to update you on upcoming IPOs that we will be offering on the MT5 platform. We have an upcoming IPO calendar on our dedicated IPO page with some of the major IPOs that are on the radar and that we intend to list. You’ll get a chance to participate in the secondary market action of these IPOs using share CFDs. No ownership required, long and short, and with leverage, we have a great investment vehicle for you to take advantage of short term price movements in these new stocks, without restrictions." />
      </div>

      <ReadyToTrade />
    </div>
  );
};
