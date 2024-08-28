import { AdminLayout } from "../components/layouts/AdminLayout";
import { StockMarket, TickerTape } from "react-ts-tradingview-widgets";
import DashboardTable from "../components/dashboards/DashboardTable";
// import { TradingSession } from "../components/dashboards/TradingSession";
// import { CardDataStats } from "../components/dashboards/CardDataStats";
import { useUserContext } from "../context/UserContext";
// import VerificationCard from "../components/dashboards/VerificationCard";
import Loader from "../components/ui/Loader";
// import BillUser from "../components/BillUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { FaWallet } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
// import { MarketData } from "react-ts-tradingview-widgets";

type Props = {};

const UserDashboard = (props: Props) => {
  const { state, loading } = useUserContext();

  const totalWithdrawal = state.withdrawals?.reduce(
    (acc, curr) =>
      curr.status === "Completed" ? acc + Number(curr.amount) : 0,
    0
  );
  const totalDeposit = state.deposits?.reduce(
    (acc, curr) =>
      curr.status === "Completed" ? acc + Number(curr.amount) : 0,
    0
  );

  return (
    <AdminLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gray-500 mb-1">Welcome!</p>
            <h2 className="text-3xl font-semibold text-primary">
              Franklin Jameson
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <Card>
              <CardHeader className="mb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-4">
                      <h2 className="text-base">Wallet Balance</h2>
                      <p className="text-sm text-green-600">(confirmed)</p>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl font-bold">$0.00</p>
                    </CardDescription>
                  </div>
                  <div className="text-4xl">
                    <FaWallet />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Available Wallet</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-4">
                      <h2 className="text-base">Total Deposits</h2>
                      <p className="text-sm text-green-600">(confirmed)</p>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl font-bold">$0.00</p>
                    </CardDescription>
                  </div>
                  <div className="text-4xl">
                    <FaMoneyBill />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm flex items-center gap-x-1 font-semibold text-gray-500">
                  <span className="text-green text-xs border flex items-center justify-center border-none bg-green-200 text-green-600 px-2 py-[3px] rounded-md">
                    0
                  </span>
                  No of deposits
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-4">
                      <h2 className="text-base">Total Withdrawal</h2>
                      <p className="text-sm text-green-600">(processed)</p>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl font-bold">$0.00</p>
                    </CardDescription>
                  </div>
                  <div className="text-4xl">
                    <BiMoneyWithdraw />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm flex items-center gap-x-1 font-semibold text-gray-500">
                  <span className="text-xs border flex items-center justify-center border-none bg-red-200 text-red-600 px-2 py-[3px] rounded-md">
                    0
                  </span>
                  No of withdrawals
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-4">
                      <h2 className="text-base">Total Profits</h2>
                      <p className="text-sm text-green-600">(paid out)</p>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-xl font-bold">$0.00</p>
                    </CardDescription>
                  </div>
                  <div className="text-4xl">
                    <FaMoneyBillTrendUp />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm flex items-center gap-x-1 font-semibold text-gray-500">
                  <span className="text-green text-xs border flex items-center justify-center border-none bg-green-200 text-green-600 px-2 py-[3px] rounded-md">
                    0.00%
                  </span>
                  Profit Percentage
                </p>
              </CardContent>
            </Card>
          </div>

          <TickerTape></TickerTape>
          {/* {state.status && <BillUser status={state.status} />}
          {state.status === "active" && (
            <>
              <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
                <CardDataStats
                  title="Total Balance"
                  totalUsd={` ${state.account.balance}`}
                  totalBtc={(
                    Number(state.account.balance) / state.bitcoin
                  ).toFixed(8)}
                />
                <CardDataStats
                  title="Total Profit"
                  totalUsd={` ${state.account.profit}`}
                  totalBtc={(
                    Number(state.account.profit) / state.bitcoin
                  ).toFixed(8)}
                />
                <CardDataStats
                  title="Total Bonus"
                  totalUsd={` ${state.account.bonus}`}
                  totalBtc={(
                    Number(state.account.bonus) / state.bitcoin
                  ).toFixed(8)}
                />
              </div>
              <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
                <CardDataStats
                  title="Total Deposit"
                  totalUsd={` ${totalDeposit}`}
                />
                <CardDataStats
                  title="Total Withdrawal"
                  totalUsd={` ${totalWithdrawal}`}
                />
                <VerificationCard />
              </div>
            </>
          )} */}
          {/* <div className=" grid grid-cols-12 gap-4 md:gap-6 ">
            <div className=" flex flex-col gap-5 col-span-12">
              <MarketData width="100%" height={600}></MarketData>
            </div>
          </div> */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Wallet Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p>Bitcoin</p>
                  <div className="flex items-center">
                    <p>0.00BTC = </p>
                    <p>$0.00</p>
                  </div>
                </div>
                <div></div>
                <div></div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 xl:col-span-4 flex flex-col gap-5">
            <DashboardTable />
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default UserDashboard;
