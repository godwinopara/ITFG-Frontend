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

export interface AdminReferralProps {
  id: string;
  referred_by: {
    id: string;
    name: string;
  };
  referred_user: {
    id: string;
    name: string;
  };
  status: string;
  date: string;
}

export interface ReferralBonusProps {
  id: string;
  userId: string;
  referralName: string;
  email: string;
  amount: number;
  date: string;
}
