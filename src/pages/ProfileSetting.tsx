import ReferralCard from "../components/dashboards/ReferralCard";
import { AdminLayout } from "../components/layouts/AdminLayout";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useUserAdminContext } from "../context/MainContext";
import Loader from "../components/ui/Loader";
import { FormEvent, useEffect, useState } from "react";
import { updateUser } from "../api/api";
import toast from "react-hot-toast";

export default function ProfileSetting() {
  const {
    state: { user, loading },
    updateUserProfile,
  } = useUserAdminContext();

  const [userDetails, setUserDetails] = useState({
    name: user?.name,
    email: user?.email,
    mobile: user?.mobile,
    nationality: user?.nationality,
  });

  useEffect(() => {
    setUserDetails({ ...userDetails, name: user?.name, email: user?.email });
    //eslint-disable-next-line
  }, [user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const updatedData = await toast.promise(updateUser(userDetails), {
        loading: "Updating User Profile",
        success: "User Profile Updated Successfully",
        error: "Error Updating User Profile",
      });
      updateUserProfile(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-slate-600 font-maisonBold  text-xl">Profile</h1>
            </div>
            <div className="border rounded-t-[6px] p-4 mt-5">
              <h2 className="font-maisonBold mb-1 text-primary text-base">Your Profile Details</h2>
              <p className="text-gray-600 text-sm">Profile details provided on sign up</p>
            </div>
            <div className="grid grid-cols-2 border gap-10 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-3 mb-8">
                  <Label htmlFor="firstname" className="font-maisonMedium">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="firstname"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    placeholder="First Name"
                    className="rounded-[5px] border-gray-300"
                  />
                </div>

                <div className="grid w-full items-center gap-3 mb-8">
                  <Label htmlFor="email" className="font-maisonMedium">
                    Email
                  </Label>
                  <Input
                    value={userDetails.email}
                    type="email"
                    id="email"
                    readOnly
                    placeholder="Email"
                    className="rounded-[5px] border-gray-300"
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="grid w-full items-center gap-3 mb-8">
                    <Label htmlFor="mboile" className="font-maisonMedium">
                      Mobile
                    </Label>
                    <Input
                      value={userDetails.mobile}
                      onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
                      type="tel"
                      id="mobile"
                      placeholder="Mobile"
                      className="rounded-[5px] border-gray-300"
                    />
                  </div>
                  <div className="grid w-full items-center gap-3 mb-8">
                    <Label htmlFor="nationality" className="font-maisonMedium">
                      Nationality
                    </Label>
                    <Input
                      placeholder="United States"
                      type="text"
                      id="nationality"
                      value={userDetails.nationality}
                      onChange={(e) => setUserDetails({ ...userDetails, nationality: e.target.value })}
                      className="rounded-[5px] border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <Button type="submit" className="bg-primary-hover hover:bg-primary rounded-[5px]">
                    Update Details
                  </Button>
                </div>
              </form>
              <div className="grid gap-y-6">
                <ReferralCard />
                <ReferralCardStat />
              </div>
            </div>
          </>
        )}
      </>
    </AdminLayout>
  );
}
