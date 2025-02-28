import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:ms-2 md:ms-0 items-center justify-between bg-transparent sm:h-124 md:px-12 md:h-116 scrn-800:h-120 scrn-900:h-124 lg:h-144 xl:h-160 scrn-1500:h-198 scrn-1700:h-224 scrn-1900:h-240 scrn-2k:h-320">
      {/* Left Text Section */}
      <div className="-space-y-1.5 text-center sm:text-left lg:pb-5">
        <p className="text-3xl md:text-xl scrn-900:text-2xl lg:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2k:text-6xl font-bold whitespace-nowrap">
          YOUR TOP CHOICE
        </p>
        <p className="text-4xl md:text-3xl scrn-900:text-4xl lg:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1900:text-7xl scrn-2k:text-8xl font-regular italic text-red-500 tracking-wider whitespace-nowrap">
          ONE-STOP SHOP
        </p>
        <p className="text-3xl md:text-xl scrn-900:text-2xl lg:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl scrn-2k:text-6xl font-regular">
          ATLANTA COMPANY
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/products/Fuel_Dispenser_Face_Left.png"
          alt="Hero"
          width={1011}
          height={1211}
          className="rounded-lg object-cover w-10/12"
        />
      </div>
    </div>
  );
};

export default Hero;