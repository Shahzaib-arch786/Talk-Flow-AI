import React from "react";

const ModelTable = () => {
  const models = [
    {
      name: "Phoenix-v2",
      version: "2.1.0",
      status: "Active",
      color: "green",
      date: "2023-10-26",
    },
    {
      name: "Orion-beta",
      version: "0.9.5",
      status: "Training",
      color: "blue",
      progress: 75,
      date: "2023-10-25",
    },
    {
      name: "Legacy-System",
      version: "1.0.0",
      status: "Inactive",
      color: "gray",
      date: "2022-01-15",
    },
    {
      name: "Orion-alpha",
      version: "0.8.0",
      status: "Error",
      color: "red",
      date: "2023-09-30",
    },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-900/50">
          <tr>
            {[
              "",
              "Model Name",
              "Version",
              "Status",
              "Progress",
              "Creation Date",
              "",
            ].map((heading, idx) => (
              <th
                key={idx}
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {models.map((m, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              <td className="px-6 py-4">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </td>
              <td className="px-3 py-4 text-sm font-medium text-gray-900 dark:text-white">
                {m.name}
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">{m.version}</td>
              <td className="px-3 py-4 text-sm">
                <span
                  className={`inline-flex items-center rounded-md bg-${m.color}-100 px-2 py-1 text-xs font-medium text-${m.color}-700 dark:bg-${m.color}-900/50 dark:text-${m.color}-300`}
                >
                  {m.status}
                </span>
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">
                {m.progress ? (
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="h-1.5 bg-primary rounded-full"
                        style={{ width: `${m.progress}%` }}
                      ></div>
                    </div>
                    {m.progress}%
                  </div>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">{m.date}</td>
              <td className="px-3 py-4 text-right text-sm">
                <button className="text-gray-500 hover:text-primary">
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
