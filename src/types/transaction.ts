export interface TransactionProps {
  transactionType: string;
  paymentMethod: string;
  amount: number;
  walletAddress: string;
  transactionId: string;
  status: string;
  date: string;
}
