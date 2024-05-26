import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import footerLogo from "../../images/LOGO.svg";
import { Link } from "react-router-dom";

export default function Footer() {
	const companySubLinks = [
		{ link: "/company/about", text: "About Us" },
		{ link: "/company/contact", text: "Contact Us" },
	];

	const marketSubLinks = [
		{ link: "/market/forex", text: "Forex" },
		{ link: "/market/commodities", text: "Commodities" },
		{ link: "/market/indices", text: "Indices" },
		{ link: "/market/shares", text: "Shares" },
		{ link: "/market/tresures", text: "Treasures" },
		{ link: "/market/cryptocurreny", text: "Cryptocurrencies" },
	];

	const platformSubLinks = [
		{ link: "/platforms/meta4", text: "MetaTrader 4" },
		{ link: "/platforms/meta5", text: "MetaTrader 5" },
	];

	const educationSubLinks = [
		{ link: "/education/learn-cfds", text: "Learn to trade CFDS" },
		{ link: "/education/learn-forex", text: "Learn to trade Forex" },
		{ link: "/education/learn-shares", text: "Learn to trade Shares" },
		{ link: "/education/trading-guides", text: "Trading guides" },
	];

	return (
		<>
			<footer className="bg-primary text-white py-16 20 px-6 xl:px-0">
				<div className="max-w-7xl mx-auto">
					<div className="lg:flex justify-between">
						<div className="w-full lg:w-[47%]">
							<Link to="/" className="uppercase text-xl pb-5 mb-5 block font-bold lg:text-xl">
								<img src={footerLogo} alt="" className=" w-[200px]" />
							</Link>
							<div className="flex items-center gap-5 pb-10 text-xl ">
								<div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-green">
									<Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
										<FaFacebook />
									</Link>
								</div>
								<div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-green">
									<Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
										<FaTwitter />
									</Link>
								</div>
								<div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-green">
									<Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
										<FaLinkedin />
									</Link>
								</div>
								<div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-green">
									<Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">
										<FaYoutube />
									</Link>
								</div>
								<div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-green">
									<Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
										<FaInstagram />
									</Link>
								</div>
							</div>
							<div>
								<p className="w-full lg:w-[60%]">
									This website is owned and operated by <br />
									InvestInspire. All rights reserved. <br /> <br />© 2024 InvestInspire (MU).
								</p>
							</div>
						</div>

						<div className="md:grid md:grid-cols-3 xl:flex lg:justify-between lg:flex-wrap pb-10 lg:gap-5 xl:text-base flex-1">
							<FooterNavWrapper title="Company" links={companySubLinks} />
							<FooterNavWrapper title="Market" links={marketSubLinks} />
							<FooterNavWrapper title="Platforms" links={platformSubLinks} />
							<FooterNavWrapper title="Education" links={educationSubLinks} />
						</div>
					</div>
					<hr />

					<div className="text-sm pt-10 pb-10 italic">
						<p>
							Trading derivatives and leveraged products carries a high level of risk, including the
							risk of losing substantially more than your initial investment. It is not suitable for
							everyone. Before making any decisions in relation to a financial product, you should
							obtain and consider our Disclosure Statement (DS) available on our website and seek
							independent advice if necessary.
						</p>
						<br />
						<p>
							The information on this website is of a general nature only and does not consider your
							goals, financial situation or needs. Every effort is made to provide accurate
							information. However, the information is subject to change at any time without notice.
							GO cannot guarantee and assume no legal responsibility for the relevance, accuracy,
							topicality or completeness of the information.
						</p>
						<br />
						<p>
							We use a number of cookies on this website for functional, analytical and marketing
							purposes. By continuing to use this website, you agree to our use of cookies. You can
							view our cookie policy here from the Privacy Policy or by following the link at the
							bottom of any page of our website.
						</p>
						<br />
					</div>
				</div>
			</footer>
		</>
	);
}

interface FooterNavWrapperProps {
	links: { link: string; text: string }[];
	title: string;
}

const FooterNavWrapper = ({ links, title }: FooterNavWrapperProps) => {
	return (
		<div className="my-10 lg:my-0">
			<div>
				<h3 className="font-bold mb-3">{title}</h3>
				<ul>
					{links.map((sublink, id) => {
						return (
							<li key={id} className="mb-1">
								<Link to={sublink.link}>{sublink.text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
