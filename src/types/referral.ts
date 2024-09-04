export interface ReferralProps {
  id: string;
  userId: string;
  fullname: string;
  email: string;
  date: string;
  status: string;
}

export interface ReferralBonusProps {
  id: string;
  userId: string;
  referralName: string;
  email: string;
  amount: number;
  date: string;
}
