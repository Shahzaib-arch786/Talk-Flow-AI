import React from "react";
import { EllipsisVertical } from "lucide-react";

const ModelTable = () => {
  const models = [
    { name: "Phoenix-v2", version: "2.1.0", status: "Active", color: "green", date: "2023-10-26" },
    { name: "Orion-beta", version: "0.9.5", status: "Training", color: "blue", progress: 75, date: "2023-10-25" },
    { name: "Legacy-System", version: "1.0.0", status: "Inactive", color: "gray", date: "2022-01-15" },
    { name: "Orion-alpha", version: "0.8.0", status: "Error", color: "red", date: "2023-09-30" },
  ];

  return (
    // Outer container must be full width
    <div className="w-full">
      {/* Responsive negative margin wrapper (optional, matches many Tailwind table patterns) */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        {/* Scroll wrapper: overflow-x-auto and touch scrolling */}
        <div
          className="overflow-x-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Inline-block + w-max makes the table width intrinsic and forces horizontal scroll on small screens */}
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-sm">
              <table className="w-max min-w-full text-sm table-auto">
                <thead className="bg-gray-800">
                  <tr>
                    {["", "Model Name", "Version", "Status", "Progress", "Creation Date", ""].map((heading, idx) => (
                      <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-300 whitespace-nowrap">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-800">
                  {models.map((m, idx) => (
                    <tr key={idx} className="hover:bg-gray-800/60 transition">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-700" />
                      </td>

                      <td className="px-4 py-3 text-gray-100 font-medium whitespace-nowrap">{m.name}</td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{m.version}</td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${m.color === 'green' ? 'bg-green-900/30 text-green-400' : m.color === 'blue' ? 'bg-blue-900/30 text-blue-400' : m.color === 'red' ? 'bg-red-900/30 text-red-400' : 'bg-gray-700 text-gray-300'}`}>
                          {m.status}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                        {m.progress ? (
                          <div className="flex items-center gap-3">
                            <div className="w-28 bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className="h-1.5 bg-blue-500 rounded-full"
                                style={{ width: `${m.progress}%` }}
                              />
                            </div>
                            <span className="text-xs">{m.progress}%</span>
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>

                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{m.date}</td>

                      <td className="px-4 py-3 text-right">
                        <button className="text-gray-400 hover:text-gray-200">
                          <EllipsisVertical />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelTable;
