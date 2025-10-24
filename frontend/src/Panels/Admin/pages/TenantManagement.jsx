import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchFilterBar from "../components/TenantSearchFilter";
import TenantList from "../components/TenantList";
import TenantDetails from "../components/TenantDetails";
import Navbar from "../components/Navbar";

const tenantsData = [
  {
    id: "ten_1a2b3c4d5e",
    name: "Innovate Corp",
    plan: "Enterprise Plan",
    status: "Active",
    email: "jane.doe@innovate.com",
    contact: "Jane Doe",
    address: "123 Tech Lane, CA 94043",
    renewalDate: "2024-12-01",
    apiKey: "sk_live_****************1a2b",
    apiCalls: "1,245,670",
    callDuration: "2m 45s",
  },
  { id: "ten_5f6g7h8i9j", name: "Quantum Solutions", plan: "Pro Plan", status: "Active" },
  { id: "ten_2k3l4m5n6o", name: "Data Weavers LLC", plan: "Pro Plan", status: "Suspended" },
  { id: "ten_9p0q1r2s3t", name: "Synergy Systems", plan: "Basic Plan", status: "Canceled" },
];

const TenantManagementPage = () => {
  const [selectedTenant, setSelectedTenant] = useState(tenantsData[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex bg-gray-900 text-gray-200 min-h-screen overflow-hidden">
      {/* SIDEBAR */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64">
        <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
      </aside>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* SIDEBAR OVERLAY (MOBILE) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* MAIN CONTENT */}
      <main className="flex flex-col flex-1 lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8 transition-all duration-300 overflow-x-hidden">
        {/* NAVBAR */}
        <Navbar
          toggleSidebar={toggleSidebar}
          navbarName="Tenant Management"
          className="text-2xl font-bold"
        />

        {/* SEARCH + FILTER */}
        <div className="mt-6">
          <SearchFilterBar />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <TenantList
            tenants={tenantsData}
            selectedTenant={selectedTenant}
            onSelectTenant={setSelectedTenant}
          />
          <TenantDetails tenant={selectedTenant} />
        </div>
      </main>
    </div>
  );
};

export default TenantManagementPage;
