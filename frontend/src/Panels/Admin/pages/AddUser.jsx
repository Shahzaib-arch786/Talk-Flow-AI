import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ArrowLeft, Eye, EyeOff, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-4 sm:p-6 lg:p-8 lg:ml-64 transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} navbarName="Add New User" />

        {/* Back Button */}
        <div className="flex items-center gap-2 text-gray-400 hover:text-white mt-4 cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          <Link to="/AD/users">Back to User Management</Link>
        </div>

        {/* Page Title */}
        <div className="mt-4">
          {/* <h1 className="text-2xl font-semibold text-white">Add New User</h1> */}
          <p className="text-gray-400 text-sm mt-1">
            Add a new team member and assign them a role.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-6 bg-gray-900 p-6 rounded-xl shadow-md max-w-6xl border border-gray-700">
          <form className="space-y-5">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Alex Johnson"
                  className="w-full mt-1 p-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-200"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex.johnson@example.com"
                  className="w-full mt-1 p-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-200"
                />
                {/* Example of validation message */}
                <p className="text-xs text-red-400 mt-1">Please enter a valid email address.</p>
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-300">Role</label>
              <select className="w-full mt-1 p-2.5 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Agent</option>
                <option>Manager</option>
                <option>Administrator</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-300">
                Initial Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter a secure password"
                  autoComplete="current password"
                  className="w-full mt-1 p-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-200 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long, including uppercase,
                lowercase, and numbers.
              </p>
            </div>

            {/* Send Invitation */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 text-blue-500 border-gray-700 bg-gray-900 rounded focus:ring-0"
              />
              <div>
                <p className="text-sm text-gray-200">
                  Send an invitation email
                </p>
                <p className="text-xs text-gray-500">
                  The new user will receive an email to set up their account and
                  password.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                className="px-4 py-2.5 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                <UserPlus className="w-4 h-4" />
                Add User
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddUser;
