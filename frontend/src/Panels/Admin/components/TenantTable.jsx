const tenants = [
  { name: "Innovate Corp", date: "2023-10-26", plan: "Enterprise", status: "Active" },
  { name: "Solutions Inc", date: "2023-10-25", plan: "Pro", status: "Active" },
  { name: "Data Dynamics", date: "2023-10-24", plan: "Enterprise", status: "Pending" },
  { name: "Future Forward", date: "2023-10-22", plan: "Starter", status: "Inactive" },
];

const TenantTable = () => (
  <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-sm">
    <h3 className="font-semibold mb-3">Recent Tenant Signups</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b text-gray-300">
          <th className="text-left py-2">Tenant Name</th>
          <th className="text-left">Signup Date</th>
          <th className="text-left">Plan</th>
          <th className="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {tenants.map((t, i) => (
          <tr key={i} className="border-b last:border-none text-gray-400">
            <td className="py-2">{t.name}</td>
            <td>{t.date}</td>
            <td>{t.plan}</td>
            <td>
              <span
                className={`px-2 py-1 rounded-md text-xs ${
                  t.status === "Active"
                    ? "text-green-500"
                    : t.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-700"
                }`}
              >
                {t.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TenantTable;
