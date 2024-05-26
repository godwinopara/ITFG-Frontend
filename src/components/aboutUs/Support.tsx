import React from 'react'
import { Card } from '../sharedUi/Card'
import valueimg from "../../images/service.jpg"


type Props = {}

export const Support = (props: Props) => {
  return (
    <section className="w-full">
    <Card
      heading="Dedicated support, 24 hours a day"
      desc="Get access to support around the clock from Sunday night to Friday night, whenever the markets are open. If you happen to experience any technical, trading or account difficulties, you can quickly get in touch with our knowledgeable customer service team."
    //   btnText="Order execution options"
      img={valueimg}
      
    />
  </section>
  )
}