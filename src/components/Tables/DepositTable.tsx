import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { DepositState } from "../../types/types";
import capitalizeFirstLetter from "../../lib/capitalize";

const DepositTable = () => {
  const [deposits, setDeposits] = useState<any>([]);

  const { state } = useUserContext();

  useEffect(() => {
    if (state.deposits.length) {
      setDeposits(state.deposits);
    }
  }, [state.deposits]);

  return (
    <>
      <div className="rounded-sm border   px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
        <h2 className="font-bold text-xl mb-5">Deposit History</h2>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className=" text-left bg-meta-4">
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Method
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Amount
                </th>

                <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                  Status
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {deposits.length > 0 &&
                deposits.map((depositItem: DepositState, key: number) => (
                  <tr key={key}>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="text-white  dark:text-white">
                        {depositItem.method}
                      </h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        ${depositItem.amount}
                      </h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          depositItem.status === "completed"
                            ? "text-success bg-success"
                            : depositItem.status === "UnCompleted"
                            ? "text-danger bg-danger"
                            : "text-warning bg-warning"
                        }`}
                      >
                        {capitalizeFirstLetter(depositItem.status)}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {depositItem.date}
                      </h5>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {deposits.length < 1 && (
          <p className="text-center mt-5 py-4 text-xl">No Recent Deposit</p>
        )}
      </div>
    </>
  );
};

export default DepositTable;
