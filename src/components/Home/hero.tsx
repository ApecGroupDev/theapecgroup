import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-transparent md:px-12">
      {/* Left Text Section */}
      <div className="text-center md:text-left text-black">
        <p className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-7xl 2k:text-8xl font-extrabold">YOUR TOP CHOICE</p>
        <p className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl mac-14:text-7xl 2xl:text-8xl 2k:text-9xl italic text-red-500 tracking-wider whitespace-nowrap">ONE-STOP SHOP</p>
        <p className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl mac-14:text-6xl 2xl:text-7xl 2k:text-8xl font-medium">ATLANTA COMPANY</p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/products/Pump.png"
          alt="Hero"
          className="rounded-lg object-cover w-full md:max-w-[260px] w-900:max-w-[320px] lg:max-w-[400px] xl:max-w-[600px] mac-14:max-w-[540px] 2xl:max-w-[700px] 2k:max-w-[900px]"
        />
      </div>
    </div>
  );
};

export default Hero;