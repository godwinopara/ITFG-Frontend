import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { auth, db } from "../lib/firebase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged} from "firebase/auth";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Trade,
  UserState,
  Asset,
  Verification,
  Withdrawal,
  Subscription,
  User,
  Deposit,
  Account,
  ProfileUpdatePayload,
  Payment,
} from "../types/types";

interface UserContextType {
  state: UserState;
  fetchUserData: (uid: string) => void;
  addDeposit: (payload: Deposit) => void;
  addWithdrawal: (payload: Withdrawal) => void;
  updateSubscription: (payload: Subscription) => void;
  updateVerification: (payload: Verification) => void;
  addTrade: (payload: Trade) => void;
  updateProfilePicture: (payload: string) => void;
  updatePassword: (payload: string) => void;
  notify: (msg: string) => void;
  notifyError: (msg: string) => void;
  notifyPromise: (loading: string, success: string, error: string, promise: any) => void;
  updateUserProfile: (payload: ProfileUpdatePayload) => void
  loading: boolean;
}

const initialState: UserState = {
  uid: "",
  username: "",
  email: "",
  firstname: "",
  lastname: "",
  mobile: "",
  country: "",
  password: "",
  gender: "",
  photoUrl: "",
  account: { balance: "0", profit: "0", bonus: "0" },
  rate: { bitcoin: null, ethereum: null },
  trades: [],
  withdrawals: [],
  deposits: [],
  verification: { document: null, status: "not-verified" },
  subscription: { plan: "", amount: "", duration: "", date: "" },
  bitcoin: 0,
  assets: [],
  joinedDate: "",
  admin: false,
  status: "",
  paymentMethod: {bitcoin: "", ethereum: ""}
};

// Step 3: Define Action Types
type Action =
  | { type: "GET_USER"; payload: User }
  | { type: "GET_PAYMENT_METHOD"; payload: Payment }
  | { type: "GET_ACCOUNT"; payload: Account }
  | { type: "GET_DEPOSITS"; payload: Deposit[] }
  | { type: "ADD_DEPOSIT"; payload: Deposit }
  | { type: "GET_WITHDRAWALS"; payload: Withdrawal[] }
  | { type: "GET_ASSETS"; payload: Asset[] }
  | { type: "ADD_WITHDRAWAL"; payload: Withdrawal }
  | { type: "UPDATE_PROFILE_PIC"; payload: string }
  | { type: "UPDATE_PASSWORD"; payload: string }
  | { type: "TRADES"; payload: Trade[] }
  | { type: "ADD_TRADE"; payload: Trade }
  | { type: "VERIFICATION_STATUS"; payload: Verification }
  | { type: "SUBSCRIPTION"; payload: Subscription }
  | { type: "UPDATE_SUBSCRIPTION"; payload: Subscription }
  | {
      type: "SET_CRYPTOCURRENCY_RATES";
      payload: number;
    }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string };

const UserContext = createContext<UserContextType>({
  state: initialState,
  fetchUserData: () => null,
  addDeposit: () => null,
  addWithdrawal: () => null,
  updateSubscription: () => null,
  updateVerification: () => null,
  addTrade: () => null,
  updateProfilePicture: () => null,
  updatePassword: () => null,
  notify: () => null,
  notifyError: () => null,
  notifyPromise: () => null,
  updateUserProfile: () => null,
  loading: false,
});

