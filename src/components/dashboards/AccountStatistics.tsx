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
              <CardTitle className="mb-4">
                <h2 className="text-base">Wallet Balance</h2>
                <p className="text-sm text-green-600">(confirmed)</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-bold">$0.00</p>
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
              <CardTitle className="mb-4">
                <h2 className="text-base">Total Deposits</h2>
                <p className="text-sm text-green-600">(confirmed)</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-bold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <FaMoneyBill />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm flex items-center gap-x-1 font-semibold text-gray-500">
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
              <CardTitle className="mb-4">
                <h2 className="text-base">Total Withdrawal</h2>
                <p className="text-sm text-green-600">(processed)</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-bold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <BiMoneyWithdraw />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm flex items-center gap-x-1 font-semibold text-gray-500">
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
              <CardTitle className="mb-4">
                <h2 className="text-base">Total Profits</h2>
                <p className="text-sm text-green-600">(paid out)</p>
              </CardTitle>
              <CardDescription>
                <p className="text-xl font-bold">$0.00</p>
              </CardDescription>
            </div>
            <div className="text-4xl">
              <FaMoneyBillTrendUp />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm flex items-center gap-x-1 font-semibold text-gray-500">
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
