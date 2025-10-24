import React from "react";

const Pagination = () => (
  <nav className="mt-6 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 dark:border-gray-800">
    <div className="hidden sm:block text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-medium">1</span> to{" "}
      <span className="font-medium">4</span> of{" "}
      <span className="font-medium">4</span> results
    </div>
    <div className="flex justify-end gap-3">
      <a
        href="#"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-300"
      >
        Previous
      </a>
      <a
        href="#"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-300"
      >
        Next
      </a>
    </div>
  </nav>
);

export default Pagination;
