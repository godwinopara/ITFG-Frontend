import { useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { FaCheckCircle } from "react-icons/fa";
import { SubscriptionCard } from "../components/dashboards/SuscriptionCard";
import { useUserContext } from "../context/UserContext";
import { SubscriptionState } from "../types/types";

type Props = {};

const Subscription = (props: Props) => {
  const [subscription, setSubscriptions] = useState<SubscriptionState | null>(
    null
  );

  const { state, updateSubscription } = useUserContext();

  useEffect(() => {
    setSubscriptions(state.subscription);
    const subscribed = state.subscription.plan;
    if (subscribed) {
      setSubscriptions(state.subscription);
      return;
    }

    setSubscriptions(null);
  }, [state?.subscription]);

  const subscribe = (plan: string, planAmount: string) => {
    const payload: SubscriptionState = {
      plan,
      amount: planAmount,
      duration: "7",
      date: new Date().toDateString(),
    };
    try {
      updateSubscription(payload);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("added");
    }
  };

  return (
    <AdminLayout>
      <div className="mb-10 rounded-md border border-strokedark  bg-boxdark py-4 px-7 shadow-default dark:border-strokedark ">
        <div className="my-1 flex items-end justify-between">
          <div>
            <h4 className="text-sm font-bold text-white dark:text-white mb-1">
              GET SUBSCRIPTION
            </h4>
            <div>
              <span className="text-sm font-medium block">
                Tap on any of the Plans below to purchase a plan.
              </span>
            </div>
          </div>
        </div>
      </div>
      {!subscription && (
        <div className="grid md:grid-cols-2 gap-10">
          <SubscriptionCard
            plan="STANDARD"
            roi="10%"
            planAmount={"5920"}
            handleClick={subscribe}
          />
          <SubscriptionCard
            plan="SILVER"
            roi="25%"
            planAmount={"7370"}
            handleClick={subscribe}
          />
          <SubscriptionCard
            plan="GOLD"
            roi="35%"
            planAmount={"9910"}
            handleClick={subscribe}
          />
          <SubscriptionCard
            plan="VIP"
            roi="55%"
            planAmount={"16350"}
            handleClick={subscribe}
          />
        </div>
      )}

      {subscription?.plan && (
        <div className="border-stroke  bg-boxdark dark:bg-boxdark flex flex-col items-center justify-center text-center h-full py-20">
          <div className="text-6xl text-primary mb-3">
            <FaCheckCircle />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-white dark:text-white">
            Subscription Confirmed!
          </h2>
          <p className="max-w-150 mb-5 text-white dark:text-white">
            Your Subscription to{" "}
            <span className="text-primary">{state.subscription.plan}</span> plan
            was successful and actively running, <br />
            Returns attached to the plan will start reflecting on your Portfolio
            Balance shortly.
          </p>
          <h3 className="font-bold mb-3 text-white dark:text-white">
            Plan Name:{" "}
            <span className="text-primary">{state.subscription.plan}</span>
          </h3>
          <p className="font-bold text-white dark:text-white">
            Subscribed Amount:{" "}
            <span className="text-primary">{state.subscription.amount}</span>
          </p>
        </div>
      )}
    </AdminLayout>
  );
};

export default Subscription;
