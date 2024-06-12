import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  return (
    <>
      <nav>
        <header className="text-slate-700 bg-pink-200 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
          <div className="flex lg:flex">
            <p className="items-center text-3xl whitespace-nowrap font-black italic lg:pl-3 pl-2">TJS</p>
          </div>

          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-5 right-5 cursor-pointer lg:hidden"
            htmlFor="navbar-open"
          >
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
          >
            <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
              <li className="lg:mr-12">
                <Link to="/diamond">
                  <p className="rounded font-bold text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                  Diamond
                </p>
                </Link>
              </li>
              <li className="lg:mr-12">
                <Link to="/store">
                <p className="rounded font-bold text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                  Stores
                </p>
                </Link>
              </li>
              <li className="lg:mr-12">
                <Link to="/account">
                <p className="rounded font-bold text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                  Account
                </p>
                </Link>
              </li>
              <li className="lg:mr-12">
                <Link to="/card">
                <p className="rounded font-bold text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                  Card
                </p>
                </Link>
              </li>
            </ul>

            <hr className="mt-4 w-full lg:hidden" />
            <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                Login
              </button>

              <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                Signin
              </button>
            </div>
          </nav>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
