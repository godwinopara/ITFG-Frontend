import React from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { CommoditiesHero } from '../components/commodities/CommodityHero'
import MoreThanCommodity from '../components/commodities/MoreThanCommodity'
import { MoreCommodityFx } from '../components/commodities/MoreCommodityFx'
import { Exposure } from '../components/commodities/Exposure'
import { PowerfulTrading } from '../components/forex/PowerfulTrading'
import { CommodityFaq } from '../components/commodities/CommodityFaq'

type Props = {}

const Commodities = (props: Props) => {
  return (
    <MainLayout>
      <CommoditiesHero />  
      <MoreThanCommodity />
      <MoreCommodityFx />
      <Exposure />
      <PowerfulTrading />
      <CommodityFaq />
    </MainLayout>
  )
}

export default Commodities