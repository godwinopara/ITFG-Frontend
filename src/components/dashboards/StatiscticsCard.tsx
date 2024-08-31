import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

interface StatisticsCardProps {
  title: string;
  totalTransaction: string;
  transactionDesc: string;
  amount: string;
  icon: ReactNode;
  deposit: boolean;
  classname?: string;
}

export default function StatiscticsCard({
  title,
  totalTransaction,
  transactionDesc,
  amount,
  icon,
  deposit,
  classname,
}: StatisticsCardProps) {
  return (
    <Card className={`text-gray-600 rounded-[4px] ${classname}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="mb-2">
              <h2 className="text-base font-semibold">{title}</h2>
            </CardTitle>
            <CardDescription>
              <p className={`text-xl font-bold ${classname ? "text-white" : "text-primary"}`}>{amount}</p>
            </CardDescription>
          </div>
          <div className="text-4xl">{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm flex items-center gap-x-1 font-semibold">
          <span
            className={`text-xs border flex items-center justify-center border-none rounded-[5px] px-2 py-[3px] ${
              deposit ? "bg-green-200 text-green-600 " : "bg-red-200 text-red-600"
            }`}
          >
            {totalTransaction}
          </span>
          {transactionDesc}
        </p>
      </CardContent>
    </Card>
  );
}
