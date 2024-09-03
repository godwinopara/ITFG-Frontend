function ReferralCard() {
  return (
    <div>
      <div className="border px-4 py-7 text-sm text-gray-600">
        <h2 className="mb-2 text-base font-maisonMedium text-primary">Referral</h2>
        <p className="font-maisonMedium">
          Your Referral Link:{" "}
          <span className="text-primary">https://worthfininvestment.com/sign-up/ref-code=WFI6091/</span>
        </p>
        <p className="font-maisonMedium">
          Your Referral Code: <span className="text-primary">WFI6091</span>
        </p>
      </div>
      <div className="border px-4 py-7">
        <h2 className="mb-4 font-maisonMedium text-primary">Referral Level</h2>
        <div className="flex justify-between items-center relative">
          <div className="bg-primary flex items-center justify-center h-8 w-8 rounded-[100%] text-white z-10">1</div>
          <div className="h-[2px] w-full bg-gray-500 absolute top-4 left-0"></div>
          <div className="bg-gray-500 flex items-center justify-center h-8 w-8 rounded-[100%] text-white z-10">2</div>
          <div className="bg-gray-500 flex items-center justify-center h-8 w-8 rounded-[100%] text-white z-10">3</div>
        </div>
      </div>
    </div>
  );
}

export default ReferralCard;
