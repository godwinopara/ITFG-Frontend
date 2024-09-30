import { jwtDecode } from "jwt-decode";
import {
  getActiveInvestments,
  getDeposit,
  getEndedInvestments,
  getInvestment,
  getReferralBonus,
  getReferrals,
  getUser,
  getWithdrawal,
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
  activeInvestments: InvestmentProps[];
  endedInvestments: InvestmentProps[];
  loading: boolean;
}

interface UserAdminContextType {
  state: InitialStateProps;
  updateDeposit: (data: TransactionProps) => void;
  updateWithdrawal: (data: TransactionProps) => void;
  fetchUserData: () => void;
  addNewInvestment: (data: InvestmentProps) => void;
  updateUserProfile: (data: any) => void;
}

type Action =
  | { type: "GET_USER_DATA"; payload: UserProps }
  | { type: "LOADING"; payload: boolean }
  | { type: "GET_USER_DEPOSITS"; payload: TransactionProps[] }
  | { type: "GET_USER_WITHDRAWALS"; payload: TransactionProps[] }
  | { type: "GET_USER_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USER_ACTIVE_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USER_ENDED_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USER_REFERRALS"; payload: ReferralProps[] }
  | { type: "GET_USER_REFERRAL_BONUSES"; payload: ReferralBonusProps[] }
  | { type: "ADD_NEW_DEPOSIT"; payload: TransactionProps }
  | { type: "ADD_NEW_WITHDRAWAL"; payload: TransactionProps }
  | { type: "ADD_NEW_INVESTMENT"; payload: InvestmentProps }
  | { type: "UPDATE_USER_PROFILE"; payload: any };

const initialState: InitialStateProps = {
  user: null,
  deposits: [],
  withdrawals: [],
  investments: [],
  activeInvestments: [],
  endedInvestments: [],
  referrals: [],
  referralBonuses: [],
  loading: false,
};

const UserAdminContext = createContext<UserAdminContextType>({
  state: initialState,
  updateDeposit: () => null,
  updateWithdrawal: () => null,
  fetchUserData: () => null,
  addNewInvestment: () => null,
  updateUserProfile: () => null,
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
    case "GET_USER_ACTIVE_INVESTMENTS":
      return { ...state, activeInvestments: action.payload };
    case "GET_USER_ENDED_INVESTMENTS":
      return { ...state, endedInvestments: action.payload };
    case "GET_USER_REFERRALS":
      return { ...state, referrals: action.payload };
    case "GET_USER_REFERRAL_BONUSES":
      return { ...state, referralBonuses: action.payload };
    case "ADD_NEW_DEPOSIT":
      return { ...state, deposits: state.deposits.concat(action.payload) };
    case "ADD_NEW_WITHDRAWAL":
      return { ...state, withdrawals: state.withdrawals.concat(action.payload) };
    case "ADD_NEW_INVESTMENT":
      return { ...state, investments: state.investments.concat(action.payload) };
    case "UPDATE_USER_PROFILE":
      return { ...state, user: { ...state.user, ...action.payload } };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const UserAdminProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UserAdminReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchUserData();
    }

    //eslint-disable-next-line
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // Decode the token to check its expiry
      const decodedToken: any = jwtDecode(token);

      const currentTime = Date.now() / 1000; // Get the current time in seconds
      if (decodedToken.exp < currentTime) {
        // Token has expired
        localStorage.removeItem("token");
        window.location.href = "/signin";
        return;
      }
      try {
        dispatch({ type: "LOADING", payload: true });

        const [
          userInfo,
          userDeposits,
          userWithdrawals,
          userReferrals,
          userInvestments,
          userActiveInvestments,
          userEndedInvestments,
          userReferralBonus,
        ] = await Promise.all([
          getUser(), // Fetch user information
          getDeposit(), // Fetch deposits
          getWithdrawal(), // Fetch withdrawals
          getReferrals(), // Fetch referrals
          getInvestment(), // Fetch Investments
          getActiveInvestments(), // Fetch Active Investments
          getEndedInvestments(), // Fetch Completed Investments
          getReferralBonus(), // Fetch ReferralBonus
        ]);

        dispatch({ type: "GET_USER_DATA", payload: userInfo });
        dispatch({ type: "GET_USER_DEPOSITS", payload: userDeposits });
        dispatch({ type: "GET_USER_WITHDRAWALS", payload: userWithdrawals });
        dispatch({ type: "GET_USER_INVESTMENTS", payload: userInvestments });
        dispatch({ type: "GET_USER_ACTIVE_INVESTMENTS", payload: userActiveInvestments });
        dispatch({ type: "GET_USER_ENDED_INVESTMENTS", payload: userEndedInvestments });
        dispatch({ type: "GET_USER_REFERRALS", payload: userReferrals });
        dispatch({ type: "GET_USER_REFERRAL_BONUSES", payload: userReferralBonus });

        dispatch({ type: "LOADING", payload: false });

        //
        //
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  const updateDeposit = (data: TransactionProps) => {
    dispatch({ type: "ADD_NEW_DEPOSIT", payload: data });
  };
  const updateWithdrawal = (data: TransactionProps) => {
    dispatch({ type: "ADD_NEW_WITHDRAWAL", payload: data });
  };

  const addNewInvestment = (data: InvestmentProps) => {
    dispatch({ type: "ADD_NEW_INVESTMENT", payload: data });
  };

  const updateUserProfile = (data: any) => {
    dispatch({ type: "UPDATE_USER_PROFILE", payload: data });
  };

  return (
    <UserAdminContext.Provider
      value={{ state, fetchUserData, updateDeposit, updateWithdrawal, addNewInvestment, updateUserProfile }}
    >
      {children}
    </UserAdminContext.Provider>
  );
};

export const useUserAdminContext = () => {
  return useContext(UserAdminContext);
};
