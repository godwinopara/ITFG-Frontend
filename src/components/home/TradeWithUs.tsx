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
    <section className="px-6">
      <h2 className="text-3xl text-center flex justify-center items-center  lg:text-4xl font-bold mb-8">
        Trade over 2100 global markets <br />
        with a top-tier global broker.
      </h2>
      <div className="h-full">
        <MarketOverview
          colorTheme="light"
          height={600}
          width="100%"
          showFloatingTooltip
          tabs={tabs}
        ></MarketOverview>
      </div>
    </section>
  );
}
