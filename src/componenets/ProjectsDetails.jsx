import React from 'react'
import ContactForm from './ContactForm.jsx'

const ProjectsDetails = () => {


    const productList = [
        {
          id: 1,
          name: "Vivacious Drop Earrings",
          image: "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/50D2FFDIZAGA09.jpg",
          code: "50D2FFDIZAGA09",
          price: 25099,
        },
        
        {
            id: 2,
            name: "Violet Winters Hue Chain",
            image: "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/50D2FFGHMGAA29.jpg",
            code: "50D2FFGHMGAA29",
            price: 15099,
          },
        
          
          {
            id: 3,
            name: "The Rainbow Hue Earrings",
            image: "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/50D2I2SNAADA37.jpg",
            code: "50D2FFDIZA46309",
            price: 7509,
          },
        
          
          {
            id: 4,
            name: "Layers Of Amber Necklace",
            image: "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/50D2I2NCFAAA00.jpg",
            code: "50D2FFDIZAdg43fd09",
            price: 65099,
          },
        
          
          {
            id: 5,
            name: "Glitterati Of Amber Chain",
            image: "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/50D2FFGPEAA09.jpg",
            code: "50D2FFDIZAGAbss09",
            price: 78599,
          },
          
      ];

  return (
    <>  
        <div className='lg:flex lg:ml-10'>
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