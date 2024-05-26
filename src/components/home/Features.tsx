import phone from "../../images/Prime.webp";
import { FaShieldAlt, FaChartPie, FaMoneyCheck, FaComment } from "react-icons/fa";

export default function Features() {
	return (
		<section className="px-6 py-20 xl:px-0 bg-black4 text-white1 bg-secondary">
			<div className="max-w-7xl mx-auto">
				<div className="grid xl:flex items-center gap-20">
					<div className="bg-pattern2 bg-center bg-cover xl:w-[45%]">
						<img src={phone} alt="chart" className="mx-auto w-1/2 xl:w-[80%]" />
					</div>
					<div className="w-full">
						<div className=" mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold mb-3">Start Investing Today</h2>
							<p className="text-xl">InvestInspire has a variety of features that set us apart</p>
						</div>
						<div className="md:grid md:grid-cols-2">
							<FeatureCard
								icon={<FaMoneyCheck />}
								title="Fast Payments"
								description="Accessing trading gain made easy for you, Our platform make using Forex gains easy
								for all, regardless of your technical abilities"
							/>
							<FeatureCard
								icon={<FaChartPie />}
								title="Manage Your Portfolio"
								description="Buy and sell popular digital currencies, keep track of them in the one place."
							/>
							<FeatureCard
								icon={<FaShieldAlt />}
								title="Valid Protection"
								description="For added security, store your funds in a vault with time delayed withdrawals."
							/>
							<FeatureCard
								icon={<FaComment />}
								title="Transparent Reporting"
								description="Access trade result easily and check historical trade result with up to date trade
								ticker in member portfolio."
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

interface FeatureCardProps {
	title: string;
	description: string;
	icon?: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
	return (
		<div className="mb-10 px-4 xl:px-0 lg:flex gap-x-6 items-start">
			<div className="inline-block mb-4 text-3xl text-white bg-primary rounded-[100%] p-4 lg:mb-0 lg:block">
				{icon}
			</div>
			<div>
				<h3 className="font-semibold text-xl mb-2">{title}</h3>
				<p className="lg:w-[80%]">{description}</p>
			</div>
		</div>
	);
};
