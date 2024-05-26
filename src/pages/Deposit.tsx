import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "../types/formdata";
import { AdminLayout } from "../components/layouts/AdminLayout";
import Modal from "../components/modal/Modal";
import { FaTimes } from "react-icons/fa";
import DepositTable from "../components/Tables/DepositTable";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../context/UserContext";
import upload from "../lib/upload";

type Props = {};

const Deposit = (props: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    paymentMethod: "",
    amount: "",
    paymentReceipt: null,
  });
  const [loading, setLoading] = useState(false);

  const { addDeposit } = useUserContext();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      paymentReceipt: file,
    }));
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imgUrl = await upload(formData.paymentReceipt);

      if (imgUrl) {
        const payload = {
          method: formData.paymentMethod,
          amount: formData.amount,
          status: "pending",
          id: uuidv4(),
          screenshot: imgUrl,
          date: new Date().toDateString(),
        };

        addDeposit(payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  return (
    <AdminLayout>
      <div className="mb-10 rounded-sm border  bg-boxdark shadow-default border-strokedark ">
        <div className="border-b  py-4 px-6 border-strokedark">
          <h3 className="font-medium -white">
            DEPOSIT USING BITCOIN
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="mb-2.5 block text-white dark:text-white">
              BITCOIN WALLET
            </label>
            <input
              type="text"
              readOnly
              value="bc1qma2yfzvsquhhj0yq7rn7qxmaj56wh72h0hfmnk"
              className="w-full rounded border-[1.5px] border-strokedark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-meta-3"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 rounded-sm border  bg-boxdark shadow-default border-strokedark ">
        <div className="border-b  py-4 px-6 border-strokedark">
          <h3 className="font-medium text-white dark:text-white">
            DEPOSIT USING ETHEREUM
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="mb-2.5 block text-white dark:text-white">
              ETHEREUM WALLET
            </label>
            <input
              type="text"
              readOnly
              value="0x51C5D2a3BF1441Fb3BA8b10f3d33C37ae80565E2"
              className="w-full rounded border-[1.5px] border-strokedark bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-meta-3"
            />
          </div>
        </div>
      </div>

      <button
        className="flex w-full justify-center rounded bg-primary hover:bg-primary-hover p-3 font-medium text-white"
        onClick={() => setModalIsOpen(true)}
      >
        Notify Payment
      </button>

      <br />
      <DepositTable />
      <Modal modalIsOpen={modalIsOpen}>
        <div className="mt-14 md:mt-0 flex items-center justify-between mb-5 overflow-auto">
          <h3 className="text-xl font-bold">Submit Notification for Deposit</h3>
          <button
            className="dark:text-white text-xl border border-black"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>
        <p className="text-sm italic mb-8">
          To deposit, please choose the payment method at the Payment Methods
          panel and make the payment. After completing the payment come back
          here and fill the deposit notification form.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative z-20 bg-transparent mb-4">
            <label className="mb-2.5 block text-white dark:text-white">
              Select Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              required
              onChange={handleInputChange}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-meta-3 active:border-meta-3 dark:border-form-strokedark dark:bg-form-input dark:focus:border-meta-3"
            >
              <option value="">Select Payment</option>
              <option value="Bitcoin">Bitcoin Payment</option>
              <option value="Ethereum">Ethereum Payment</option>
            </select>
          </div>
          <div className="relative z-20 bg-transparent mb-4">
            <label className="mb-2.5 block text-white dark:text-white">
              Amount In Dollar($)
            </label>
            <input
              type="text"
              placeholder="5000"
              name="amount"
              required
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-meta-3 active:border-meta-3 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-meta-3"
            />
          </div>
          <div className="mb-8">
            <label className="mb-3 block text-white dark:text-white">
              Upload Payment Receipt
            </label>
            <input
              type="file"
              name="paymentReceipt"
              required
              onChange={handleFileChange}
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-meta-3"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary-hover w-full py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            {loading ? "Loading...." : "Notify for Deposit"}
          </button>
        </form>
      </Modal>
    </AdminLayout>
  );
};

export default Deposit;
