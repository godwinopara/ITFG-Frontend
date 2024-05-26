export default function MoreThanTreasure() {
  return (
    <div className="bg-black text-white py-16">
      <section className="max-w-7xl mx-auto my-24 px-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold mb-16">
          More than a bonds trading platform
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_treasuries_white.svg"
            }
            title="Over 50 global rates & bonds"
            description="Spread bet and trade CFDs on interest rates and government debt obligations, such as gilts, bonds, bunds and treasury notes."
            url="/forex"
          />
          <TradingOptionsCard
            img={
              "		https://assets.cmcmarkets.com/web_redesign/icon_comp_no_slippage_white.svg"
            }
            title="Minimal slippage"
            description="With fully automated, lightning-fast execution in 0.0075 seconds**."
            url="/indices"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_no_partial_fills_white.svg"
            }
            title="'No partial fills"
            description="And never any dealer intervention, regardless of your trading size."
            url="/commodities"
          />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_confirmed_white.svg"
            }
            title="99.9% fill rate^"
            description="Almost all of our rate & bond trades fill with no dealer intervention, regardless of your trading size.
          "
            url="/crypto"
          />

          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_24hr_uk_support_white.svg"
            }
            title="Dedicated customer service"
            description="UK-based customer service, online 24/5, whenever you're trading."
            url="/shares"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_out-of-hours-23hrs_white.svg"
            }
            title="Trade out of hours"
            description="Favourites like the US T-Bond trade up to 23 hours a day, so you don't have to stop when the underlying markets do.."
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
