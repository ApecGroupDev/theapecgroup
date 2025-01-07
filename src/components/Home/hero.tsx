import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[58rem] bg-transparent px-8 md:px-16 lg:px-40 pt-20 md:pt-32">
      {/* Left Text Section */}
      <div className="text-center md:text-left text-black">
        <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">YOUR TOP CHOICE</p>
        <p className="text-5xl md:text-6xl lg:text-7xl mb-8 italic text-red-500 tracking-wider">ONE-STOP SHOP</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">ATLANTA COMPANY</p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/products/Pump.png"
          alt="Hero"
          className="rounded-lg object-cover w-full max-w-[500px] md:max-w-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
