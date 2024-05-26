import { AdminLayout } from "../components/layouts/AdminLayout";
import { StockMarket } from "react-ts-tradingview-widgets";
import DashboardTable from "../components/dashboards/DashboardTable";
import { TradingSession } from "../components/dashboards/TradingSession";
import { AccountSummary } from "../components/dashboards/AccountSummary";
import { CardDataStats } from "../components/dashboards/CardDataStats";
import { useUserContext } from "../context/UserContext";
import VerificationCard from "../components/dashboards/VerificationCard";
import Loader from "../components/ui/Loader";

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
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
            <CardDataStats
              title="Total Balance"
              totalUsd={` ${state.account.balance}`}
              totalBtc={(Number(state.account.balance) / state.bitcoin).toFixed(
                8
              )}
            />
            <CardDataStats
              title="Total Profit"
              totalUsd={` ${state.account.profit}`}
              totalBtc={(Number(state.account.profit) / state.bitcoin).toFixed(
                8
              )}
            />
            <CardDataStats
              title="Total Bonus"
              totalUsd={` ${state.account.bonus}`}
              totalBtc={(Number(state.account.bonus) / state.bitcoin).toFixed(
                8
              )}
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
          <div className=" grid grid-cols-12 gap-4 md:gap-6 ">
            <div className=" flex flex-col gap-5 col-span-12 xl:col-span-8">
              <StockMarket colorTheme="dark" height={700} width="100%" showChart></StockMarket>
            </div>
            <div className="col-span-12 xl:col-span-4 flex flex-col gap-5">
              <TradingSession />
            </div>
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
