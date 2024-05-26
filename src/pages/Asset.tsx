import React from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { CardDataStats } from "../components/dashboards/CardDataStats";
import { SingleTicker } from "react-ts-tradingview-widgets";
import AssetsTable from "../components/Tables/AssetsTable";

type Props = {};

const Asset = (props: Props) => {
  return (
    <AdminLayout>
      <div className="grid xl:grid-cols-3 gap-y-8 xl:gap-y-0 xl:gap-x-10 mb-16">
        <CardDataStats title="Total Balance in Dollars" totalUsd={`100`} />
        <CardDataStats
          title="Total Balance in Bitcoin"
          totalBtc={`0.00155436`}
        />
        <CardDataStats
          title="Total Balance in Etherium"
          totalEth={`0.03185058 `}
        />
      </div>
      <div className="mb-20 grid xl:grid-cols-4 gap-10">
        <SingleTicker
          symbol="BTCUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="ETHBTC"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="ETHUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="BTCUSDT"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="USDJPY"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="USDCAD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="EURUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
        <SingleTicker
          symbol="GBPUSD"
          colorTheme="dark"
          width="100%"
        ></SingleTicker>
      </div>
      <AssetsTable />
    </AdminLayout>
  );
};

export default Asset;
