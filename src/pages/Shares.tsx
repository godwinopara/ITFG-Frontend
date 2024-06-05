import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { SharesHero } from "../components/shares/SharesHero";
import MoreThanShares from "../components/shares/MoreThanShares";
import { MoreSharesFx } from "../components/shares/MoreSharesFx";
import { Exposure } from "../components/shares/Exposure";
import { SharesFaq } from "../components/shares/SharesFaq";
import WithdrawalAlert from "../lib/WithdrawalAlert";

type Props = {};

const Shares = (props: Props) => {
  return (
    <MainLayout>
      <WithdrawalAlert>
        <SharesHero />
        <MoreThanShares />
        <MoreSharesFx />
        <Exposure />
        <SharesFaq />
      </WithdrawalAlert>
    </MainLayout>
  );
};

export default Shares;
