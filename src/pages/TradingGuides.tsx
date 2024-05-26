import React from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { Question } from '../components/educations/Question'
import { LearnCard } from '../components/educations/LearnCard'
import { tradingGuidesData } from '../components/educations/data'

type Props = {}

const TradingGuides = (props: Props) => {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3 ">
          <Question title="Trading Guides" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {tradingGuidesData?.map((item) => (
            <LearnCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default TradingGuides