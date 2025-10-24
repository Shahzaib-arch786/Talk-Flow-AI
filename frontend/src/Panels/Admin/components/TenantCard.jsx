import React from "react";

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

const TenantCard = ({ tenant, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer mb-2 border ${
        isSelected
          ? "border-blue-600 bg-gray-800"
          : "border-gray-800 hover:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">
          {tenant.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{tenant.name}</p>
          <p className="text-xs text-gray-400">{tenant.plan}</p>
        </div>
      </div>
      <p className={`text-xs font-semibold ${getStatusColor(tenant.status)}`}>
        {tenant.status}
      </p>
    </div>
  );
};

export default TenantCard;
