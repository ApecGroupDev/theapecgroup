"use client";

import React from "react";

const MainImaging: React.FC = () => {
  return (
    <div className="bg-transparent outline-dashed outline-green-500 scrn-300:px-3 scrn-mobile:px-4 sm:px-8 md:px-12 scrn-800:px-14 scrn-900:px-14 lg:px-16 xl:px-12 scrn-1500:px-20 scrn-1700:px-20 scrn-1900:px-28 scrn-300:h-152 scrn-mobile:h-140 sm:h-128 md:h-152 scrn-800:h-160 scrn-900:h-192 lg:h-208 xl:h-240 scrn-1500:h-288 scrn-1700:h-320 scrn-1900:h-352 scrn-2k:h-448">

      <div className="grid grid-cols-2 scrn-800:gap-4 scrn-900:gap-12 lg:gap-12 scrn-800:pt-8 scrn-900:pt-12 lg:pt-20 xl:pt-32">
        <div className="h-auto pt-12 xl:pt-24 outline-dashed outline-red-600 scrn-800:space-y-6 scrn-900:space-y-12 lg:space-y-12">
          <span className="text-red-600 font-semibold scrn-800:text-2xl scrn-900:text-3xl lg:text-3xl xl:text-4xl scrn-1500:text-5xl scrn-1700:text-6xl scrn-1900:text-7xl scrn-2k:text-8xl">
            Gas Station Canopy <br />
            Panels Installation
          </span>
          <p className="scrn-800:text-lg scrn-900:text-xl lg:text-xl xl:text-2xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2k:text-5xl font-medium w-10/12 tracking-widest">
            We specialize in making your convenience store look beautiful with your
            amazing oil company brand, canoply panels & imaging.
          </p>
          <p className="scrn-800:text-lg scrn-900:text-xl lg:text-xl xl:text-2xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2k:text-5xl font-medium w-10/12 tracking-widest">
            We are equipped to create your custom brand image. <br /> Let us provide
            attractive inside and outside graphics to make your site stand out.
          </p>
        </div>
        <div className="relative rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0"></div>
          <div className="relative z-10 scrn-800:p-8 scrn-900:p-12 lg:p-12 xl:p-24">
            <span className="scrn-800:text-xl scrn-900:text-2xl lg:text-2xl xl:text-3xl scrn-1500:text-4xl scrn-1700:text-5xl scrn-1900:text-6xl scrn-2k:text-7xl font-medium">
              SERVICE REQUEST
              </span>
            <form className="scrn-800:space-y-4 scrn-900:space-y-2 lg:space-y-4 xl:space-y-2 scrn-1500:space-y-8 scrn-1700:spce-y-12 scrn-1900:space-y-12 scrn-2k:space-y-16 scrn-800:mt-6 scrn-900:mt-12 lg:mt-12 scrn-800:text-lg scrn-900:text-lg lg:text-lg xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-3xl">
              <input type="text" placeholder="Name" className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600" />
              <input type="text" placeholder="Phone No" className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600" />
              <input type="email" placeholder="Email" className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600" />
              <input type="text" placeholder="Site Address" className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600" />
              <textarea placeholder="Message" className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600"></textarea>
              <button type="submit" className="w-2/5 bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default MainImaging;
