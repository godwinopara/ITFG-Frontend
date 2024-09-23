export interface TransactionProps {
  user?: { id: string; name: string };
  transactionType: string;
  paymentMethod: string;
  amount: number;
  walletAddress: string;
  transactionId: string;
  status: string;
  date: string;
}
