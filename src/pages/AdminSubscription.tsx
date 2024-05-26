import React, { useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/Modals/Modal";
import { MdCancel } from "react-icons/md";
import { SearchBar } from "../components/sharedUi/Searchbar";
import { Pagination } from "../components/sharedUi/Pagination";
import { useAdminContext } from "../context/AdminContext";
import { SubscriptionState } from "../types/types";

type Props = {};

const AdminSubscription = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [allowEndSubscription, setAllowEndSubscription] = useState(false);
  const [user, setUser] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<SubscriptionState[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { state, updateSubscription } = useAdminContext();
  const subscriptions = state.subscriptions;

  useEffect(() => {
    let result = subscriptions;

    if (searchTerm) {
      result = subscriptions?.filter(
        (user) =>
          user?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.amount?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(result);
  }, [searchTerm, subscriptions]);

  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers?.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  let subscriptionCount = subscriptions.length;

  const handleClickEndSubscription = (id: string) => {
    setShowModal(true);
    setUser(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAllowTerminateSubscription = () => {
    setAllowEndSubscription(true);

    setTimeout(() => {
      if (!user && !allowEndSubscription) {
        return;
      }
      updateSubscription(user);
      setShowModal(false);
    }, 1000);
  };

  return (
    <AdminLayout>
      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Terminate User Subscription"
        height={270}
        width={400}
      >
        <div className="flex text-center items-center justify-center">
          <div>
            <h2 className="text-xl">
              Are you sure you want to cancel this Subscription
            </h2>
            <div className="flex justify-center gap-x-4 mt-8">
              <button
                onClick={handleAllowTerminateSubscription}
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
      <div className="rounded-sm border  px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
        <h2 className="font-bold text-xl mb-5  p-4 text-white rounded-md ">
          ALL SUBSCRIPTIONS
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
                <th className="min-w-[50px] py-4 px-4 font-medium text-white dark:text-white">
                  S/N
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                  Fullname
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Plan
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Amount Invested
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Duration
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-white dark:text-white">
                  Date
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-white dark:text-white">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {subscriptions?.length &&
                paginatedUsers?.map((subscription: any, key: number) => (
                  <tr key={key}>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="text-white  dark:text-white">{key + 1}</h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <h5 className="font-medium text-white dark:text-white">
                        {subscription.fullname}
                      </h5>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {subscription?.plan}
                      </p>
                    </td>
                    <td className="border pl-12 py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        ${subscription?.amount}
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {subscription?.duration}days
                      </p>
                    </td>
                    <td className="border py-5 px-4 border-strokedark">
                      <p className="text-white dark:text-white">
                        {subscription?.date}
                      </p>
                    </td>

                    <td className="border py-5 px-4 flex items-center gap-x-2 border-strokedark">
                      <button
                        onClick={() =>
                          handleClickEndSubscription(subscription.uid)
                        }
                        className="w-[170px] rounded-md  bg-danger text-white py-2 px-3 flex items-center justify-center  gap-x-2 whitespace-nowrap"
                      >
                        <MdCancel />
                        End Subscription
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {subscriptionCount < 1 && (
            <div className="text-center py-14 text-xl">
              No User Have Subscribed
            </div>
          )}
        </div>
        <Pagination
          totalPages={Math.ceil(filteredUsers?.length / pageSize)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </AdminLayout>
  );
};

export default AdminSubscription;
