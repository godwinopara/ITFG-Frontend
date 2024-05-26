export default function MoreThanCommodity() {
  return (
    <div className="bg-black text-white py-16">
      <section className="max-w-7xl mx-auto my-24 px-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold mb-16">
          More than a commodity trading platform
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_commoditites_white.svg"
            }
            title="Over 100 cash and forward commodities"
            description="Including all the favourites as well as lesser-traded instruments like Palladium."
            url="/forex"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_out-of-hours-23hrs_white.svg"
            }
            title="Trade out of hours"
            description="Favourites like Brent and West Texas oil trade up to 23 hours a day, so you don't have to stop when the markets do."
            url="/indices"
          />
          <TradingOptionsCard
            img={
              "	https://assets.cmcmarkets.com/web_redesign/icon_comp_no_partial_fills_white.svg"
            }
            title="No partial fills"
            description="And never any dealer intervention, regardless of your trading size.
          "
            url="/crypto"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_accurate_pricing_white.svg"
            }
            title="'Cash' markets"
            description="Tighter spreads, no rollovers and charting back as far as 1992 to help your analysis."
            url="/commodities"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_24hr_uk_support_white.svg"
            }
            title="Dedicated customer service"
            description="Award-winning service*, online 24/5, whenever you're trading."
            url="/shares"
          />
          <TradingOptionsCard
            img={
              "https://assets.cmcmarkets.com/web_redesign/icon_comp_commodities-indices_white.svg"
            }
            title="Trade the whole sector"
            description="Take a view across a whole commodity sector from a single position, with our bespoke commodity indices​."
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
