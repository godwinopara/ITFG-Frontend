import { DataTable } from "../components/ui/data-table";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { columnsInvestment } from "../components/dashboards/TableCol";
import { useUserAdminContext } from "../context/MainContext";

function ActiveInvestments() {
  const { state } = useUserAdminContext();
  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600 font-maisonSemiBold uppercase text-xl">Active Investments</h1>
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Active Investments</h2>
        <p className="text-gray-600 text-sm">Your currently active investment(s). A total of 0 investment(s)</p>
      </div>
      <div>
        <DataTable columns={columnsInvestment} data={state.investments} />
      </div>
    </AdminLayout>
  );
}

export default ActiveInvestments;
