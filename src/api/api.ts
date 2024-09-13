import axiosInstance from "./axios";

interface Body {
  email: string;
  password: string;
}

interface DepositProps {
  transactionType: string;
  paymentMethod: string;
  amount: number;
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

export const getUser = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const deposit = async (body: DepositProps) => {
  const response = await axiosInstance.post("/deposits", body);
  return response.data;
};
export const getDeposit = async () => {
  const response = await axiosInstance.get("/deposits");
  return response.data;
};
export const withdrawal = async (body: WithdrawalProps) => {
  const response = await axiosInstance.post("/withdrawals", body);
  return response.data;
};
export const getWithdrawal = async () => {
  const response = await axiosInstance.get("/withdrawals");
  return response.data;
};

export const investment = async (body: InvestProps) => {
  const response = await axiosInstance.post("/investments", body);
  return response.data;
};
export const getInvestment = async () => {
  const response = await axiosInstance.get("/investments");
  return response.data;
};

export const getReferrals = async () => {
  const response = await axiosInstance.get("/referrals");
  return response.data;
};
export const getReferralBonus = async () => {
  const response = await axiosInstance.get("/referral/bonus/");
  return response.data;
};
