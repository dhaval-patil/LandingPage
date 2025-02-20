import React from "react";
import pack from '../assets/blue.png'
import back from '../assets/blue_webanner.png'
import { Link } from "react-router-dom";

const BluePage = () => {
  return (
    <>
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute">
        <img
          src={back}
          className="object-cover w-full h-full"
          alt="Background"
        />
      </div>

      {/* Package Image */}
      <div className="relative left-70 my-19   flex justify-center p-10">
        <img
          src={pack}
          alt="package image"
          className="h-140 hover:scale-110 duration-300"
        />
      </div>

      {/* Order Button */}
      <div className="relative -mt-110 mx-20">
        <button className="py-2 px-8 font-[oswald] text-[#d8e6e6] text-[25px] hover:scale-110 hover:rotate-2 duration-300 font-extrabold rounded-full drop-shadow-lg bg-[#32cee8]">
          ORDER NOW
        </button>
      </div>

        {/* Box Section */}
        <div className="flex justify-center items-center gap-8 -pb-10">
          <Link to="/">
            <div className="w-11 h-11 bg-green-500 text-white flex items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3">
              green
            </div>
          </Link>
          
          <Link to="/page1">
            <div className="w-11 h-11 bg-red-500 text-white flex items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:-rotate-3">
              red
            </div>
          </Link>
          
          <Link to="/page2">
            <div className="w-11 h-11 bg-blue-500 text-white flex items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3">
              blue
            </div>
          </Link>
        </div>
      </div>
    
    </>
  );
};

export default BluePage;
