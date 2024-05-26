/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import loader from "../images/spinner.svg";
import ConfettiExplosion from "react-confetti-explosion";
import { useDropzone } from "react-dropzone";
import upload from "../lib/upload";
import { useUserContext } from "../context/UserContext";

type Props = {};

const Verify = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState("not-verified");
  const [loading, setLoading] = useState(false);
  const [showCongratsUI, setShowCongratsUI] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [uploaded, setUploaded] = useState(false);

  const { state, updateVerification } = useUserContext();

  useEffect(() => {
    const status = state.verification.status;

    setVerificationStatus(status);

    if (status === "verified") {
      setShowCongratsUI(true);
    }
    if (status === "verified") {
      setUploaded(true);
    }
  }, [state.verification]);

  const onDrop = useCallback(async (acceptedFiles: any) => {
    setLoading(true);

    const file = acceptedFiles[0];
    const imgUrl = await upload(file);

    setImageUrl(imgUrl);

    if (imgUrl) {
      setDisabled(false);
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleImageUpload = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (imageUrl) {
        const payload = {
          document: imageUrl,
          status: "pending",
        };
        updateVerification(payload);
        setVerificationStatus("pending");
      }
      setImageUrl(null);
      setUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <div>
        {showCongratsUI && (
          <div className="absolute right-[50%] top-10">
            <ConfettiExplosion
              duration={8000}
              particleSize={5}
              force={0.8}
              particleCount={350}
              width={1000}
            />
          </div>
        )}
        <div className="mb-20 text-center rounded-md border border-strokedark  bg-boxdark py-8 px-8 shadow-default">
          <h2 className="font-bold mb-3 text-xl">Account Status</h2>
          {verificationStatus === "not-verified" && (
            <p>
              Your account is not verified. To verify your account, please fill
              out the form to request verification.
            </p>
          )}

          {verificationStatus === "pending" && (
            <div className="flex min-h-[50vh] flex-col text-center justify-center items-center text-2xl mt-8 pb-8">
              <div className="text-9xl mb-5 text-primary">
                <AiOutlineFileSearch />
              </div>
              <div>
                <p>Your Document is under review</p>
                <p>
                  You will receive a mail from us once it has been verified.
                </p>
              </div>
            </div>
          )}
          {verificationStatus === "verified" && (
            <div className="flex flex-col min-h-[50vh] text-center justify-center items-center text-xl mt-8 pb-8">
              <div className="text-8xl mb-5 text-primary">
                <MdVerified />
              </div>
              <br />
              <div>
                <h2 className="mb-3">
                  Congratulations🎉🎉🎉 on your verified status!
                </h2>
                <p className="mb-3">
                  Your Account Has been Verified and You're all set to explore{" "}
                </p>
                <p>Welcome aboard!</p>
              </div>
            </div>
          )}
        </div>

        {!uploaded && (
          <div className="mb-10 flex justify-center items-center gap-3">
            <div>
              <p className="mb-1.5 text-white text-center">
                SUBMIT VERIFICATION
              </p>
              <p className="xl:w-[70%] text-center xl:mx-auto">
                To request an account verification, kindly provide your
                information with a valid means of Identification attached as an
                image document.
              </p>
            </div>
          </div>
        )}
        {!uploaded && (
          <form onSubmit={handleImageUpload}>
            <div
              id="FileUpload"
              className="relative mb-5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-body bg-gray py-4 px-4 dark:bg-primary sm:py-7.5"
              {...getRootProps()}
            >
              <input
                type="file"
                accept="image/*"
                required
                disabled={uploaded}
                className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                {...getInputProps()}
              />
              {loading && (
                <div className="flex justify-center items-center mb-8 mt-5">
                  <img src={loader} alt="" height={50} width={50} />
                </div>
              )}
              {imageUrl && (
                <img
                  src={imageUrl}
                  height={300}
                  width={300}
                  alt="upload"
                  className="max-w-full mx-auto mb-8 max-h-48 object-cover"
                />
              )}
              <div className="flex flex-col items-center justify-center space-y-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border bg-boxdark border-strokedark dark:bg-boxdark">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                      fill="#10B981"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                      fill="#10B981"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                      fill="#10B981"
                    />
                  </svg>
                </span>
                <p>
                  <span className="text-primary">Click to upload</span> or drag
                  and drop
                </p>
                <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                <p>(max, 800 X 800px)</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className={`${
                  disabled ? "cursor-not-allowed" : "cursor-pointer"
                } flex justify-center md:w-1/2 mx-auto rounded bg-primary text-white py-3 px-6 font-medium text-gray hover:bg-opacity-95`}
                type="submit"
                disabled={disabled}
              >
                Upload Identification
              </button>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default Verify;
