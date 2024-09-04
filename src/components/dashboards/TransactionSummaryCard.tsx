import { useUserAdminContext } from "../../context/MainContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function TransactionSummaryCard() {
  const {
    state: { user },
  } = useUserAdminContext();
  return (
    <>
      <Card className="text-gray-600">
        <CardHeader>
          <CardTitle className="text-base text-primary">Transaction Analytics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <div></div>
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-x-2">
                <span className="bg-[#F7931A] block h-3 w-3 rounded-full"></span>
                <h3 className="mb-1 font-semibold text-base">Deposits</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">Total = </p>
                <p className="font-bold"> ${user?.total_deposit.toLocaleString()}</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-x-2">
                <span className="bg-red-600 block h-3 w-3 rounded-full"></span>
                <h3 className="mb-1 font-semibold">Withdrawals</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">Total = </p>
                <p className="font-bold"> ${user?.total_withdrawal.toLocaleString()}</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-x-2">
                <span className="bg-blue-500 block h-3 w-3 rounded-full"></span>
                <h3 className="mb-1 font-semibold">Referral Bonus</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">Total = </p>
                <p className="font-bold"> ${user?.referral_bonus.toLocaleString()}</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-2">
                <span className="bg-purple-500 block h-3 w-3 rounded-full"></span>
                <h3 className="mb-1 font-semibold">Bonus</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="font-bold">Total = </p>
                <p className="font-bold"> ${user?.bonus.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
