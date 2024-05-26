import { CircleCheck, CircleMinus, CirclePlus } from "lucide-react";
import { SummaryCardDataStats } from "./CardDataStats";
import { useUserContext } from "../../context/UserContext";

type Props = {};

export const AccountSummary = (props: Props) => {
	const { state } = useUserContext();
	const verified = state.verification.status === "not verified" ? "Not Verified" : "Verified";

	return (
		<div className="bg-white rounded-lg px-4">
			<div className=" py-5  border-b border-b-gray">
				<h3 className="uppercase px-3 font-semibold">Account Summary</h3>
			</div>
			<div className="flex justify-between">
				<SummaryCardDataStats
					title="Total Deposit"
					icon={<CirclePlus color="#0064fa" size={20} />}
					desc="$199,000.00"
					action="Deposit"
					url="/user/deposit"
				/>
				<SummaryCardDataStats
					title="Total Withdrawals"
					icon={<CircleMinus color="#0064fa" size={20} />}
					desc="0.00"
					action="Withdraw"
					url="/user/withdrawal"
				/>
				<SummaryCardDataStats
					title="Verification"
					icon={<CircleCheck color="#0064fa" size={20} />}
					desc={verified}
					action={verified}
					url="/user/verify"
					verify={verified === "Verified"}
				/>
			</div>
		</div>
	);
};
