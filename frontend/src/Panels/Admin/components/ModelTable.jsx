import React from "react";

const ModelTable = () => {
  const models = [
    { name: "Phoenix-v2", version: "2.1.0", status: "Active", color: "green", date: "2023-10-26" },
    { name: "Orion-beta", version: "0.9.5", status: "Training", color: "blue", progress: 75, date: "2023-10-25" },
    { name: "Legacy-System", version: "1.0.0", status: "Inactive", color: "gray", date: "2022-01-15" },
    { name: "Orion-alpha", version: "0.8.0", status: "Error", color: "red", date: "2023-09-30" },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-900 shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-800">
          <tr>
            {["", "Model Name", "Version", "Status", "Progress", "Creation Date", ""].map((heading, idx) => (
              <th key={idx} className="px-3 py-3.5 text-left font-semibold text-gray-300 whitespace-nowrap">
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800">
          {models.map((m, idx) => (
            <tr key={idx} className="hover:bg-gray-800/60 transition">
              <td className="px-3 py-3">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-700" />
              </td>
              <td className="px-3 py-3 text-gray-100 font-medium">{m.name}</td>
              <td className="px-3 py-3 text-gray-400">{m.version}</td>
              <td className="px-3 py-3">
                <span
                  className={`inline-flex items-center rounded-md bg-${m.color}-900/30 px-2 py-1 text-xs font-medium text-${m.color}-400`}
                >
                  {m.status}
                </span>
              </td>
              <td className="px-3 py-3 text-gray-400">
                {m.progress ? (
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-700 rounded-full">
                      <div
                        className="h-1.5 bg-blue-500 rounded-full"
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                    {m.progress}%
                  </div>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-3 py-3 text-gray-400 whitespace-nowrap">{m.date}</td>
              <td className="px-3 py-3 text-right">
                <button className="text-gray-400 hover:text-gray-200">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModelTable;
