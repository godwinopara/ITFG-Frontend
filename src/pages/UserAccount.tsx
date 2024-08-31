import { TickerTape } from "react-ts-tradingview-widgets";
import InvestmentSummary from "../components/dashboards/InvestmentSummary";
import ReferralCard from "../components/dashboards/ReferralCard";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";
import StatiscticsCard from "../components/dashboards/StatiscticsCard";
import TransactionSummaryCard from "../components/dashboards/TransactionSummaryCard";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function UserAccount() {
  return (
    <AdminLayout>
      <TickerTape></TickerTape>
      <div className="grid grid-cols-12 gap-6 my-8">
        <InvestmentSummary />
      </div>
      <div className="grid grid-cols-3 gap-x-6 mb-8">
        <TransactionSummaryCard />
        <div className="col-span-2 grid grid-cols-2 gap-6">
          <StatiscticsCard
            title="Confirmed Deposit"
            amount="$0.00"
            totalTransaction="0"
            transactionDesc="No of Deposits"
            icon={<FaMoneyBillTransfer />}
            deposit
          />
          <StatiscticsCard
            title="Pending Deposit"
            amount="$0.00"
            totalTransaction="0"
            transactionDesc="No of Deposits"
            icon={<FaMoneyBillTransfer />}
            deposit={false}
          />

          <StatiscticsCard
            classname="bg-primary text-white"
            title="Processed Withdrawal"
            amount="$0.00"
            totalTransaction="0"
            transactionDesc="No of Deposits"
            icon={<FaMoneyBillTransfer />}
            deposit
          />

          <StatiscticsCard
            title="Pending Withdrawal"
            amount="$0.00"
            totalTransaction="0"
            transactionDesc="No of Deposits"
            icon={<FaMoneyBillTransfer />}
            deposit={false}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <ReferralCard />
        <ReferralCardStat />
      </div>
    </AdminLayout>
  );
}
