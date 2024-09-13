import { AdminLayout } from "../components/layouts/AdminLayout";
import { DataTable } from "../components/ui/data-table";
import { columnDeposit } from "../components/dashboards/TableCol";
import { Button } from "../components/ui/button";
import ReusableDialog, { DialogHandle } from "../components/sharedUi/ReuseableDialog";
import { FormEvent, useRef, useState } from "react";
import QRCode from "../components/dashboards/QRcode";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { useUserAdminContext } from "../context/MainContext";
import { deposit } from "../api/api";
import toast from "react-hot-toast";

type Props = {};

const Deposit = (props: Props) => {
  const firstDialog = useRef<DialogHandle>(null);
  const secondDialog = useRef<DialogHandle>(null);
  const thirdDialog = useRef<DialogHandle>(null);

  const {
    state: { user },
    updateDeposit,
  } = useUserAdminContext();

  const [firstDialogForm, setFirstDialogForm] = useState({ paymentMethod: "bitcoin", amount: 200 });
  const [lastDialogForm, setLastDialogForm] = useState({ senderAddress: "", transactionId: "" });

  const handleOpenPaymentDialog = () => {
    firstDialog?.current?.close();
    secondDialog?.current?.open();
  };

  const handleGoBackToFirstDialog = () => {
    firstDialog?.current?.open();
    secondDialog?.current?.close();
  };

  const handleOpenConfirmPaymentDialog = () => {
    console.log(firstDialogForm);
    secondDialog?.current?.close();
    thirdDialog?.current?.open();
  };

  const handleSubmitDeposit = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      transactionType: "deposit",
      paymentMethod: firstDialogForm.paymentMethod,
      amount: firstDialogForm.amount,
      walletAddress: lastDialogForm.senderAddress,
      transactionId: lastDialogForm.transactionId,
    };

    try {
      const newDepositData = await toast.promise(deposit(data), {
        loading: "Submitting Deposit",
        success: "Deposit Submitted Successfully",
        error: "Error Submitting Deposit",
      });
      updateDeposit(newDepositData);
    } catch (error) {
      console.log(error);
      toast.error("Error");
    } finally {
      thirdDialog?.current?.close();
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600  font-maisonBold text-xl">Transactions</h1>
        <button
          onClick={() => firstDialog?.current?.open()}
          className="flex items-center justify-center gap-x-2 py-2 px-3 rounded-[6px] text-white bg-primary hover:bg-primary-hover"
        >
          <BsCreditCard2BackFill className="text-sm" />
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
          <select
            onChange={(e) => setFirstDialogForm({ ...firstDialogForm, paymentMethod: e.target.value })}
            className="block w-full rounded-[5px]  px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:border-blue-500"
          >
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
              value={firstDialogForm.amount}
              onChange={(e) => setFirstDialogForm({ ...firstDialogForm, amount: Number(e.target.value) })}
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
        <form onSubmit={handleSubmitDeposit}>
          <div className="mb-5">
            <label htmlFor="amount" className="font-semibold text-gray-700 mb-3 text-left block text-sm">
              Sender's Wallet Address :
            </label>
            <div className="flex items-center w-full border border-gray-300 rounded-[5px] overflow-hidden">
              <input
                type="text"
                placeholder="Enter Sender's Address"
                required
                value={lastDialogForm.senderAddress}
                onChange={(e) => setLastDialogForm({ ...lastDialogForm, senderAddress: e.target.value })}
                className="flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="amount" className="font-semibold text-gray-700 mb-3 text-left block text-sm">
              Transaction ID/Hash :
            </label>
            <div className="flex items-center w-full border border-gray-300 rounded-[5px] overflow-hidden">
              <input
                type="text"
                placeholder="Enter Transaction ID"
                required
                value={lastDialogForm.transactionId}
                onChange={(e) => setLastDialogForm({ ...lastDialogForm, transactionId: e.target.value })}
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
            <Button type="submit" className="bg-primary hover:bg-primary-hover rounded-[5px] ">
              Continue
            </Button>
          </div>
        </form>
      </ReusableDialog>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Deposits</h2>
        <p className="text-gray-600 text-sm">Deposits made by you. A total of {user?.deposits.length} deposit(s)</p>
      </div>
      <div>
        <DataTable columns={columnDeposit} data={user?.deposits || []} />
      </div>
    </AdminLayout>
  );
};

export default Deposit;
