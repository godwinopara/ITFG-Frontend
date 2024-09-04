import { InvestmentProps } from "@/types/investment";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "success" | "failed";
  email: string;
};

export type Deposit = {
  transactionType: string;
  paymentMethod: string;
  amount: string;
  status: "pending" | "success" | "failed";
  time: string;
};
export type Investment = {
  investmentOption: string;
  capital: string;
  profit: string;
  start: string;
  end: string;
  status: "active" | "completed";
};

export type Referral = {
  fullname: string;
  email: string;
  date: string;
  status: "pending" | "active";
};
export type ReferralBonus = {
  referralName: string;
  email: string;
  amount: string;
  date: string;
};

export const columnsReferralBonus: ColumnDef<ReferralBonus>[] = [
  {
    accessorKey: "referralName",
    header: "Referral Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date Received",
  },
];

export const columnsReferral: ColumnDef<Referral>[] = [
  {
    accessorKey: "fullname",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date Registered",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status.toLowerCase();

      let statusClass = "";
      if (status === "active") {
        statusClass = "bg-green-100 text-green-600";
      } else if (status === "pending") {
        statusClass = "bg-yellow-100 text-yellow-600";
      }

      return (
        <div className="bg-white w-full">
          <div
            className={`h-8 w-20 text-xs font-semibold flex items-center justify-center rounded-[6px] ${statusClass}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      );
    },
  },
];

export const columnsInvestment: ColumnDef<InvestmentProps>[] = [
  {
    accessorKey: "investmentOption",
    header: "Investment Option",
  },
  {
    accessorKey: "capital",
    header: "Capital",
  },
  {
    accessorKey: "profit",
    header: "Accurred Profit",
  },
  {
    accessorKey: "start",
    header: "Start",
  },
  {
    accessorKey: "end",
    header: "Elapse",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status.toLowerCase();

      let statusClass = "";
      if (status === "completed") {
        statusClass = "bg-green-100 text-green-600";
      } else if (status === "active") {
        statusClass = "bg-yellow-100 text-yellow-600";
      }

      return (
        <div className="bg-white w-full">
          <div
            className={`h-8 w-20 text-xs font-semibold flex items-center justify-center rounded-[6px] ${statusClass}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      );
    },
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

export const columnDeposit: ColumnDef<Deposit>[] = [
  {
    accessorKey: "transactionType",
    header: "Transaction Type",
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status.toLowerCase();

      let statusClass = "";
      if (status === "success") {
        statusClass = "bg-green-100 text-green-600";
      } else if (status === "failed") {
        statusClass = "bg-red-100 text-red-600";
      } else if (status === "pending") {
        statusClass = "bg-yellow-100 text-yellow-600";
      }

      return (
        <div className="bg-white w-full">
          <div
            className={`h-8 w-20 text-xs font-semibold flex items-center justify-center rounded-[6px] ${statusClass}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: "Time",
  },
];
