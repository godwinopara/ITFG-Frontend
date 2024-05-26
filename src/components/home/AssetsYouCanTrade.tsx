import forex from "../../images/forex.svg";
import indices from "../../images/indices.svg";
import shares from "../../images/shares.svg";
import commodities from "../../images/commodities.svg";
import crypto from "../../images/crypto.svg";
import treasuries from "../../images/treasuries.svg";
import { Link } from "react-router-dom";

export default function AssetsYouCanTrade() {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6">
      <h3 className="text-center mb-8">GLOBAL MARKET AT YOUR FINGERTIPS</h3>
      <h2 className="text-2xl xl:text-4xl text-center font-semibold mb-16">
        Trade your favourite instruments from around the world
      </h2>
      <div className="grid xl:grid-cols-3 gap-10">
        <TradingOptionsCard
          img={forex}
          title="Forex"
          description="Trade on the strength of one currency versus another. The FX market is the largest and most liquid market in the world"
          url="/forex"
        />
        <TradingOptionsCard
          img={indices}
          title="Indices"
          description="Trade on a basket of top shares representing the performance of a country's economy"
          url="/indices"
        />
        <TradingOptionsCard
          img={crypto}
          title="Cryptocurrencies"
          description="Speculate on the price of some of the most popular cryptocurrencies"
          url="/crypto"
        />
        <TradingOptionsCard
          img={commodities}
          title="Commodities"
          description="Speculate on the price of all the most popular commodities, including gold, silver, oil and natural gas"
          url="/commodities"
        />
        <TradingOptionsCard
          img={shares}
          title="Shares & ETFs"
          description="Take a position on the performance of the world's largest companies, from Apple to Amazon and Rio Tinto to RBS"
          url="/shares"
        />
        <TradingOptionsCard
          img={treasuries}
          title="Treasuries"
          description="Take a view on government bonds, gilts and treasury notes to get exposure to a specific region's economy"
          url="/treasuries"
        />
      </div>
    </section>
  );
}

interface TradingOptionsCardProps {
  img: string;
  title: string;
  description: string;
  url: string;
}
function TradingOptionsCard({
  img,
  title,
  description,
  url,
}: TradingOptionsCardProps) {
  return (
    <Link
      to={url}
      className="flex flex-col items-center justify-center text-center"
    >
      <img src={img} alt={title} className="h-16 w-16" />
      <h3 className="py-4 font-extrabold text-xl leading-7">{title}</h3>
      <p className="text-gray-500 w-[95%]">{description}</p>
    </Link>
  );
}
