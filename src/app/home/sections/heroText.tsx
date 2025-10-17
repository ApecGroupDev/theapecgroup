"use client";

import React, { useEffect } from 'react';

const HeroText: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="flex flex-col scrn-600:justify-center gap-y-4 h-auto mb-12">
        {/* Top div */}
        <div className='scrn-600:hidden mt-4'>
          <h1 className='scrn-750:pe-0 scrn-750:w-4/5'>
            <span className='font-bold scrn-750:font-semibold whitespace-normal apec-red text-2xl scrn-750:text-3xl scrn-1200:text-4xl scrn-1500:text-5xl scrn-1900:text-6xl tracking-wide'>
              One-Stop-Shop for All Your Petroleum Needs — <span className='text-black'>Protecting Your Business, Customers and Future</span>
            </span>
          </h1>
        </div>
        {/* Bottom div */}
        <div className='font-normal scrn-750:pe-0 pt-8'>
          <span className='text-2xl tracking-wider'>
            Backed by 30+ years of experience and a spotless safety record, <span className='apec-red'>The APEC Group (Atlanta Petroleum Equipment Company Inc) </span>
            is a trusted petroleum products company serving retailers across Georgia.
          </span>
          <br />
        </div>
      </div>
    </div >
  );
};

export default HeroText;
