import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { ForexHero } from "../components/forex/ForexHero";
import MoreThan from "../components/forex/MoreThan";
import { MoreFx } from "../components/forex/MoreFx";
import { TradeForex } from "../components/forex/TradeForex";
import { PowerfulTrading } from "../components/forex/PowerfulTrading";
import { ForexFaq } from "../components/forex/ForexFaq";
import WithdrawalAlert from "../lib/WithdrawalAlert";

type Props = {};

const Forex = (props: Props) => {
  return (
    <MainLayout>
      <WithdrawalAlert>
        <ForexHero />
        <MoreThan />
        <MoreFx />
        <TradeForex />
        <PowerfulTrading />
        <ForexFaq />
      </WithdrawalAlert>
    </MainLayout>
  );
};

export default Forex;
