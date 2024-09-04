export interface TransactionProps {
  id: string;
  userId: string;
  transactionType: string;
  paymentMethod: string;
  amount: number;
  status: string;
  time: string;
}
