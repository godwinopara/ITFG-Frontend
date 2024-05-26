import React from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";

type Props = {};

const links = [
  {
    name: "Binance",
    url: "https://binance.com",
  },
  {
    name: "Coinbase",
    url: "https://coinbase.com",
  },
  {
    name: "Crypto",
    url: "https://crypto.com",
  },
  {
    name: "Coinmama",
    url: "https://coinmama.com",
  },
  {
    name: "Bybit",
    url: "https://bybit.com",
  },
  {
    name: "Trustwallet",
    url: "https://trustwallet.com/buy-bitcoin",
  },
  {
    name: "Luno",
    url: "https://luno.com",
  },
  {
    name: "Bitcoin",
    url: "https://bitcoin.com",
  },
];

const BuyBitcoin = (props: Props) => {
  return (
    <AdminLayout>
      <div className="w-full mb-10 rounded-md border border-stroke  bg-white py-4 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="my-1 flex items-end justify-between">
          <div>
            <h4 className="text-sm font-bold text-black dark:text-white mb-1">
              BUY BITCOIN
            </h4>
            <div>
              <span className="text-sm font-medium block">
                Tap on any of the links below to purchase bitcoin from our
                partners.
              </span>
            </div>
          </div>
        </div>
        <div className=" w-full grid my-6 ">
          {links.map((link, index) => (
            <div key={index} className="w-full p-4 border rounded-[12px]">
              <a
                href={link.url}
                target="__blank"
                className="text-base bg-primary hover:bg-primary-hover text-white flex items-center justify-center py-4 w-full rounded-lg"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default BuyBitcoin;
