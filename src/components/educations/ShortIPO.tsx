import React from 'react'
import { Question } from './Question'
import { Contents } from './Contents'
import { ReadyToTrade } from '../sharedUi/ReadyToTrade'
import Button from '../Button'

type Props = {
    details: any
}

export const ShortIPO = ({details}: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Button
        btnText={details.cat}
        className={`text-xs rounded-sm px-4 ${
          details.cat === "Beginner" ? "bg-[#9bdfce]" : "bg-[#bfbbe9]"
        }  w-fit text-[#141e30]`}
      />
      <div className="flex flex-col gap-3 ">
        <Question title={details?.title} />
        <Contents desc={details?.desc} />
        <Contents desc="Short selling shares typically requires that you first borrow the shares from a shareholder, paying a fee to do so, and then selling them on an exchange at market prices. You would then buy back the stock when, hopefully, it had fallen in value. You generate a profit if you sell at a lower price than the price at which you borrowed it (less any fees), and you incur a loss if you sold at a higher price than the price at the time you lent the stock." />
        <Contents desc="So, what’s the issue with this? Well, you have to go through the whole process of borrowing stock in order to sell it, and you have to pay a fee for the loan. This can be as little as 0.3-0.5% p.a. for stocks with little short interest, but could rise up to 20-30% p.a for hot stocks with very high short interest (those stocks where a lot of people are looking to short). This means you pay fees for taking short positions regardless of the length of time you hold the stock, be it days and weeks, or minutes and seconds." />
        <Contents desc="You may also be required to post significant collateral in order to open your position." />
        <Contents desc="Another consideration is that the ability to short stock depends primarily on the willingness for current shareholders to lend out their shares. Some stocks are simply unborrowable, in that there are no shareholders willing to lend out their shares for a fee. There may also be restrictions on short selling, such as in the early days of an IPO." />
        <Contents desc="But there is an alternative, and that alternative is contracts for difference (CFDs). Being a derivative security with no underlying interest in the asset traded, CFDs are a unique vehicle that allow you to take advantage of short term movements in the share price of a stock without worrying about how many shares are on offer to borrow." />
        <Contents desc="In opening a CFD trade, you are entering into a contract to cash settle the difference between the price at which you entered the trade, and the price at which you exit. This means you can go both long and short on a stock, for potentially the same outcome given the same absolute change in price (depending on your hold time and whether overnight funding fees apply)." />
        <Contents desc="There’s no transaction of underlying shares between you and the broker. That means one thing: the ability to short a stock, particularly on an IPO, just became much easier." />
        <Contents desc="If you were to short a stock on a 15 minute to 4 hour timeframe, within the same trading day, you will only pay the market spread and relevant per trade commission. That means you can take advantage of intraday news and events, such as when a stock first starts trading on the exchange and the market begins to react to its valuation." />
        <Contents desc="We offer shorting on share CFDs via our MT5 platform, and you can short both established companies with storied histories as well as the latest hot stocks that IPO." />
      </div>
      
      <ReadyToTrade />
    </div>
  )
}