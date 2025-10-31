import React from "react";
import { FileText, RefreshCw, Play } from "lucide-react";

const StatusBadge = ({ status }) => {
  const map = {
    "In Progress": "bg-yellow-700 text-yellow-100",
    Completed: "bg-green-700 text-green-100",
    Failed: "bg-red-700 text-red-100",
  };
  return <span className={`px-3 py-1 rounded-md text-xs font-semibold ${map[status] || "bg-gray-700 text-gray-100"}`}>{status}</span>;
};

const TrainingHistoryTable = () => {
  const rows = [
    { id: "#JOB-78912", status: "In Progress", date: "2023-10-27 14:32", duration: "12m 45s", user: "admin@example.com" },
    { id: "#JOB-78911", status: "Completed", date: "2023-10-26 10:15", duration: "25m 10s", user: "admin@example.com" },
    { id: "#JOB-78910", status: "Failed", date: "2023-10-25 18:40", duration: "5m 02s", user: "jane.doe@example.com" },
  ];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mt-6">
      <h3 className="text-lg font-semibold text-white mb-4">Training History</h3>

      <div className="overflow-auto">
        <table className="min-w-full text-sm table-auto">
          <thead className="text-xs text-gray-400 uppercase">
            <tr>
              <th className="px-3 py-3 text-left">Job ID</th>
              <th className="px-3 py-3 text-left">Status</th>
              <th className="px-3 py-3 text-left">Start Date</th>
              <th className="px-3 py-3 text-left">Duration</th>
              <th className="px-3 py-3 text-left">User</th>
              <th className="px-3 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-gray-900">
                <td className="px-3 py-4 text-gray-100 font-medium">{r.id}</td>
                <td className="px-3 py-4"><StatusBadge status={r.status} /></td>
                <td className="px-3 py-4 text-gray-300 whitespace-nowrap">{r.date}</td>
                <td className="px-3 py-4 text-gray-300">{r.duration}</td>
                <td className="px-3 py-4 text-gray-300">{r.user}</td>
                <td className="px-3 py-4">
                  <div className="flex items-center gap-3 justify-end">
                    <button className="text-gray-400 hover:text-gray-200"><FileText size={16} /></button>
                    <button className="text-gray-400 hover:text-gray-200"><Play size={16} /></button>
                    <button className="text-gray-400 hover:text-gray-200"><RefreshCw size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer with pagination like text (placeholder) */}
      <div className="mt-4 text-sm text-gray-400">Showing 1 to 3 of 3 results</div>
    </div>
  );
};

export default TrainingHistoryTable;
