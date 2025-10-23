import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
      <p>Showing 1 to 5 of 25 results</p>
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-lg hover:bg-gray-800">
          <ChevronLeft size={16} />
        </button>
        {[1,2,3,"...",5].map((n,i) => (
          <button key={i} className={`px-3 py-1 rounded-lg ${n===1 ? "bg-blue-600 text-white" : "hover:bg-gray-800"}`}>
            {n}
          </button>
        ))}
        <button className="p-2 rounded-lg hover:bg-gray-800">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
