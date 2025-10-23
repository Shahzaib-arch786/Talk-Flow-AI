import React from "react";
import StatusBadge from "./StatusBadge";
import { MoreVertical } from "lucide-react";

const UserRow = ({ user }) => {
  return (
    <tr className="border-b border-gray-800 hover:bg-gray-800/60">
      <td className="p-3">
        <input type="checkbox" className="accent-blue-600" />
      </td>
      <td className="flex items-center gap-3 p-3">
        <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
        <span className="text-gray-200 font-medium">{user.name}</span>
      </td>
      <td className="p-3 text-gray-400">{user.email}</td>
      <td className="p-3 text-gray-300">{user.role}</td>
      <td className="p-3">
        <StatusBadge status={user.status} />
      </td>
      <td className="p-3 text-gray-400">{user.lastLogin}</td>
      <td className="p-3 text-gray-400 text-right">
        <button>
          <MoreVertical className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
