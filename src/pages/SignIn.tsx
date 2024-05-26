import { Link, useNavigate } from "react-router-dom";
import logo from "../images/LOGO-DARK.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { useUserContext } from "../context/UserContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function SignIn() {
	const { fetchUserData, notify, notifyError } = useUserContext();

	const [formData, setFormData] = useState({ email: "", password: "" });

	const navigate = useNavigate();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const data = await toast.promise(
				signInWithEmailAndPassword(auth, formData.email, formData.password),
				{
					loading: "Hold on, we're signing  you in!",
					success: "Sign in Successful",
					error: "Invalid Username or Password",
				}
			);
			if (data.user.uid) {
				localStorage.setItem("token", data.user.refreshToken);
				fetchUserData(data.user.uid);

				if (data.user.email === "adeyemooladunjoye@gmail.com") {
					localStorage.setItem("admin", "true");
				} else {
					localStorage.removeItem("admin");
				}
				navigate("/user/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleGoogleSignIn = async () => {
		const auths = getAuth();
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(auths, provider);
			const { user } = result;
			localStorage.setItem("token", user.refreshToken);
			notify("Sign Successful");
			// Check if the user already exists in Firestore
			const userDoc = await getDoc(doc(db, "users", user.uid));
			if (user.displayName) {
				if (!userDoc.exists()) {
					const [firstname, lastname] = user.displayName?.split(" ");
					// User doesn't exist, save user data to Firestore
					await setDoc(doc(db, "users", user.uid), {
						email: user.email,
						firstname: firstname[0].toUpperCase() + firstname.slice(1),
						lastname: lastname[0].toUpperCase() + lastname.slice(1),
						uid: user.uid,
						photoUrl: user.photoURL,
						mobile: user.phoneNumber,
						username: "",
						country: "",
						password: "",
						gender: "",
						joinedDate: new Date().toDateString(),
						status: "Active",
					});

					await setDoc(doc(db, "deposits", user.uid), {
						deposits: [],
					});

					await setDoc(doc(db, "withdrawals", user.uid), {
						withdrawals: [],
					});

					await setDoc(doc(db, "subscriptions", user.uid), {
						subscription: {},
					});

					await setDoc(doc(db, "verifications", user.uid), {
						verification: {
							document: null,
							status: "not-verified",
						},
					});

					await setDoc(doc(db, "accounts", user.uid), {
						account: { balance: 0, profit: 0, bonus: 0 },
					});

					await setDoc(doc(db, "trades", user.uid), {
						trades: [],
					});

					navigate("/user/dashboard");
				} else if (userDoc.exists()) {
					navigate("/user/dashboard");
				} else {
					notifyError("Invalid Login, Try Again");
					return;
				}
			}

			// User exists or has been saved, proceed with your logic
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="px-6 xl:px-0 xl:grid xl:grid-cols-2">
			<div className="hidden xl:block xl:w-[85%] min-h-screen bg-authImg bg-center bg-cover"></div>
			<div className="xl:w-[75%] my-20">
				<Link to="/" className="flex justify-center items-center mb-16 cursor-pointer">
					<img src={logo} alt="" className="w-[50%]" />
				</Link>
				<form onSubmit={handleSubmitSignIn}>
					<div className="mb-4">
						<label className="mb-2.5 block font-medium text-black ">Email</label>
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
							<label className="mb-2.5 block font-medium text-black">Password</label>
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

				<button
					onClick={handleGoogleSignIn}
					className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50"
				>
					<span>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_191_13499)">
								<path
									d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
									fill="#059669"
								/>
								<path
									d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
									fill="#34A853"
								/>
								<path
									d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
									fill="#FBBC05"
								/>
								<path
									d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
									fill="#EB4335"
								/>
							</g>
							<defs>
								<clipPath id="clip0_191_13499">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</span>
					Sign in with Google
				</button>

				<div className="mt-6 text-center">
					<p>
						Don’t have any account?{"  "}
						<Link to="/signup" className="text-primary">
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}
