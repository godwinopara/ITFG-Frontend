import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { forexData } from "../components/educations/data";
import { useParams } from "react-router-dom";
import { FundamentalAnalysis } from "../components/educations/FundamentalAnalysis";
import { StockExchanges } from "../components/educations/StockExchanges";
import { PricePatterns } from "../components/educations/PricePatterns";
import { CurrencyCorrelation } from "../components/educations/CurrencyCorrelation";
import { Stocks } from "../components/educations/Stocks";
import { Risk } from "../components/educations/Risk";

type Props = {};

const LearnGuideDetails = (props: Props) => {
	const params = useParams();

	const details = forexData?.find((data) => data?.title === params.id);

	return (
		<MainLayout>
			<section className="max-w-4xl mx-auto px-6 py-16 ">
				{details?.symbol === "fundamental" && <FundamentalAnalysis details={details} />}
				{details?.symbol === "stock" && <StockExchanges details={details} />}
				{details?.symbol === "pattern" && <PricePatterns details={details} />}
				{details?.symbol === "correlation" && <CurrencyCorrelation details={details} />}
				{details?.symbol === "purpose" && <Stocks details={details} />}
				{details?.symbol === "risk" && <Risk details={details} />}
			</section>
		</MainLayout>
	);
};

export default LearnGuideDetails;
