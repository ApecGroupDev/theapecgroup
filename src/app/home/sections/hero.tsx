import React from 'react';
// import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='relative'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover scrn-750:object-center z-10 scrn-600:mt-4 scrn-750:mt-0 object-[85%_center] scrn-350:object-[88%_center] scrn-400:object-[90%_center] scrn-450:object-[93%_center] scrn-500:object-[96%_center] scrn-550:object-[99%_center] scrn-600:object-[80%_center]'>
        <source src="/videos/PumpAnimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Bottom Blur Overlay */}
      {/* <div className='absolute bottom-0 left-0 w-full h-16 z-20 pointer-events-none'
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,1) 100%)',
        }}
      /> */}
      <div className='relative flex flex-col-reverse scrn-600:flex-row scrn-600:ps-2 items-center justify-between bg-transparent h-140 scrn-400:h-140 scrn-600:h-124 scrn-750:h-120 scrn-800:h-124 scrn-900:h-136 scrn-1000:h-160 scrn-1100:h-168 scrn-1150:h-168 scrn-1200:h-176 scrn-1300:h-188 scrn-1400:h-198 scrn-1500:h-216 scrn-1600:h-228 scrn-1700:h-248 scrn-1800:h-260 scrn-1900:h-272 scrn-2000:h-280 scrn-2100:h-288 scrn-2200:h-304 scrn-2300:h-308 scrn-2350:h-320 scrn-2400:h-324 scrn-2500:h-339'>
        {/* Left Text Section */}
        <div className='scrn-1500:ms-16 scrn-2300:ms-8 -space-y-1.5 text-center mb-6 scrn-400:mb-0 scrn-600:text-left scrn-1000:pb-5 z-20 hidden scrn-600:block scrn-600:pt-20 scrn-750:pt-12 scrn-1000:pt-20 scrn-1300:pt-24 scrn-1800:pt-32'>
          <img
            src="/logos/One-Stop-Shop.gif"
            alt="Animated Logo"
            className="mx-auto scrn-600:mx-0
            w-48 
            scrn-700:w-60
            scrn-800:w-64
            scrn-900:w-72
            scrn-1000:w-80 
            scrn-1100:w-96 
            scrn-1500:w-120
            scrn-1600:w-128
            scrn-1800:w-140"
          />
          {/* <p className='text-xl scrn-700:text-2xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-bold whitespace-nowrap'>
            YOUR TOP CHOICE
          </p>
          <p className='text-2xl scrn-700:text-3xl scrn-900:text-4xl scrn-1000:text-4xl scrn-1200:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1800:text-7xl scrn-2300:text-8xl font-regular italic text-[#c62931] tracking-wider whitespace-nowrap'>
            ONE-STOP SHOP
          </p>
          <p className='text-xl scrn-700:text-2xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-regular'>
            ATLANTA COMPANY
          </p> */}
        </div>

        {/* Right Image Section - Coded Out for video animation*/}
        {/* <div className='w-full scrn-750:w-1/2 flex justify-center mt-auto'>
          <Image
            src="/products/Fuel_Dispenser_Face_Left.png"
            alt="Hero"
            width={1011}
            height={1211}
            className='rounded-lg object-cover hidden scrn-400:mb-6 scrn-300:w-64 scrn-350:w-72 scrn-400:w-72 scrn-600:w-80 scrn-750:w-80 scrn-900:w-110 scrn-900:mb-12 scrn-1000:w-120 scrn-1000:mb-12 scrn-1100:w-124 scrn-1200:w-128 scrn-1200:mb-14 scrn-1300:w-132 scrn-1400:w-140 scrn-1500:w-148 scrn-1600:w-160 scrn-1700:w-176 scrn-1700:mb-20 scrn-1800:w-180 scrn-1900:w-192 scrn-2300:w-216 scrn-2500:w-232 scrn-2500:mb-28'/>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;