import { AdminLayout } from "../components/layouts/AdminLayout";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { updateUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function PasswordSetting() {
  const [passwordData, setPasswordData] = useState({ newPassword: "", confirmPassword: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Password does not Match");
      return;
    }

    try {
      await updateUser({ password: passwordData.newPassword });
      toast.success("Password Updated Successfully");
      setTimeout(() => {
        navigate("/signin");
        localStorage.removeItem("token");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Error!! Password not Updated");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="lastname" className="font-maisonMedium">
              New Password
            </Label>
            <Input
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              type="text"
              id="password"
              placeholder="Password"
              className="rounded-[5px] border-gray-300"
            />
          </div>
          <div className="grid w-full items-center gap-3 mb-8">
            <Label htmlFor="email" className="font-maisonMedium">
              Confirm Password
            </Label>
            <Input
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              type="password"
              placeholder="Confirm Password"
              className="rounded-[5px] border-gray-300"
            />
          </div>

          <div>
            <Button type="submit" className="bg-primary-hover hover:bg-primary rounded-[5px]">
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
