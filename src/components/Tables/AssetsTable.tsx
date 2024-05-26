import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function AssetsTable() {
  const { state } = useUserContext();

  const formatPrice = (priceUsd: string): string => {
    // If price is less than 1, display full price without formatting
    const convertNumber = Number(priceUsd);
    if (convertNumber < 1) {
      return `${convertNumber.toFixed(8)}`; // Adjust the number of decimal places as needed
    }
    // If price is greater than or equal to 1, format with commas
    return `${convertNumber.toLocaleString()}`;
  };

  return (
    <div className="rounded-sm border  bg-boxdark px-5 pt-6 pb-2.5 shadow-default border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h2 className="font-bold text-xl mb-5">Assets</h2>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className=" text-left bg-meta-4">
              <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                Assets
              </th>
              <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                Name
              </th>
              <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                Value
              </th>

              <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {state.assets.map((assetItem, key) => (
              <tr key={key}>
                <td className="border flex items-center gap-x-2 py-5 px-4 border-strokedark">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${assetItem.symbol.toLowerCase()}@2x.png`}
                    alt=""
                    className="h-10 w-10"
                  />
                  <h5 className="text-white  dark:text-white">
                    {assetItem.symbol}
                  </h5>
                </td>
                <td className="border py-5 px-4 border-strokedark">
                  <h5 className="font-medium text-white dark:text-white">
                    {assetItem.name}
                  </h5>
                </td>
                <td className="border py-5 px-4 border-strokedark">
                  <h5 className="font-medium text-white dark:text-white">
                    ${assetItem.priceUsd ? formatPrice(assetItem.priceUsd) : ""}
                  </h5>
                </td>

                <td className="border  border-strokedark">
                  <Link
                    to="/user/deposit"
                    className="inline-flex items-center justify-center rounded-md border border-primary hover:text-white hover:bg-primary py-2 px-6 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    Deposit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
