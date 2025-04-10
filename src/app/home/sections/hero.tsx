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
      scrn-1000:h-160
      scrn-1100:h-168
      scrn-1150:h-168
      scrn-1200:h-176
      scrn-1300:h-188
      scrn-1400:h-198
      scrn-1500:h-216
      scrn-1600:h-228
      scrn-1700:h-248
      scrn-1800:h-260
      scrn-1900:h-272
      scrn-2000:h-280
      scrn-2100:h-288
      scrn-2200:h-304
      scrn-2300:h-308
      scrn-2350:h-320"
    >
      {/* Left Text Section */}
      <div className="scrn-1500:ms-4 scrn-2300:ms-8 -space-y-1.5 text-center mb-6 scrn-400:mb-0 scrn-600:text-left scrn-1000:pb-5">
        <p className="text-2xl scrn-750:text-xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-bold whitespace-nowrap">
          YOUR TOP CHOICE
        </p>
        <p className="text-3xl scrn-750:text-3xl scrn-900:text-4xl scrn-1000:text-4xl scrn-1200:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1800:text-7xl scrn-2300:text-8xl font-regular italic text-red-500 tracking-wider whitespace-nowrap">
          ONE-STOP SHOP
        </p>
        <p className="text-2xl scrn-750:text-xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-regular">
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
          

          scrn-300:w-64 
          scrn-350:w-72 
          scrn-400:w-72
          scrn-600:w-80
          scrn-750:w-80
          scrn-900:w-110 scrn-900:mb-12
          scrn-1000:w-120 scrn-1000:mb-12
          scrn-1100:w-124
          scrn-1200:w-128 scrn-1200:mb-14
          scrn-1300:w-132
          scrn-1400:w-140
          scrn-1500:w-148
          scrn-1600:w-160
          scrn-1700:w-176 scrn-1700:mb-20
          scrn-1800:w-180
          scrn-1900:w-192
          scrn-2300:w-216"
        />
      </div>
    </div>
  );
};

export default Hero;