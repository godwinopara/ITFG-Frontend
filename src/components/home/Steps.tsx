import { Link } from "react-router-dom";
import depositImg from "../../images/deposit.svg";
import investImg from "../../images/invest.svg";
import { FaUser } from "react-icons/fa6";
import { ReactNode } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Steps() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 xl:px-0">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-5">
          We Make Trading Easy
        </h2>
        <p className="text-xl mb-5">Get started in 3 simple steps</p>
      </div>
      <div className="grid gap-y-10 xl:grid-cols-3 xl:gap-y-0 xl:gap-x-10 xl:my-20">
        <StepsCard
          img={<FaUser />}
          title="Step1: Create Account"
          url="/signup"
          btnText="Sign Up"
          description="Simply create your InvestInspire account with one click and claim exclusive welcome rewards worth up to USDT $1000!"
        />
        <StepsCard
          img={depositImg}
          title="Step2: Deposit"
          url="/dashboard"
          btnText="Deposit"
          description="Fund your account using a wide range of funding methods."
        />
        <StepsCard
          img={investImg}
          title="Step3: Start Trading"
          url="/dashboard"
          btnText="Trade Now"
          description="Trade crypto derivatives with up to 100x leverage. Access over 250 crypto pairs on our lightning fast trading engines with minimal trading fees"
        />
      </div>
    </section>
  );
}

interface StepsCardProps {
  img: string | ReactNode;
  title: string;
  description: string;
  url: string;
  btnText: string;
}

const StepsCard = ({
  img,
  title,
  description,
  url,
  btnText,
}: StepsCardProps) => {
  return (
    <div className=" bg-secondary p-8 rounded-lg flex flex-col justify-center">
      <div className="text-3xl text-white inline-flex mb-5  items-center">
        {typeof img === "string" && (
          <div className="bg-primary inline-block p-3 rounded-xl">
            <img src={img} alt={img} className="w-8" />
          </div>
        )}
        {typeof img !== "string" && (
          <div className="bg-primary inline-block p-3 rounded-xl">{img}</div>
        )}
      </div>
      <div>
        <h3 className="font-extrabold text-2xl mb-5 ">{title}</h3>
        <p className="mb-5 text-gray-800">{description}</p>
      </div>
      <div className="flex items-center gap-x-6 text-primary font-bold  mt-auto">
        <Link to={url}>{btnText}</Link>
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
};
