export interface ReferralProps {
  id: string;
  userId: string;
  referred_user: {
    name: string;
    email: string;
    id: string;
  };
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
