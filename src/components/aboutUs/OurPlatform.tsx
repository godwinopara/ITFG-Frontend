import React from "react";
import { Card } from "../sharedUi/Card";
import valueimg from "../../images/plat2.jpg"


type Props = {};

export const OurPlatform = (props: Props) => {
  return (
    <section className="w-full">
      <Card
        heading="Our intuitive platform"
        desc="Our pioneering online trading platform continues to win multiple awards* but we're not stopping there – we're consistently making improvements and adding new functionality, features and tools to enhance your trading experience."
        btnText="Explore the Platform"
        img={valueimg}
        
      />
    </section>
  );
};
