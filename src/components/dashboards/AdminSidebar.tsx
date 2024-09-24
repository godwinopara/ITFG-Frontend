/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/ITFG-LOGO.png";
import { FaUsers } from "react-icons/fa";
import { PiIdentificationBadge, PiUsersThree } from "react-icons/pi";
import { MdOutlineUnsubscribe, MdAccountBalance, MdVerifiedUser } from "react-icons/md";
import { TbChartCandle } from "react-icons/tb";
import { BiMoneyWithdraw, BiWallet } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { HamburgerIcon } from "../ui/HamburgerIcon";
import { CircleMinus, CirclePlus, CopyPlus } from "lucide-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import ReuseableCollapseable from "../sharedUi/ReuseableCollapseable";
import { TiChartBar } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import { useUserAdminContext } from "../../context/MainContext";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const AdminSidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const {
    state: { loading },
  } = useUserAdminContext();

  const [status, setStatus] = useState(loading || "pending");

  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.split("/")[1];

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // useEffect(() => {
  //   setStatus(state.status);
  // }, [state]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      className={`absolute left-0 top-0 bg-white z-[50] flex h-screen  flex-col overflow-y-hidden duration-300 ease-linear  lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-10 py-6 lg:py-7 text-white">
        <Link to={`/${currentPath}/dashboard`}>
          <img src={logo} alt="Logo" className="w-[12rem]" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block  lg:hidden"
        >
          {/* <HamburgerIcon /> */}
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-2 lg:mt-9">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

            <ul className="mb-6 flex flex-col gap-3.5 text-base text-gray-600 font-maisonSemiBold leading-4">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  to={`/${currentPath}/dashboard`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold  duration-300 ease-in-out hover:text-primary-hover ${
                    pathname === `/${currentPath}/dashboard` && "text-primary-hover "
                  }`}
                >
                  <LuLayoutDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={`/${currentPath}/account`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-semibold  duration-300 ease-in-out hover:text-primary-hover ${
                    pathname === `/${currentPath}/account` && "text-primary-hover "
                  }`}
                >
                  <MdOutlineAccountCircle />
                  Account
                </Link>
              </li>
              {pathname.includes("admin") && (
                <li>
                  <Link
                    to={`/${currentPath}/users`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-maisonMedium duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("users") && "text-primary-hover "
                    }`}
                  >
                    <FaUsers />
                    Manage Users
                  </Link>
                </li>
              )}

              <ReuseableCollapseable links={["deposit", "withdrawal"]} title="Transactions" icon={<BiWallet />}>
                <ul className="grid gap-y-3 mt-4 text-sm">
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("deposit") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/deposit`}>Deposits</Link>
                  </li>
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("withdrawal") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/withdrawal`}>Withdrawal</Link>
                  </li>
                </ul>
              </ReuseableCollapseable>
              <ReuseableCollapseable
                links={["investment-options", "active-investments", "ended-investments"]}
                title="Investments"
                icon={<TiChartBar />}
              >
                <ul className="grid gap-y-3 mt-4 text-sm">
                  {!pathname.includes("admin") && (
                    <li
                      className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                        pathname.includes("investment-options") && "text-primary-hover "
                      }`}
                    >
                      <Link to={`/${currentPath}/investment-options`}>Investment Options</Link>
                    </li>
                  )}
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("active-investments") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/active-investments`}>Active Investment</Link>
                  </li>
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("ended-investments") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/ended-investments`}>Ended Investment</Link>
                  </li>
                </ul>
              </ReuseableCollapseable>
              {!pathname.includes("admin") && (
                <ReuseableCollapseable
                  links={["password-settings", "profile-settings"]}
                  title="Profile"
                  icon={<RxDashboard />}
                >
                  <ul className="grid gap-y-3 mt-4 text-sm">
                    <li
                      className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                        pathname.includes("profile-settings") && "text-primary-hover "
                      }`}
                    >
                      <Link to={`/${currentPath}/profile-settings`}>Profile Settings</Link>
                    </li>
                    <li
                      className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                        pathname.includes("password-setting") && "text-primary-hover "
                      }`}
                    >
                      <Link to={`/${currentPath}/password-settings`}>Password Settings</Link>
                    </li>
                  </ul>
                </ReuseableCollapseable>
              )}
              <ReuseableCollapseable
                links={["referral-list", "referral-bonus"]}
                title="Referral"
                icon={<PiUsersThree />}
              >
                <ul className="grid gap-y-3 mt-4 text-sm">
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("referral-list") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/referral-list`}>Referral List</Link>
                  </li>
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("referral-bonus") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/referral-bonus`}>Referral Bonus</Link>
                  </li>
                </ul>
              </ReuseableCollapseable>
              <ReuseableCollapseable links={["kyc-application"]} title="KYC" icon={<MdVerifiedUser />}>
                <ul className="grid gap-y-3 mt-4 text-sm">
                  <li
                    className={`relative duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("kyc-application") && "text-primary-hover "
                    }`}
                  >
                    <Link to={`/${currentPath}/kyc-application`}>KYC Application</Link>
                  </li>
                </ul>
              </ReuseableCollapseable>

              {/* {pathname.includes("admin") && (
                <li>
                  <Link
                    to="/admin/notifications"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-maisonMedium duration-300 ease-in-out hover:text-primary-hover ${
                      pathname.includes("/admin/notifications") && "text-primary-hover "
                    }`}
                  >
                    <IoIosNotifications />
                    Notification
                  </Link>
                </li>
              )} */}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};
