import React from "react";

const CallLogsFilter = () => {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md flex flex-col sm:flex-row sm:flex-wrap gap-4">
      <input
        type="text"
        placeholder="Select date range"
        className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-gray-600"
      />

      <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm w-full sm:w-40 focus:outline-none">
        <option>All Statuses</option>
        <option>Completed</option>
        <option>Missed</option>
        <option>In Progress</option>
      </select>

      <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm w-full sm:w-40 focus:outline-none">
        <option>All Tenants</option>
        <option>Innovate Inc.</option>
        <option>Quantum Solutions</option>
      </select>

      <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm w-full sm:w-40 focus:outline-none">
        <option>All Users</option>
        <option>Alice Johnson</option>
        <option>Bob Williams</option>
      </select>

      <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-auto">
        <button className="bg-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-600 transition">
          Reset
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default CallLogsFilter;
