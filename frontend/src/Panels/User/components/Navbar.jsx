import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ ButtonText, btnlink, simulation }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navbar bg-gray-900 shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-gray-50 hover:underline"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("features")}
                  className="text-gray-50 hover:underline"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("pricing")}
                  className="text-gray-50 hover:underline"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="text-gray-50 hover:underline"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link to={simulation} className="text-gray-50 hover:underline">
                  Try Simulation
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="bg-gray-900 text-xl font-bold ml-8 hover:scale-105 hover:transition-duration-300"
            onClick={() => handleScroll("main")}
          >
            TalkFlow AI
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-96 gap-12">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-gray-50 hover:underline"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("features")}
                className="text-gray-50 hover:underline"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("pricing")}
                className="text-gray-50 hover:underline"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-gray-50 hover:underline"
              >
                Contact
              </button>
            </li>
            <li>
              <Link to={simulation} className="text-gray-50 hover:underline">
                Try Simulation
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Button */}
        <div className="navbar-end">
          <Link
            to={btnlink}
            className="btn bg-gradient-to-b from-blue-500 to-blue-700 mr-7 text-white"
          >
            {ButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
