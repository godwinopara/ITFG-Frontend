import { FaCheckCircle } from "react-icons/fa";

interface SubscriptionCardProps {
	plan: string;
	roi: string;
	planAmount: string;
	handleClick: (plan: string, planAmount: string) => void;
}

export const SubscriptionCard = ({ plan, roi, planAmount, handleClick }: SubscriptionCardProps) => {
	return (
		<div className="rounded-md border border-stroke  bg-white text-boxdark py-4 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
			<div className="my-1 flex items-end justify-between">
				<div className="w-full">
					<h4 className="text-sm font-bold text-black dark:text-white mb-1">{plan}</h4>
					<div>
						<p className="text-sm font-medium block mb-2">
							<span className="font-bold text-xl text-primary">${planAmount}</span> / Minimum
						</p>
						<p className="text-sm mb-2">High ROI After Trading Session</p>
						<div className="flex gap-x-2 mb-2 items-center">
							<FaCheckCircle className="text-primary" />
							<p className="text-boxdark">7 Days Duration</p>
						</div>
						<div className="flex gap-x-2 mb-2 items-center">
							<FaCheckCircle className="text-primary" />
							<p className="text-boxdark">{roi} ROI</p>
						</div>
						<div className="flex gap-x-2 items-center">
							<FaCheckCircle className="text-primary" />
							<p className="text-boxdark">24/7 Support</p>
						</div>
					</div>
					<div className="my-8 w-full">
						<label className="mb-2 block text-black dark:text-white">Amount</label>
						<input
							type="text"
							required
							placeholder={`${planAmount}`}
							readOnly
							className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
						/>
					</div>

					<button
						onClick={() => handleClick(plan, planAmount)}
						className="inline-flex items-center justify-center rounded-md w-full bg-primary py-3 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
					>
						Subscribe To Plan
					</button>
				</div>
			</div>
		</div>
	);
};
