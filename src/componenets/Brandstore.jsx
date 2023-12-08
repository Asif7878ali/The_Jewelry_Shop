import React from 'react'

const Brandstore = () => {
      
    const logo = "https://www.shutterstock.com/shutterstock/photos/1131994025/display_1500/stock-vector-red-fort-lal-qila-delhi-india-1131994025.jpg"
     
  return (
    <>
       <div className=' mt-5 text-center font-bold text-3xl'>
           <h1> Welcome to The Jewelry Store</h1>
       </div>
       <div className='text-center text-lg  mt-3'>
          <p>Shop from a wide range of exquisite designs for all occasions. All backed by the Trust of TATA</p>
       </div>
       <div className="flex items-center mt-3 justify-center">
        <input type="search" className="block w-full lg:w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="where do you want to shop..." required/>
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-sm shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"> Search </button>
    </div>

    <div className='mt-5 text-center font-bold text-3xl'>
        <h1>Popular Cities</h1>
        <div
      className="relative group cursor-pointer overflow-hidden duration-500 w-44 h-40 bg-gray-200 text-gray-50 mt-4 mb-4 ml-[8rem] lg:ml-[42rem]">
      <div>
       <img src={logo} alt="634"/>
        <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
          <span className="text-xl font-bold">Delhi</span>
         
        </div>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Brandstore