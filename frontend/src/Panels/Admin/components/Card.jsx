const Card = ({ title, value, change, color }) => (
  <div className="bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-700 flex flex-col gap-2 items-start">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold">{value}</h2>
    <p className={`text-sm ${color}`}>{change}</p>
  </div>
);

export default Card;
