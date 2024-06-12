import React, { useState, useEffect, useCallback } from "react";
import ProjectsDetails from './ProjectsDetails.jsx'


const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpld2Vscnl8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1585960622850-ed33c41d6418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amV3ZWxyeXxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxyeXxlbnwwfDB8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1674748384572-4bfba72773c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxyeXxlbnwwfDB8MHx8fDA%3D",
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handlePrevClick = () => {
    setActiveItem((prevItem) =>
      prevItem === 0 ? images.length - 1 : prevItem - 1
    );
  };

  const handleNextClick = useCallback(() => {
    setActiveItem((prevItem) =>
      prevItem === images.length - 1 ? 0 : prevItem + 1
    );
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeItem, handleNextClick]);
  return (
    <>
      <div className="relative w-[91%] mt-3 lg:ml-20">
       
        <div className="relative lg:h-96 overflow-hidden rounded-lg md:h-96 h-60">
          {images.map((item, index) => (
            <div
              key={index}
              className={`${
                index === activeItem ? "duration-700 ease-in-out" : "hidden"
              }`}
              data-carousel-item={index === activeItem ? "active" : ""}
            >
              <img
                src={item}
                className="absolute block h-full  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Carousel Item ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button type="button"
          className="absolute lg:mt-40 mt-20 top-0 start-0 z-30 flex items-center text-4xl justify-center px-4 cursor-pointer group font-bold"
          onClick={handlePrevClick}> &lt; </button>
        <button type="button"
          className="absolute lg:mt-40 mt-20 top-0 end-0 z-30 flex items-center text-4xl justify-center px-4 cursor-pointer group font-bold"
          onClick={handleNextClick}> &gt; </button>
      </div>
       <ProjectsDetails/>
    </>
  );
};

export default Carousel;
