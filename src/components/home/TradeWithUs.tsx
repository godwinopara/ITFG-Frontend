import { FaCheck } from "react-icons/fa";
import { MarketOverview } from "react-ts-tradingview-widgets";

export default function TradeWithUs() {
  const tabs = [
    {
      title: "Cryptocurrency",
      symbols: [
        {
          s: "BITSTAMP:BTCUSD",
          d: "Bitcoin / U.S dollar",
        },
        {
          s: "BINANCE:ETHUSDT",
          d: "Ethereum / TetherUS",
        },
        {
          s: "BITSTAMP:ETHUSD",
          d: "Ethereum / U.S. dollar",
        },
        {
          s: "BINANCE:BNBUSDT",
          d: "Binance Coin / TetherUs",
        },
        {
          s: "BINANCE:SHIBUSDT",
          d: "SHIB / TetherUS",
        },
        {
          s: "BINANCE:DOGEUSDT",
          d: "Dogecoin / TetherUS",
        },
      ],
      originalTitle: "Cryptocurrency",
    },
    {
      title: "Indices",
      symbols: [
        {
          s: "FOREXCOM:SPXUSD",
          d: "S&P 500",
        },
        {
          s: "FOREXCOM:NSXUSD",
          d: "Nasdaq 100",
        },
        {
          s: "FOREXCOM:DJI",
          d: "Dow 30",
        },
        {
          s: "INDEX:NKY",
          d: "Nikkei 225",
        },
        {
          s: "INDEX:DEU30",
          d: "DAX Index",
        },
        {
          s: "FOREXCOM:UKXGBP",
          d: "UK 100",
        },
      ],
      originalTitle: "Indices",
    },
    {
      title: "Commodities",
      symbols: [
        {
          s: "CME_MINI:ES1!",
          d: "S&P 500",
        },
        {
          s: "CME:6E1!",
          d: "Euro",
        },
        {
          s: "COMEX:GC1!",
          d: "Gold",
        },
        {
          s: "NYMEX:CL1!",
          d: "Crude Oil",
        },
        {
          s: "NYMEX:NG1!",
          d: "Natural Gas",
        },
        {
          s: "CBOT:ZC1!",
          d: "Corn",
        },
      ],
      originalTitle: "Commodities",
    },
    {
      title: "Bonds",
      symbols: [
        {
          s: "CME:GE1!",
          d: "Eurodollar",
        },
        {
          s: "CBOT:ZB1!",
          d: "T-Bond",
        },
        {
          s: "CBOT:UB1!",
          d: "Ultra T-Bond",
        },
        {
          s: "EUREX:FGBL1!",
          d: "Euro Bund",
        },
        {
          s: "EUREX:FBTP1!",
          d: "Euro BTP",
        },
        {
          s: "EUREX:FGBM1!",
          d: "Euro BOBL",
        },
      ],
      originalTitle: "Bonds",
    },
    {
      title: "Forex",
      symbols: [
        {
          s: "FX:EURUSD",
        },
        {
          s: "FX:GBPUSD",
        },
        {
          s: "FX:USDJPY",
        },
        {
          s: "FX:USDCHF",
        },
        {
          s: "FX:AUDUSD",
        },
        {
          s: "FX:USDCAD",
        },
      ],
      originalTitle: "Forex",
    },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto lg:py-28">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-20">
      <div>
          <div className="mb-20 lg:mb-0">
            <h2 className="text-3xl text-center  lg:text-4xl font-bold mb-8">
              Trade over 2100 global markets <br />
              with a top-tier global broker.
            </h2>
            <p>
              We have 23 years experience in financial trading and offer pricing on a range of global CFD instruments.
              Trade the UK 100 from 0.8 points, Germany 30 from 0.9 points, EUR/USD from 0.6 and EUR/GBP from 0.8 pips,
              with depth of market available on all our forex pairs.
            </p>
            <br />
            <p>
              Our powerful API technology lets you integrate your strategy with trading applications or build your own
              custom user interfaces. You can also create and test your own automated trading strategies using our APIs.
            </p>
            <br />
            <p>
              By making significant investments in world-leading technology, we can actively manage the path your trade
              takes through the Internet, ensuring your trade takes the least congested and therefore fastest route
              every time. Combined with the ability to speed up the client-side of your MT4 platform, when you execute
              with Invest Inspire you can be confident your trade will be delivered faster than with
              typical ECN technologies.
            </p>
            <br />
          </div>
          <div>
            <div className="flex items-center mb-1">
              <span className="mr-2">
                <FaCheck />
              </span>
              No digital wallet
            </div>
            <div className="flex items-center mb-1">
              <span className="mr-2">
                <FaCheck />
              </span>
              Low commission
            </div>
            <div className="flex items-center mb-1">
              <span className="mr-2">
                <FaCheck />
              </span>
              Leveraged crypto trading
            </div>
            <div className="flex items-center mb-1">
              <span className="mr-2">
                <FaCheck />
              </span>
              Competitive cryptocurrency spreads
            </div>
            <div className="flex items-center mb-1">
              <span className="mr-2">
                <FaCheck />
              </span>
              All trading strategies and styles allowed
            </div>
          </div>
        </div>
        <div className="h-full">
          <MarketOverview colorTheme="light" height={600} width="100%" showFloatingTooltip tabs={tabs}></MarketOverview>
        </div>
        
      </div>
    </section>
  );
}
