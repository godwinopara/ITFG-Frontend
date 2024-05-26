export default function CryptoMoreThan() {
  return (
    <div className="bg-black text-white py-16">
      <section className="max-w-7xl mx-auto my-24 px-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold mb-16">
        More than a cryptocurrency trading platform
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_accurate_pricing_white.svg"
            }
            title="Precision pricing"
            description="We aggregate pricing from 18 different feeds to get you a more accurate price."
            url="/indices"
          />
              <TradingOptionsCard
                img={
                  "https://assets.cmcmarkets.com/web_redesign/icon_comp_no_slippage_white.svg"
                }
                title="Minimal slippage"
                description="With fully automated, lightning-fast execution in 0.0045 seconds**.
              "
                url="/crypto"
              />
              <TradingOptionsCard
                img={
                  "https://assets.cmcmarkets.com/web_redesign/icon_comp_confirmed_white.svg"
                }
                title="99.7% fill rate^"
                description="No dealer intervention, regardless of your trading size."
                url="/commodities"
              />
              <TradingOptionsCard
                img={
                  "https://assets.cmcmarkets.com/web_redesign/icon_comp_24hr_uk_support_white.svg"
                }
                title="Dedicated customer service"
                description="UK based, award-winning service 24/5, whenever you're trading."
                url="/shares"
              />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_crypto_white.svg"
            }
            title="Crypto indices"
            description="Take a view across our full range, top or emerging cryptocurrencies with a single trade."
            url="/forex"
          />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_no-tax_white.svg"
            }
            title="Tax-free trading"
            description="Pay no capital gains tax on profits from cryptocurrency spread bets†."
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
