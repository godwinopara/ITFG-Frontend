import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/Modals/Modal";
import { history, usersInfo } from "../components/dashboards/data";
import UploadButton from "../components/sharedUi/UploadButton";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { Pagination } from "../components/sharedUi/Pagination";
import { useAdminContext } from "../context/AdminContext";
import { TradeState } from "../types/types";

type Props = {};

interface UserTradeHistoriesProps {
  fullname: string;
  tradeType: string;
  tradeOption: string;
  pairs: string;
  lotSize: string;
  entry: string;
  stopLoss: string;
  takeProfit: string;
  profit: string;
  status: string;
  result: string;
  date: string;
  userId: string;
  id: string;
}

const AdminTradingSession = (props: Props) => {
  const [loading, setLoading] = useState<{ [id: string]: boolean }>({});
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [tradeId, setTradeId] = useState("");
  const [updateTradeStatus, setUpdateTradeState] = useState({
    profit: "",
    status: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<TradeState[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateTrade } = useAdminContext();

  const trades = state.trades;

  useEffect(() => {
    let results = trades;

    if (searchTerm) {
      results = trades?.filter(
        (user: any) =>
          user?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.amount?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.userId?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(results);
  }, [searchTerm, state.trades]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers?.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdateTradeState((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowModal = (id: string, uid: string) => {
    if (id) {
      setShowModal(true);
      setUserId(uid);
      setTradeId(id);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      profit: updateTradeStatus.profit,
      status: updateTradeStatus.status,
    };

    if (data.profit && data.status) {
      updateTrade(tradeId, userId, data);
    }

    closeModal();
  };

  return (
    <AdminLayout>
      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Update Trade Session"
        width={500}
        height={380}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-5 mt-10">
            <label className="mb-2.5 block font-medium text-white">
              Profit
            </label>
            <div className="relative">
              <input
                type="text"
                name="profit"
                required
                value={updateTradeStatus.profit}
                onChange={handleInputChange}
                placeholder="Profit"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
          </div>
          <div className="w-full relative z-20 bg-transparent mb-4">
            <label className="mb-2.5 block text-white">Trade Status</label>
            <select
              name="status"
              required
              value={updateTradeStatus.status}
              onChange={handleInputChange}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-meta-3 active:border-meta-3"
            >
              <option value="">Trade Status</option>
              <option value="pending">Pending</option>
              <option value="win">Win</option>
              <option value="loss">Loss</option>
            </select>
          </div>

          <div className="flex gap-x-4 mt-8">
            <button
              className="bg-meta-3 flex justify-center items-center text-white rounded-md font-medium px-8 py-2"
              type="submit"
            >
              Update
            </button>
            <button
              onClick={closeModal}
              className="bg-danger flex justify-center items-center text-white rounded-md font-medium px-8 py-2"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
      {trades?.length > 0 && (
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5 p-4 text-white rounded-md ">
            ALL TRADES SESSIONS
          </h2>
          <SearchBar
            classname="mb-5"
            onSearch={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div className="max-w-full overflow-x-auto no-scrollbar">
            <table className="w-full table-auto">
              <thead>
                <tr className=" text-left bg-meta-4 ">
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    S/N
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Fullname
                  </th>
                  <th className="min-w-[160px] py-4 px-4 font-medium text-white dark:text-white">
                    Trade Type
                  </th>
                  <th className="min-w-[130px] py-4 px-4 font-medium text-white dark:text-white">
                    Trade Option
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-white dark:text-white">
                    Pairs
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Lot Size
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Entry Price
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-white dark:text-white">
                    Stop Loss
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-white dark:text-white">
                    Take Profit
                  </th>

                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Profit
                  </th>
                  <th className="min-w-[160px] py-4 px-4 font-medium text-white dark:text-white">
                    Date
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Result
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((trade: TradeState, key: number) => (
                  <tr key={key}>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="text-white  dark:text-white">{key + 1}</h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {trade.fullname}
                      </h5>
                    </td>

                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {trade.tradeType}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {trade.tradeOption}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {trade.pairs}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {trade.lotSize}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${trade.entry}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${trade.stopLoss}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${trade.takeProfit}
                      </p>
                    </td>

                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${trade.profit}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">{trade.date}</p>
                    </td>

                    <td className="border py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          trade.status === "win"
                            ? "text-success bg-success"
                            : trade.result === "loss"
                            ? "text-danger bg-danger"
                            : "text-warning bg-warning"
                        }`}
                      >
                        {trade.status}
                      </p>
                    </td>

                    <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                      <button
                        onClick={() => handleShowModal(trade.id, trade.uid)}
                        className="w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalPages={Math.ceil(filteredUsers?.length / pageSize)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminTradingSession;
