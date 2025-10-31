import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModelTable from "../components/ModelTable";
import AIModelPagination from "../components/AIModelPagination";
import AISearchFilterBar from "../components/AISearchFilterBar";
const ModelManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex flex-col flex-1 min-h-screen p-4 sm:p-6 lg:p-8 lg:ml-64 transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} navbarName="AI Model Management" />

        {/* Search and Filter */}
        <div className="mt-4 sm:mt-6">
          <AISearchFilterBar />
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <ModelTable />
        </div>

        {/* Pagination */}
        <AIModelPagination />
      </main>
    </div>
  );
};

export default ModelManagement;
