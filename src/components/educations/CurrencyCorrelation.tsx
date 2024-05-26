import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";
import Button from "../Button";

type Props = {
  details: any;
};

export const CurrencyCorrelation = ({ details }: Props) => {
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
        <Contents desc="In the world of forex trading, understanding the correlations between currency pairs is crucial for effective trading. Currency pair correlations refer to the statistical measure of the relationship between two FX pairs and how they move in relation to each other. By analysing these correlations, traders can predict which currency pair rates are likely to move in tandem. In this article, we will delve into the concept of currency pair correlations, explore their significance in forex trading, and discuss strategies for utilising them to optimise trading outcomes." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Defining Currency Pair Correlations" />
        <Contents desc="Correlations between currency pairs emerge from the mutual dependence of currencies, which are quoted in pairs. For example, when the GBP/JPY pair is traded, it’s essentially a derivative of the GBP/USD and USD/JPY pairs, leading to a certain degree of correlation with one or both of these pairs. However, it’s crucial to note that this kind of triangulation only happens with FX crosses, i.e., pairs that do not involve the USD. Beyond this, the correlation between currency pairs is more complex. Some pairs move in the same direction, while others move in opposite directions, under the influence of intricate forces." />
        <Contents desc="Correlation coefficients measure the degree of correlation between two currency pairs and range from -1.0 to +1.0. A correlation of +1 implies that the two currency pairs move in the same direction 100% of the time, while a correlation of -1 implies that they move in opposite directions 100% of the time. A correlation of zero indicates a completely random relationship between the currency pairs. However, it’s important to note that in real-world markets, achieving a perfect +1 or -1 correlation is nearly impossible." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Reading the Correlation Table" />
        <Contents desc="With this knowledge of correlations in mind, let's look at the following table showing correlations between the major currency pairs (based on actual trading in the forex markets recently)." />
        <Contents desc="EUR/USD Correlation Table" />
        <img
          src="https://eu-images.contentstack.com/v3/assets/bltaec35894448c7261/bltca29b2be46fea774/6548dedee88876040a093292/correlation_table.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="The Importance of Monitoring Correlations" />
        <Contents desc="Currency pair correlations, which are not static and can fluctuate over time, refer to the statistical relationships between two currency pairs. Regular monitoring and tracking of these shifts in correlations is essential for informed trading decisions." />
        <Contents desc="Retail traders can use platforms like TradingView where they can observe currency correlations by identifying which currency pairs have a positive or negative correlation to each other." />
        <Contents desc="Sentiment and global economic factors are dynamic and can change on a daily basis, impacting currency pair correlations. Strong correlations observed today may not align with longer-term correlations. Thus, it is essential to consider the six-month trailing correlation, which provides a more accurate perspective on the average relationship between two currency pairs." />
      </div>

      <ReadyToTrade />
    </div>
  );
};
