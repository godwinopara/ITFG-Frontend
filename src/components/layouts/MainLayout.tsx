import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<React.Fragment>
			<Navbar />
			<main className="my-16">{children}</main>
			<Footer />
		</React.Fragment>
	);
}
