import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { TreasureHero } from "../components/treasures/TreasureHero";
import MoreThanTreasure from "../components/treasures/MoreThanTreasure";
import { MoreTreasuresFx } from "../components/treasures/MoreTreasureFx";
import { Exposure } from "../components/treasures/Exposure";
import { TreasuresFaq } from "../components/treasures/TreasuresFaq";
import WithdrawalAlert from "../lib/WithdrawalAlert";

type Props = {};

const Treasures = (props: Props) => {
  return (
    <MainLayout>
      <WithdrawalAlert>
        <TreasureHero />
        <MoreThanTreasure />
        <MoreTreasuresFx />
        <Exposure />
        <TreasuresFaq />
      </WithdrawalAlert>
    </MainLayout>
  );
};

export default Treasures;
