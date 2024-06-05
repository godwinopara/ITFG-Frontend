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
	deposits: Deposit[];
	withdrawals: Withdrawal[];
	verification: Verification;
	subscription: Subscription;
	trades: Trade[];
	bitcoin: number;
	joinedDate: string;
	admin: boolean;
	status: string;
}

export interface Asset {
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

export interface Account {
	balance: string;
	profit: string;
	bonus: string;
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

export interface Deposit{
	amount: string;
	date: string;
	method: string;
	status: string;
	id?: string;
	screenshot: string | null;
	uid?: string;
}

export interface Deposit {
	
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

export interface Trade {
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
	id: string;
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

export interface Subscription {
	plan: string;
	amount: string;
	duration: string;
	date: string;
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

export interface Verification {
	document: string | null;
	status: string;
}






// ADMIN TYPES
