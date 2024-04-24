import React, { useState } from 'react';
import CardItem from './CardItem';
import { dummyData } from '../utils/helper';

const ScroolLibrary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === dummyData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='flex flex-col justify-center shadow-lg w-[70%] p-2 rounded-sm relative'>
      <div className='flex'>
        <button className="top-0 bottom-0 left-0 z-10 h-76 flex items-center justify-center w-10 text-white bg-black bg-opacity-60 hover:bg-opacity-90" onClick={handlePrev}>
          &lt;
        </button>
        <div className="flex overflow-x-hidden scrollbar-hide">
          {dummyData.map((item, index) => (
            <CardItem key={index} item={item} isVisible={index === currentIndex} />
          ))}
        </div>
        <button className="top-0 bottom-0 h-76 right-0 z-10 flex items-center justify-center w-10 text-white bg-black bg-opacity-60 hover:bg-opacity-90" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="mt-2 flex flex-col items-center justify-center">
        <ul className='flex'>
        {dummyData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-6 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
        </ul>
        <button className='bg-slate-300  rounded-lg px-4 mx-auto font-semibold py-1 my-5 cursor-pointer'>View More</button>
      </div>
    </div>
  );
};

export default ScroolLibrary;