const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, ...action.payload };
    case "GET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };
    case "GET_ACCOUNT":
      return { ...state, account: action.payload };
    case "GET_WITHDRAWALS":
      return { ...state, withdrawals: action.payload };
    case "GET_DEPOSITS":
      return { ...state, deposits: action.payload };
    case "GET_ASSETS":
      return { ...state, assets: action.payload };
    case "TRADES":
      return { ...state, trades: action.payload };
    case "ADD_DEPOSIT":
      return { ...state, deposits: [...state.deposits, action.payload] };
    case "ADD_WITHDRAWAL":
      return { ...state, withdrawals: [...state.withdrawals, action.payload] };
    case "ADD_TRADE":
      return { ...state, trades: [...state.trades, action.payload] };
    case "VERIFICATION_STATUS":
      return { ...state, verification: action.payload };
    case "SUBSCRIPTION":
      return { ...state, subscription: action.payload };
    case "UPDATE_PROFILE_PIC":
      return { ...state, photoUrl: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CRYPTOCURRENCY_RATES":
      return { ...state, bitcoin: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  const currentUser = state.uid;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        fetchUserData(user.uid);
      }
    });

    return () => {
      unSub();
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchCryptocurrencyRates();
    fetchCryptoAssets();
  }, []);

  const notify = (msg: string) => toast.success(msg);
  const notifyError = (msg: string) => toast.error(msg);
  const notifyPromise = (loading: string, success: string, error: string, promise: any) =>
    toast.promise(promise, {
      loading,
      success,
      error,
    });

  const fetchCryptocurrencyRates = async () => {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: "bitcoin, litcoin, ethereum",
          vs_currencies: "usd",
        },
      });

      const bitcoinRate = response.data.bitcoin.usd;

      dispatch({
        type: "SET_CRYPTOCURRENCY_RATES",
        payload: bitcoinRate,
      });
    } catch (error) {
      console.error("Error fetching cryptocurrency rates:", error);
    }
  };

  const fetchCryptoAssets = async () => {
    try {
      const response = await axios.get("https://api.coincap.io/v2/assets");
      dispatch({ type: "GET_ASSETS", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserData = useCallback(async (uid: string) => {
    setLoading(true);

    const userDocRef = doc(db, "users", uid);
    const accountDocRef = doc(db, "accounts", uid);
    const depositDocRef = doc(db, "deposits", uid);
    const withdrawalDocRef = doc(db, "withdrawals", uid);
    const verificationDocRef = doc(db, "verifications", uid);
    const subscriptionDocRef = doc(db, "subscriptions", uid);
    const tradeDocRef = doc(db, "trades", uid);
    const paymentMethodRef = doc(db, "admin", "iLOKFyIVfGUQuu07XGLIiJ7g73w2")

    const userDocSnap = await getDoc(userDocRef);
    const accountDocSnap = await getDoc(accountDocRef);
    const depositDocSnap = await getDoc(depositDocRef);
    const withdrawalDocSnap = await getDoc(withdrawalDocRef);
    const verificationDocSnap = await getDoc(verificationDocRef);
    const subscriptionDocSnap = await getDoc(subscriptionDocRef);
    const tradeDocSnap = await getDoc(tradeDocRef);
    const paymentMethodDocSnap = await getDoc(paymentMethodRef)

    if (userDocSnap.exists()) dispatch({ type: "GET_USER", payload: userDocSnap.data() as User });
    if (userDocSnap.exists()) dispatch({ type: "GET_PAYMENT_METHOD", payload: paymentMethodDocSnap.data() as Payment });
    if (accountDocSnap.exists())
      dispatch({
        type: "GET_ACCOUNT",
        payload: accountDocSnap.data().account as Account,
      });
    if (depositDocSnap.exists())
      dispatch({
        type: "GET_DEPOSITS",
        payload: depositDocSnap.data().deposits as Deposit[],
      });

    if (withdrawalDocSnap.exists())
      dispatch({
        type: "GET_WITHDRAWALS",
        payload: withdrawalDocSnap.data().withdrawals as Withdrawal[],
      });
    if (verificationDocSnap.exists())
      dispatch({
        type: "VERIFICATION_STATUS",
        payload: verificationDocSnap.data().verification as Verification,
      });
    if (subscriptionDocSnap.exists())
      dispatch({
        type: "SUBSCRIPTION",
        payload: subscriptionDocSnap.data().subscription as Subscription,
      });

    if (tradeDocSnap.exists())
      dispatch({
        type: "TRADES",
        payload: tradeDocSnap.data().trades as Trade[],
      });

    setLoading(false);
  }, []);

  const addDeposit = useCallback(
    async (payload: Deposit) => {
      if (payload) {
        const newPayload = { ...payload, uid: currentUser };
        try {
          const addDepositRef = doc(db, "deposits", currentUser);
          await toast.promise(updateDoc(addDepositRef, { deposits: arrayUnion(newPayload) }), {
            loading: "Sending Payment Notification...",
            success: "Payment Notification Sent Successfully",
            error: "Error Occurred, Try Again",
          });

          dispatch({ type: "ADD_DEPOSIT", payload });
        } catch (error) {
          console.log(error);
        }
      }
    },
    [currentUser]
  );

  const addWithdrawal = async (payload: Withdrawal) => {
    if (payload) {
      const newPayload = { ...payload, uid: currentUser };
      try {
        const addWithdrawalRef = doc(db, "withdrawals", currentUser);
        await toast.promise(updateDoc(addWithdrawalRef, { withdrawals: arrayUnion(newPayload) }), {
          loading: "Sending Withdrawal Notification...",
          success: "Withdrawal Request Sent Successfully",
          error: "Error Occurred, Try Again",
        });
        dispatch({ type: "ADD_WITHDRAWAL", payload });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateSubscription = async (payload: Subscription) => {
    if (payload) {
      try {
        const addSubscriptionRef = doc(db, "subscriptions", currentUser);
        await setDoc(addSubscriptionRef, { subscription: payload });
        dispatch({ type: "SUBSCRIPTION", payload });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateVerification = async (payload: Verification) => {
    if (payload) {
      try {
        const addVerificationRef = doc(db, "verifications", currentUser);
        const updatedVerification = {
          verification: payload,
        };

        await toast.promise(setDoc(addVerificationRef, updatedVerification), {
          loading: "Uploading Document...",
          success: "Document Uploaded Successfully",
          error: "Error Occurred, Try Again",
        });
        dispatch({ type: "VERIFICATION_STATUS", payload });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addTrade = async (payload: Trade) => {
    if (payload) {
      try {
        const addTradeRef = doc(db, "trades", currentUser);
        await toast.promise(updateDoc(addTradeRef, { trades: arrayUnion(payload) }), {
          loading: "Processing Your Trade request...",
          success: "Trade Successfully Placed",
          error: "Error Occurred, Try Again",
        });
        dispatch({ type: "ADD_TRADE", payload });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateProfilePicture = async (payload: string) => {
    if (payload)
      try {
        const userRef = doc(db, "users", currentUser);
        await toast.promise(updateDoc(userRef, { photoUrl: payload }), {
          loading: "Updating Your Profile Photo...",
          success: "Profile Photo Updated Successfully",
          error: "Error Occurred, Try Again",
        });
        dispatch({ type: "UPDATE_PROFILE_PIC", payload });
      } catch (error) {
        console.log(error);
      }
  };

  const updatePassword = async (payload: string) => {
    if (payload) {
      try {
        const userRef = doc(db, "users", currentUser);
        await toast.promise(updateDoc(userRef, { password: payload }), {
          loading: "Updating Your Password...",
          success: "Password Updated Successfully",
          error: "Error Occurred, Try Again",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateUserProfile = async (payload: ProfileUpdatePayload) => {
    if (payload) {
      try {
        const userRef = doc(db, "users", currentUser);
        await toast.promise(updateDoc(userRef, { ...payload }), {
          loading: "Updating Your Profile...",
          success: "Profile Updated Successfully",
          error: "Error Occurred, Try Again",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        state,
        fetchUserData,
        addDeposit,
        addWithdrawal,
        updateSubscription,
        updateVerification,
        addTrade,
        updateProfilePicture,
        updatePassword,
        notify,
        notifyError,
        notifyPromise,
        updateUserProfile,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
