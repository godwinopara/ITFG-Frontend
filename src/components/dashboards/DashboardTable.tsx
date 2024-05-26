// import { useUserContext } from "../../context/UserContext";
// import { Trade } from "../../types/trade";
// import { TradeState } from "../../types/types";
// import { tradesData } from "./data";

// const DashboardTable = () => {
// 	const { state } = useUserContext();
// 	return (
// 		<>
// 			<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
// 				<h2 className="font-bold text-xl mb-5">Latest Trades</h2>
// 				<div className="max-w-full overflow-x-auto">
// 					<table className="w-full table-auto">
// 						<thead>
// 							<tr className=" text-left bg-primary whitespace-nowrap">
// 								<th className="min-w-[100px] py-4 px-4 font-semibold text-white text-lg ">
// 									Options
// 								</th>
// 								<th className="min-w-[100px] py-4 px-4 font-semibold text-white text-lg ">Type</th>
// 								<th className="min-w-[100px] py-4 px-4 font-semibold text-white text-lg ">Pair</th>
// 								<th className="min-w-[150px] py-4 px-4 font-semibold text-white text-lg ">Entry</th>
// 								<th className="min-w-[100px] py-4 px-4 font-semibold text-white text-lg ">Size</th>
// 								<th className="min-w-[80px] py-4 px-4 font-semibold text-white text-lg ">
// 									T-Profit
// 								</th>
// 								<th className="min-w-[80px] py-4 px-4 font-semibold text-white text-lg ">S-Loss</th>
// 								<th className="min-w-[150px] py-4 px-4 font-semibold text-white text-lg ">
// 									Profit
// 								</th>
// 								<th className="min-w-[120px] py-4 px-4 font-semibold text-white text-lg ">
// 									Status
// 								</th>
// 							</tr>
// 						</thead>
// 						{state.trades?.length > 0 && (
// 							<tbody>
// 								{state.trades.map((tradeItem: TradeState, key: number) => (
// 									<tr key={key} className={`${key % 2 === 0 ? "bg-gray-100" : ""}`}>
// 										<td className="  py-5 px-4 border-strokedark">
// 											<h5 className="text-black  dark:text-white">{tradeItem.tradeType}</h5>
// 										</td>
// 										<td className="  py-5 px-4 border-strokedark">
// 											<h5 className="font-medium text-black dark:text-white">
// 												{tradeItem.tradeOption}
// 											</h5>
// 										</td>
// 										<td className="  py-5 px-4 border-strokedark">
// 											<h5 className="font-medium text-black dark:text-white">{tradeItem.pairs}</h5>
// 										</td>
// 										<td className=" py-5 px-4 border-strokedark">
// 											<p className="text-black dark:text-white">${tradeItem.entry}</p>
// 										</td>
// 										<td className=" py-5 px-4 border-strokedark">
// 											<p className="text-black dark:text-white">{tradeItem.lotSize}</p>
// 										</td>
// 										<td className="  py-5 px-4 border-strokedark">
// 											<p className="text-black dark:text-white">{tradeItem.takeProfit}</p>
// 										</td>
// 										<td className="  py-5 px-4 border-strokedark">
// 											<p className="text-black dark:text-white">{tradeItem.stopLoss}</p>
// 										</td>
// 										<td className=" py-5 px-4 border-strokedark">
// 											<p className="text-black dark:text-white">{tradeItem.profit}</p>
// 										</td>

// 										<td className=" py-5 px-4 border-strokedark">
// 											<p
// 												className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
// 													tradeItem.status === "win"
// 														? "text-success bg-success"
// 														: "text-warning bg-warning"
// 												}`}
// 											>
// 												{tradeItem.status}
// 											</p>
// 										</td>
// 									</tr>
// 								))}
// 							</tbody>
// 						)}
// 					</table>
// 					<div className="w-full text-center mt-3 py-4">
// 						{state.trades?.length < 1 && <p className="text-xl">No Recent Trades</p>}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default DashboardTable;
import React from "react";

export default function DashboardTable() {
	return <div>DashboardTable</div>;
}
