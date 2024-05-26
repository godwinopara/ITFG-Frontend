export interface UserState {
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	mobile: string;
	country: string;
	password: string;
	gender: string;
	account: AccountState;
	deposits: DepositState[];
	withdrawals: WithdrawalState[];
	verification: VerificationState;
	subscription: SubscriptionState;
	trades: TradeState[];
	admin: boolean;
}

export interface User {
	uid: string;
	firstname: string;
	lastname: string;
	username: string;
	mobile: string;
	password: string;
	country: string;
	status: string;
	email: string;
	joinedDate: string;
	gender: string;
	photoUrl: string;
}

export interface AccountState {
	balance: string;
	profit: string;
	bonus: string;
	fullname?: string;
	uid?: string;
	id?: string;
}

export interface DepositState {
	amount: string;
	date: string;
	method: string;
	status: string;
	id: string;
	screenshot: string;
	fullname?: string;
	uid: string;
}

export interface Deposit {
	amount: string;
	date: string;
	method: string;
	status: string;
	id?: string;
	screenshot: string | null;
	uid?: string;
}

export interface WithdrawalState {
	amount: string;
	date: string;
	method: string;
	status: string;
	fullname?: string;
	id: string;
	uid: string;
}

export interface Withdrawal {
	amount: string;
	date: string;
	method: string;
	status: string;
	id?: string;
	uid?: string;
}

export interface TradeState {
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
	fullname?: string;
	id: string;
	uid: string;
}

export interface TradePayload {
	status: string;
	profit: string;
}
export interface SubscriptionState {
	plan: string;
	amount: string;
	duration: string;
	date: string;
	fullname?: string;
	uid?: string;
}
export interface VerificationState {
	document: string;
	status: string;
	fullname?: string;
	uid?: string;
}

// ADMIN TYPES
