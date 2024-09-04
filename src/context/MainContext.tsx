import { investments } from "@/components/dashboards/data";
import {
  getUserData,
  getUserDeposits,
  getUserInvestments,
  getUserReferralBonuses,
  getUserReferrals,
  getUserWithdrawals,
} from "../api/api";
import { InvestmentProps } from "../types/investment";
import { ReferralBonusProps, ReferralProps } from "../types/referral";
import { TransactionProps } from "../types/transaction";
import { UserProps } from "../types/user";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

interface InitialStateProps {
  user: UserProps | null;
  deposits: TransactionProps[];
  withdrawals: TransactionProps[];
  investments: InvestmentProps[];
  referrals: ReferralProps[];
  referralBonuses: ReferralBonusProps[];
}

interface UserAdminContextType {
  state: InitialStateProps;
}

type Action =
  | { type: "GET_USER_DATA"; payload: UserProps }
  | { type: "GET_USER_DEPOSITS"; payload: TransactionProps[] }
  | { type: "GET_USER_WITHDRAWALS"; payload: TransactionProps[] }
  | { type: "GET_USER_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USER_REFERRALS"; payload: ReferralProps[] }
  | { type: "GET_USER_REFERRAL_BONUSES"; payload: ReferralBonusProps[] };

const initialState: InitialStateProps = {
  user: null,
  deposits: [],
  withdrawals: [],
  investments: [],
  referrals: [],
  referralBonuses: [],
};

const UserAdminContext = createContext<UserAdminContextType>({ state: initialState });

const UserAdminReducer = (state: InitialStateProps, action: Action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return { ...state, user: action.payload };
    case "GET_USER_DEPOSITS":
      return { ...state, deposits: action.payload };
    case "GET_USER_WITHDRAWALS":
      return { ...state, withdrawals: action.payload };
    case "GET_USER_INVESTMENTS":
      return { ...state, investments: action.payload };
    case "GET_USER_REFERRALS":
      return { ...state, referrals: action.payload };
    case "GET_USER_REFERRAL_BONUSES":
      return { ...state, referralBonuses: action.payload };
  }
};

export const UserAdminProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UserAdminReducer, initialState);

  useEffect(() => {
    // fetch user data from API
    const fetchUserData = async () => {
      const userData = await getUserData({ userId: "64e1bfa4b64efc1a7dfe2003" });
      dispatch({ type: "GET_USER_DATA", payload: userData });
    };
    const fetchUserDeposits = async () => {
      const userDeposits = await getUserDeposits({ userId: "64e1bfa4b64efc1a7dfe2003" });
      dispatch({ type: "GET_USER_DEPOSITS", payload: userDeposits });
    };
    const fetchUserWithdrawals = async () => {
      const userWithdrawals = await getUserWithdrawals({ userId: "64e1bfa4b64efc1a7dfe2003" });
      dispatch({ type: "GET_USER_WITHDRAWALS", payload: userWithdrawals });
    };
    const fetchUserInvestments = async () => {
      const userInvestments = await getUserInvestments({ userId: "64e1bfa4b64efc1a7dfe2003" });
      dispatch({ type: "GET_USER_INVESTMENTS", payload: userInvestments });
    };
    const fetchUserReferrals = async () => {
      const userReferrals = await getUserReferrals({ userId: "64e1bfa4b64efc1a7dfe2003" });
      dispatch({ type: "GET_USER_REFERRALS", payload: userReferrals });
    };
    const fetchUserReferralBonuses = async () => {
      const userReferralBonuses = await getUserReferralBonuses({ userId: "64e1bfa4b64efc1a7dfe2003" });
      dispatch({ type: "GET_USER_REFERRAL_BONUSES", payload: userReferralBonuses });
    };

    fetchUserData();
    fetchUserDeposits();
    fetchUserWithdrawals();
    fetchUserInvestments();
    fetchUserReferrals();
    fetchUserReferralBonuses();
  }, []);

  return <UserAdminContext.Provider value={{ state }}>{children}</UserAdminContext.Provider>;
};

export const useUserAdminContext = () => {
  return useContext(UserAdminContext);
};
