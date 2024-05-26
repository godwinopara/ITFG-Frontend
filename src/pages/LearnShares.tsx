import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Question } from "../components/educations/Question";
import { Contents } from "../components/educations/Contents";
import { shareCFData } from "../components/educations/data";
import { LearnCard } from "../components/educations/LearnCard";

type Props = {};

const LearnShares = (props: Props) => {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3 ">
          <Question
            title="Learn to trade Share CFDs with InvestInspire "
          />
          <Contents desc="Learn to trade our wide range of Share CFD instruments, including Apple, Tesla and Microsoft." />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {shareCFData?.map((item) => (
            <LearnCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default LearnShares;
