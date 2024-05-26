type Props = {};

export const WhyUs = (props: Props) => {
  return (
    <section className="bg-aboutImg text-white h-screen bg-no-repeat bg-cover flex  items-center justify-center mt-16 px-6 xl:px-0">
      <div className="flex flex-col gap-10 py-24 text-center">
        <h1 className="text-5xl font-semibold leading-16 capitalize">
          Why choose InvestInspire?
        </h1>
        <p className="text-2xl font-medium leading-10 lg:w-5/6 mx-auto">
          There's a lot to consider when you're choosing the right trading
          partner, so we've outlined our key strengths below. <br /> Discover
          why you should choose us.
        </p>
      </div>
    </section>
  );
};
