import { useUserAdminContext } from "../../context/MainContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { columnDeposit } from "./TableCol";
import { TransactionProps } from "../../types/transaction";
import { DashboardDataTable } from "../ui/dashboard-data-table";

function TabRecentTransac() {
  const {
    state: { user },
  } = useUserAdminContext();
  const sortedDeposits = user?.deposits.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const sortedWithdrawals = user?.withdrawals.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get the most recent five deposits
  const deposits: TransactionProps[] = sortedDeposits?.slice(0, 5) || [];
  const withdrawals: TransactionProps[] = sortedWithdrawals?.slice(0, 5) || [];

  return (
    <>
      <Tabs defaultValue="deposits">
        <div className="flex justify-between items-center border px-5 py-3">
          <h3 className="font-bold text-primary font-maisonMedium">Transactions</h3>
          <TabsList className=" w-[30%] grid grid-cols-2 gap-x-5 bg-white">
            <TabsTrigger
              value="deposits"
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none font-semibold"
            >
              Deposits
            </TabsTrigger>
            <TabsTrigger
              value="withdrawals"
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none font-semibold"
            >
              Withdrawals
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="deposits">
          <DashboardDataTable columns={columnDeposit} data={deposits} />
        </TabsContent>
        <TabsContent value="withdrawals">
          <DashboardDataTable columns={columnDeposit} data={withdrawals} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default TabRecentTransac;
