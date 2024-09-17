import { DataTable } from "../components/ui/data-table";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { columnsReferralBonus } from "../components/dashboards/TableCol";
import ReferralCard from "../components/dashboards/ReferralCard";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";
import { useUserAdminContext } from "../context/MainContext";

function ReferralBonus() {
  const {
    state: { referralBonuses },
  } = useUserAdminContext();
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-slate-600 font-maisonBold text-xl">Referrals Bonus</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-6 mb-5">
        <ReferralCard />
        <ReferralCardStat />
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Referred Users</h2>
        <p className="text-gray-600 text-sm">You have a total of {referralBonuses.length} referral(s)</p>
      </div>
      <div>
        <DataTable columns={columnsReferralBonus} data={referralBonuses} />
      </div>
    </AdminLayout>
  );
}

export default ReferralBonus;
