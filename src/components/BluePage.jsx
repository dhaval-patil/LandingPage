import React from "react";
import pack from "../assets/blue.png";
import back from "../assets/blue_webanner.png";
import { Link } from "react-router-dom";

const BluePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={back}
          className="object-cover w-full h-full"
          alt="Background"
        />
      </div>

      {/* Package Image */}
      <div className="relative flex justify-center p-10 lg:p-20 xl:p-32 2xl:p-40">
        <img
          src={pack}
          alt="Package"
          className="h-64 lg:h-96 xl:h-[500px] 2xl:h-[600px] hover:scale-110 duration-300"
        />
      </div>

      {/* Order Button */}
      <div className="relative -mt-16 lg:-mt-24 xl:-mt-32 2xl:-mt-40">
        <button className="py-3 px-10 font-oswald text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hover:scale-110 hover:rotate-2 duration-300 font-extrabold rounded-full drop-shadow-lg bg-[#32cee8]">
          ORDER NOW
        </button>
      </div>

      {/* Box Section */}
      <div className="flex justify-center items-center gap-8 py-10 lg:py-12 xl:py-16 2xl:py-20">
        <Link to="/">
          <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-green-500 text-white flex items-center justify-center text-sm lg:text-base xl:text-lg font-bold rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3">
            Green
          </div>
        </Link>

        <Link to="/page1">
          <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-red-500 text-white flex items-center justify-center text-sm lg:text-base xl:text-lg font-bold rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:-rotate-3">
            Red
          </div>
        </Link>

        <Link to="/page2">
          <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-blue-500 text-white flex items-center justify-center text-sm lg:text-base xl:text-lg font-bold rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rotate-3">
            Blue
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BluePage;
