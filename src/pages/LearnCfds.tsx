import MainLayout from "../components/layouts/MainLayout";
import { Question } from "../components/educations/Question";
import { Contents } from "../components/educations/Contents";
import { ReadyToTrade } from "../components/sharedUi/ReadyToTrade";

type Props = {};

const LearnCfds = (props: Props) => {
	return (
		<MainLayout>
			<section className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-10">
				<div className="flex flex-col gap-3 ">
					<Question title="How to Trade CFDs" />
					<Contents desc="A contract for difference (CFD) is a vehicle for speculating on the price of financial markets, including forex, equity indices, commodities and shares." />
				</div>
				<div className="flex flex-col gap-3">
					<Question title="What is a CFD?" />
					<Contents desc="More commonly known as derivatives, CFDs provide exposure to a market without the trader actually owning the underlying asset." />
					<Contents desc="CFDs also allow you to express a view on the future direction of a market. Effectively you're entering into a contract with us to exchange the value between the opening price of an instrument, and where you ultimately chose to close in the future. The distance between your opening and closing price and your position size will determine the degree of profit or loss." />
				</div>
				<div className="flex flex-col gap-3">
					<Question title="One of the most flexible trading vehicles" />
					<Contents desc="CFDs offer you the ability to trade global markets whether they're rising or falling as you can go long or short. Unlike other financial instruments such as options, there isn't an expiry date on cash-based CFD trades either." />
				</div>
				<div className="flex flex-col gap-3">
					<Question title="What is leverage?" />
					<Contents desc="When trading CFDs, you’ll be asked to put down a percentage of the full market value of the position, known as its exposure. This means you can achieve a sizeable market exposure with a small initial capital outlay, known as margin or deposit. It’s this idea of leverage, or gearing, that enables traders the opportunity to trade markets they simply wouldn’t otherwise have been able to." />
					<Contents desc="Leverage means a small capital outlay can go further, but this can also result in increased swings in profit and loss within your portfolio. As with all financial products, if the market moves against you, you'll lose money. But because CFD trading involves leverage, there's a much greater risk that you could lose substantially more than the capital you invested. Therefore, trading CFDs requires closer attention than unleveraged investments, such as physical shares." />
				</div>
				<div className="flex flex-col gap-3">
					<Question title="Costs to trade" />
					<Contents desc="The cost to trade CFDs with us depends on the account type you choose." />
					<Contents desc="The basic cost is what’s known as the spread, or the difference between the buy and sell price. There can be additional commission charges to consider too so compare accounts to you find the right account for you depending on your trading needs. There's an interest charge if you hold a position past the rollover point, which takes place a 5pm EST every day and is calculated basis the corresponding swap rate. This can be a consideration for many traders who hold sizeable positions, and they’ll often close out before this time." />
				</div>
				<div className="flex flex-col gap-3">
					<Question title="Classic character traits of a CFD trader" />
					<Contents desc="CFD traders are diverse in their character traits, but our most successful clients are ambitious, passionate about financial markets and continued learning and have likely had experience trading or investing outside of derivatives before taking an interest in CFDs." />
					<Contents desc="Naturally, our clients have a higher risk tolerance and understand that leverage can magnify both profit and loss. A successful trader will have a strong consideration and appreciation for managing risk. They like to trade methodically, either through automated Expert Advisors (or EAs), technical or price action analysis or through more fundamental considerations." />
					<Contents desc="Due to the high levels of leverage, CFD traders tend to hold positions for shorter timeframes, which requires increased oversight of positions and the portfolio." />
				</div>
				<div className="flex flex-col gap-3">
					<Question title="Risk management" />
					<Contents desc="Because CFDs are leveraged products, it's possible for you to either gain or lose much larger amounts compared to your initial capital outlay, and your losses can exceed your deposits." />
					<Contents desc="For this reason, risk management is a core consideration for all successful CFD traders, and we recommend you watch one of our many webinars on the subject of managing risk to help you harness this discipline. We also offer a range of stop-loss orders that will close your trade at a specific level." />
				</div>
				<ReadyToTrade />
			</section>
		</MainLayout>
	);
};

export default LearnCfds;
