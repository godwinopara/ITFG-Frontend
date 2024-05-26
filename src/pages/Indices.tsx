import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { IndicesHero } from "../components/indices/IndicesHero";
import { MoreIndicesFx } from "../components/indices/MoreIndicesFx";
import MoreThanIndices from "../components/indices/MoreThanIndices";
import { Exposure } from "../components/indices/Exposure";
import { PowerfulTrading } from "../components/forex/PowerfulTrading";
import { IndicesFaq } from "../components/indices/IndicesFaq";

type Props = {};

const Indices = (props: Props) => {
  return (
    <MainLayout>
      <IndicesHero />
      <MoreThanIndices />
      <MoreIndicesFx />
      <Exposure />
      <PowerfulTrading />
      <IndicesFaq />
    </MainLayout>
  );
};

export default Indices;
