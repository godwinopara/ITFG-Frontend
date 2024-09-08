import { AdminLayout } from "../components/layouts/AdminLayout";
import { TickerTape } from "react-ts-tradingview-widgets";
import { useUserContext } from "../context/UserContext";
import Loader from "../components/ui/Loader";
import AccountStatistics from "../components/dashboards/AccountStatistics";
import InvestmentSummary from "../components/dashboards/InvestmentSummary";
import { columnsInvestment } from "../components/dashboards/TableCol";
import TabRecentTransac from "../components/dashboards/TabRecentTransac";
import ReferralCard from "../components/dashboards/ReferralCard";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";
import { useUserAdminContext } from "../context/MainContext";
import { DashboardDataTable } from "../components/ui/dashboard-data-table";

type Props = {};

const UserDashboard = (props: Props) => {
  const { loading } = useUserContext();
  const {
    state: { user },
  } = useUserAdminContext();

  return (
    <AdminLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-slate-600 mb-1">Welcome!</p>
            <h2 className="text-3xl font-maisonMedium text-slate-600">{user?.name}</h2>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <AccountStatistics />
          </div>
          <TickerTape></TickerTape>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <InvestmentSummary />
          </div>
          <div className="grid grid-cols-1 gap-x-6">
            <TabRecentTransac />
            <div>
              <h2 className="py-5 px-5 font-maisonBold text-primary border rounded-md mb-2">Recent Investments</h2>
              <DashboardDataTable columns={columnsInvestment} data={user?.investments || []} />
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
