import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faq1 = [
  {
    id: 1,
    title: "Is it free to open an account?",
    content:
      "There's no cost when opening a live spread betting or CFD trading account. You can also view prices and use tools such as charts, Reuters news or Morningstar quantitative equity reports, free of charge. However, you will need to deposit funds in your account to place a trade.",
  },
  {
    id: 2,
    title: "What is the minimum trade size for forex?",
    content:
      "You can spread bet from £0.30/point on EUR/USD, GBP/USD, USD/JPY and AUD/USD, and £0.40/point on EUR/GBP. You can see the minimum trade size for all instruments on the platform, in ‘Product overview’, under ‘Betting and Position Limits’.",
  },
  {
    id: 3,
    title: "What are the costs of spread betting?",
    content:
      "There are a number of costs to consider when spread betting, including spread costs, holding costs (for trades held overnight which is essentially a fee for the funds you borrow to cover the leveraged portion of the trade), rollover costs and guaranteed stop-loss order charges (if you use this risk-management tool).",
  },
];

const faq2 = [
  {
    id: 1,
    title: "What is share trading?",
    content:
      "Share trading in the underlying market is the buying and selling of company shares with the aim of making a profit. Shares represent a portion of ownership of a public company. At CMC Markets, we offer the opportunity to spread bet or trade CFDs on shares, so you don’t actually own the underlying share.",
  },
  {
    id: 3,
    title: "What is leveraged trading?",
    content:
      "One of the features of spread betting and CFD trading is that you only need to deposit a percentage of the full value of your position to open a trade, known as trading on leverage. Remember, trading on leverage can also amplify losses, so it’s important to manage your risk.",
  },
  {
    id: 5,
    title: "Why spread betting?",
    content:
      "Spread betting allows you to trade tax-free on a wide range of financial markets 24 hours a day, from Sunday nights through to Friday nights. Trade on your phone, tablet, PC or Mac on a wide range of instruments using leverage. Tax treatment depends on individual circumstances and can change or may differ in a jurisdiction other than the UK.",
  },
  {
    id: 6,
    title: "How does spread betting/trading CFDs on indices actually work?",
    content:
      "When you spread bet or trade CFDs on indices on our platform, you don’t buy or sell the underlying index. Instead, you’re taking a position on whether you think the index will go up or down. With spread betting, you buy or sell an amount per point movement for the index instrument you’re trading, such as £5 per point. This is known as your stake. With CFD trading, you buy or sell a number of units for a particular instrument. For every point or unit that the price moves in your favour, you gain multiples of your stake, and vice versa. While you can trade on leverage, your profits and losses are based on the full value of the trade. As a retail client, you will never lose more than the amount in your account.",
  },
  {
    id: 7,
    title: "How does the additional spread on share spread bets work?",
    content:
      "Share spread bets have an additional spread added either side of the existing spread.",
  },
  {
    id: 8,
    title: "Do spread bets on shares attract dividends?",
    content:
      "When a stock goes ex-dividend, the value of that stock effectively falls by the dividend amount. This means if you hold a spread bet or CFD position on a company which announces a dividend, your account will be credited or debited on the day the stock goes ex-dividend. If you were long (holding a buy position), you would have been disadvantaged by the drop in the market caused by the pay out of the dividend, so we would credit your account with the dividend amount, less any applicable dividend withholding taxes. If you were short, you would benefit from the drop in the price, so the equivalent amount would be deducted. So, overall, you don't lose or gain anything from the adjustment. There are no withholding taxes on short positions. The dividend will appear as a 'Price Adjustment' in your account history within the platform.",
  },
];

type Props = {};

export const SharesFaq = (props: Props) => {
  return (
    <section className=" xl:mb-0  max-w-7xl mx-auto px-6  py-16 ">
      <h1 className="text-lg text-gray-500 font-bold mb-5 tracking-wide leading-[120%] px-10 pb-10">
        FAQS
      </h1>
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-7">
        <Accordion
          type="single"
          collapsible
          className=" flex flex-col gap-5 w-full mx-auto pb-16 px-10"
        >
          <h1 className="text-3xl  font-medium mb-5 tracking-wide leading-[120%] ">
            New to trading?
          </h1>
          {faq1?.map((item) => (
            <AccordionItem key={item?.id} value={`${item?.id}`}>
              <AccordionTrigger className=" font-medium text-xl w-full text-left ">
                {item?.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                {item?.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className=" flex flex-col gap-5 w-full mx-auto pb-16 px-10"
        >
          <h1 className="text-3xl  font-medium mb-5 tracking-wide leading-[120%] ">
            New to share trading?
          </h1>
          {faq2?.map((item) => (
            <AccordionItem key={item?.id} value={`${item?.id}`}>
              <AccordionTrigger className=" font-medium text-xl text-left">
                {item?.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                {item?.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
