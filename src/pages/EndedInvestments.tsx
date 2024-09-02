import { DataTable } from "../components/ui/data-table";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { columnDeposit } from "../components/dashboards/TableCol";
import { deposits } from "../components/dashboards/data";

function EndedInvestments() {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-primary font-maisonSemiBold uppercase text-xl">Ended Investments</h1>
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Ended Investments</h2>
        <p className="text-gray-600 text-sm">Your already elasped investment(s). A total of 0 investment(s)</p>
      </div>
      <div>
        <DataTable columns={columnDeposit} data={deposits} />
      </div>
    </AdminLayout>
  );
}

export default EndedInvestments;
