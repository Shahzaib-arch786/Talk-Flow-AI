import React from "react";
import { Search } from "lucide-react";

const AISearchFilterBar = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Search Bar */}
      <div className="relative w-full sm:w-1/2">
        <Search
          size={16}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search by model name"
          className="bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-200 placeholder-gray-500"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <button className="flex items-center gap-x-2 rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-gray-200">
          Status: All <span className="material-symbols-outlined">expand_more</span>
        </button>
        {["Active", "Training", "Inactive"].map((status) => (
          <button
            key={status}
            className="flex items-center gap-x-2 rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600"
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AISearchFilterBar;
