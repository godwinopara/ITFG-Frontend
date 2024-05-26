import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function Plans() {
	return (
		<section className="px-6 xl:px-0">
			<div className="text-center mb-5">
				<h2 className="text-3xl lg:text-4xl mb-5 font-bold">
					Accounts tailored to your trading style
				</h2>
				<p className="xl:w-[40%] mx-auto">
					Investinspire has accounts for both new and more active traders. Check which fits and
					you’re set to go.
				</p>
			</div>
			<div className="lg:grid grid-cols-2 gap-x-20 max-w-7xl mx-auto py-24">
				<div className="py-14 px-10 bg-secondary text-black border border-t-4 mb-20 lg:mb-0">
					<h3 className="font-bold text-2xl mb-5">GO Plus+ Account</h3>
					<p className="text-xl mb-8">Leverage up to 500:1</p>
					<p className="text-xl mb-8">Spreads from 0.0 pips</p>
					<p className="text-xl mb-8">AU $3.00 Commission per side</p>
					<p className="text-xl font-medium mb-8">Available Base Currencies</p>
					<ul className="grid grid-cols-3 gap-5 mb-8">
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							AUD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							USD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							EUR
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							GBP
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							NZD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							CAD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							SGD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							CHF
						</li>
					</ul>
					<Link to="/user/dashboard">
						<Button
							btnText="Start Earning"
							className="border border-primary-hover text-primary hover:text-white hover:bg-primary-hover text-lg py-4 rounded-md w-full"
						/>
					</Link>
				</div>
				<div className="bg-green py-14 px-10 bg-secondary text-black border border-t-4">
					<h3 className="font-bold text-2xl mb-5">Standard Account</h3>
					<p className="text-xl mb-8">Leverage up to 500:1</p>
					<p className="text-xl mb-8">Spreads from 1.0 pips</p>
					<p className="text-xl mb-8">AU $0.00 Commission per side</p>
					<p className="text-xl font-medium mb-8">Available Base Currencies</p>
					<ul className="grid grid-cols-3 gap-5 mb-8">
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							AUD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							USD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							EUR
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							GBP
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							NZD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							CAD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							SGD
						</li>
						<li className="flex items-center">
							<div className="flex items-center justify-center mr-2 p-1 bg-primary text-white rounded-[100%]">
								<FaCheck />
							</div>
							CHF
						</li>
					</ul>
					<Link to="/user/dashboard">
						<Button
							btnText="Start Earning"
							className="border border-primary-hover text-primary hover:text-white hover:bg-primary-hover text-lg py-4 rounded-md w-full"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
