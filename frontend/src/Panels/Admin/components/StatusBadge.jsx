import React from "react";

const StatusBadge = ({ status }) => {
  const colors = {
    Active: "bg-green-700 text-green-100",
    Invited: "bg-yellow-700 text-yellow-100",
    Suspended: "bg-red-700 text-red-100",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status] || "bg-gray-700 text-gray-200"}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
