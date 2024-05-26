import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import UploadButton2 from "../components/sharedUi/UploadButton2";
import { MdDeleteForever } from "react-icons/md";
import Modal from "../components/Modals/Modal";
import { usersInfo } from "../components/dashboards/data";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { User, UserState } from "../types/types";
import { Pagination } from "../components/sharedUi/Pagination";
import { useAdminContext } from "../context/AdminContext";

type Props = {};

const Users = (props: Props) => {
  const [currentUserId, setCurrentUserId] = useState<any>("");
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState<{ [currentUserId: string]: boolean }>(
    {}
  );

  const [allowDeleteUser, setAllowDeleteUser] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateUser } = useAdminContext();

  useEffect(() => {
    setFilteredUsers(state.users);
  }, []);

  useEffect(() => {
    const results = state.users?.filter(
      (user) =>
        user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.mobile?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.lastname?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(results);
  }, [searchTerm, state.users]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBillUser = (user: any) => {
    setShowModal(true);
    setCurrentUserId(user);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowDeleteUserModal(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentUserId && userInput) {
      updateUser(currentUserId, userInput);
      closeModal();
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserInput(e.target.value);
  };

  const handleDeleteUser = (userId: string) => {
    setShowDeleteUserModal(true);
    setCurrentUserId(userId);
  };

  const handleAllowDeleteUser = () => {
    setAllowDeleteUser(true);

    setTimeout(() => {
      if (!currentUserId && !allowDeleteUser) {
        return;
      }
      try {
        // deleteUser(currentUserId);
        alert("Account was deleted Successfully");
      } catch (error) {
        console.log(error);
      } finally {
        setShowDeleteUserModal(false);
      }
    }, 1000);
  };

  return (
    <AdminLayout>
      <Modal
        show={showDeleteUserModal}
        closeModal={closeModal}
        title="Delete User"
        height={270}
        width={400}
      >
        <div className="flex text-center items-center justify-center">
          <div>
            <h2 className="text-xl">Are you sure you want to this Account</h2>
            <div className="flex justify-center gap-x-4 mt-8">
              <button
                onClick={handleAllowDeleteUser}
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
      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Bill User"
        height={270}
        width={400}
      >
        <form onSubmit={handleSubmit} className="min-h-screen">
          <div className="w-full relative z-20 bg-transparent mb-4 ">
            <label className="mb-2.5 block text-black">Choose Status</label>
            <select
              name="billuser"
              required
              onChange={handleSelectChange}
              value={userInput}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-meta-3 active:border-meta-3"
            >
              <option value="">Choose Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Signal Fee">Signal Fee</option>
              <option value="Upgrade">Upgrade</option>
              <option value="Insurance">Insurance</option>
              <option value="Stamp Duty">Stamp Duty</option>
              <option value="Trading Time">Trading Time</option>
              <option value="IRS">IRS</option>
              <option value="Broker Fee">Broker Fee</option>
              <option value="Account Management Fee">
                Account Management Fee
              </option>
              <option value="Cost of Transfer">Cost of Transfer</option>
              <option value="Withdrawal Fee">Withdrawal Fee</option>
              <option value="Trade Commission Fee">Trade Commission Fee</option>
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
      {filteredUsers?.length > 0 && (
        <div className="min-h-screen rounded-sm border  px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <h2 className="font-bold text-xl mb-5  p-4 text-white rounded-md ">
            ALL USERS
          </h2>
          <SearchBar
            classname="mb-5"
            onSearch={setSearchTerm}
            searchTerm={searchTerm}
          />

          <div className="max-w-full overflow-x-auto no-scrollbar ">
            <table className="w-full table-auto">
              <thead>
                <tr className=" text-left bg-meta-4">
                  <th className="min-w-[100px] py-4 px-4 font-bold text-white dark:text-white">
                    S/N
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-bold text-white dark:text-white">
                    Fullname
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-bold text-white dark:text-white">
                    Username
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-bold text-white dark:text-white">
                    Email
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-bold text-white dark:text-white">
                    Phone
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-bold text-white dark:text-white">
                    Password
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-bold text-white dark:text-white">
                    Country
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-bold text-white dark:text-white">
                    Gender
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-bold text-white dark:text-white">
                    Status
                  </th>
                  <th className="min-w-[200px] py-4 px-4 font-bold text-white dark:text-white">
                    Joining Date
                  </th>
                  <th className="min-w-[120px] py-4 px-4 text-center font-bold text-white dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers?.map((userItem: any, key: number) => (
                  <tr key={key}>
                    <td className="border  py-5 px-4 border-strokedark">
                      <h5 className="text-white">{key + 1}</h5>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white whitespace-nowrap">
                        {userItem?.firstname} {userItem?.lastname}
                      </h5>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white">
                        {userItem?.username}
                      </h5>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <p className="text-white">{userItem?.email}</p>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <p className="text-white">{userItem?.mobile}</p>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <p className="text-white">{userItem?.password}</p>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <p className="text-white">{userItem?.country}</p>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <p className="text-white">{userItem?.gender}</p>
                    </td>
                    {/* <td className="border-b min-w-fit border-[#eee] py-5 px-4 dark:border-strokedark">
											<p className="text-black min-w-fit dark:text-white">{userItem?.status}</p>
										</td> */}
                    <td className="border  py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          userItem.status === "Active"
                            ? "text-success bg-success"
                            : "text-warning bg-warning"
                        }`}
                      >
                        {userItem.status}
                      </p>
                    </td>
                    <td className="border  py-5 px-4 border-strokedark">
                      <p className="text-white">
                        {userItem?.joinedDate}
                      </p>
                    </td>
                    <td className="border  py-5 px-4 flex items-center gap-x-2 border-strokedark">
                      <button
                        onClick={() => handleBillUser(userItem.uid)}
                        className="w-[100px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                      >
                        Bill User
                      </button>
                      <button
                        onClick={() => handleDeleteUser(userItem.userId)}
                        className="w-[100px] rounded-md  bg-danger text-white py-2 px-3 flex items-center justify-center  gap-x-2"
                      >
                        <MdDeleteForever />
                        Delete
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

export default Users;
