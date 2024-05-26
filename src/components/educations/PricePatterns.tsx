import React from 'react'
import { Question } from './Question'
import { Contents } from './Contents'
import { ReadyToTrade } from '../sharedUi/ReadyToTrade'
import Button from '../Button'

type Props = {
    details: any
}

export const PricePatterns = ({details}: Props) => {
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
        <Contents desc="Have you ever found yourself staring at a financial chart, trying to decipher the hidden messages concealed within the confusing maze of lines? If you have, then you've been looking at price patterns. These patterns are a powerful tool that can help you understand the psychology of the market and potentially predict future price movements." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="What is a Price Pattern?" />
        <Contents desc="Let's start with the basics: At its core, a price pattern is a graphical representation of market sentiment. It's a way of visually interpreting the emotional ebbs and flows of traders, investors, and the market as a whole." />
        <Contents desc="A price pattern forms when the price of an asset - be it a stock, commodity, or currency pair - fluctuates in a particular way over a certain period. These fluctuations are the result of buying and selling pressure in the market, and they create distinct shapes or patterns on a chart." />
        <Contents desc="These patterns can be simple, like a straight line, or complex, like a head and shoulders formation. No matter how they look, each price pattern carries a message about the market's current state and potential future direction." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="The Importance of Price Patterns in Trading Strategies" />
        <Contents desc="You might be wondering, why are price patterns so important? The simple answer is that they can provide valuable insights into market psychology and potential price movements. This information can be invaluable when making trading decisions." />
        <Contents desc="By studying price patterns, you can get a sense of the market's mood. Are traders feeling bullish, expecting prices to rise? Or are they bearish, anticipating a drop in prices? Understanding the market's sentiment can help you anticipate price movements before they happen, giving you an edge over traders who rely solely on fundamentals." />
        <Contents desc="Moreover, price patterns can help you identify key levels of support and resistance. These are levels at which the price has historically struggled to move beyond, acting as a sort of psychological barrier for the market. Identifying these levels can help you make more informed trading decisions, such as where to place your stop-loss and take-profit orders." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Understanding Resistance Levels in Price Patterns" />
        <Contents desc="Resistance levels are a critical aspect of price patterns. These are the price points that an asset struggles to rise above. They represent a level at which selling pressure overcomes buying pressure, preventing the price from moving higher." />
        <Contents desc="Resistance levels are like a ceiling that the market struggles to break through. When prices approach a resistance level, sellers typically enter the market, hoping to take advantage of the high prices. This influx of selling pressure can cause the price to bounce off the resistance level and start moving lower." />
        <Contents desc="It's also worth noting that once a resistance level is broken, it can often become a support level. This happens because the market's psychology changes: what was once seen as a high price is now considered a low price, attracting buyers instead of sellers." />
        
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Technical Analysis and its Role in Identifying Price Patterns" />
        <Contents desc="Technical analysis involves studying past market data, primarily price and volume, to predict future price movements." />
        <Contents desc="One of the main tools used in technical analysis is the chart. Charts allow you to visualise price movements over time, making it easier to spot patterns. There are different types of charts you can use, such as line charts, bar charts, and candlestick charts. Each type has its own strengths and weaknesses, and the best one for you will depend on your trading style and objectives." />
        <Contents desc="Another important tool in technical analysis is the trend line. Trend lines are straight lines drawn on a chart to connect two or more price points. They can help you identify the direction of the market's trend and potential reversal points." />
        <img src="https://eu-images.contentstack.com/v3/assets/bltaec35894448c7261/bltc65b5c515f5dc3cc/65b24a233bc06c040a4a77f4/bullish_coins.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Bullish Continuation Pattern and its Significance" />
        <Contents desc="A bullish continuation pattern is a price pattern that signals the continuation of an existing uptrend. When you see a bullish continuation pattern forming on a chart, it's a sign that the market's bullish sentiment is still strong, and prices are likely to continue moving upwards." />
        <Contents desc="One of the most well-known bullish continuation patterns is the ascending triangle. This pattern forms when the price makes higher lows but struggles to break above a certain level, creating a triangular shape on the chart. The ascending triangle is a sign of increasing buying pressure, and a breakout above the triangle's resistance level often leads to a sharp rise in prices." />
        <Contents desc="Another common bullish continuation pattern is the bull flag. This pattern looks like a flag on a pole, with the pole representing a strong price rally and the flag indicating a period of consolidation before the uptrend resumes." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="The Symmetrical Triangle as a Common Chart Pattern" />
        <Contents desc="The symmetrical triangle is one of the most common chart patterns you'll encounter in your trading journey. It's a continuation pattern that can signal either a bullish or bearish trend, depending on the market's overall direction." />
        <Contents desc="This pattern forms when the price oscillates between two converging trend lines, creating a triangle on the chart. The symmetrical triangle indicates a period of indecision in the market, as buyers and sellers struggle to gain control." />
        <Contents desc="The breakout from a symmetrical triangle can occur in either direction, and can be accompanied by a significant increase in trading volume. As a trader, you can monitor for this breakout and use it to guide your trading decisions." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Reversal Patterns: The Wedge Pattern, Shoulders Pattern, and Bearish Pattern" />
        <Contents desc="Reversal patterns signal that the current trend may be about to reverse, offering a potential trading opportunity." />
        <Contents desc="One common reversal pattern is the wedge. This pattern forms when the price moves between two converging trend lines, creating a wedge-like shape on the chart. A breakout from the wedge can signal a trend reversal, especially if it's accompanied by a surge in trading volume." />
        <Contents desc="The head and shoulders pattern is another popular reversal pattern. This pattern consists of three peaks, with the middle peak (the head) being higher than the two surrounding peaks (the shoulders). The head and shoulders pattern is a bearish signal that can indicate the reversal of an uptrend." />
        <Contents desc="Finally, the bearish pattern is a type of reversal pattern that signals a potential change from a bullish trend to a bearish trend. It's characterised by a series of lower highs and lower lows, indicating that selling pressure is increasing." />
      </div>
      <div className="flex flex-col gap-3 ">
        <Question title="Practical Examples of Price Patterns in Trading" />
        <Contents desc="Now that we've gone over the theory of price patterns, let's look at some practical examples." />
        <Contents desc="Consider the stock of a popular tech company. You notice that the price has been making higher highs and higher lows, forming an ascending triangle pattern on the chart. This is a bullish continuation pattern, suggesting that the price is likely to continue moving upwards. You decide to buy the stock, and sure enough, the price breaks out above the triangle's resistance level and continues its upward trend." />
        <Contents desc="On another occasion, you're monitoring the forex market, and you spot a head and shoulders pattern forming on the chart of a currency pair. This is a bearish reversal pattern, indicating that the uptrend may be about to reverse. You decide to sell the currency pair, and the price indeed starts to drop, validating your prediction" />
      </div>
      <ReadyToTrade />
    </div>
  )
}