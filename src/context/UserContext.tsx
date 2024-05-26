import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { auth, db } from "../lib/firebase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import toast from "react-hot-toast";

export interface UserState {
	uid: string;
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	mobile: string;
	country: string;
	password: string;
	gender: string;
	photoUrl: string;
	rate: { bitcoin: string | null; ethereum: string | null };
	assets: Asset[];
	account: AccountState;
	deposits: DepositState[];
	withdrawals: WithdrawalState[];
	verification: VerificationState;
	subscription: SubscriptionState;
	trades: TradeState[];
	bitcoin: number;
	joinedDate: string;
	admin: boolean;
}

interface Asset {
	id: string;
	rank: string;
	symbol: string;
	name: string;
	supply: string;
	maxSupply: string;
	marketCapUsd: string;
	volumeUsd24Hr: string;
	priceUsd: string;
	changePercent24Hr: string;
	vwap24Hr: string;
}

interface User {
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	mobile: string;
	country: string;
	password: string;
	gender: string;
	uid: string;
	photoUrl: string;
	joinedDate: string;
}

export interface AccountState {
	balance: string;
	profit: string;
	bonus: string;
}

interface DepositState {
	amount: string;
	date: string;
	method: string;
	status: string;
	id: string | null;
	screenshot: string | null;
}

interface WithdrawalState {
	amount: string;
	date: string;
	method: string;
	status: string;
}

interface TradeState {
	entry: string;
	lotSize: string;
	pairs: string;
	profit: string;
	status: string;
	stopLoss: string;
	takeProfit: string;
	tradeOption: string;
	tradeType: string;
	result: string;
	date: string;
}
interface SubscriptionState {
	plan: string;
	amount: string;
	duration: string;
	date: string;
}
interface VerificationState {
	document: string | null;
	status: string;
}

interface UserContextType {
	state: UserState;
	fetchUserData: (uid: string) => void;
	addDeposit: (payload: DepositState) => void;
	addWithdrawal: (payload: WithdrawalState) => void;
	updateSubscription: (payload: SubscriptionState) => void;
	updateVerification: (payload: VerificationState) => void;
	addTrade: (payload: TradeState) => void;
	updateProfilePicture: (payload: string) => void;
	updatePassword: (payload: string) => void;
	notify: (msg: string) => void;
	notifyError: (msg: string) => void;
	notifyPromise: (loading: string, success: string, error: string, promise: any) => void;
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
};

// Step 3: Define Action Types
type Action =
	| { type: "GET_USER"; payload: User }
	| { type: "GET_ACCOUNT"; payload: AccountState }
	| { type: "GET_DEPOSITS"; payload: DepositState[] }
	| { type: "ADD_DEPOSIT"; payload: DepositState }
	| { type: "GET_WITHDRAWALS"; payload: WithdrawalState[] }
	| { type: "GET_ASSETS"; payload: Asset[] }
	| { type: "ADD_WITHDRAWAL"; payload: WithdrawalState }
	| { type: "UPDATE_PROFILE_PIC"; payload: string }
	| { type: "UPDATE_PASSWORD"; payload: string }
	| { type: "TRADES"; payload: TradeState[] }
	| { type: "ADD_TRADE"; payload: TradeState }
	| { type: "VERIFICATION_STATUS"; payload: VerificationState }
	| { type: "SUBSCRIPTION"; payload: SubscriptionState }
	| { type: "UPDATE_SUBSCRIPTION"; payload: SubscriptionState }
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
	loading: false,
});

const userReducer = (state: UserState, action: Action): UserState => {
	switch (action.type) {
		case "GET_USER":
			return { ...state, ...action.payload };
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

		const userDocSnap = await getDoc(userDocRef);
		const accountDocSnap = await getDoc(accountDocRef);
		const depositDocSnap = await getDoc(depositDocRef);
		const withdrawalDocSnap = await getDoc(withdrawalDocRef);
		const verificationDocSnap = await getDoc(verificationDocRef);
		const subscriptionDocSnap = await getDoc(subscriptionDocRef);
		const tradeDocSnap = await getDoc(tradeDocRef);

		if (userDocSnap.exists()) dispatch({ type: "GET_USER", payload: userDocSnap.data() as User });
		if (accountDocSnap.exists())
			dispatch({
				type: "GET_ACCOUNT",
				payload: accountDocSnap.data().account as AccountState,
			});
		if (depositDocSnap.exists())
			dispatch({
				type: "GET_DEPOSITS",
				payload: depositDocSnap.data().deposits as DepositState[],
			});

		if (withdrawalDocSnap.exists())
			dispatch({
				type: "GET_WITHDRAWALS",
				payload: withdrawalDocSnap.data().withdrawals as WithdrawalState[],
			});
		if (verificationDocSnap.exists())
			dispatch({
				type: "VERIFICATION_STATUS",
				payload: verificationDocSnap.data().verification as VerificationState,
			});
		if (subscriptionDocSnap.exists())
			dispatch({
				type: "SUBSCRIPTION",
				payload: subscriptionDocSnap.data().subscription as SubscriptionState,
			});

		if (tradeDocSnap.exists())
			dispatch({
				type: "TRADES",
				payload: tradeDocSnap.data().trades as TradeState[],
			});

		setLoading(false);
	}, []);

	const addDeposit = useCallback(
		async (payload: DepositState) => {
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

	const addWithdrawal = async (payload: WithdrawalState) => {
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

	const updateSubscription = async (payload: SubscriptionState) => {
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

	const updateVerification = async (payload: VerificationState) => {
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

	const addTrade = async (payload: TradeState) => {
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
