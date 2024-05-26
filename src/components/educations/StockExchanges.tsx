import React from 'react'
import { Question } from './Question'
import { Contents } from './Contents'
import { ReadyToTrade } from '../sharedUi/ReadyToTrade'
import Button from '../Button'

type Props = {
    details: any
}

export const StockExchanges = ({details}: Props) => {
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
        <Contents desc="The world of finance can be extremely complex, but at its core, it revolves around the global financial markets. These markets are vast networks where buyers and sellers trade assets. These assets can range from commodities like oil and gold to financial instruments like stocks and bonds" />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Importance of Stock Exchanges in Financial Markets" />
        <Contents desc="Among the various types of financial markets, stock exchanges hold a place of paramount importance. These are public markets where shares of publicly traded companies are bought and sold. The primary function of a stock exchange is to provide a regulated and transparent marketplace for the trading of stocks." />
        <Contents desc="Stock exchanges play a vital role in a country's financial system. They provide companies with access to capital and investors with a venue to invest their savings. The performance of a country's stock exchange is often seen as a barometer of its economic health. A vibrant and active stock exchange is indicative of a strong and growing economy." />
        <Contents desc="Moreover, stock exchanges also contribute to the economic development of a country by facilitating the efficient allocation of resources. They allow businesses to raise capital for expansion and innovation, which in turn leads to job creation and economic growth." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="How Major Stock Exchanges Influence Global Economy" />
        <Contents desc="Major stock exchanges wield significant influence over the global economy. They are the hubs where billions of dollars worth of stocks are traded daily. The performance of these exchanges can have far-reaching implications for economies around the world." />
        <Contents desc="For instance, a bullish trend in a major stock exchange can boost investor confidence and stimulate economic activity. On the other hand, a bearish trend can dampen investor sentiment and slow down economic growth. Moreover, major stock exchanges also serve as a barometer of global economic health." />
        <Contents desc="The influence of major stock exchanges extends beyond their home countries. With the increasing globalisation of financial markets, a development in one exchange can have ripple effects across the world. For instance, a crash in the US stock market can trigger sell-offs in stock markets around the world." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Major Stock Exchanges Around the World" />
        <Contents desc="There are several major stock exchanges around the world, each with its own unique characteristics and strengths. Some of the most prominent ones include the New York Stock Exchange (NYSE), the Nasdaq, the London Stock Exchange (LSE), the Tokyo Stock Exchange (TSE), and the Shanghai Stock Exchange (SSE)." />
        <Contents desc="The NYSE is the largest stock exchange in the world in terms of market capitalisation. It is home to some of the biggest and most influential companies in the world. The Nasdaq, on the other hand, is known for its focus on technology companies." />
        <Contents desc="The LSE is one of the oldest stock exchanges in the world and is home to a diverse range of companies. The TSE is the largest stock exchange in Asia and is known for its strong focus on manufacturing companies. The SSE is one of the fastest-growing stock exchanges in the world and is home to many of China's biggest companies." />
        <img src={details?.img} alt="" />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="The Biggest Companies Listed on Major Stock Exchanges" />
        <Contents desc="The biggest companies in the world are listed on major stock exchanges. These companies are often global leaders in their respective industries and wield significant influence over the global economy." />
        <Contents desc="Some of the biggest companies listed on the NYSE include Apple, Microsoft, Amazon, and Alphabet (Google's parent company). These companies are leaders in the technology industry and have a massive global footprint." />
        <Contents desc="On the LSE, some of the biggest companies include BP, HSBC, and GlaxoSmithKline. These companies are leaders in the energy, banking, and pharmaceutical sectors respectively." />
        <Contents desc="In the TSE, companies like Toyota, Sony, and SoftBank are amongst the biggest. These companies are giants in the automobile, electronics, and telecommunications industries respectively." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Future Trends in Stock Exchanges and Financial Markets" />
        <Contents desc="The future of stock exchanges and financial markets looks exciting. With the advent of technology, these markets are set to become more efficient, transparent, and accessible." />
        <Contents desc="One of the key trends shaping the future of these markets is the increasing use of artificial intelligence and machine learning. These technologies are being used to analyse market trends, predict market movements, and automate trading." />
        <Contents desc="Another key trend is the growing importance of sustainability. More and more investors are looking to invest in companies that are not only profitable but also socially and environmentally responsible. This is leading to the emergence of green bonds and socially responsible investment funds." />
        <Contents desc="Moreover, the increasing globalisation of financial markets is also a key trend. This is making it easier for investors to invest in foreign markets and for companies to raise capital from international investors." />
      </div>
      <ReadyToTrade />
    </div>
  )
}