import React from "react";
import { Card } from "../sharedUi/Card";
import valueimg from "../../images/valueimg.jpg"

type Props = {};

export const Value = (props: Props) => {
  return (
    <section className="w-full">
      <Card
        heading="Value for money"
        desc="We aim to provide tight spreads regardless of market volatility, delivering competitive and reliable pricing. We offer attractive spreads right across our product range, from 0.5 pips on EUR/USD, 1 point on key indices like the UK 100, and 0.2 points on Gold. Our margin rates start from 3.3% for forex, 5% for indices and commodities, and 20% for shares and treasuries."
        btnText="More on spreads & margins"
        img={valueimg}
      />
    </section>
  );
};
