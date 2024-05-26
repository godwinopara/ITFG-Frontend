import React from "react";
import { Desc, Heading } from "../sharedUi/Contents";
import Button from "../Button";
import { FaCameraRetro } from "react-icons/fa";

type Props = {};

export const RiskManagement = (props: Props) => {
  return (
    <section className="bg-white flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-16 py-24 text-center md:w-3/4">
        <Heading title="Risk management" center icon={<FaCameraRetro size={40} />}/>
        <Desc
          desc="We've developed an extensive range of risk-management features to help you manage trading risk effectively, helping to secure potential profits and minimise losses. If you want 100% certainty that a trade will close at an exact price if it moves against you, we offer guaranteed stop-loss orders (GSLOs) for a premium. The premium is refunded in full if the GSLO is not triggered."
        />
        <Button
          btnText="More about risk management"
          className="w-fit py-3 px-8 font-bold rounded-md text-center border border-[#00c5e8] text-[#00c5e8] mx-auto"
        />
      </div>
    </section>
  );
};
