import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between bg-transparent px-8 md:px-16 2xl:pt-16 lg:pt-0 lg:px-16 xl:px-28 2k:px-40">
      {/* Left Text Section */}
      <div className="text-center md:text-left 2xl:mb-20 text-black md:mt-12 lg:mt-12 xl:mt-0 2k:mt-16">
        <p className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-7xl 2k:text-8xl font-extrabold">YOUR TOP CHOICE</p>
        <p className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl mac-14:text-7xl 2xl:text-8xl 2k:text-9xl xl:mt-4 2xl:mt-4 italic text-red-500 tracking-wider whitespace-nowrap">ONE-STOP SHOP</p>
        <p className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-7xl 2k:text-8xl xl:mt-4 2xl:mt-4 font-medium">ATLANTA COMPANY</p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mt-28 lg:mt-24 xl:mt-0 2k:mt-12">
        <img
          src="/products/Pump.png"
          alt="Hero"
          className="rounded-lg object-cover w-full max-w-[500px] md:max-w-[250px] lg:max-w-[320px] xl:max-w-[600px] xl:mt-12 2xl:max-w-[700px] 2k:max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default Hero;