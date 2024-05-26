import { useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/Modals/Modal";
import { history, usersInfo } from "../components/dashboards/data";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { Pagination } from "../components/sharedUi/Pagination";
import { useAdminContext } from "../context/AdminContext";
import { DepositState } from "../types/types";
import capitalizeFirstLetter from "../lib/capitalize";

type Props = {};

const AdminDeposit = (props: Props) => {
  const [loading, setLoading] = useState<{ [id: string]: boolean }>({});

  const [viewImg, setViewImg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [userId, setUserId] = useState<string | null>(null);
  const [depositId, setDepositId] = useState<string | null>(null);

  const [allowRemoveDeposit, setAllowRemoveDeposit] = useState(false);
  const [showRemoveDepositModal, setShowRemoveDepositModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<DepositState[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateDeposit } = useAdminContext();
  const deposits = state.deposits;

  useEffect(() => {
    let result = deposits;

    if (searchTerm) {
      result = deposits?.filter(
        (user: any) =>
          user?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.amount?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.status?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(result);
  }, [searchTerm, deposits]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers?.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUpdateDepositStatus = (depositId: string, userId: string) => {
    updateDeposit(depositId, userId);
  };

  const handlePreviewImg = (img: string | null) => {
    console.log(img);
    if (img) {
      setShowModal(true);
      if (img) {
        setViewImg(img);
      }
    }
  };

  const closeModal = () => {
    setShowRemoveDepositModal(false);
    setShowModal(false);
  };

  const openRemoveDepositModal = (userId: string, depositId: string) => {
    setUserId(userId);
    setDepositId(depositId);
    setShowRemoveDepositModal(true);
  };

  const handleAllowRemoveDeposit = () => {
    setAllowRemoveDeposit(true);

    setTimeout(() => {
      if (!userId && !allowRemoveDeposit) {
        return;
      }
      try {
        alert("remove");
      } catch (error) {
        console.log(error);
      } finally {
        setShowRemoveDepositModal(false);
      }
    }, 1000);
  };

  return (
    <AdminLayout>
      {showModal && (
        <Modal
          show={showModal}
          closeModal={closeModal}
          title="User IDentification"
          height={450}
          width={400}
        >
          <div className="flex items-center justify-center">
            <img src={viewImg} alt="user id" className="h-[300px]" />
          </div>
        </Modal>
      )}
      <Modal
        show={showRemoveDepositModal}
        closeModal={closeModal}
        title="Delete Deposit"
        height={270}
        width={400}
      >
        <div className="flex text-center items-center justify-center">
          <div>
            <h2 className="text-xl">
              Are you sure you want to delete this Deposit.
            </h2>
            <div className="flex justify-center gap-x-4 mt-8">
              <button
                onClick={handleAllowRemoveDeposit}
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
      {deposits?.length > 0 && (
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5 p-4 text-white rounded-md ">
            ALL USERS DEPOSIT
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
                    Payment Method
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Amount
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Screenshot
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
                {paginatedUsers?.map((deposit: DepositState, key: number) => (
                  <tr key={key}>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="text-white  dark:text-white">{key + 1}</h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {deposit.fullname}
                      </h5>
                    </td>

                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {deposit.method}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${deposit.amount}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <button
                        onClick={() => handlePreviewImg(deposit?.screenshot)}
                        className="w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-1"
                      >
                        Preview <FaRegEyeSlash />
                      </button>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {deposit.date}
                      </p>
                    </td>

                    <td className="border py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          deposit.status === "completed"
                            ? "text-success bg-success"
                            : "text-warning bg-warning"
                        }`}
                      >
                        {capitalizeFirstLetter(deposit.status)}
                      </p>
                    </td>
                    {deposit.status === "pending" && (
                      <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                        <button
                          onClick={() =>
                            handleUpdateDepositStatus(
                              deposit.id || "",
                              deposit.uid || ""
                            )
                          }
                          className="w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            openRemoveDepositModal(
                              deposit.id || "",
                              deposit.uid || ""
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

export default AdminDeposit;
