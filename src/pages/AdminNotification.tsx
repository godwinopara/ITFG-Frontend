import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { notifications, usersInfo } from "../components/dashboards/data";
import Modal from "../components/Modals/Modal";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { FaRegEyeSlash } from "react-icons/fa";
import UploadButton2 from "../components/sharedUi/UploadButton2";
import { MdDeleteForever } from "react-icons/md";
import { Pagination } from "../components/sharedUi/Pagination";
import UploadButton from "../components/sharedUi/UploadButton";

type Props = {};

const AdminNotification = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<{ [currentUserId: string]: boolean }>(
    {}
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState(notifications);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [updateNotificationStatus, setUpdateNotificationState] = useState({
    title: "",
    message: "",
    status: "",
  });
  const [userId, setUserId] = useState("");
  const [tradeId, setTradeId] = useState("");

  useEffect(() => {
    const results = notifications?.filter(
      (user) =>
        user?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.noteTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.userId?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(results);
  }, [searchTerm]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

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
    setUpdateNotificationState((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowModal = (userId: string, id: string) => {
    setShowModal(true);
    setUserId(userId);
    setTradeId(id);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: updateNotificationStatus.title,
      message: updateNotificationStatus.message,
      status: updateNotificationStatus.status,
    };

    setLoading((prevLoading) => ({ ...prevLoading, [tradeId]: true }));

    setTimeout(() => {
      try {
        alert("submitted");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading((prevLoading) => ({ ...prevLoading, [tradeId]: false }));
      }
    }, 1000);

    closeModal();
  };

  return (
    <AdminLayout>
      {showModal && (
        <Modal
          show={showModal}
          closeModal={closeModal}
          title="Update Notification"
          width={500}
          height={500}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-5 mt-10">
              <label className="mb-2.5 block font-medium text-white">
                Notification Title:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="title"
                  required
                  value={updateNotificationStatus.title}
                  onChange={handleInputChange}
                  placeholder="title"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>
            </div>
            <div className="mb-5 ">
              <label className="mb-2.5 block font-medium text-white">
                Notification Message:
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="message"
                  required
                  value={updateNotificationStatus.message}
                  onChange={handleInputChange}
                  placeholder="message"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>
            </div>
            <div className="w-full relative z-20 bg-transparent mb-4">
              <label className="mb-2.5 block text-white">Status:</label>
              <select
                name="status"
                required
                value={updateNotificationStatus.status}
                onChange={handleInputChange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-meta-3 active:border-meta-3"
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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
      )}
      {usersInfo?.length > 0 && (
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5  p-4 text-white rounded-md ">
            Manage Notifications
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
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white whitespace-nowrap">
                    Notification Title
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                    Notification Message
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
                      <h5 className="text-white  dark:text-white">
                        {userItem?.userId}
                      </h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {userItem.fullname}
                      </h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {userItem.noteTitle}
                      </h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {userItem.message}
                      </h5>
                    </td>

                    {/* <td className="border py-5 px-4 border-strokedark">
                      <button
                        onClick={() => handlePreviewImg(userItem.document)}
                        className="w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-1"
                      >
                        Preview <FaRegEyeSlash />
                      </button>
                    </td> */}
                    <td className="border py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          userItem.status === "Active"
                            ? "text-success bg-success"
                            : "text-danger bg-danger"
                        }`}
                      >
                        {userItem?.status}
                      </p>
                    </td>

                    <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                      <UploadButton
                        approveBtnClick={handleShowModal}
                        userId={userItem.userId}
                        id={userItem.id}
                        loading={loading[userItem.id] || false}
                        btnText="Update"
                      />
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

export default AdminNotification;
