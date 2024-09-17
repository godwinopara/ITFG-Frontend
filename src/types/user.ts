export interface UserProps {
  id: string;
  name: string;
  email: string;
  mobile: string;
  nationality: string;
  password: string;
  wallet_balance: number;
  total_deposit: number;
  total_withdrawal: number;
  total_profit: number;
  total_investments: number;
  referral_bonus: number;
  bonus: number;
  total_confirmed_deposits_amount: number;
  total_confirmed_withdrawals_amount: number;
  total_pending_withdrawal_amount: number;
  total_pending_deposit_amount: number;
  referredBy: string | null;
  referralLink: string;
  referralCode: string;
  noOfReferralBonus: number;
  referralLevel: number;
}

// interface WalletProps {
//   usd: string;
//   btc: string;
//   eth: string;
//   usdt: string;
// }
