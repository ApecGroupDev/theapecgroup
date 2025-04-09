import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse scrn-600:flex-row scrn-600:ms-2 items-center justify-between bg-transparent 
      
    
      h-140
      scrn-400:h-140
      scrn-600:h-124
      scrn-750:h-120
      scrn-800:h-124
      scrn-900:h-136
      scrn-1000:h-144
      scrn-1150:h-152
      scrn-1200:h-160
      scrn-1250:h-160
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
      <div className="-space-y-1.5 text-center mb-6 scrn-400:mb-0 scrn-600:text-left scrn-1000:pb-5">
        <p className="text-2xl scrn-750:text-xl scrn-900:text-2xl scrn-1000:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2000:text-6xl font-bold whitespace-nowrap">
          YOUR TOP CHOICE
        </p>
        <p className="text-3xl scrn-750:text-3xl scrn-900:text-4xl scrn-1000:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1900:text-7xl scrn-2000:text-8xl font-regular italic text-red-500 tracking-wider whitespace-nowrap">
          ONE-STOP SHOP
        </p>
        <p className="text-2xl scrn-750:text-xl scrn-900:text-2xl scrn-1000:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2000:text-6xl font-regular">
          ATLANTA COMPANY
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full scrn-750:w-1/2 flex justify-center mt-auto">
        <Image  
          src="/products/Fuel_Dispenser_Face_Left.png"
          alt="Hero"
          width={1011}
          height={1211}
          className="rounded-lg object-cover 
          scrn-400:mb-6 
          scrn-1000:mb-0 

          scrn-300:w-64 
          scrn-350:w-72 
          scrn-400:w-72
          scrn-600:w-80
          scrn-750:w-80
          scrn-900:w-110 scrn-900:mb-12"
        />
      </div>
    </div>
  );
};

export default Hero;