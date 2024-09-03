import ReferralCard from "../components/dashboards/ReferralCard";
import { AdminLayout } from "../components/layouts/AdminLayout";
import ReferralCardStat from "../components/dashboards/ReferralCardStat";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function ProfileSetting() {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600 font-maisonBold  text-xl">Profile Settings</h1>
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Your Profile Details</h2>
        <p className="text-gray-600 text-sm">Profile details provided on sign up</p>
      </div>
      <div className="grid grid-cols-2 border gap-10 p-8">
        <form>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="firstname" className="font-maisonMedium">
              First Name
            </Label>
            <Input type="text" id="firstname" placeholder="First Name" className="rounded-[5px] border-gray-300" />
          </div>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="lastname" className="font-maisonMedium">
              Last Name
            </Label>
            <Input type="text" id="lastname" placeholder="Last Name" className="rounded-[5px] border-gray-300" />
          </div>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="email" className="font-maisonMedium">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Email" className="rounded-[5px] border-gray-300" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="grid w-full items-center gap-3 mb-8">
              <Label htmlFor="mboile" className="font-maisonMedium">
                Mobile
              </Label>
              <Input type="tel" id="mobile" placeholder="Mobile" className="rounded-[5px] border-gray-300" />
            </div>
            <div className="grid w-full items-center gap-3 mb-8">
              <Label htmlFor="nationality" className="font-maisonMedium">
                Email
              </Label>
              <Input type="text" id="nationality" className="rounded-[5px] border-gray-300" />
            </div>
          </div>
          <div>
            <Button className="bg-primary-hover hover:bg-primary rounded-[5px]">Update Details</Button>
          </div>
        </form>
        <div className="grid gap-y-6">
          <ReferralCard />
          <ReferralCardStat />
        </div>
      </div>
    </AdminLayout>
  );
}
