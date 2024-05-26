import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { shareCFData } from "../components/educations/data";
import { useParams } from "react-router-dom";
import { ShareTrading } from "../components/educations/ShareTrading";
import { ShortIPO } from "../components/educations/ShortIPO";
import { UpcomingIPO } from "../components/educations/UpcomingIPO";
import { PriceDetermination } from "../components/educations/PriceDetermination";

type Props = {};

const LearnSharesDetails = (props: Props) => {
	const params = useParams();

	const details = shareCFData?.find((data) => data?.title === params.id);

	return (
		<MainLayout>
			<section className="max-w-4xl mx-auto px-6 py-16 ">
				{details?.symbol === "share" && <ShareTrading details={details} />}
				{details?.symbol === "short" && <ShortIPO details={details} />}
				{details?.symbol === "upcoming" && <UpcomingIPO details={details} />}
				{details?.symbol === "determines" && <PriceDetermination details={details} />}
			</section>
		</MainLayout>
	);
};

export default LearnSharesDetails;
