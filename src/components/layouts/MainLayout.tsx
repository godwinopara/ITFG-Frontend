import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useUserContext } from "../../context/UserContext";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {

	const {state} = useUserContext()
	 console.log(state)
	return (
		<React.Fragment>
			<Navbar />
			<main className="my-16">{children}</main>
			<Footer />
		</React.Fragment>
	);
}
