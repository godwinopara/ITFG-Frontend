import { AdminLayout } from "../components/layouts/AdminLayout";
import { TickerTape } from "react-ts-tradingview-widgets";
import { useUserContext } from "../context/UserContext";
import Loader from "../components/ui/Loader";
import AccountStatistics from "../components/dashboards/AccountStatistics";
import InvestmentSummary from "../components/dashboards/InvestmentSummary";
import { DataTable } from "../components/ui/data-table";
import { columns, Payment } from "../components/dashboards/TableCol";
import TabRecentTransac from "../components/dashboards/TabRecentTransac";
import ReferralCard from "../components/dashboards/ReferralCard";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";

type Props = {};

const UserDashboard = (props: Props) => {
  const { loading } = useUserContext();

  // const totalWithdrawal = state.withdrawals?.reduce(
  //   (acc, curr) => (curr.status === "Completed" ? acc + Number(curr.amount) : 0),
  //   0
  // );
  // const totalDeposit = state.deposits?.reduce(
  //   (acc, curr) => (curr.status === "Completed" ? acc + Number(curr.amount) : 0),
  //   0
  // );

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];

  return (
    <AdminLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gray-500 mb-1">Welcome!</p>
            <h2 className="text-3xl font-semibold text-primary">Franklin Jameson</h2>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <AccountStatistics />
          </div>
          <TickerTape></TickerTape>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <InvestmentSummary />
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <TabRecentTransac />
            <div>
              <h2 className="py-5 px-5 font-bold text-primary border rounded-md mb-2">Recent Investments</h2>
              <DataTable columns={columns} data={data} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <ReferralCard />
            <ReferralCardStat />
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default UserDashboard;
