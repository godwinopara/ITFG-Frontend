import { DataTable } from "../ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { columns, Payment } from "./TableCol";

function TabRecentTransac() {
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
    <>
      <Tabs defaultValue="deposits">
        <div className="flex justify-between items-center border px-5 py-3">
          <h3 className="font-bold text-primary">Transactions</h3>
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
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="withdrawals">
          <DataTable columns={columns} data={data} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default TabRecentTransac;
