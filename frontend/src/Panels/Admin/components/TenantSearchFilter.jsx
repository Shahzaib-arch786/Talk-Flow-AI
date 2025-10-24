import React from "react";
import { Search } from "lucide-react";

const SearchFilterBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      {/* Search Input */}
      <div className="relative w-full sm:w-1/2">
        <Search
          size={16}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search by tenant name or ID"
          className="bg-gray-900 border border-gray-800 rounded-lg pl-9 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-700"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-3 py-2 text-sm rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700">
          All 8
        </button>
        <button className="px-3 py-2 text-sm rounded-lg bg-gray-800 text-green-400 hover:bg-gray-700">
          Active
        </button>
        <button className="px-3 py-2 text-sm rounded-lg bg-gray-800 text-yellow-400 hover:bg-gray-700">
          Suspended
        </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;
