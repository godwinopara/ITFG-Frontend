import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { TbChartCandle } from "react-icons/tb";
import { ReactElement, useRef, useState } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { MdOutlineAgriculture, MdOutlineRealEstateAgent } from "react-icons/md";
import { AiFillGold } from "react-icons/ai";
import { GiFuelTank } from "react-icons/gi";
import ReusableDialog, { DialogHandle } from "../components/sharedUi/ReuseableDialog";
import { useUserAdminContext } from "../context/MainContext";
import toast from "react-hot-toast";
import { generateISODate } from "../lib/generateISODate";
import { addInvestment } from "../api/api";
import { InvestmentProps } from "@/types/investment";

export default function InvestmentOptions() {
  const [firstDialogForm, setFirstDialogForm] = useState({ investmentOption: "none", amount: 200 });
  const firstDialog = useRef<DialogHandle>(null);
  const secondDialog = useRef<DialogHandle>(null);

  const {
    state: { user },
    addNewInvestment,
  } = useUserAdminContext();

  const handleOpenFirstDialog = () => {
    firstDialog?.current?.open();
  };

  const handleOpenNextDialog = () => {
    if (firstDialogForm.investmentOption === "none") {
      toast.error("Select Investment Plan");
      return;
    }
    firstDialog?.current?.close();
    secondDialog?.current?.open();
  };

  const handleSubmitInvestment = async () => {
    const investmentData = {
      investmentOption: firstDialogForm.investmentOption,
      capital: Number(firstDialogForm.amount),
      end: generateISODate(),
    };

    try {
      const invest: InvestmentProps = await toast.promise(addInvestment(investmentData), {
        loading: "Adding New Investment",
        success: "Investment Added Successfully",
        error: "Failed to Add Investment",
      });

      const savedInvestment = {
        userId: invest.userId,
        investmentOption: invest.investmentOption,
        capital: invest.capital,
        profit: invest.profit,
        start: invest.start,
        end: invest.end,
        status: invest.status,
      };

      // add new investment
      addNewInvestment(savedInvestment);

      // close modal
      secondDialog?.current?.close();
    } catch (error) {
      console.log(error);
    }
    // TO DO: implement the logic to submit the investment form
  };

  return (
    <AdminLayout>
      <ReusableDialog title="Invest" ref={firstDialog}>
        <div className="flex items-center justify-between py-2 text-gray-600">
          <p className="font-semibold">Wallet Balance</p>
          <p className="font-semibold">${user?.wallet_balance.toLocaleString()}</p>
        </div>
        <div className="relative w-full">
          <label htmlFor="payment" className="block text-sm text-left font-semibold mb-3">
            Payment Method :
          </label>
          <select
            value={firstDialogForm.investmentOption}
            onChange={(e) => setFirstDialogForm({ ...firstDialogForm, investmentOption: e.target.value })}
            className="block w-full rounded-[5px]  px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:border-blue-500"
          >
            <option value="none">Select Investment Option</option>
            <option value="Forex Investment Option">Forex Investment Option</option>
            <option value="Crypto Investment Option">Crypto Investment Option</option>
            <option value="Gold Investment Option">Gold Investment Option</option>
            <option value="Oil-Gas Investment Option">Oil-Gas Investment Option</option>
            <option value="Real Estate Investment Option">Real Estate Investment Option</option>
          </select>
          <div className="absolute bottom-0 top-9 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="amount" className="font-semibold mb-3 text-left block text-sm">
            Deposit Amount :
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-[5px] overflow-hidden">
            <span className="bg-gray-200 text-gray-700 px-3 py-3">Amount</span>
            <input
              type="number"
              value={firstDialogForm.amount}
              onChange={(e) => setFirstDialogForm({ ...firstDialogForm, amount: Number(e.target.value) })}
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <span className="bg-gray-200 text-gray-700 px-3 py-3">$</span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button onClick={handleOpenNextDialog} className="bg-primary hover:bg-primary-hover rounded-[5px] ">
            Continue
          </Button>
        </div>
      </ReusableDialog>
      <ReusableDialog title="Investment Details" ref={secondDialog}>
        <div className="flex items-center justify-between py-2 text-gray-600">
          <p className="font-semibold">Wallet Balance</p>
          <p className="font-semibold">${user?.wallet_balance.toLocaleString()}</p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-x-5 mb-4">
            <p className="font-maisonBold w-1/2">Investment Option:</p>
            <p className="justify-self-start w-1/2 font-maisonMedium text-slate-600">
              {firstDialogForm.investmentOption}
            </p>
          </div>
          <div className="flex items-center justify-between gap-x-5 mb-4">
            <p className="font-maisonBold w-1/2">Capital:</p>
            <p className="justify-self-start w-1/2 font-maisonMedium text-slate-600">${firstDialogForm.amount}</p>
          </div>
          <div className="flex items-center justify-between gap-x-5 mb-4">
            <p className="font-maisonBold w-1/2">Duration:</p>
            <p className="justify-self-start w-1/2 font-maisonMedium text-slate-600">8 Weeks</p>
          </div>
          <div className="flex items-center justify-between gap-x-5 mb-4">
            <p className="font-maisonBold w-1/2">Weekly Return:</p>
            <p className="justify-self-start w-1/2 font-maisonMedium text-slate-600">
              ${(firstDialogForm.amount * 5) / 100}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-5 justify-end">
          <Button
            onClick={() => secondDialog?.current?.close()}
            className="bg-slate-300 text-base text-lightblack font-maisonMedium hover:bg-slate-400 rounded-[5px]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmitInvestment}
            className="bg-primary text-base font-maisonMedium hover:bg-primary-hover rounded-[5px] "
          >
            Invest
          </Button>
        </div>
      </ReusableDialog>
      <h1 className="text-slate-600 font-maisonBold  text-xl mt-4 mb-10">Investment Options</h1>
      <div className="grid grid-cols-3 gap-6">
        <InvestOptionsCard
          title="FOREX INVESTMENT OPTION"
          icon={<TbChartCandle />}
          handleOpenInvestModal={handleOpenFirstDialog}
          description="Invest in the forex markets with reduced risk. We provide assured profits and downside protection from the market volatility. "
        />
        <InvestOptionsCard
          title="CRYPTO INVESTMENT OPTION"
          icon={<IoLogoBitcoin />}
          handleOpenInvestModal={handleOpenFirstDialog}
          description="Make steady profits from cryptocurrency without having to bear the hurt of market dips and cryptocurrency price falling. "
        />
        <InvestOptionsCard
          title="AGRIC INVESTMENT OPTION"
          icon={<MdOutlineAgriculture />}
          handleOpenInvestModal={handleOpenFirstDialog}
          description="Investment in agriculture is relatively a low-risk portfolio diversification; offering profitable returns financially. "
        />
        <InvestOptionsCard
          title="GOLD INVESTMENT OPTION"
          icon={<AiFillGold />}
          handleOpenInvestModal={handleOpenFirstDialog}
          description="One way to profit from gold is to invest in gold mining shares. This allows you to reap the benefits of gold price increases"
        />
        <InvestOptionsCard
          title="OIL-GAS INVESTMENT OPTION"
          icon={<GiFuelTank />}
          handleOpenInvestModal={handleOpenFirstDialog}
          description="A less direct method of investing in oil and natural gas is to invest in the companies involved in those industries"
        />
        <InvestOptionsCard
          title="REAL ESTATE INVESTMENT OPTION"
          icon={<MdOutlineRealEstateAgent />}
          handleOpenInvestModal={handleOpenFirstDialog}
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
  handleOpenInvestModal: () => void;
}

const InvestOptionsCard = ({ title, description, icon, handleOpenInvestModal }: InvestOptionCard) => {
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
        <Button
          onClick={handleOpenInvestModal}
          className="bg-primary-hover w-36 font-maisonMedium rounded-[4px] text-white hover:bg-primary "
        >
          Invest Here
        </Button>
      </CardFooter>
    </Card>
  );
};
