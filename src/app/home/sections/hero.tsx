import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:ms-2 md:ms-0 items-center justify-between bg-transparent 
      scrn-300:h-128 
      scrn-mobile:h-136
      sm:h-124 
      md:px-12 md:h-116 
      scrn-800:h-120 
      scrn-900:h-124 
      lg:h-144 
      scrn-1150:h-152 
      scrn-1200:h-160 
      xl:h-160 
      scrn-1300:h-176
      scrn-1350:h-184
      scrn-1400:h-192
      scrn-1450:h-198
      scrn-1500:h-198 
      scrn-1550:h-208
      scrn-1600:h-224
      scrn-1650:h-224
      scrn-1700:h-224
      scrn-1750:h-240
      scrn-1800:h-240
      scrn-1850:h-248
      scrn-1900:h-256
      scrn-1950:h-264
      scrn-2000:h-272
      scrn-2050:h-280
      scrn-2100:h-288
      scrn-2150:h-296
      scrn-2200:h-304
      scrn-2250:h-308
      scrn-2300:h-312
      scrn-2350:h-316
      scrn-2400:h-320
      scrn-2450:h-324
      scrn-2500:h-326
      scrn-2550:h-326"
    >
      {/* Left Text Section */}
      <div className="-space-y-1.5 text-center scrn-300:mt-6 scrn-450:mt-0 sm:text-left lg:pb-5">
        <p className="text-2xl md:text-xl scrn-900:text-2xl lg:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2k:text-6xl font-bold whitespace-nowrap">
          YOUR TOP CHOICE
        </p>
        <p className="text-3xl md:text-3xl scrn-900:text-4xl lg:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1900:text-7xl scrn-2k:text-8xl font-regular italic text-red-500 tracking-wider whitespace-nowrap">
          ONE-STOP SHOP
        </p>
        <p className="text-2xl md:text-xl scrn-900:text-2xl lg:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2k:text-6xl font-regular">
          ATLANTA COMPANY
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center scrn-mobile:mt-auto">
        <Image
          src="/products/Fuel_Dispenser_Face_Left.png"
          alt="Hero"
          width={1011}
          height={1211}
          className="rounded-lg object-cover scrn-300:w-64 scrn-mobile:w-72 scrn-mobile:mb-6 lg:mb-0 scrn-450:w-10/12"
        />
      </div>
    </div>
  );
};

export default Hero;