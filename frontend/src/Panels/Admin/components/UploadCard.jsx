import React from "react";

const UploadCard = () => {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
      <div className="min-h-[220px] flex flex-col bg-gray-900 rounded-lg p-6 border-2 border-dashed border-gray-700 items-center justify-center">
        <div className="text-gray-400 mb-3">
          <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-100">Upload Training Dataset</h3>
        <p className="text-sm text-gray-400 text-center max-w-xl mt-2">
          Drag &amp; drop your file here or click to browse. Supported formats: CSV, JSON.
        </p>

        <button className="mt-4 px-4 py-2 rounded-md bg-gray-700 text-gray-100 hover:bg-gray-600">
          Browse Files
        </button>

        <a href="#" className="mt-3 text-sm text-blue-400 hover:underline">View dataset requirements</a>

        <button
          className="mt-6 w-full py-3 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
          title="Start Training (placeholder)"
          disabled
        >
          Start Training
        </button>
      </div>
    </div>
  );
};

export default UploadCard;
