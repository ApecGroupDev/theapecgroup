import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-transparent md:px-12">
      {/* Left Text Section */}
      <div className="-space-y-1.5 text-center md:text-left md:pb-0 w-800:pb-10 w-900:pb-8 lg:pb-5">
        <p className="text-3xl md:text-xl w-900:text-2xl lg:text-3xl mac-14:text-4xl mac-16:text-5xl 2xl:text-5xl 2k:text-6xl font-bold whitespace-nowrap">
          YOUR TOP CHOICE
        </p>
        <p className="text-4xl md:text-3xl w-900:text-4xl lg:text-5xl mac-14:text-6xl mac-16:text-7xl 2xl:text-7xl 2k:text-8xl font-regular italic text-red-500 tracking-wider whitespace-nowrap">
          ONE-STOP SHOP
        </p>
        <p className="text-3xl md:text-xl w-900:text-2xl lg:text-3xl mac-14:text-4xl mac-16:text-5xl 2xl:text-5xl 2k:text-6xl font-regular">
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