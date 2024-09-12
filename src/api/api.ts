import axiosInstance from "./axios";

interface getUserProps {
  userId: string;
}

interface Body {
  email: string;
  password: string;
}

interface DepositProps {
  transactionType: string;
  paymentMethod: string;
  amount: number;
  type: string;
  walletAddress: string;
  transactionId: string;
}

interface WithdrawalProps {
  transactionType: string;
  paymentMethod: string;
  amount: number;
  type: string;
  walletAddress: string;
  transactionId?: string;
}

interface InvestProps {
  investmentOption: string;
  capital: number;
  end: string;
}

export const login = async ({ email, password }: Body) => {
  const response = await axiosInstance.post("/auth/login", { email, password });
  return response.data;
};

export const deposit = async (body: DepositProps) => {
  const response = await axiosInstance.post("/deposits", body);
  return response.data;
};
export const withdrawal = async (body: WithdrawalProps) => {
  const response = await axiosInstance.post("/withdrawals", body);
  return response.data;
};

export const invest = async (body: InvestProps) => {
  const response = await axiosInstance.post("/investments", body);
  return response.data;
};
