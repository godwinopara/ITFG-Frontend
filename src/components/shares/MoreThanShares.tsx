export default function MoreThanShares() {
  return (
    <div className="bg-black text-white py-16">
      <section className="max-w-7xl mx-auto my-24 px-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold mb-16">
          More than a trading platform
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_shares_white.svg"
            }
            title="Your favourites in one place"
            description="Spread bet or trade CFDs on 10,000+ shares, including the 250 biggest UK shares and the most popular from the US."
            url="/forex"
          />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_analysis_white.svg"
            }
            title="Professional research"
            description="Free access to quantitative equity analysis from Morningstar."
            url="/indices"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_no_slippage_white.svg"
            }
            title="'Minimal slippage"
            description="With fully automated, lightning-fast execution in 0.0030 seconds**."
            url="/commodities"
          />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_confirmed_white.svg"
            }
            title="No partial fills"
            description="All orders are fully executed without dealer intervention, regardless of your trading size.
          "
            url="/crypto"
          />

          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_24hr_uk_support_white.svg"
            }
            title="UK-based client services"
            description="UK-based customer service, online 24/5, whenever you're trading."
            url="/shares"
          />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_no_currency_risk_white.svg"
            }
            title="No currency risk"
            description="Avoid the risk of currency fluctuations which may otherwise impact returns, when you spread bet."
            url="/treasuries"
          />
        </div>
      </section>
    </div>
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
    <div className="flex flex-col items-center justify-center text-center">
      <img src={img} alt={title} className="h-16 w-16" />
      <h3 className="py-4 font-extrabold text-xl leading-7">{title}</h3>
      <p className="text-gray-500 w-[95%]">{description}</p>
    </div>
  );
}
