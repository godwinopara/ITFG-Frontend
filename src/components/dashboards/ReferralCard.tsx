import clsx from "clsx";
import { useUserAdminContext } from "../../context/MainContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ReferralCard() {
  const {
    state: { user },
  } = useUserAdminContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="border px-4 py-7 text-sm text-gray-600">
        <h2 className="mb-2 text-base font-maisonMedium text-primary">Referral</h2>
        <p className="font-maisonMedium">
          Your Referral Link: <span className="text-primary">{user?.referralLink}</span>
        </p>
        <p className="font-maisonMedium">
          Your Referral Code: <span className="text-primary">{user?.referralCode}</span>
        </p>
      </div>
      <div className="border px-4 py-7">
        <h2 className="mb-4 font-maisonMedium text-primary">Referral Level</h2>
        <div className="flex justify-between items-center relative">
          <div className="bg-primary-hover flex items-center justify-center h-8 w-8 rounded-[100%] text-white z-10">
            1
          </div>
          <div className="h-[2px] w-full bg-gray-500 absolute top-4 left-0"></div>
          <div
            className={clsx(
              "flex items-center justify-center h-8 w-8 rounded-[100%] text-white z-10",
              user?.referralLevel >= 2 ? "bg-primary-hover" : "bg-gray-500"
            )}
          >
            2
          </div>
          <div
            className={clsx(
              "flex items-center justify-center h-8 w-8 rounded-[100%] text-white z-10",
              user?.referralLevel >= 3 ? "bg-primary-hover" : "bg-gray-500"
            )}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralCard;
