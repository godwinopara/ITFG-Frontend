import React from "react";
import { Question } from "./Question";
import { Contents } from "./Contents";
import { ReadyToTrade } from "../sharedUi/ReadyToTrade";
import Button from "../Button";

type Props = {
  details: any;
};

export const Stocks = ({ details }: Props) => {
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
        <Contents desc="As a trader, you're likely to encounter the term 'stock exchanges' quite frequently. But what exactly does it mean? Stock exchanges, in their simplest form, are platforms where shares of stock are bought and sold. They play a critical role in the global financial ecosystem, providing a regulated and transparent market for companies to raise funds and for traders to buy and sell shares." />
        <Contents desc="The main purpose of stock exchanges is to facilitate the exchange of securities between buyers and sellers, providing a marketplace (either physical or virtual) where stock prices are determined in a fair, transparent manner. This is achieved through supply and demand forces. If more traders want to buy a stock than sell it, the price moves up. Conversely, if more want to sell, the price moves down." />
        <Contents desc="Moreover, stock exchanges also provide a measure of liquidity. This is crucial as it allows traders to buy and sell shares quickly and with ease. Without this liquidity, you might find it challenging to sell shares at a fair price or even find a buyer at all. Stock exchanges also enforce strict regulations and standards that companies must meet to get their stock listed. This way, they protect traders by ensuring the transparency and integrity of the trading process." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Primary Markets Vs. Secondary Markets" />
        <Contents desc="These two markets are the main platforms through which stocks are traded, and in the primary market, securities are created. This is where companies sell new stocks to the public for the first time, such as with an initial public offering (IPO). The money raised from these first-time sales goes directly to the company, allowing it to raise capital for expansion or other business activities. Investment banks often underwrite these transactions, guaranteeing that all the shares will be sold." />
        <Contents desc="On the other hand, the secondary market is where traders trade previously issued securities without the involvement of the issuing company. When you hear about stock trading on the news, they're usually talking about the secondary market. Here, traders buy and sell shares among themselves, and the company does not receive any money from these transactions." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="A look at major stock exchanges around the world" />
        <Contents desc="Stock exchanges are not created equal. There are hundreds of stock exchanges around the world, but a handful of them stand out due to their size, volume of trading, and global influence." />
        <Contents desc="At the top of the list is the New York Stock Exchange (NYSE), one of the oldest and largest stock exchanges in the world. Located on Wall Street in New York City, the NYSE lists some of the biggest companies, including Apple, Microsoft, and the Coca-Cola Company." />
        <img
          src="https://eu-images.contentstack.com/v3/assets/bltaec35894448c7261/blt20786c867c34e22d/656db1e543753004070b893b/major_stock_exchanges_around_the_world.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="The influence of share prices on the economy" />
        <Contents desc="Share prices can have a significant impact on the economy. They serve as a gauge of a company's health and, to a larger extent, the economy's health." />
        <Contents desc="When share prices rise, it's often a sign that the economy is doing well. Companies are profitable, employment rates are up, and consumers are spending. This creates a positive cycle where increased company profits lead to more job opportunities, increased consumer spending, and, in turn, higher share prices." />
        <Contents desc="Conversely, falling share prices can indicate trouble. They may signal that companies are not performing well, leading to job cuts and decreased consumer spending. This can create a negative cycle where poor company performance leads to job losses, reduced consumer spending, and, ultimately, lower share prices." />
      </div>

      <ReadyToTrade />
    </div>
  );
};
