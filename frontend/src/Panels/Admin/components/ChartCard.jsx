import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", volume: 300 },
  { time: "06:00", volume: 600 },
  { time: "12:00", volume: 200 },
  { time: "18:00", volume: 800 },
  { time: "23:59", volume: 500 },
];

const ChartCard = () => (
  <div className="bg-gray-900 p-6 border border-gray-700 rounded-lg  shadow-sm flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Call Volume Analysis</h3>
      <div className="flex gap-2 text-sm">
        <button className="px-2 py-1 rounded-md hover:bg-gray-600">24h</button>
        <button className="px-2 py-1 rounded-md hover:bg-gray-600">7d</button>
        <button className="px-2 py-1 rounded-md hover:bg-gray-600">30d</button>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line type="monotone" dataKey="volume" stroke="#2563eb" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ChartCard;
