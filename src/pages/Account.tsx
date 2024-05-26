import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/Modals/Modal";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { Pagination } from "../components/sharedUi/Pagination";
import { AccountState } from "../types/types";
import { useAdminContext } from "../context/AdminContext";

type Props = {};

const Account = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [accountInput, setAccountInput] = useState({
    balance: "",
    profit: "",
    bonus: "",
  });
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState<{ [currentUserId: string]: boolean }>(
    {}
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredAccount, setFilteredAccount] = useState<AccountState[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateAccount } = useAdminContext();

  const accounts = state.accounts;

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let results = accounts;

    // Check if there is a search term
    if (searchTerm.length) {
      // Filter the results based on the search term
      results = accounts.filter(
        (acct) =>
          acct.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          acct.balance.toString().includes(searchTerm) ||
          acct.profit.toString().includes(searchTerm) ||
          acct.bonus.toString().includes(searchTerm)
      );
    }

    // Update the state with the filtered results
    setFilteredAccount(results);
  }, [searchTerm, accounts]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredAccount.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAccountInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId && accountInput) {
      updateAccount(userId, accountInput);
    }

    closeModal();
  };

  const handleClickToggleModal = (
    uid: string,
    profit: string,
    balance: string,
    bonus: string
  ) => {
    setShowModal(true);
    setUserId(uid);
    setAccountInput((prev) => {
      return { ...prev, balance, profit, bonus };
    });
  };

  return (
    <AdminLayout>
      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Update Balance"
        width={500}
        height={500}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-5 mt-10">
            <label className="mb-2.5 block font-medium text-white">
              Account Balance
            </label>
            <div className="relative">
              <input
                type="text"
                name="balance"
                required
                value={accountInput.balance}
                onChange={handleInputChange}
                placeholder="Balance"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-2.5 block font-medium text-white">
              Profit
            </label>
            <div className="relative">
              <input
                type="text"
                name="profit"
                required
                value={accountInput.profit}
                onChange={handleInputChange}
                placeholder="Profit"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-2.5 block font-medium text-white">Bonus</label>
            <div className="relative">
              <input
                type="text"
                name="bonus"
                required
                value={accountInput.bonus}
                onChange={handleInputChange}
                placeholder="Bonus"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
          </div>
          <div className="flex gap-x-4 mt-8">
            <button
              className="bg-meta-3 flex justify-center items-center text-white rounded-md font-medium px-8 py-2"
              type="submit"
            >
              Update
            </button>
            {/* <button
							onClick={() => closeModal()}
							className="bg-danger flex justify-center items-center text-white rounded-md font-medium px-8 py-2"
						>
							Close
						</button> */}
          </div>
        </form>
      </Modal>
      {accounts?.length > 0 && (
        <div className="rounded-sm border   px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5  p-4 text-white rounded-md ">
            ALL USERS BALANCE
          </h2>
          <SearchBar
            classname="mb-5"
            onSearch={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div className="max-w-full overflow-x-auto no-scrollbar">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left bg-meta-4">
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    S/N
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Fullname
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Balance
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Profit
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Bonus
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers?.map((userItem: any, key: number) => (
                  <tr key={key}>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="text-white  dark:text-white">{key + 1}</h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {userItem.fullname}
                      </h5>
                    </td>

                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${userItem?.balance}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${userItem.profit}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${userItem.bonus}
                      </p>
                    </td>

                    <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                      <button
                        onClick={() =>
                          handleClickToggleModal(
                            userItem.uid || "",
                            userItem.profit,
                            userItem.balance,
                            userItem.bonus
                          )
                        }
                        className="w-[150px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                      >
                        Update Account
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            totalPages={Math.ceil(filteredAccount?.length / pageSize)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default Account;
