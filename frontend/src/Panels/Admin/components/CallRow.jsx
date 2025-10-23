import React from "react";
import { FileText, Eye } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-700 text-green-200";
    case "Missed":
      return "bg-red-700 text-red-200";
    case "In Progress":
      return "bg-yellow-700 text-yellow-200";
    case "Voicemail":
      return "bg-gray-700 text-gray-300";
    default:
      return "bg-gray-700 text-gray-300";
  }
};

const CallRow = ({ call }) => {
  return (
    <tr className="border-b border-gray-800 hover:bg-gray-800 transition">
      <td className="p-3">{call.id}</td>
      <td className="p-3">{call.tenant}</td>
      <td className="p-3">{call.user}</td>
      <td className="p-3">
        <span className={`px-2 py-1 text-xs rounded-md ${getStatusColor(call.status)}`}>
          {call.status}
        </span>
      </td>
      <td className="p-3">{call.date}</td>
      <td className="p-3">{call.duration}</td>
      <td className="p-3 truncate max-w-[150px]">{call.transcript}</td>
      <td className="p-3 text-right flex justify-end gap-3">
        <Eye className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
        <FileText className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
      </td>
    </tr>
  );
};

export default CallRow;
