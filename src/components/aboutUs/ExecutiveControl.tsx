import React from 'react'
import { Card } from '../sharedUi/Card'
import valueimg from "../../images/fus.jpg"

type Props = {}

export const ExecutiveControl = (props: Props) => {
  return (
    <section className="w-full">
      <Card
        heading="Execution control"
        desc="Enter and exit trades in a flash with our cutting-edge technology. There are multiple order types available, so you can control exactly when and how your trades are executed. For example, our one-click trading feature allows you to place a trade almost instantly, while for enhanced order management you can set boundaries to control any potential slippage in the market."
        btnText="Order execution options"
        img={valueimg}
        
      />
    </section>
  )
}