import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const SystemSettings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex flex-col flex-1 min-h-screen p-4 sm:p-6 lg:p-8 lg:ml-64 transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} navbarName="System Settings" />

        <p className="text-gray-400 mb-6">
          Manage your platform’s configuration and integrations.
        </p>

        <div className="space-y-6">
          {/* Telephony API Credentials */}
          <div className="bg-gray-900 rounded-2xl shadow p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-1">
              Telephony API Credentials
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Configure the API keys for your telephony provider.
            </p>

            <div className="grid gap-4">
              <div>
                <label className="block text-sm mb-1">API Provider</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none">
                  <option>Twilio</option>
                  <option>Vonage</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">API Key</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter API key"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">API Secret</label>
                <input
                  type="password"
                  className="w-full bg-gray-700 border border-red-500 rounded-lg px-3 py-2 text-sm focus:outline-none"
                  placeholder="••••••••••"
                />
                <p className="text-xs text-red-400 mt-1">
                  Invalid API Secret. Please check and try again.
                </p>
              </div>
            </div>

            <button className="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg">
              Save Changes
            </button>
          </div>

          {/* Notification Preferences */}
          <div className="bg-gray-900 rounded-2xl shadow p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-1">
              Notification Preferences
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Choose how you receive alerts and updates.
            </p>

            <div className="space-y-3">
              {[
                "Email Notifications",
                "SMS Notifications",
                "Push Notifications",
              ].map((label) => (
                <div key={label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-gray-400">
                      {label === "Email Notifications"
                        ? "Receive summaries and alerts via email."
                        : label === "SMS Notifications"
                        ? "Get critical alerts sent to your phone."
                        : "Real-time alerts in browser or app."}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>

            <button className="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg">
              Save Changes
            </button>
          </div>

          {/* Global Configurations */}
          <div className="bg-gray-900 rounded-2xl shadow p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-1">
              Global Configurations
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Settings that apply to the entire platform.
            </p>

            <div className="space-y-3">
              {[
                {
                  label: "Automatic Call Recording",
                  desc: "Record all calls by default.",
                },
                {
                  label: "PII Redaction",
                  desc: "Automatically redact sensitive data.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>

            <button className="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg">
              Save Changes
            </button>
          </div>

          {/* Data Management */}
          <div className="bg-gray-900 rounded-2xl shadow p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-1">Data Management</h2>
            <p className="text-sm text-gray-400 mb-4">
              Manage data backups and export options.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Backup Data</p>
                <p className="text-xs text-gray-400">
                  Create a full backup of your platform data.
                  <br />
                  Last backup:{" "}
                  <span className="text-gray-300">2023-10-27 10:15</span>
                </p>
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm">
                Create Backup
              </button>
            </div>

            <hr className="my-4 border-gray-700" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Export Call Logs</p>
                <p className="text-xs text-gray-400">
                  Download a CSV of all call logs and transcripts.
                </p>
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SystemSettings;
