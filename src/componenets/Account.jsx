import React from 'react'
import { Link } from "react-router-dom";

const Account = () => {

    const backgroundImageUrl = "https://dslsa.org/ed/wp-content/uploads/2015/08/books-of-accounts.jpg"  

  return (
    <>
       <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: `url(${backgroundImageUrl})`, height: '600px' }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="">
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Account</h1>
          <form className="flex flex-col items-center">
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md  text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Name"
                />
                <input
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md  text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-md  text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                id="message"
                rows="5"
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-md  text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
             <Link to="/">
               <button className="border-2 text-md mt-5 rounded-md py-2 px-4 transition duration-300 ease-in-out focus:outline-none bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 font-bold"> Send Message </button>
            </Link>
          </form>
        </div>
      </div>
    </div>           

      
          </div>
        </div>
    </>
  )
}

export default Account