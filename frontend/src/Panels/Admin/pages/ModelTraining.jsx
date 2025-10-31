import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import UploadCard from "../components/UploadCard";
import CurrentJobCard from "../components/CurrentJobCard";
import TrainingHistoryTable from "../components/TrainingHistoryTable";

const ModelTrainingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      {/* Sidebar (desktop fixed, mobile slide-in) */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main className="flex-1 min-h-screen lg:ml-64 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="text-center sm:text-left font-bold">
          <Navbar toggleSidebar={toggleSidebar} navbarName="Model Training" />
        </div>

        {/* Page Heading */}
        <div className="mt-4 sm:mt-6">
          <p className="text-gray-400 mt-1">
            Upload training data, monitor job progress, and manage model versions.
          </p>
        </div>

        {/* Top Cards: Upload + Current Job */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UploadCard />
          </div>

          <div className="lg:col-span-1">
            <CurrentJobCard />
          </div>
        </div>

        {/* Training History */}
        <div className="mt-6">
          <TrainingHistoryTable />
        </div>
      </main>
    </div>
  );
};

export default ModelTrainingPage;
