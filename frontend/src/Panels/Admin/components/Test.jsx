import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";

const UsersPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar: desktop always visible, mobile toggled */}
      <div className="lg:block hidden fixed left-0 top-0 h-full w-64">
        <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transition-transform duration-300 lg:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={toggleSidebar} />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <Navbar toggleSidebar={toggleSidebar} navbarName="User Management" />
        <main className="p-4 sm:p-6 flex-1 overflow-auto">
          <UserTable />
        </main>
      </div>
    </div>
  );
};

export default UsersPage;
