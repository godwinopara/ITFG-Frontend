import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { forexData } from "../components/educations/data";
import { useParams } from "react-router-dom";
import { PricePatterns } from "../components/educations/PricePatterns";
import { Risk } from "../components/educations/Risk";
import { Stocks } from "../components/educations/Stocks";
import { Awareness } from "../components/educations/Awareness";



type Props = {};

const LearnTradingGuides = (props: Props) => {
  const params = useParams();

  const details = forexData?.find((data) => data?.title === params.id);
  
  
  return (
    <MainLayout>
      <section className="max-w-4xl mx-auto px-6 py-16 ">
        {details?.symbol === "aware" && (
          <Awareness details={details} />
        )}
        {details?.symbol === "price" && <PricePatterns details={details} />}
        
        {details?.symbol === "purpose" && <Stocks details={details} />}
        {details?.symbol === "risk" && <Risk details={details} />}
      </section>
    </MainLayout>
  );
};

export default LearnTradingGuides;
