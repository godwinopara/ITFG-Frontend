import { FaMoneyBill, FaWallet } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function AccountStatistics() {
  return (
    <>
      <Card>
        <CardHeader className="mb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="mb-4 text-slate-600 text-base">
                Wallet Balance
                <span className="block text-sm text-green-600">(confirmed)</span>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-maisonBold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <FaWallet />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Available Wallet</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="mb-4 text-slate-600 text-base">
                Total Deposits
                <span className="block text-sm text-green-600">(confirmed)</span>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-maisonBold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <FaMoneyBill />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm flex items-center gap-x-1 font-maisonMedium text-gray-500">
            <span className="text-green text-xs border flex items-center justify-center border-none bg-green-200 text-green-600 px-2 py-[3px] rounded-md">
              0
            </span>
            No of deposits
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="mb-4 text-slate-600 text-base">
                Total Withdrawal
                <span className="block text-sm text-green-600">(processed)</span>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-maisonBold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <BiMoneyWithdraw />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm flex items-center gap-x-1 font-maisonMedium text-gray-500">
            <span className="text-xs border flex items-center justify-center border-none bg-red-200 text-red-600 px-2 py-[3px] rounded-md">
              0
            </span>
            No of withdrawals
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="mb-4 text-slate-600 text-base">
                Total Profits
                <p className="text-sm block text-green-600">(paid out)</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-maisonBold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <FaMoneyBillTrendUp />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm flex items-center gap-x-1 font-maisonMedium text-gray-500">
            <span className="text-green text-xs border flex items-center justify-center border-none bg-green-200 text-green-600 px-2 py-[3px] rounded-md">
              0.00%
            </span>
            Profit Percentage
          </p>
        </CardContent>
      </Card>
    </>
  );
}
