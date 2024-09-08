import axiosInstance from "./axios";

interface getUserProps {
  userId: string;
}

interface Body {
  email: string;
  password: string;
}

export const getUserData = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const login = async ({ email, password }: Body) => {
  const response = await axiosInstance.post("/auth/login", {email, password});
  return response.data;
};

export const getUserDeposits = async ({ userId }: getUserProps) => {
  const response = await axiosInstance.get(`/deposits?userId=${userId}`);
  return response.data;
};
export const getUserWithdrawals = async ({ userId }: getUserProps) => {
  const response = await axiosInstance.get(`/withdrawals?userId=${userId}`);
  return response.data;
};
export const getUserInvestments = async ({ userId }: getUserProps) => {
  const response = await axiosInstance.get(`/investments?userId=${userId}`);
  return response.data;
};
export const getUserReferrals = async ({ userId }: getUserProps) => {
  const response = await axiosInstance.get(`/referrals?userId=${userId}`);
  return response.data;
};
export const getUserReferralBonuses = async ({ userId }: getUserProps) => {
  const response = await axiosInstance.get(`/referralBonuses?userId=${userId}`);
  return response.data;
};
