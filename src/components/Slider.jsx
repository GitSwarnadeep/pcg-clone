import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Slider({ bgpic, heading, text, button }) {
  return (
    <div 
      className="relative bg-cover bg-center text-white p-10 flex items-center  justify-between h-[60vh] lg:h-[80vh]" 
      style={{ 
        backgroundImage: `url(${bgpic})`, 
      }} 
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#19325b] to-transparent"></div>
      <div className="relative flex flex-col lg:flex-row items-center justify-evenly lg:justify-start text-center lg:text-left h-full px-12">
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold ">{heading}</h1>
          <p className="my-6">{text}</p>
          <div className='relative flex flex-col lg:flex-row items-center justify-evenly lg:justify-start text-center lg:text-left'>
            <button className="border hover:bg-[#19325b] text-white font-bold py-2 px-4 flex justify-between gap-8 items-center">
              {button}
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
