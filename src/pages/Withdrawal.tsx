import { useRef } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { columnDeposit } from "../components/dashboards/TableCol";
import { DataTable } from "../components/ui/data-table";
import ReusableDialog, { DialogHandle } from "../components/sharedUi/ReuseableDialog";
import { Button } from "../components/ui/button";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { useUserAdminContext } from "../context/MainContext";

type Props = {};

const Withdrawal = (props: Props) => {
  const firstDialog = useRef<DialogHandle>(null);

  const {
    state: { user },
  } = useUserAdminContext();

  const handleWithdrawal = () => {
    console.log("withdrawal");
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600 font-bold text-xl">Transactions</h1>

        <button
          onClick={() => firstDialog?.current?.open()}
          className="flex items-center justify-center gap-x-2 py-2 px-3 rounded-[6px] text-white bg-primary hover:bg-primary-hover"
        >
          <BsFillCreditCard2BackFill className="text-sm" />
          Withdrawal
        </button>
      </div>
      <ReusableDialog title="Make Withdrawal" ref={firstDialog}>
        <div className="flex items-center justify-between py-2 text-gray-600">
          <p className="font-semibold">Wallet Balance</p>
          <p className="font-semibold">$0.00</p>
        </div>
        <div className="relative w-full">
          <label htmlFor="payment" className="block text-sm text-left font-semibold mb-3">
            Withdrawal Method :
          </label>
          <select className="block w-full rounded-[5px]  px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:border-blue-500">
            <option value="bitcoin">Bitcoin</option>
            <option value="usdt">USDT</option>
          </select>
          <div className="absolute bottom-0 top-9 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="amount" className="font-semibold mb-3 text-left block text-sm">
            Withdrawal Amount :
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-[5px] overflow-hidden">
            <span className="bg-gray-200 text-gray-700 px-3 py-3">Amount</span>
            <input
              type="number"
              min={200}
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <span className="bg-gray-200 text-gray-700 px-3 py-3">$</span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button onClick={handleWithdrawal} className="bg-primary hover:bg-primary-hover rounded-[5px] ">
            Make Withdrawal
          </Button>
        </div>
      </ReusableDialog>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-semibold mb-1 text-primary">Withdrawals</h2>
        <p className="text-gray-600">Withdrawals made by you. A total of {user?.withdrawals.length} Withdrawal(s)</p>
      </div>
      <div>
        <DataTable columns={columnDeposit} data={user?.withdrawals || []} />
      </div>
    </AdminLayout>
  );
};

export default Withdrawal;
