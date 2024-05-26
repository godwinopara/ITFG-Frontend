/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import { FaHome, FaMoneyBillAlt, FaUsers } from "react-icons/fa";
import { PiIdentificationBadge } from "react-icons/pi";
import { MdOutlineUnsubscribe, MdAccountBalance } from "react-icons/md";
import { TbChartCandle } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { HamburgerIcon } from "../ui/HamburgerIcon";
import { CircleMinus, CirclePlus, CopyPlus } from "lucide-react";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const AdminSidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.split("/")[1];

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
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
      className={`absolute left-0 top-0 z-[9999] flex h-screen  flex-col overflow-y-hidden bg-boxdark duration-300 ease-linear  lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-6 lg:py-7 text-white">
        <Link to={`/${currentPath}/dashboard`}>
          <img src={logo} alt="Logo" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <HamburgerIcon />
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

            <ul className="mb-6 flex flex-col gap-3.5 text-lg">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  to={`/${currentPath}/dashboard`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                    pathname === `/${currentPath}/dashboard` &&
                    "bg-[#303030] dark:bg-meta-4"
                  }`}
                >
                  <FaHome />
                  Dashboard
                </Link>
              </li>

              {pathname.includes("admin") && (
                <li>
                  <Link
                    to={`/${currentPath}/users`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("users") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <FaUsers />
                    Manage Users
                  </Link>
                </li>
              )}

              {pathname.includes("admin") && (
                <li>
                  <Link
                    to={`/${currentPath}/account`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("account") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <FaUsers />
                    Account
                  </Link>
                </li>
              )}
              {!pathname.includes("admin") && (
                <li>
                  <Link
                    to={`/${currentPath}/assets`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("assets") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <CopyPlus />
                    Assets
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to={`/${currentPath}/deposit`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                    pathname.includes("deposit") &&
                    "bg-[#303030] dark:bg-meta-4"
                  }`}
                >
                  <CirclePlus />
                  Deposits
                </Link>
              </li>

              <li>
                <Link
                  to={`/${currentPath}/withdrawal`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                    pathname.includes("withdrawal") &&
                    "bg-[#303030] dark:bg-meta-4"
                  }`}
                >
                  <CircleMinus />
                  Withdrawals
                </Link>
              </li>

              {pathname.includes("buy-bitcoin") && (
                <li>
                  <Link
                    to={`/${currentPath}/buy-bitcoin`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("buy-bitcoin") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <BiMoneyWithdraw />
                    Buy Bitcoin
                  </Link>
                </li>
              )}
              {pathname.includes("admin") && (
                <li>
                  <Link
                    to="/admin/trades"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("trades") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <TbChartCandle />
                    Trade Sessions
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to={`/${currentPath}/subscriptions`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                    pathname.includes("subscription") &&
                    "bg-[#303030] dark:bg-meta-4"
                  }`}
                >
                  <MdOutlineUnsubscribe />
                  Subscriptions
                </Link>
              </li>
              {pathname.includes("admin") && (
                <li>
                  <Link
                    to="/admin/verification"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("verification") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <PiIdentificationBadge />
                    Identity Verification
                  </Link>
                </li>
              )}
              {pathname.includes("user") && (
                <li>
                  <Link
                    to={`/user/user-verify`}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("user-verify") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <MdAccountBalance />
                    Verify Account
                  </Link>
                </li>
              )}

              {pathname.includes("admin") && (
                <li>
                  <Link
                    to="/admin/notifications"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#303030] dark:hover:bg-meta-4 ${
                      pathname.includes("/admin/notifications") &&
                      "bg-[#303030] dark:bg-meta-4"
                    }`}
                  >
                    <IoIosNotifications />
                    Notification
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};
