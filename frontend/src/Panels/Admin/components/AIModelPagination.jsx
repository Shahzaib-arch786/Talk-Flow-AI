import React from "react";

const AIModelPagination = () => (
  <nav className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-800 px-4 py-3">
    <p className="text-sm text-gray-400 mb-2 sm:mb-0">
      Showing <span className="font-medium text-gray-200">1</span> to{" "}
      <span className="font-medium text-gray-200">4</span> of{" "}
      <span className="font-medium text-gray-200">4</span> results
    </p>
    <div className="flex gap-3">
      <button className="rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">
        Previous
      </button>
      <button className="rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">
        Next
      </button>
    </div>
  </nav>
);

export default AIModelPagination;
