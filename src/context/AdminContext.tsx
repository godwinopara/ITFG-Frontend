import { ReferralBonusProps, ReferralProps } from "../types/referral";
import { InvestmentProps } from "../types/investment";
import { TransactionProps } from "../types/transaction";
import { UserProps } from "../types/user";
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";
import { getUsers } from "../api/api";

interface InitialStateProps {
  users: UserProps[];
  deposits: TransactionProps[];
  withdrawals: TransactionProps[];
  investments: InvestmentProps[];
  referrals: ReferralProps[];
  referralBonuses: ReferralBonusProps[];
  activeInvestments: InvestmentProps[];
  endedInvestments: InvestmentProps[];
  kycApplications: UserProps[];
  loading: boolean;
}

type Action =
  | { type: "GET_USERS_DATA"; payload: UserProps[] }
  | { type: "LOADING"; payload: boolean }
  | { type: "GET_USERS_DEPOSITS"; payload: TransactionProps[] }
  | { type: "GET_USERS_WITHDRAWALS"; payload: TransactionProps[] }
  | { type: "GET_USERS_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USERS_ACTIVE_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USER_ENDED_INVESTMENTS"; payload: InvestmentProps[] }
  | { type: "GET_USERS_REFERRALS"; payload: ReferralProps[] }
  | { type: "GET_USERS_REFERRAL_BONUSES"; payload: ReferralBonusProps[] }
  | { type: "GET_KYC_APPLICATIONS"; payload: UserProps[] };

interface AdminContextProps {
  state: InitialStateProps;
  dispatch: Dispatch<Action>;
}

const initialState: InitialStateProps = {
  users: [],
  deposits: [],
  withdrawals: [],
  investments: [],
  referrals: [],
  referralBonuses: [],
  activeInvestments: [],
  endedInvestments: [],
  kycApplications: [],
  loading: false,
};

export const AdminContext = createContext<AdminContextProps>({
  state: initialState,
  dispatch: () => null,
});

const AdminReducer = (state: InitialStateProps, action: Action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const usersData = await getUsers();
      dispatch({ type: "GET_USERS_DATA", payload: usersData });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "LOADING", payload: false });
    }
  };

  return <AdminContext.Provider value={{ state, dispatch }}>{children}</AdminContext.Provider>;
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
