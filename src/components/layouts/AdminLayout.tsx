import React, { ReactNode, useState } from "react";
import { AdminSidebar } from "../dashboards/AdminSidebar";
import { AdminHeader } from "../dashboards/AdminHeader";

type Props = {
  children: ReactNode;
};

export const AdminLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <AdminHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="bg-boxdark-2 text-bodydark">
          <div className="min-h-screen mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
