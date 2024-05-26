import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Question } from "../components/educations/Question";
import { Contents } from "../components/educations/Contents";
import { LearnCard } from "../components/educations/LearnCard";
import { forexData } from "../components/educations/data";


type Props = {};

const LearnForex = (props: Props) => {
  
  
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3 ">
          <Question title="Learn to Trade Forex" />
          <Contents desc="New to trading? You'll find all the trading basics you need to know to get started on your journey here." />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {forexData?.map((item) => (
            <LearnCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default LearnForex;
