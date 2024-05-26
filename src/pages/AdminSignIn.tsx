import { Link, useNavigate } from "react-router-dom";
import logo from "../images/LOGO-DARK.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { auth, db } from "../lib/firebase";
import { useUserContext } from "../context/UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AdminSignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const confirmAdmin = async () => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const adminRef = doc(db, "admin", "QX6jHyNRZzKBDoIrVFD0");
      const adminSnap = await getDoc(adminRef);
      const adminData = adminSnap.data();

      const userEmail = data.user.email;
      if (userEmail === adminData?.email) {
        localStorage.setItem("adminToken", data.user.refreshToken);
        navigate("/admin/dashboard");
        return true;
      } else {
        throw new Error("Invalid Email or Password");
      }
    } catch (error) {
      throw new Error("Invalid Email or Password");
    }
  };

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(confirmAdmin(), {
      loading: "Hold on, we're signing  you in!",
      success: "Sign in Successful",
      error: (error) => error.message,
    });
  };

  return (
    <section className="px-6 xl:px-0 xl:grid xl:grid-cols-2">
      <div className="hidden xl:block xl:w-[85%] min-h-screen bg-authImg bg-center bg-cover"></div>
      <div className="xl:w-[75%] my-20">
        <Link
          to="/"
          className="flex justify-center items-center mb-16 cursor-pointer"
        >
          <img src={logo} alt="" className="w-[50%]" />
        </Link>
        <form onSubmit={handleSubmitSignIn}>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black ">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                required
                name="email"
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
              />

              <span className="absolute right-4 top-4">
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                      fill=""
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="mb-6 w-full">
            <div>
              <label className="mb-2.5 block font-medium text-black">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  required
                  placeholder="Password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="flex justify-center items-center gap-x-2 w-full cursor-pointer rounded-lg border border-meta-3 bg-primary hover:bg-primary-hover p-4 text-white transition hover:bg-opacity-90"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
