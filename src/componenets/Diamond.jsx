import React from 'react'
import { Link } from "react-router-dom";

const Diamond = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:h-80">
          <div className="flex flex-col bg-white items-center rounded-xl">
            <div className="p-4 text-center md:py-7 md:px-5">
              <h3 className="text-3xl font-bold text-gray-800">No More Diamond Avalable</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 mb-2">
                As Soon we are Possible to Provide the Best Diamond
              </p>
              <Link to="/">
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                Home
              </button>
              </Link>
            </div>
          </div>
        </div>

    </>
  )
}

export default Diamond