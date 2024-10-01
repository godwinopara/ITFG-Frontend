import { columnsReferral } from "../components/dashboards/TableCol";
import { AdminLayout } from "../components/layouts/AdminLayout";
// import { referrals } from "../components/dashboards/data";
import { DataTable } from "../components/ui/data-table";
import ReferralCard from "../components/dashboards/ReferralCard";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";
import { useUserAdminContext } from "../context/MainContext";

function ReferralList() {
  const {
    state: { referrals },
  } = useUserAdminContext();
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-slate-600 font-maisonBold  text-xl">Referrals</h1>
      </div>
      <div className="grid gap-y-4 xl:gap-y-0 xl:grid-cols-2 gap-x-6">
        <ReferralCard />
        <ReferralCardStat />
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Referred Users</h2>
        <p className="text-gray-600 text-sm">You have a total of {referrals.length} referral(s)</p>
      </div>
      <div>
        <DataTable columns={columnsReferral} data={referrals || []} />
      </div>
    </AdminLayout>
  );
}

export default ReferralList;
