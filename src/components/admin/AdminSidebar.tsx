import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import { FaHome, FaMoneyBillAlt, FaUsers } from "react-icons/fa";
import { PiIdentificationBadge } from "react-icons/pi";
import { MdOutlineUnsubscribe, MdAccountBalance } from "react-icons/md";
import { TbChartCandle } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { HamburgerIcon } from "../ui/HamburgerIcon";

type Props = {
	sidebarOpen: boolean;
	setSidebarOpen: (arg: boolean) => void;
};

export const AdminSidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
	const location = useLocation();
	const pathname = location.pathname;

	const trigger = useRef<any>(null);
	const sidebar = useRef<any>(null);

	let storedSidebarExpanded = "true";
	const [sidebarExpanded, setSidebarExpanded] = useState(
		storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
	);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
			if (!sidebar.current || !trigger.current) return;
			if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
				return;
			setSidebarOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }: KeyboardEvent) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	useEffect(() => {
		localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
		if (sidebarExpanded) {
			document.querySelector("body")?.classList.add("sidebar-expanded");
		} else {
			document.querySelector("body")?.classList.remove("sidebar-expanded");
		}
	}, [sidebarExpanded]);

	return (
		<aside
			className={`absolute left-0 top-0 z-[9999] flex h-screen w-[18.125rem] flex-col overflow-y-hidden bg-lightblack duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
				sidebarOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			<div className="flex items-center justify-between gap-2 px-6 py-6 lg:py-7 text-white">
				<Link to="/dashboard">
					<img src={logo} alt="Logo" />
				</Link>

				<button
					ref={trigger}
					onClick={() => setSidebarOpen(!sidebarOpen)}
					aria-controls="sidebar"
					aria-expanded={sidebarOpen}
					className="block lg:hidden"
				>
					<HamburgerIcon />
				</button>
			</div>
			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				{/* <!-- Sidebar Menu --> */}
				<nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
					{/* <!-- Menu Group --> */}
					<div>
						<h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

						<ul className="mb-6 flex flex-col gap-3.5 text-lg">
							{/* <!-- Menu Item Dashboard --> */}
							<li>
								<Link
									to="/dashboard"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname === "/dashboard" && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<FaHome />
									Dashboard
								</Link>
							</li>

							<li>
								<Link
									to="/dashboard/users"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("users") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<FaUsers />
									Manage Users
								</Link>
							</li>
							<li>
								<Link
									to="/dashboard/accounts"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("accounts") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<MdAccountBalance />
									Accounts
								</Link>
							</li>

							<li>
								<Link
									to="/dashboard/deposit"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("deposit") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<FaMoneyBillAlt />
									Deposits
								</Link>
							</li>
							<li>
								<Link
									to="/dashboard/withdrawals"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("withdrawals") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<BiMoneyWithdraw />
									Withdrawals
								</Link>
							</li>
							<li>
								<Link
									to="/dashboard/trades"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("trades") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<TbChartCandle />
									Trade Sessions
								</Link>
							</li>
							<li>
								<Link
									to="/dashboard/subscriptions"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("subscription") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<MdOutlineUnsubscribe />
									Subscriptions
								</Link>
							</li>

							<li>
								<Link
									to="/dashboard/verification"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("verification") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<PiIdentificationBadge />
									Identity Verification
								</Link>
							</li>
							<li>
								<Link
									to="/dashboard/notification"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
										pathname.includes("/dashboard/notification") && "bg-graydark dark:bg-meta-4"
									}`}
								>
									<IoIosNotifications />
									Notification
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</aside>
	);
};
