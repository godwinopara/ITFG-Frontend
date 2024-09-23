import React from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { AdminCardDataStats } from "../components/dashboards/CardDataStats";
import { FaUsers } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useAdminContext } from "../context/AdminContext";
// import { CardDescription, CardHeader, CardTitle } from "../components/ui/card";

type Props = {};

const Dashboard = (props: Props) => {
  const { state } = useAdminContext();

  // const pendingVerification = state.verifications.filter(
  //   (verification) => verification.status === "pending"
  // );
  // const pendingWithdrawal = state.withdrawals.filter((withdrawal) => {
  //   return withdrawal.status === "pending";
  // });

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6 min-h-screen">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4  ">
          <AdminCardDataStats
            title="Active Users"
            desc={`${state.users.length}`}
            icon={<FaUsers size={40} />}
            action="More info"
            url="/admin/users"
          />

          <AdminCardDataStats
            title="Pending Deposits"
            desc={`${state.deposits.length}`}
            icon={<IoWalletOutline size={40} />}
            action="More info"
            url="/admin/withdrawal"
          />

          <AdminCardDataStats
            title="Pending Withdrawals"
            desc={`${state.withdrawals.length}`}
            icon={<IoWalletOutline size={40} />}
            action="More info"
            url="/admin/withdrawal"
          />

          <AdminCardDataStats
            title="Pending Verifications"
            desc={`${state.activeInvestments.length}`}
            icon={<MdOutlineVerifiedUser size={40} />}
            action="More info"
            url="admin/verification"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

// export default function Dashboard() {
//   return <div>Dashboard</div>;
// }
