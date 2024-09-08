import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

import logo from "../images/LOGO.svg";
import { login } from "../api/api";
import { useUserAdminContext } from "../context/MainContext";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { getUserData } = useUserAdminContext();

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { email, password } = formData;

      const response = await toast.promise(login({ email, password }), {
        loading: "Signing you in...",
        success: "Sign in Successful",
        error: "Invalid Username or Password",
      });

      const { token, user } = response;

      localStorage.setItem("token", token);

      getUserData(user);

      // Redirect user after successful login
      //   if (user.email === "adeyemooladunjoye@gmail.com") {
      //     localStorage.setItem("admin", "true");
      //   } else {
      //     localStorage.removeItem("admin");
      //   }

      navigate("/user/dashboard");
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <section className="px-6 xl:px-0 xl:grid xl:grid-cols-2">
      <div className="hidden xl:block xl:w-[85%] min-h-screen bg-authImg bg-center bg-cover"></div>
      <div className="xl:w-[75%] my-20">
        <Link to="/" className="flex justify-center items-center mb-16 cursor-pointer">
          <img src={logo} alt="Logo" className="w-[50%]" />
        </Link>
        <form onSubmit={handleSubmitSignIn}>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-6 w-full">
            <label className="mb-2.5 block font-medium text-black">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-5">
            <button type="submit" className="w-full bg-primary text-white rounded-lg py-4 hover:bg-primary-hover">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
