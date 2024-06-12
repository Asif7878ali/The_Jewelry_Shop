import React from 'react'
import ContactForm from './ContactForm.jsx'

const ProjectsDetails = () => {


    const productList = [
        {
          id: 1,
          name: "Vivacious Drop Earrings",
          image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxyeXxlbnwwfDB8MHx8fDA%3D",
          code: "50D2FFDIZAGA09",
          price: 25099,
        },
        
        {
            id: 2,
            name: "Violet Winters Hue Chain",
            image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfDB8MHx8fDA%3D",
            price: 15099,
          },
        
          
          {
            id: 3,
            name: "The Rainbow Hue Earrings",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 7509,
          },
        
          
          {
            id: 4,
            name: "Layers Of Amber Necklace",
            image: "https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpld2Vscnl8ZW58MHwwfDB8fHww",
            price: 65099,
          },
        
          
          {
            id: 5,
            name: "Glitterati Of Amber Chain",
            image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpld2Vscnl8ZW58MHwwfDB8fHww",
            price: 78599,
          },
          
      ];

  return (
    <>  
        <div className='lg:flex justify-center'>
       {productList.map((items) => (
         <div key={items.id} className="lg:w-60 lg:h-80 w-[90%] ml-5 mt-3 lg:ml-10 gap-1 cursor-pointer">
         <div className='rounded-md'>
             <img src={items.image} alt="not load" />
         </div>
         <div className="flex flex-col gap-4">
           <div className="flex flex-row justify-between">
             <div className="flex flex-col">
               <span className="text-xl font-bold">{items.name}</span>
               <p className="text-xs text-gray-700">{items.code}</p>
             </div>
             <span className="font-bold text-red-600">{items.price}</span>
           </div>
           <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 font-bold py-2">
             Add to cart
           </button>
         </div>
       </div>
       
      ))}
      </div>
      <ContactForm/>
    </>
  )
}

export default ProjectsDetails