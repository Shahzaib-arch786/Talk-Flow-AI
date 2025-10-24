import React from "react";
import { Search } from "lucide-react";

const SearchFilterBar = () => {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      {/* Search Bar */}
      <div className="relative w-full sm:w-1/2">
        <Search
          size={16}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search by Model name"
          className="bg-gray-900 border border-gray-800 rounded-lg pl-9 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-700"
        />
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto">
        <button className="flex h-9 items-center gap-x-2 rounded-lg bg-primary/20 pl-3 pr-2 text-primary">
          <p className="text-sm font-medium">Status: All</p>
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        {["Active", "Training", "Inactive"].map((status) => (
          <button
            key={status}
            className="flex h-9 items-center gap-x-2 rounded-lg bg-gray-200/60 px-3 py-2 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20"
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterBar;
