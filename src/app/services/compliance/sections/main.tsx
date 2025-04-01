"use client";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadge copy";
import React from "react";

const MainFinancing: React.FC = () => {
  return (
    <div className="bg-transparent outline-dashed outline-green-500 scrn-300:px-3 scrn-mobile:px-4 sm:px-8 md:px-12 scrn-800:px-14 scrn-900:px-14 lg:px-16 xl:px-32 scrn-1500:px-40 scrn-1700:px-52 scrn-1900:px-64 scrn-2k:px-120 scrn-300:h-224 scrn-mobile:h-224 sm:h-128 md:h-152 scrn-800:h-160 scrn-900:h-192 lg:h-208 xl:h-240 scrn-1500:h-288 scrn-1700:h-320 scrn-1900:h-352 scrn-2k:h-448">

      <div className="grid grid-cols-1 sm:grid-cols-2 scrn-300:gap-8 scrn-mobile:gap-8 sm:gap-1 md:gap-4 scrn-800:gap-4 scrn-900:gap-12 lg:gap-12 xl:gap-24 scrn-1500:gap-32 scrn-1700:gap-36 scrn-1900:gap-40 sm:pt-8 md:pt-8 scrn-800:pt-8 scrn-900:pt-12 lg:pt-20 xl:pt-32 scrn-1900:pt-48 scrn-2k:pt-60">

        <div className="h-auto pt-12 xl:pt-24 scrn-300:space-y-4 scrn-mobile:space-y-4 sm:space-y-3 md:space-y-4 scrn-800:space-y-6 scrn-900:space-y-4 lg:space-y-8 scrn-2k:space-y-12">
          <p className="scrn-300:text-xs scrn-mobile:text-sm sm:text-sm md:text-sm scrn-800:text-base scrn-900:text-base lg:text-lg xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-3xl lg:font-normal tracking-widest">
            Choose APEC Compliance for a partner committed to ensuring your
            regulatory success with efficiency, affordability, and unmatched expertise.
          </p>
          <p className="text-red-600 font-semibold scrn-300:text-xs scrn-mobile:text-sm sm:text-sm md:text-sm scrn-800:text-base scrn-900:text-base lg:text-lg xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-3xl lg:font-normal tracking-widest">
            Gas Station Inspection Services <br />
            Includes:
          </p>
          <div className="hidden lg:block lg:text-lg xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 lg:space-y-2 xl:space-y-3 scrn-1500:space-y-6 2xl:space-y-6 lg:font-normal tracking-widest">
            <CheckmarkBadge text="Walkthrough Inspection" />
            <CheckmarkBadge text="Compliance Tests" />
            <CheckmarkBadge text="Water Removal" />
            <CheckmarkBadge text="Repairs" />
            <CheckmarkBadge text="Reporting" />
            <CheckmarkBadge text="Fuel Tank Inspection" />
          </div>
          <div className="lg:hidden scrn-300:text-xs scrn-mobile:text-sm sm:text-sm md:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-mobile:space-y-2 sm:space-y-2 md:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest">
            <CheckmarkBadgeSmall text="Walkthrough Inspection" />
            <CheckmarkBadgeSmall text="Compliance Tests" />
            <CheckmarkBadgeSmall text="Water Removal" />
            <CheckmarkBadgeSmall text="Repairs" />
            <CheckmarkBadgeSmall text="Reporting" />
            <CheckmarkBadgeSmall text="Fuel Tank Inspection" />
          </div>
        </div>
        <div className="relative rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl z-0"></div>
          <div className="relative z-10 scrn-300:p-4 scrn-mobile:p-4 sm:p-4 md:p-4 scrn-800:p-8 scrn-900:p-12 lg:p-12 xl:p-16 scrn-1500:p-24 2xl:p-24">
            <span className="scrn-300:text-base scrn-mobile:text-xl sm:text-xl md:text-lg scrn-800:text-lg scrn-900:text-xl lg:text-xl xl:text-2xl scrn-1500:text-3xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2k:text-4xl font-medium">
              SERVICE REQUEST
            </span>
            <form className="scrn-300:space-y-2 scrn-mobile:space-y-2 sm:space-y-3 md:space-y-4 scrn-800:space-y-4 scrn-900:space-y-2 lg:space-y-4 xl:space-y-2 scrn-1500:space-y-8 scrn-1700:space-y-8 scrn-1900:space-y-12 scrn-2k:space-y-12 scrn-mobile:mt-6 sm:mt-6 md:mt-8 scrn-800:mt-6 scrn-900:mt-12 lg:mt-12 scrn-300:text-xs scrn-mobile:text-sm sm:text-base md:text-sm scrn-800:text-base scrn-900:text-base lg:text-lg xl:text-lg scrn-1500:text-lg scrn-1700:text-xl scrn-1900:text-xl scrn-2k:text-xl">
              <input type="text" placeholder="Name" className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600" />
              <input type="text" placeholder="Phone No." className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600" />
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
      <div className="scrn-300:mt-6 scrn-mobile:mt-8 sm:mt-12 md:mt-16 scrn-800:mt-12 scrn-900:mt-16 lg:mt-14 xl:mt-32 scrn-1500:mt-36 scrn-1700:mt-52 scrn-1900:mt-52 scrn-2k:mt-96">
        <p className="space-x-2 font-semibold">
          <span className="scrn-300:text-base scrn-mobile:text-lg sm:text-2xl md:text-3xl scrn-800:text-3xl scrn-900:text-4xl lg:text-4xl xl:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1900:text-7xl scrn-2k:text-8xl text-red-600">
            GET IN COMPLIANCE
          </span>
          <span className="scrn-300:text-sm scrn-mobile:text-base sm:text-lg md:text-xl scrn-800:text-xl scrn-900:text-2xl lg:text-2xl xl:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2k:text-6xl">
            STAY IN COMPLIANCE
          </span>
        </p>
      </div>
    </div >
  );
};

export default MainFinancing;
