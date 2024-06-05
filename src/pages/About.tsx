import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { HeartOf } from "../components/aboutUs/HeartOf";
import { WhyUs } from "../components/aboutUs/WhyUs";
import { Value } from "../components/aboutUs/Value";
import { OurPlatform } from "../components/aboutUs/OurPlatform";
import { TradingOpportunity } from "../components/aboutUs/TradingOpportunity";
import { ChattingAbility } from "../components/aboutUs/ChattingAbility";
import { ExecutiveControl } from "../components/aboutUs/ExecutiveControl";
import { RiskManagement } from "../components/aboutUs/RiskManagement";
import { Support } from "../components/aboutUs/Support";
import { SharpenSkills } from "../components/aboutUs/SharpenSkills";
import WithdrawalAlert from "../lib/WithdrawalAlert";

type Props = {};

const About = (props: Props) => {
  return (
    <MainLayout>
      <WithdrawalAlert>
        <WhyUs />
        <HeartOf />
        <Value />
        <TradingOpportunity />
        <OurPlatform />
        <ChattingAbility />
        <ExecutiveControl />
        <RiskManagement />
        <Support />
        <SharpenSkills />
      </WithdrawalAlert>
    </MainLayout>
  );
};

export default About;
