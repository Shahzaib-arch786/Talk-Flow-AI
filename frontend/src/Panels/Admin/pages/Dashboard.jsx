import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ChartCard from "../components/ChartCard";
import TenantTable from "../components/TenantTable";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col transition-all duration-300 lg:ml-64">
        {/* Top Navbar */}
        <Navbar toggleSidebar={toggleSidebar} navbarName="Admin Dashboard" />

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card
              title="Real-time Call Volume"
              value="1,204"
              change="+5.2%"
              changeColor="text-green-500"
            />
            <Card
              title="Active Tenants"
              value="86"
              change="+1.2%"
              changeColor="text-green-500"
            />
            <Card
              title="Overall Model Accuracy"
              value="92.7%"
              change="-0.5%"
              changeColor="text-red-500"
            />
            <Card
              title="Critical Alerts"
              value="3"
              change="+2 since last week"
              changeColor="text-green-500"
            />
          </div>

          {/* Chart + Performance */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <ChartCard />
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 flex flex-col">
              <h3 className="font-semibold mb-3 text-center">
                AI Model Performance
              </h3>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-4xl font-bold text-blue-500">92.7%</div>
                <p className="text-gray-400 mt-1">Overall Accuracy</p>
              </div>
            </div>
          </div>

          {/* Recent Tenants Table */}
          <TenantTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
