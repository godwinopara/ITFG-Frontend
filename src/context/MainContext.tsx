import { getDeposit, getReferralBonus, getReferrals, getUser, getWithdrawal } from "../api/api";
import Withdrawal from "../pages/Withdrawal";
import { InvestmentProps } from "../types/investment";
import { ReferralBonusProps, ReferralProps } from "../types/referral";
import { TransactionProps } from "../types/transaction";
import { UserProps } from "../types/user";
import { createContext, ReactNode, useContext, useEffect, useMemo, useReducer } from "react";

interface InitialStateProps {
  user: UserProps | null;
  deposits: TransactionProps[];
  withdrawals: TransactionProps[];
  investments: InvestmentProps[];
  referrals: ReferralProps[];
  referralBonuses: ReferralBonusProps[];
  loading: boolean;
}

interface UserAdminContextType {
  state: InitialStateProps;
  updateDeposit: (data: TransactionProps) => void;
  updateWithdrawal: (data: TransactionProps) => void;
  fetchUserData: () => void;
}

type Action =
  | { type: "GET_USER_DATA"; payload: UserProps }
  | { type: "LOADING"; payload: boolean }
  | { type: "GET_USER_DEPOSITS"; payload: TransactionProps[] }
  | { type: "GET_USER_WITHDRAWALS"; payload: TransactionProps[] }
  | { type: "GET_USER_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USER_REFERRALS"; payload: ReferralProps[] }
  | { type: "GET_USER_REFERRAL_BONUSES"; payload: ReferralBonusProps[] }
  | { type: "ADD_NEW_DEPOSIT"; payload: TransactionProps }
  | { type: "ADD_NEW_WITHDRAWAL"; payload: TransactionProps };

const initialState: InitialStateProps = {
  user: null,
  deposits: [],
  withdrawals: [],
  investments: [],
  referrals: [],
  referralBonuses: [],
  loading: false,
};

const UserAdminContext = createContext<UserAdminContextType>({
  state: initialState,
  updateDeposit: () => null,
  updateWithdrawal: () => null,
  fetchUserData: () => null,
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
    case "ADD_NEW_DEPOSIT":
      return { ...state, deposits: [...state.deposits, action.payload] };
    case "ADD_NEW_WITHDRAWAL":
      return { ...state, Withdrawals: [...state.withdrawals, action.payload] };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const UserAdminProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UserAdminReducer, initialState);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        dispatch({ type: "LOADING", payload: true });

        const userInfo = await getUser();
        dispatch({ type: "GET_USER_DATA", payload: userInfo });

        const userDeposits = await getDeposit();
        dispatch({ type: "GET_USER_DEPOSITS", payload: userDeposits });

        const userWithdrawals = await getWithdrawal();
        dispatch({ type: "GET_USER_WITHDRAWALS", payload: userWithdrawals });

        const userInvestments = await getWithdrawal();
        dispatch({ type: "GET_USER_INVESTMENTS", payload: userInvestments });

        const userReferrals = await getReferrals();
        dispatch({ type: "GET_USER_REFERRALS", payload: userReferrals });

        const userReferralBonus = await getReferralBonus();
        dispatch({ type: "GET_USER_REFERRAL_BONUSES", payload: userReferralBonus });

        //
        //
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    dispatch({ type: "LOADING", payload: false });
  };

  const updateDeposit = (data: TransactionProps) => {
    dispatch({ type: "ADD_NEW_DEPOSIT", payload: data });
  };
  const updateWithdrawal = (data: TransactionProps) => {
    dispatch({ type: "ADD_NEW_WITHDRAWAL", payload: data });
  };

  return (
    <UserAdminContext.Provider value={{ state, fetchUserData, updateDeposit, updateWithdrawal }}>
      {children}
    </UserAdminContext.Provider>
  );
};

export const useUserAdminContext = () => {
  return useContext(UserAdminContext);
};
