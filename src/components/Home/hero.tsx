import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-transparent md:px-12 ">
      {/* Left Text Section */}
      <div className="-space-y-1.5 w-800:pb-10">
        <p className="md:text-xl lg:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-7xl 2k:text-8xl font-bold whitespace-nowrap">YOUR TOP CHOICE</p>
        <p className="md:text-3xl lg:text-5xl xl:text-6xl mac-14:text-7xl 2xl:text-8xl 2k:text-9xl font-regular italic text-red-500 tracking-wider whitespace-nowrap">ONE-STOP SHOP</p>
        <p className="md:text-xl lg:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-7xl 2k:text-8xl font-regular">ATLANTA COMPANY</p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/products/Pump.png"
          alt="Hero"
          className="rounded-lg object-cover w-10/12"
        />
      </div>
    </div>
  );
};

export default Hero;