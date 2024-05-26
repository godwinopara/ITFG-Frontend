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
    title: "What is everything about MT4?",
    content:
      "MetaTrader 4, also known as MT4, is an electronic trading platform widely used by online retail foreign exchange speculative traders. It was developed by MetaQuotes Software and released in 2005. The software is licensed to foreign exchange brokers who provide the software to their clients.",
  },
  {
    id: 2,
    title: "What is the primary focus of the MetaTrader 4 platform?",
    content:
      "MetaTrader 4 focuses on currencies, indices, and commodities, while MetaTrader 5 includes stocks and metals. Both MT4 and MT5 offer four types of pending orders. However, MT5 includes two additional types: Buy Stop Limit and Sell Stop Limit. MT5 also supports more built-in indicators and uses the ",
  },
  {
    id: 3,
    title: "What are the benefits of using MT4?",
    content:
      "MT4 is popular for two reasons. The first is that it's highly customisable to your individual trading needs and preferences. The second is that it can automate your trading by implementing algorithms that open and close positions according to pre-set parameters.",
  },
  {
    id: 4,
    title: "How do you execute a trade on MT4?",
    content:
      "The simplest way to open a trade in MetaTrader 4 is to use the 'Order' window and then place an instant order on the market. Select the currency pair of your choice by clicking on the 'Window' tab at the top of the MT4 platform, and then select 'New Window'.",
  },
  {
    id: 5,
    title: "How do you Analyse the market on MT4?",
    content:
      "MT4 charts allow traders to analyse price changes visually. They are also used for graphical analysis and to build indicators and line studies. Charts are necessary for technical analysis and for working Expert Advisors (trading robots used for automated trading).",
  },
];

type Props = {};

export const Meta4FAQ = (props: Props) => {
  return (
    <section className=" xl:mb-0  xl:my-0 max-w-7xl mx-auto px-6 pb-24">
      <div className=" flex flex-col gap-5">
        <Accordion
          type="single"
          collapsible
          className=" flex flex-col gap-5 w-full mx-auto "
        >
          <h1 className="text-4xl font-bold  tracking-wide leading-[120%] lg:mx-auto">
            MetaTrader 4 FAQs
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
      </div>
    </section>
  );
};
