import React from "react";

const NavbarProfile = ({ list = ["Home", "About", "Contact"] }) => {
  return (
    <nav className="bg-gray-900 text-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-400">TalkFlow</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {list.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border-2 border-blue-400">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content absolute right-0 mt-3 w-52 bg-gray-800 rounded-box p-2 shadow-lg"
          >
            <li>
              <a className="justify-between hover:bg-gray-700 rounded-md">
                Profile{" "}
                <span className="badge bg-blue-500 text-white">New</span>
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-700 rounded-md">Settings</a>
            </li>
            <li>
              <a className="hover:bg-gray-700 rounded-md text-red-400">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Links */}
      <div className="md:hidden bg-gray-800 border-t border-gray-700">
        <ul className="flex flex-col p-3 space-y-2">
          {list.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block text-gray-300 hover:text-blue-400 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarProfile;
