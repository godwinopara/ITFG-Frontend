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
export const getDeposits = async () => {
  const response = await axiosInstance.get("/deposits/all");
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
export const getWithdrawals = async () => {
  const response = await axiosInstance.get("/withdrawals/all");
  return response.data;
};

export const addInvestment = async (body: InvestProps) => {
  const response = await axiosInstance.post("/investments", body);
  return response.data;
};
export const getInvestment = async () => {
  const response = await axiosInstance.get("/investments");
  return response.data;
};

export const getActiveInvestments = async () => {
  const response = await axiosInstance.get("/investments/active");
  return response.data;
};
export const getUsersActiveInvestments = async () => {
  const response = await axiosInstance.get("/investments/active/all");
  return response.data;
};

export const getEndedInvestments = async () => {
  const response = await axiosInstance.get("/investments/ended");
  return response.data;
};
export const getAllEndedInvestments = async () => {
  const response = await axiosInstance.get("/investments/ended/all");
  return response.data;
};

export const getUsers = async () => {
  const response = await axiosInstance.get("/users/all");
  return response.data;
};

export const updateUser = async (body: any) => {
  const response = await axiosInstance.patch("/users", body);
  return response.data;
};

export const getReferrals = async () => {
  const response = await axiosInstance.get("/referrals");
  return response.data;
};
export const getAllReferrals = async () => {
  const response = await axiosInstance.get("/referrals/all");
  return response.data;
};
export const getReferralBonus = async () => {
  const response = await axiosInstance.get("/referrals/referralbonus");
  return response.data;
};
export const getAllReferralBonus = async () => {
  const response = await axiosInstance.get("/referrals/referralbonus/all");
  return response.data;
};
