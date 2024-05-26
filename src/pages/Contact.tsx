import MainLayout from "../components/layouts/MainLayout";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import map from "../images/mapImg.webp";

export default function Contact() {
	return (
		<MainLayout>
			<header></header>
			<section className="max-w-7xl mx-auto my-10 px-6 xl:py-32 xl:grid xl:grid-cols-2 xl:items-center xl:gap-x-20">
				<div>
					<div className="text-lg mb-8">
						<h1 className="text-5xl font-bold mb-8">Contact Us</h1>
						<p className="max-w-72 text-lg mb-10">
							Email or Call to learn how InvestInspire can help you invest
						</p>
						<div className="flex items-center mb-3  gap-x-3">
							<MdEmail />
							<p>info@investinspire.com</p>
						</div>
						<div className="flex items-center gap-x-3 mb-16">
							<FaPhoneAlt />
							<p>321-321-321</p>
						</div>
					</div>

					<div className="mb-10 xl:mb-0 xl:flex xl:gap-x-10 ">
						<div className="mb-8 xl:mb-0">
							<h3 className="font-bold text-xl mb-3">Customer Support</h3>
							<p className="max-w-[400px] text-lg">
								Our support team is available around the clock to address any concern or queries you
								may have
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-3">Feedback and Suggestion</h3>
							<p className="max-w-[400px] text-lg">
								We value your feedback and are continuously working to improve InvestInspire. Your
								input is crucial in shaping the future of InvestInspire.
							</p>
						</div>
					</div>
				</div>
				<div>
					<img src={map} alt="" className="xl:w-[80%] mx-auto" />
				</div>
			</section>
		</MainLayout>
	);
}
