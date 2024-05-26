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
    title: "How to modify or delete your order?",
    content:
      "Right-click on your trade and a box will appear. Select Modify or Delete to modify the trade. You can modify the trade’s stop-loss or take-profit here too. This can be done in the first box by highlighting the price you wish to exit at, or the number of points away from market price you wish to set this order.",
  },
  {
    id: 2,
    title: "What are Smart Trader Tools?",
    content:
      "Smart Trader Tools is a set of 28 expert-like tools and indicators designed to help you take your trading to the next level. They’re easy to use, install and access and are exclusive to the world’s most popular and powerful trading platforms, MetaTrader 4 and MetaTrader 5. Find out more about how Smart Trader Tools can help you unlock your trading potential.",
  },
  {
    id: 3,
    title: "Understanding position size, leverage and margin",
    content:
      "Before you start your trading journey, it’s important to familiarise yourself with the basics. We have a number of helpful calculators available from within your secure client area. Be sure to check these out and get a good understanding of your position size, margin you want to trade with and desired leverage.",
  },
];

type Props = {};

export const Meta5FAQ = (props: Props) => {
  return (
    <section className=" xl:mb-0  xl:my-0 max-w-7xl mx-auto px-6 pb-28">
      <div className=" flex flex-col gap-5">
        <Accordion
          type="single"
          collapsible
          className=" flex flex-col gap-5 w-full mx-auto "
        >
          <h1 className="text-4xl font-bold  tracking-wide leading-[120%] lg:mx-auto">
            MetaTrader 5 FAQs
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
