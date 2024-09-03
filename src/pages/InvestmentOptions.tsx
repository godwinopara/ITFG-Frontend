import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { TbChartCandle } from "react-icons/tb";
import { ReactElement } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { MdOutlineAgriculture, MdOutlineRealEstateAgent } from "react-icons/md";
import { AiFillGold } from "react-icons/ai";
import { GiFuelTank } from "react-icons/gi";

export default function InvestmentOptions() {
  return (
    <AdminLayout>
      <h1 className="text-slate-600 font-maisonBold  text-xl mt-4 mb-10">Investment Options</h1>
      <div className="grid grid-cols-3 gap-6">
        <InvestOptionsCard
          title="FOREX INVESTMENT OPTION"
          icon={<TbChartCandle />}
          description="Invest in the forex markets with reduced risk. We provide assured profits and downside protection from the market volatility. "
        />
        <InvestOptionsCard
          title="CRYPTO INVESTMENT OPTION"
          icon={<IoLogoBitcoin />}
          description="Make steady profits from cryptocurrency without having to bear the hurt of market dips and cryptocurrency price falling. "
        />
        <InvestOptionsCard
          title="AGRIC INVESTMENT OPTION"
          icon={<MdOutlineAgriculture />}
          description="Investment in agriculture is relatively a low-risk portfolio diversification; offering profitable returns financially. "
        />
        <InvestOptionsCard
          title="GOLD INVESTMENT OPTION"
          icon={<AiFillGold />}
          description="One way to profit from gold is to invest in gold mining shares. This allows you to reap the benefits of gold price increases"
        />
        <InvestOptionsCard
          title="OIL-GAS INVESTMENT OPTION"
          icon={<GiFuelTank />}
          description="A less direct method of investing in oil and natural gas is to invest in the companies involved in those industries"
        />
        <InvestOptionsCard
          title="REAL ESTATE INVESTMENT OPTION"
          icon={<MdOutlineRealEstateAgent />}
          description="Adding real estate to your investments boosts your diversification, which can protect you in times of economic turmoil. "
        />
      </div>
    </AdminLayout>
  );
}

interface InvestOptionCard {
  title: string;
  description: string;
  icon: ReactElement;
}

const InvestOptionsCard = ({ title, description, icon }: InvestOptionCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center mb-5 text-2xl bg-primary-hover h-10 w-10  text-white rounded-full">
          {icon}
        </CardTitle>
        <CardDescription className="text-base font-maisonMedium">{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-primary-hover w-36 font-maisonMedium rounded-[4px] text-white hover:bg-primary ">
          Invest Here
        </Button>
      </CardFooter>
    </Card>
  );
};
