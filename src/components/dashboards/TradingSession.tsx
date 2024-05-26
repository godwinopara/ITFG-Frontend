import React, { FormEvent, useState } from "react";
import { cryptoPairs, forexPairs } from "./data";
import { useUserContext } from "../../context/UserContext";
import { v4 as uuidv4 } from "uuid";

type Props = {};

export const TradingSession = (props: Props) => {
  const [tradeOption, setTradeOption] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [pairs, setPairs] = useState("");
  const [entry, setEntry] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [stopLoss, setStopLoss] = useState("");

  const { addTrade } = useUserContext();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const formData = {
      tradeOption,
      tradeType,
      pairs,
      entry,
      lotSize,
      takeProfit,
      stopLoss,
      status: "pending",
      result: "progress",
      profit: "0.00",
      date: new Date().toDateString(),
      id: uuidv4(),
    };

    addTrade(formData);

    setTradeOption("");
    setTradeType("");
    setPairs("");
    setEntry("");
    setLotSize("");
    setTakeProfit("");
    setStopLoss("");
  };

  return (
    <div className="bg-boxdark rounded-lg">
      <div className="px-6 pt-6 text-white border-b border-b-boxdark">
        <h3 className="uppercase text-base font-semibold">trading session</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="col-span-12 xl:col-span-3  px-6 py-6"
      >
        <div>
          <label className="mb-3 block text-white font-bold">
            Trade Options
          </label>
          <div className="relative z-20  mb-3">
            <select
              value={tradeOption}
              onChange={(e) => setTradeOption(e.target.value)}
              required
              className="relative text-white rounded-lg z-20 w-full appearance-none border-[1.5px] font-medium border-strokedark bg-boxdark py-3 px-5 outline-none transition focus:border-primary active:border-white dark:border-form-strokedark dark:bg-form-input"
            >
              <option value="">Select Trading Option</option>
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-3 block text-white font-bold">Trade Type</label>
          <div className="relative z-20 mb-3">
            <select
              value={tradeType}
              required
              onChange={(e) => setTradeType(e.target.value)}
              className="relative text-white rounded-lg z-20 w-full appearance-none border-[1.5px] font-medium border-strokedark bg-boxdark py-3 px-5 outline-none transition focus:border-primary active:border-white dark:border-form-strokedark dark:bg-form-input"
            >
              <option value="">Select Trade Type</option>
              <option value="CRYPTO">CRYPTO</option>
              <option value="FOREX">FOREX</option>
            </select>
          </div>
        </div>
        {tradeType && (
          <div>
            <label className="mb-3 block text-white font-bold">Pairs</label>
            <div className="relative z-20 mb-3">
              <select
                value={pairs}
                required
                onChange={(e) => setPairs(e.target.value)}
                className="relative text-white rounded-lg z-20 w-full appearance-none border-[1.5px] font-medium border-strokedark bg-boxdark py-3 px-5 outline-none transition focus:border-primary active:border-white dark:border-form-strokedark dark:bg-form-input"
              >
                <option value="">Select Pairs</option>
                {tradeType === "FOREX" &&
                  forexPairs.map((pair, id) => {
                    return (
                      <>
                        <option key={id} value={pair}>
                          {pair}
                        </option>
                      </>
                    );
                  })}
                {tradeType === "CRYPTO" &&
                  cryptoPairs.map((pair, id) => {
                    return (
                      <>
                        <option key={id} value={pair}>
                          {pair}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div>
          </div>
        )}
        <div className="mb-3">
          <label className="mb-3 block text-white font-bold">Amount</label>
          <input
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            required
            type="text"
            placeholder="500"
            className="w-full text-white rounded-lg border-[1.5px] border-strokedark bg-boxdark py-3 px-5 font-medium outline-none transition focus:border-primary active:border-white disabled:cursor-default disabled:bg-boxdarkr dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="mb-3">
          <label className="mb-3 block text-white font-bold">Lot Size</label>
          <div className="relative z-20 bg-boxdark dark:bg-form-input mb-3">
            <select
              value={lotSize}
              required
              onChange={(e) => setLotSize(e.target.value)}
              className="relative text-white rounded-lg z-20 w-full appearance-none border-[1.5px] font-medium border-strokedark bg-boxdark py-3 px-5 outline-none transition focus:border-primary active:border-white dark:border-form-strokedark dark:bg-form-input"
            >
              <option value="">Select Lot Size</option>
              <option value="2LS">2LS</option>
              <option value="5LS">5LS</option>
              <option value="10LS">10LS</option>
              <option value="15LS">15LS</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-3 block text-white font-bold">Take Profit</label>
          <input
            type="text"
            value={takeProfit}
            required
            onChange={(e) => setTakeProfit(e.target.value)}
            placeholder="1.001"
            className="w-full text-white rounded-lg border-[1.5px] border-strokedark bg-boxdark py-3 px-5 font-medium outline-none transition focus:border-primary active:border-white disabled:cursor-default disabled:bg-boxdarkr dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="mb-3">
          <label className="mb-3 block text-white font-bold">Stop Loss</label>
          <input
            type="text"
            value={stopLoss}
            required
            onChange={(e) => setStopLoss(e.target.value)}
            placeholder="1.0013"
            className="w-full text-white rounded-lg border-[1.5px] border-strokedark bg-boxdark py-3 px-5 font-medium outline-none transition focus:border-primary active:border-white disabled:cursor-default disabled:bg-boxdarkr dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-white font-bold">
            Time in Force
          </label>
          <div className="relative z-20 bg-boxdark dark:bg-form-input mb-3">
            <select
              required
              className="relative text-white rounded-lg z-20 w-full appearance-none border-[1.5px] font-medium border-strokedark bg-boxdark py-3 px-5 outline-none transition focus:border-primary active:border-white dark:border-form-strokedark dark:bg-form-input"
            >
              <option value="">Select Time in Force</option>
              <option value="">5 Minutes</option>
              <option value="">10 Minutes</option>
              <option value="">15 Minutes</option>
              <option value="">30 Minutes</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 cursor-pointer"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
