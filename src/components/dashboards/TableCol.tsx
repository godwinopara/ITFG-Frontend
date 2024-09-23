import { AdminReferralProps, ReferralBonusProps, ReferralProps } from "../../types/referral";
import { InvestmentProps } from "../../types/investment";
import { TransactionProps } from "../../types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import { UserProps } from "@/types/user";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "success" | "failed";
  email: string;
};

interface UserAccount {
  fullname: string;
  balance: number;
  profit: number;
  bonus: number;
}

export const columnsReferralBonus: ColumnDef<ReferralBonusProps>[] = [
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

export const columnsReferral: ColumnDef<ReferralProps>[] = [
  {
    accessorKey: "fullname",
    header: "Full Name",
    cell: ({ row }) => {
      return row.original.referred_user.name;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return row.original.referred_user.email;
    },
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
export const columnsAdminReferral: ColumnDef<AdminReferralProps>[] = [
  {
    accessorKey: "referred_by",
    header: "Referral Name",
    cell: ({ row }) => {
      return row.original.referred_by.name;
    },
  },
  {
    accessorKey: "referred_user",
    header: "Referred User",
    cell: ({ row }) => {
      return row.original.referred_user.name;
    },
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
export const columnsAdminInvestment: ColumnDef<InvestmentProps>[] = [
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

export const columnDeposit: ColumnDef<TransactionProps>[] = [
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
    accessorKey: "date",
    header: "Date",
  },
];

export const columnAdminDeposit: ColumnDef<TransactionProps>[] = [
  {
    accessorKey: "user",
    header: "Full Name",

    cell({ row }) {
      return <span className="w-[500px]">{row.original.user?.name}</span>;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell({ row }) {
      return <span className="w-[500px]">{row.original.paymentMethod}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transactionId",
    header: "TranxID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      const status = row.original.status.toLowerCase();

      if (status === "pending") {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-yellow-500 rounded-[100%]"></div>
            <p className="text-yellow-500">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      } else if (status === "failed") {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-red-500 rounded-[100%]"></div>
            <p className="text-red-500">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      } else {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-green-600 rounded-[100%]"></div>
            <p className="text-green-600">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "",
    header: "Action",
  },
];
export const columnAdminWithdrawal: ColumnDef<TransactionProps>[] = [
  {
    accessorKey: "user",
    header: "Full Name",

    cell({ row }) {
      return <span className="w-[500px]">{row.original.user?.name}</span>;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Withdrawal Method",
    cell({ row }) {
      return <span className="w-[500px]">{row.original.paymentMethod}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      const status = row.original.status.toLowerCase();

      if (status === "pending") {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-yellow-500 rounded-[100%]"></div>
            <p className="text-yellow-500">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      } else if (status === "failed") {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-red-500 rounded-[100%]"></div>
            <p className="text-red-500">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      } else {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-green-600 rounded-[100%]"></div>
            <p className="text-green-600">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      }
    },
  },

  {
    accessorKey: "",
    header: "Action",
  },
];

export const columnUserAccount: ColumnDef<UserAccount>[] = [
  {
    accessorKey: "fullname",
    header: "Full Name",
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell({ row }) {
      return `$${row.original.balance.toLocaleString()}`;
    },
  },
  {
    accessorKey: "profit",
    header: "Profit",
    cell({ row }) {
      return `$${row.original.profit.toLocaleString()}`;
    },
  },
  {
    accessorKey: "bonus",
    header: "Bonus",
    cell({ row }) {
      return `$${row.original.bonus.toLocaleString()}`;
    },
  },
  {
    accessorKey: "action",
    header: "Actions",
  },
];

export const columnUsers: ColumnDef<UserProps>[] = [
  {
    accessorKey: "name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "wallet_balance",
    header: "Balance",
    cell(props) {
      return `${props.row.original.wallet_balance.toLocaleString()} USD`;
    },
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "nationality",
    header: "Nationality",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell({ row }) {
      const status = row.original.status.toLowerCase();

      if (status === "pending") {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-yellow-500 rounded-[100%]"></div>
            <p className="text-yellow-500">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>
        );
      } else {
        <div className="flex gap-x-1 items-center">
          <div className="h-2 w-2 bg-green-600 rounded-[100%]"></div>
          <p className="text-green-600">{status.charAt(0).toUpperCase() + status.slice(1)}</p>
        </div>;
      }
    },
  },
  {
    accessorKey: "",
    header: "Action",
  },
];
export const columnVerification: ColumnDef<UserProps>[] = [
  {
    accessorKey: "name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "idFront",
    header: "Front ID",
    cell({ row }) {
      return row.original.IDFront;
    },
  },
  {
    accessorKey: "idBack",
    header: "Back ID",
    cell({ row }) {
      return row.original.IDBack;
    },
  },
  {
    accessorKey: "verified",
    header: "Verification Status",
    cell({ row }) {
      console.log(row);

      if (!row.original?.verified) {
        return (
          <div className="flex gap-x-1 items-center">
            <div className="h-2 w-2 bg-yellow-500 rounded-[100%]"></div>
            <p className="text-yellow-500">Not Verified</p>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "",
    header: "Action",
  },
];
