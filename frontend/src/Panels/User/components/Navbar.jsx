import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ list = [], ButtonText, link }) => {
  return (
    <div>
      <div className="navbar bg-gray-900 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>{list[0]}</a>
              </li>
              <li>
                <a>{list[1]}</a>
              </li>
              <li>
                <a>{list[2]}</a>
              </li>
              <li>
                <a>{list[3]}</a>
              </li>
            </ul>
          </div>
          <a className="bg-gray-900 text-xl font-bold ml-8">TalkFlow AI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-96 gap-12">
            <li>
              <a>{list[0]}</a>
            </li>
             <li>
              <a>{list[1]}</a>
            </li>
             <li>
              <a>{list[2]}</a>
            </li>
             <li>
              <a>{list[3]}</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={link}
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
