export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  wallet_balance: WalletProps;
  total_deposit: number;
  total_withdrawal: number;
  total_profit: number;
  total_investments: number;
  referral_bonus: number;
  bonus: number;
  confirmedDeposits: number;
  confirmedWithdrawals: number;
  pendingWithdrawal: number;
  pendingDeposit: number;
  referral: string;
  referralLink: string;
  referralCode: string;
  noOfReferralBonus: number;
  referralLevel: number;
}

interface WalletProps {
  usd: string;
  btc: string;
  eth: string;
  usdt: string;
}
