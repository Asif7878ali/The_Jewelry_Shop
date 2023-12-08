import React from 'react'

const Footer = () => {
    const logo = "https://png2.cleanpng.com/sh/bb37357c0ba0e3528a372b6442d01207/L0KzQYm3UsAzN6J3iZH0aYP2gLBuTfpmf5ZxhNd7eT3qf73rTflkd58ygtdCZXzvdcPCTcViP2U6T6hrN0K4QoW9TsMzQGE1UKU9MUW0R4aAU8k6PWU7UKU3cH7q/kisspng-jewellery-gold-icon-jewellery-5a74576b725246.3280083415175739954683.png"
  return (
    <>
       <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
            We implement extensive quality checks and only source our diamonds ethically from known, trusted and certified suppliers
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              {/* Social media links */}
              {/* Replace "#" with the actual URLs */}
              <p className="hover:opacity-75" >
                <span className="sr-only"> Facebook </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Facebook icon path */}
                </svg>
              </p>
             
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            {/* Navigation links */}
            <div>
          <p className="font-medium">
            Company

          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 cursor-pointer">
            <ul className="hover:opacity-75"> About </ul>
            <ul className="hover:opacity-75"> History </ul>
            <ul className="hover:opacity-75"> Careers </ul>
          </nav>
        </div>
       

        <div>
          <p className="font-medium">
            Helpful Links
          </p>
          <nav className="cursor-pointer flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <ul className="hover:opacity-75"> Contact </ul>
            <ul className="hover:opacity-75"> FAQs </ul>
            <ul className="hover:opacity-75"> Live Chat </ul>
          </nav>
        </div>
        <div>
          <p className="font-medium">
            Legal
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 cursor-pointer">
            <ul className="hover:opacity-75" > Privacy Policy </ul>
            <ul className="hover:opacity-75"> Terms &amp; Conditions </ul>
            <ul className="hover:opacity-75"> Returns Policy </ul>
          </nav>
        </div>
          
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          © 2023 The Jewelry Store
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer