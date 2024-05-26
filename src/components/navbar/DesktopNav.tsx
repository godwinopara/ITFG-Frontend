import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/LOGO-DARK.svg";

export default function DesktopNav() {
	const [isMarketMenuOpen, setIsMarketMenuOpen] = useState(false);
	const [isPlatformMenuOpen, setIsPlatformMenuOpen] = useState(false);
	const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
	const [isEducationMenuOpen, setIsEducationMenuOpen] = useState(false);

	const handleMarketMenuHover = (isOpen: any) => {
		setIsMarketMenuOpen(isOpen);
	};

	const handlePlatformMenuHover = (isOpen: any) => {
		setIsPlatformMenuOpen(isOpen);
	};
	const handleAboutMenuHover = (isOpen: any) => {
		setIsAboutMenuOpen(isOpen);
	};
	const handleEducationMenuHover = (isOpen: any) => {
		setIsEducationMenuOpen(isOpen);
	};

	return (
		<nav className="hidden px-6 shadow-sm fixed top-0 z-50 bg-white w-full xl:block">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<div className="w-[30%]">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<ul className="flex items-center justify-center gap-x-10 mx-auto w-[40%]">
					<li
						className="py-6 relative"
						onMouseEnter={() => handleAboutMenuHover(true)}
						onMouseLeave={() => handleAboutMenuHover(false)}
					>
						<div className="font-medium text-lg hover:text-primary-hover cursor-pointer">
							Company
						</div>
						<ul
							className={`absolute top-[76px] left-0 w-[250px] bg-gray-200 shadow-lg px-8 py-6 flex flex-col gap-y-4 ${
								isAboutMenuOpen ? "block" : "hidden"
							}`}
							onMouseEnter={() => handleAboutMenuHover(true)}
							onMouseLeave={() => handleAboutMenuHover(false)}
						>
							<li>
								<Link className="hover:text-primary-hover" to="/company/about">
									About Us
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/company/contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</li>
					<li
						className="cursor-pointer relative py-6"
						onMouseEnter={() => handleMarketMenuHover(true)}
						onMouseLeave={() => handleMarketMenuHover(false)}
					>
						<div className="hover:text-primary-hover font-medium text-lg ">Market</div>

						<ul
							className={`absolute top-[76px] left-0 w-[250px] bg-gray-200 shadow-lg px-8 py-6 flex flex-col gap-y-4 ${
								isMarketMenuOpen ? "block" : "hidden"
							}`}
							onMouseEnter={() => handleMarketMenuHover(true)}
							onMouseLeave={() => handleMarketMenuHover(false)}
						>
							<li>
								<Link className="hover:text-primary-hover" to="/market/forex">
									Forex
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/market/commodities">
									Commodities
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/market/indices">
									Indices
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/market/shares">
									Shares
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/market/treasures">
									Treasures
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/market/cryptocurrency">
									Cryptocurrencies
								</Link>
							</li>
						</ul>
					</li>
					<li
						className="relative py-6"
						onMouseEnter={() => handlePlatformMenuHover(true)}
						onMouseLeave={() => handlePlatformMenuHover(false)}
					>
						<div className="font-medium text-lg hover:text-primary-hover cursor-pointer">
							Platform
						</div>
						<ul
							className={`absolute top-[76px] left-0 w-[250px] bg-gray-200 shadow-lg px-8 py-6 flex flex-col gap-y-4 ${
								isPlatformMenuOpen ? "block" : "hidden"
							}`}
							onMouseEnter={() => handlePlatformMenuHover(true)}
							onMouseLeave={() => handlePlatformMenuHover(false)}
						>
							<li>
								<Link className="hover:text-primary-hover" to="/platforms/meta4">
									Metatrader 4
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/platforms/meta5">
									Metatrader 5
								</Link>
							</li>
						</ul>
					</li>
					<li
						className="relative py-6"
						onMouseEnter={() => handleEducationMenuHover(true)}
						onMouseLeave={() => handleEducationMenuHover(false)}
					>
						<div className="font-medium text-lg hover:text-primary-hover cursor-pointer">
							Education
						</div>
						<ul
							className={`absolute top-[76px] left-0 w-[250px] bg-gray-200 shadow-lg px-8 py-6 flex flex-col gap-y-4 ${
								isEducationMenuOpen ? "block" : "hidden"
							}`}
							onMouseEnter={() => handleEducationMenuHover(true)}
							onMouseLeave={() => handleEducationMenuHover(false)}
						>
							<li>
								<Link className="hover:text-primary-hover" to="/education/learn-cfds">
									Learn to trade CFDS
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/education/learn-forex">
									Learn to trade Forex
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/education/learn-shares">
									Learn to trade Shares
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary-hover" to="/education/trading-guides">
									Trading guides
								</Link>
							</li>
						</ul>
					</li>
				</ul>
				<div className="w-[30%] ml-auto flex justify-end">
					<div className=" flex items-center gap-x-6 justify-center xl:justify-start">
						<Link to="/signup" className="border border-black py-2 px-6 block rounded-md">
							Sign Up
						</Link>
						<Link
							to="/signin"
							className="bg-primary py-2 px-6 block hover:bg-primary-hover text-white rounded-md"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
