import React from "react";

const LiveLog = ({ children }) => (
  <pre className="bg-gray-900 text-xs text-gray-300 rounded-md p-3 max-h-36 overflow-auto border border-gray-800">
    {children}
  </pre>
);

const ProgressBar = ({ value = 72 }) => (
  <div className="w-full bg-gray-800 rounded-full h-3">
    <div
      className="h-3 rounded-full bg-blue-500"
      style={{ width: `${value}%` }}
    />
  </div>
);

const CurrentJobCard = () => {
  const logs = ` [INFO] 2023-10-27 14:32:10 - Job started...
[INFO] 2023-10-27 14:32:11 - Preprocessing...
[EPOCH 1/10] Loss: 0.123, Accuracy: 0.95
[EPOCH 2/10] Loss: 0.111, Accuracy: 0.96
[EPOCH 3/10] Loss: 0.105, Accuracy: 0.97
[EPOCH 4/10] Loss: 0.098, Accuracy: 0.97
[EPOCH 5/10] Loss: 0.092, Accuracy: 0.98
[... scrolling ...]`;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-semibold text-white">Current Training Job</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-gray-400">
            Status: <span className="text-yellow-400 font-medium">Training</span>
          </div>
          <div className="text-sm text-gray-300">72%</div>
        </div>

        <div className="mt-3">
          <ProgressBar value={72} />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Preprocessing</span>
            <span>Training</span>
            <span>Validating</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-200 mb-2">Live Logs</h4>
        <LiveLog>{logs}</LiveLog>
      </div>
    </div>
  );
};

export default CurrentJobCard;
