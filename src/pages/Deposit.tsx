import { AdminLayout } from "../components/layouts/AdminLayout";
import { GiMoneyStack } from "react-icons/gi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { DataTable } from "../components/ui/data-table";
import { columnDeposit } from "../components/dashboards/TableCol";
import { deposits } from "../components/dashboards/data";
import { Button } from "../components/ui/button";
import ReusableDialog, { DialogHandle } from "../components/sharedUi/ReuseableDialog";
import { useRef } from "react";
import { BsPlus } from "react-icons/bs";
import QRCode from "../components/dashboards/QRcode";

type Props = {};

const Deposit = (props: Props) => {
  const firstDialog = useRef<DialogHandle>(null);
  const secondDialog = useRef<DialogHandle>(null);
  const thirdDialog = useRef<DialogHandle>(null);

  const handleOpenPaymentDialog = () => {
    firstDialog?.current?.close();
    secondDialog?.current?.open();
  };

  const handleGoBackToFirstDialog = () => {
    firstDialog?.current?.open();
    secondDialog?.current?.close();
  };

  const handleOpenConfirmPaymentDialog = () => {
    secondDialog?.current?.close();
    thirdDialog?.current?.open();
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-primary font-bold text-xl">Transactions</h1>
        <button
          onClick={() => firstDialog?.current?.open()}
          className="flex items-center justify-center py-2 px-3 rounded-[6px] text-white bg-primary hover:bg-primary-hover"
        >
          <BsPlus className="text-2xl" />
          Deposit
        </button>
      </div>
      <ReusableDialog title="Make Deposit" ref={firstDialog}>
        <div className="flex items-center justify-between py-2 text-gray-600">
          <p className="font-semibold">Wallet Balance</p>
          <p className="font-semibold">$0.00</p>
        </div>
        <div className="relative w-full">
          <label htmlFor="payment" className="block text-sm text-left font-semibold mb-3">
            Payment Method :
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
            Deposit Amount :
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
          <Button onClick={handleOpenPaymentDialog} className="bg-primary hover:bg-primary-hover rounded-[5px] ">
            Make Deposit
          </Button>
        </div>
      </ReusableDialog>
      <ReusableDialog title="Deposit Address" ref={secondDialog}>
        <QRCode />
        <div className="flex items-center gap-x-4 justify-end">
          <Button onClick={handleGoBackToFirstDialog} className="bg-gray-600 hover:bg-gray-700 rounded-[5px] px-4 ">
            Back
          </Button>
          <Button onClick={handleOpenConfirmPaymentDialog} className="bg-primary hover:bg-primary-hover rounded-[5px] ">
            Continue
          </Button>
        </div>
      </ReusableDialog>
      <ReusableDialog title="Confirm Deposit" ref={thirdDialog}>
        <p className="mb-2">Submit your sender's wallet address and transaction ID/Hash</p>
        <div className="mb-1">
          <label htmlFor="amount" className="font-semibold text-gray-700 mb-3 text-left block text-sm">
            Sender's Wallet Address :
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-[5px] overflow-hidden">
            <input
              type="text"
              placeholder="Enter Sender's Address"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="amount" className="font-semibold text-gray-700 mb-3 text-left block text-sm">
            Transaction ID/Hash :
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-[5px] overflow-hidden">
            <input
              type="text"
              placeholder="Enter Transaction ID"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4 justify-end">
          <Button
            onClick={() => thirdDialog?.current?.close()}
            className="bg-gray-600 hover:bg-gray-700 rounded-[5px] px-4 "
          >
            Cancel
          </Button>
          <Button className="bg-primary hover:bg-primary-hover rounded-[5px] ">Continue</Button>
        </div>
      </ReusableDialog>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-semibold mb-1 text-primary">Deposits</h2>
        <p className="text-gray-600">Deposits made by you. A total of 0 deposit(s)</p>
      </div>
      <div>
        <DataTable columns={columnDeposit} data={deposits} />
      </div>
    </AdminLayout>
  );
};

export default Deposit;
