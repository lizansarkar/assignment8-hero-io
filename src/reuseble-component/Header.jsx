import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="max-w-[1400px] mx-auto">
      <div className="navbar bg-base-100">
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
            {/* small mobile menute show korbee */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <a href="/" className="text-xl flex items-center gap-2">
            <img className="h-10" src="/img/logo.png" alt="logo" />
            <h1 className="font-bold text-[#632EE3]">HERO IO</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            {/* main menu te show korbe mane sojasuji */}
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/lizansarkar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 text-white font-semibold text-lg 
        rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 
        hover:scale-[1.03] active:scale-[0.98] active:shadow-sm">
            <FaGithub className="mr-3 h-6 w-6" />
            Contribute
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
