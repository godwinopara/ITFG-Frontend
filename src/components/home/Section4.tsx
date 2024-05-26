import { LuGanttChart } from "react-icons/lu";

export default function Section4() {
	return (
		<section>
			<div>
				<h2>Get lower, volume-based pricing with Advanced Trade</h2>
				<ul>
					<li>
						<LuGanttChart />
						<div>
							<h3>More order types</h3>
							<p>Market, Limit, Stop Limit, and Auction Mode orders.</p>
						</div>
					</li>
					<li>
						<LuGanttChart />
						<div>
							<h3>Powerful trading tools</h3>
							<p>Charts powered by TradingView with EMA, MA, MACD, RSI, and Bollinger Bands.</p>
						</div>
					</li>
					<li>
						<LuGanttChart />
						<div>
							<h3>One unified balance</h3>
							<p>Seamlessly switch between Simple and Advanced Trade.</p>
						</div>
					</li>
				</ul>
			</div>
			<div></div>
		</section>
	);
}
