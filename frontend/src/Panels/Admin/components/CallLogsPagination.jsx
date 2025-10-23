import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center text-sm text-gray-400">
      <p>Showing 1–10 of 100</p>
      <div className="flex gap-1">
        <button className="px-2 py-1 bg-gray-800 rounded">{"<"}</button>
        <button className="px-2 py-1 bg-blue-600 rounded">1</button>
        <button className="px-2 py-1 bg-gray-800 rounded">2</button>
        <button className="px-2 py-1 bg-gray-800 rounded">3</button>
        <button className="px-2 py-1 bg-gray-800 rounded">{">"}</button>
      </div>
    </div>
  );
};

export default Pagination;
