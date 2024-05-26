import React from 'react'
import { Desc, Heading } from '../sharedUi/Contents'
import img from "../../images/image-js-trader.jpg"

type Props = {}

export const ChattingAbility = (props: Props) => {
  return (
    <section className="bg-white flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-16 py-24 text-center md:w-3/4">
        <Heading title="Dynamic charting capability" center />
        <Desc desc="Our comprehensive and advanced charts provide a host of features to support your chart analysis, including multiple chart types, over 115 technical indicators and drawing tools, a pattern recognition feature and our chart forum community." />
        <div className="w-full mt-7">
          <img src={img} alt="" className='w-full' />
        </div>
      </div>
    </section>
  )
}