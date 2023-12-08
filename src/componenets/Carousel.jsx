import React, { useState, useEffect, useCallback } from "react";
import ProjectsDetails from './ProjectsDetails.jsx'


const Carousel = () => {
  const images = [
    "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/the-italian-connection-desktop.jpg",
    "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/bannerdesktop.jpg",
    "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/bannerdesktopbts.jpg",
    "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/finefinishdesktopbanner.jpg",
    "https://staticimg.titan.co.in/Tanishq/Banners/thejoyofdressing/images/crescendodesktopbanner.jpg",
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
      <div className="relative w-full">
       
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
