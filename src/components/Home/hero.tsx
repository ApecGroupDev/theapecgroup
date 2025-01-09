import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between bg-transparent px-8 md:px-16 md:pt-16 lg:px-16 xl:px-28 macbook-pro-16:pb-28 2k:px-40">
      {/* Left Text Section */}
      <div className="text-center md:text-left 2xl:mb-20 text-black macbook-pro-14:mb-20 md:mt-60 lg:mt-32 xl:mt-0">
        <p className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl macbook-pro-14:text-6xl 2xl:text-7xl 2k:text-8xl font-extrabold">YOUR TOP CHOICE</p>
        <p className="text-5xl md:text-5xl lg:text-6xl xl:text-6xl macbook-pro-14:text-7xl 2xl:text-8xl 2k:text-9xl xl:mt-4 2xl:mt-4 italic text-red-500 tracking-wider whitespace-nowrap">ONE-STOP SHOP</p>
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl macbook-pro-14:text-6xl 2xl:text-7xl 2k:text-8xl xl:mt-4 2xl:mt-4 font-medium">ATLANTA COMPANY</p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 macbook-pro-14:mb-20 md:mt-60 lg:mt-44 xl:mt-0">
        <img
          src="/products/Pump.png"
          alt="Hero"
          className="rounded-lg object-cover w-full max-w-[500px] md:max-w-[600px] lg:max-w-[600px] xl:mt-12 2xl:max-w-[700px] 2k:max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default Hero;