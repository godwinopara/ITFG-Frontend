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
  getUserData: (user: any) => void;
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

const UserAdminContext = createContext<UserAdminContextType>({
  state: initialState,
  getUserData: () => null,
});

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

  const getUserData = (user: any) => {
    dispatch({ type: "GET_USER_DATA", payload: user });
  };

  return <UserAdminContext.Provider value={{ state, getUserData }}>{children}</UserAdminContext.Provider>;
};

export const useUserAdminContext = () => {
  return useContext(UserAdminContext);
};
