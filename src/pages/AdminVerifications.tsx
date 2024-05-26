import { useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/Modals/Modal";
import { FaRegEyeSlash } from "react-icons/fa";
import UploadButton2 from "../components/sharedUi/UploadButton2";
import { MdDeleteForever } from "react-icons/md";
import { VerificationState } from "../types/types";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { Pagination } from "../components/sharedUi/Pagination";
import { useAdminContext } from "../context/AdminContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

type Props = {};

const AdminVerifications = (props: Props) => {
  const [viewImg, setViewImg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<{ [currentUserId: string]: boolean }>(
    {}
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<VerificationState[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateVerificationStatus } = useAdminContext();

  const verifications = state.verifications;

  useEffect(() => {
    let results = verifications;

    if (searchTerm) {
      results = verifications?.filter(
        (user) =>
          user?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.document?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.status?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(results);
  }, [searchTerm, verifications]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviewImg = (img: string) => {
    setShowModal(true);
    if (img) {
      setViewImg(img);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setViewImg("");
  };

  const handleVerification = (userId: string) => {
    setLoading((prevLoading) => ({ ...prevLoading, [userId]: true }));

    if (!userId) {
      return;
    }

    setTimeout(() => {
      try {
        alert("verified");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading((prevLoading) => ({ ...prevLoading, [userId]: false }));
      }
    }, 1000);
  };

  const handleApprove = async (id: any) => {
    updateVerificationStatus(id);
    // dispatch({type: ""})
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
            <img src={viewImg} alt="user id" className="h-[350px]" />
          </div>
        </Modal>
      )}
      {verifications?.length > 0 && (
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5 p-4 text-white rounded-md ">
            ALL USERS
          </h2>
          <SearchBar
            classname="mb-5"
            onSearch={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div className="max-w-full overflow-x-auto no-scrollbar">
            <table className="w-full table-auto ">
              <thead>
                <tr className=" text-left bg-meta-4 ">
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    S/N
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                    Fullname
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Document
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Status
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
                      <button
                        onClick={() => handlePreviewImg(userItem.document)}
                        className="w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-1"
                      >
                        Preview <FaRegEyeSlash />
                      </button>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          userItem.status === "verified"
                            ? "text-success bg-success"
                            : "text-warning bg-warning"
                        }`}
                      >
                        {userItem?.status[0].toUpperCase() +
                          userItem?.status.slice(1)}
                      </p>
                    </td>

                    {userItem.status === "pending" && (
                      <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                        <button
                          onClick={() => handleApprove(userItem.uid)}
                          className="min-w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-1"
                        >
                          Approve
                        </button>
                        <button className="w-[110px] rounded-md  bg-danger text-white py-2 px-3 flex items-center justify-center  gap-x-1">
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

export default AdminVerifications;
