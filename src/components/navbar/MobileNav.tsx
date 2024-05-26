import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../images/LOGO-DARK.svg";
import { useEffect, useState } from "react";

import { RiArrowRightSLine } from "react-icons/ri";

export default function MobileNav() {
	const [isMarketMenuOpen, setIsMarketMenuOpen] = useState(false);
	const [isPlatformMenuOpen, setIsPlatformMenuOpen] = useState(false);
	const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
	const [isEducationMenuOpen, setIsEducationMenuOpen] = useState(false);

	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		if (isNavOpen) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflowY = "scroll";
		}

		return () => {
			document.documentElement.style.overflowY = "scroll";
		};
	}, [isNavOpen]);

	return (
		<header className="px-6 py-6 xl:hidden">
			<nav className="flex items-center justify-between">
				<div className="w-[50%]">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="text-2xl cursor-pointer xl:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
					<RxHamburgerMenu />
				</div>
			</nav>
			<ul
				className={`${
					isNavOpen ? "block" : "hidden"
				} fixed bg-gray-200 left-0 top-[93px] w-full flex flex-col gap-y-8 px-6 py-6 mx-auto`}
			>
				<li className="" onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}>
					<div className="font-medium text-lg hover:text-primary-hover cursor-pointer">Company</div>
					<ul className={`px-4 flex flex-col gap-y-4 mt-5 ${isAboutMenuOpen ? "block" : "hidden"}`}>
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
					className="cursor-pointer relative "
					onClick={() => setIsMarketMenuOpen(!isMarketMenuOpen)}
				>
					<div className="hover:text-primary-hover font-medium text-lg">Market</div>

					<ul
						className={`px-4 flex flex-col gap-y-4 mt-5 ${isMarketMenuOpen ? "block" : "hidden"}`}
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
				<li className="relative " onClick={() => setIsPlatformMenuOpen(!isPlatformMenuOpen)}>
					<div className="font-medium text-lg hover:text-primary-hover cursor-pointer">
						Platform
					</div>
					<ul
						className={`px-4 flex flex-col gap-y-4 mt-5 ${isPlatformMenuOpen ? "block" : "hidden"}`}
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
				<li className="relative " onClick={() => setIsEducationMenuOpen(!isEducationMenuOpen)}>
					<div className="font-medium text-lg hover:text-primary-hover cursor-pointer">
						Education
					</div>
					<ul
						className={`px-4 flex flex-col gap-y-4 mt-5 ${
							isEducationMenuOpen ? "block" : "hidden"
						}`}
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

				<div className="">
					<div className=" flex flex-col  items-center gap-y-4">
						<Link
							to="/signup"
							className="text-center font-medium border border-black py-4 px-6 w-full block rounded-md"
						>
							Sign Up
						</Link>
						<Link
							to="/signin"
							className="font-medium text-center bg-primary py-4 px-6 w-full block hover:bg-primary-hover text-white rounded-md"
						>
							Get Started
						</Link>
					</div>
				</div>
			</ul>
		</header>
	);
}
