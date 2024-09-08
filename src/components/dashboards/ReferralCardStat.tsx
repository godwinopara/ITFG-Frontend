import { useUserAdminContext } from "../../context/MainContext";

function ReferralCardStat() {
  const {
    state: { user },
  } = useUserAdminContext();

  return (
    <div>
      <div className="border px-4 py-7 text-sm text-gray-600">
        <h2 className="mb-2 text-base font-maisonMedium text-primary">Referral Statistics</h2>
        <p className="font-bold">Your Referral: {user?.referredBy ? user?.referredBy : "None"}</p>
        <p className="font-bold">No of Referrals: {user?.referrals.length}</p>
      </div>
      <div className="border px-4 py-7 text-sm text-gray-600">
        <h2 className="mb-2 text-base font-maisonMedium text-primary">Referral Bonus</h2>
        <p className="font-bold">No of Bonus: {user?.noOfReferralBonus}</p>
        <p className="font-bold">Total Amount: ${user?.referral_bonus}</p>
      </div>
    </div>
  );
}

export default ReferralCardStat;
