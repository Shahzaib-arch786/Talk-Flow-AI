import React from "react";
import { Trash2 } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "text-green-400";
    case "Suspended":
      return "text-yellow-400";
    case "Canceled":
      return "text-gray-400";
    default:
      return "text-gray-300";
  }
};

const TenantDetails = ({ tenant }) => {
  if (!tenant) return null;

  return (
    <div className="bg-gray-900 rounded-xl p-5 shadow-md flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-gray-800 pb-3">
        <div>
          <h2 className="text-lg font-semibold">{tenant.name}</h2>
          <p className="text-xs text-gray-400">ID: {tenant.id}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm">
            Suspend Tenant
          </button>
          <button className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm flex items-center gap-1">
            <Trash2 size={14} /> Delete
          </button>
        </div>
      </div>

      {/* Profile & Subscription */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Profile</h3>
            <button className="text-xs text-gray-400 hover:text-gray-200">
              Edit
            </button>
          </div>
          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-300">Contact:</span>{" "}
            {tenant.contact || "N/A"}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-300">Email:</span>{" "}
            {tenant.email || "N/A"}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-300">Address:</span>{" "}
            {tenant.address || "N/A"}
          </p>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Subscription</h3>
          <p className="text-sm">
            <span className="font-medium text-gray-300">Plan:</span>{" "}
            {tenant.plan}
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-300">Status:</span>{" "}
            <span className={getStatusColor(tenant.status)}>
              {tenant.status}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-gray-300">Renewal Date:</span>{" "}
            {tenant.renewalDate || "N/A"}
          </p>
        </div>
      </div>

      {/* API Key Section */}
      <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
        <h3 className="font-semibold mb-3">API Key & Usage</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="bg-gray-900 rounded-md px-3 py-2 text-sm font-mono overflow-x-auto">
            {tenant.apiKey || "sk_live_**************"}
          </div>
          <div className="flex gap-2">
            <button className="text-blue-400 hover:underline text-sm">
              Copy
            </button>
            <button className="text-red-400 hover:underline text-sm">
              Revoke
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:justify-between text-sm text-gray-300">
          <p>
            <span className="text-gray-400">Monthly API Calls: </span>
            {tenant.apiCalls || "N/A"}
          </p>
          <p>
            <span className="text-gray-400">Avg. Call Duration: </span>
            {tenant.callDuration || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
