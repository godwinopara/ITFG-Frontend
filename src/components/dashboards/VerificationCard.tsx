import { MdVerified } from "react-icons/md";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";

export default function VerificationCard() {
  const [verified, setVerified] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("not-verified");

  // const { verification } = useUserContext().state;
  // // const verified = state.verification?.status === "verified" ? true : false;

  // useEffect(() => {
  // 	setVerificationStatus(verification.status);
  // 	setVerified(verification.status === "verified");
  // 	// eslint-disable-next-line
  // }, [verification.status]);

  // console.log(state);

  return (
    <div className="w-full rounded-md border border-strokedark  bg-boxdark text-white py-4 px-7 shadow-default ">
      <div className="w-full my-2 flex items-end justify-between">
        <div>
          <span className="text-xl font-semibold mb-2 block">
            Verification Status
          </span>

          <h4 className="text-lg font-medium text-white mb-1 flex items-center gap-x-2">
            <span
              className={`${
                verified ? "text-meta-3" : "text-warning"
              } text-2xl`}
            >
              <MdVerified />
            </span>
            {verificationStatus[0].toUpperCase() + verificationStatus.slice(1)}
          </h4>
        </div>
      </div>
    </div>
  );
}
