import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchFilterBar from "../components/AISearchFilterBar";
import ModelTable from "../components/ModelTable";
import Pagination from "../components/Pagination";

const ModelManagement = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-900 text-gray-900 dark:text-gray-200">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8 lg:p-8 lg:ml-64">
        <Navbar navbarName="AI Model Management" />
        <SearchFilterBar />
        <ModelTable />
        <Pagination />
      </main>
    </div>
  );
};

export default ModelManagement;
