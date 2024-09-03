import { AdminLayout } from "../components/layouts/AdminLayout";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function PasswordSetting() {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-slate-600 font-maisonBold  text-xl">Password Settings</h1>
      </div>
      <div className="border rounded-t-[6px] p-4 mt-5">
        <h2 className="font-maisonBold mb-1 text-primary text-base">Your Password</h2>
        <p className="text-gray-600 text-sm">Change Your Account Password</p>
      </div>
      <div className="grid grid-cols-2 border gap-10 p-8">
        <form>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="oldpassword" className="font-maisonMedium">
              Old Password
            </Label>
            <Input type="text" placeholder="old Password" className="rounded-[5px] border-gray-300" />
          </div>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="lastname" className="font-maisonMedium">
              New Password
            </Label>
            <Input type="text" id="password" placeholder="Password" className="rounded-[5px] border-gray-300" />
          </div>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="email" className="font-maisonMedium">
              Confirm Password
            </Label>
            <Input type="password" placeholder="Confirm Password" className="rounded-[5px] border-gray-300" />
          </div>

          <div>
            <Button className="bg-primary-hover hover:bg-primary rounded-[5px]">Change Password</Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
