import React from "react";
import CallRow from "./CallRow";
import Pagination from "./Pagination";

const calls = [
  {
    id: "#8B3D4F",
    tenant: "Innovate Inc.",
    user: "Alice Johnson",
    status: "Completed",
    date: "Oct 26, 2023, 10:15 AM",
    duration: "05:32",
    transcript: '"Yes, I can confirm that the payment has ..."',
  },
  {
    id: "#C7A2E1",
    tenant: "Quantum Solutions",
    user: "Bob Williams",
    status: "Missed",
    date: "Oct 26, 2023, 09:45 AM",
    duration: "00:00",
    transcript: "N/A",
  },
  {
    id: "#F9D3B4",
    tenant: "Stellar Corp",
    user: "Charlie Brown",
    status: "In Progress",
    date: "Oct 26, 2023, 09:30 AM",
    duration: "01:15",
    transcript: '"Hello, I’m calling about the status of my r..."',
  },
  {
    id: "#A5E8C9",
    tenant: "Innovate Inc.",
    user: "Alice Johnson",
    status: "Voicemail",
    date: "Oct 25, 2023, 04:50 PM",
    duration: "00:45",
    transcript: '"Hi Alice, this is Mark. Please give me a c..."',
  },
];

const CallLogsTable = () => {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg w-full overflow-x-auto border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Calls</h2>
        <button className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded-md">
          Export
        </button>
      </div>

      <table className="min-w-[700px] w-full text-sm text-gray-300">
        <thead className="uppercase text-gray-400 text-xs border-b border-gray-800">
          <tr>
            <th className="p-3 text-left">Call ID</th>
            <th className="p-3 text-left">Tenant</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date & Time</th>
            <th className="p-3 text-left">Duration</th>
            <th className="p-3 text-left">Transcript Snippet</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call, index) => (
            <CallRow key={index} call={call} />
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default CallLogsTable;
