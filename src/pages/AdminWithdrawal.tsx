import React, { useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/Modals/Modal";
import { history, usersInfo } from "../components/dashboards/data";
import { MdDeleteForever } from "react-icons/md";
import UploadButton from "../components/sharedUi/UploadButton";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { Pagination } from "../components/sharedUi/Pagination";
import { useAdminContext } from "../context/AdminContext";
import { WithdrawalState } from "../types/types";

const AdminWithdrawal = () => {
  const [loading, setLoading] = useState<{ [id: string]: boolean }>({});
  const [userId, setUserId] = useState<string | null>(null);
  const [depositId, setDepositId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<WithdrawalState[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateWithdrawal, deleteWithdrawal } = useAdminContext();
  const withdrawals = state.withdrawals;

  useEffect(() => {
    let results = withdrawals;

    if (searchTerm) {
      results = withdrawals?.filter(
        (user: any) =>
          user?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.amount?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.userId?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(results);
  }, [searchTerm, withdrawals]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers?.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUpdateWithdrawalStatus = (uid: string, id: string) => {
    if (uid && id) {
      updateWithdrawal(id, uid);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showDeleteWithdrawalModal = (userId: string, depositId: string) => {
    setUserId(userId);
    setDepositId(depositId);
    setShowModal(true);
  };

  const handleRemoveWithdrawal = () => {
    if (userId && depositId) {
      deleteWithdrawal(userId, depositId);
    }
  };

  return (
    <AdminLayout>
      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Delete Deposit"
        height={270}
        width={400}
      >
        <div className="flex text-center items-center justify-center">
          <div>
            <h2 className="text-xl">
              Are you sure you want to delete this Withdrawal.
            </h2>
            <div className="flex justify-center gap-x-4 mt-8">
              <button
                onClick={handleRemoveWithdrawal}
                className="bg-meta-3 flex justify-center items-center text-white rounded-md font-medium px-8 py-2"
                type="submit"
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                className="bg-danger flex justify-center items-center text-white rounded-md font-medium px-8 py-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {withdrawals?.length > 0 && (
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5 p-4 text-white rounded-md ">
            ALL USERS WITHDRAWALS
          </h2>
          <SearchBar
            classname="mb-5"
            onSearch={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div className="max-w-full overflow-x-auto no-scrollbar">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-meta-4 text-left">
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    S/N
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Fullname
                  </th>
                  <th className="min-w-[180px] py-4 px-4 font-medium text-white dark:text-white">
                    Withdrawal Method
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Amount
                  </th>

                  <th className="min-w-[160px] py-4 px-4 font-medium text-white dark:text-white">
                    Date
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Status
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers?.map(
                  (withdrawal: WithdrawalState, key: number) => (
                    <tr key={key}>
                      <td className="border py-5 px-4 border-strokedark">
                        <h5 className="text-white  dark:text-white">
                          {key + 1}
                        </h5>
                      </td>
                      <td className="border py-5 px-4 border-strokedark">
                        <h5 className="font-medium text-white dark:text-white">
                          {withdrawal.fullname}
                        </h5>
                      </td>

                      <td className="border py-5 px-4 border-strokedark">
                        <p className="text-white dark:text-white">
                          {withdrawal.method}
                        </p>
                      </td>
                      <td className="border py-5 px-4 border-strokedark">
                        <p className="text-white dark:text-white">
                          ${withdrawal.amount}
                        </p>
                      </td>

                      <td className="border py-5 px-4 border-strokedark">
                        <p className="text-white dark:text-white">
                          {withdrawal.date}
                        </p>
                      </td>

                      <td className="border py-5 px-4 border-strokedark">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                            withdrawal.status === "completed"
                              ? "text-success bg-success"
                              : "text-warning bg-warning"
                          }`}
                        >
                          {withdrawal.status}
                        </p>
                      </td>
                      {withdrawal.status === "pending" && (
                        <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                          <button
                            onClick={() =>
                              handleUpdateWithdrawalStatus(
                                withdrawal.uid,
                                withdrawal.id
                              )
                            }
                            className="w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() =>
                              showDeleteWithdrawalModal(
                                withdrawal.uid,
                                withdrawal.id
                              )
                            }
                            className="w-[110px] rounded-md  bg-danger text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                          >
                            <MdDeleteForever />
                            Remove
                          </button>
                        </td>
                      )}
                    </tr>
                  )
                )}
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

export default AdminWithdrawal;
