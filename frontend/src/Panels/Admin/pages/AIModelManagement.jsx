import React from "react";
import { Search, Plus, ArrowRight, Filter } from "lucide-react";
import ModelTable from "../components/ModelTable";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
const ModelManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">AI Model Management</h1>

          <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
            <button className="bg-gray-700 text-gray-200 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Go to Model Testing
            </button>

            <Link to="/AD/modeltraining" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
              <Plus className="w-4 h-4" />
              Upload New Model
            </Link>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by model name..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            <button className="bg-blue-900/30 text-blue-400 px-4 py-1.5 rounded-lg text-sm flex items-center gap-2">
              <Filter className="w-4 h-4" /> Status: All
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-1.5 rounded-lg text-sm">
              Active
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-1.5 rounded-lg text-sm">
              Training
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-1.5 rounded-lg text-sm">
              Inactive
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-gray-900 rounded-lg overflow-x-auto lg:overflow-x-hidden lg:p-8">
          <ModelTable />
        </div>

        {/* Footer / Pagination */}
        <div className="flex items-center justify-between text-sm text-gray-400 mt-3">
          <span>Showing 1 to 4 of 4 results</span>
          <div className="flex gap-2">
            <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg">
              Previous
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModelManagement;
