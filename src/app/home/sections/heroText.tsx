"use client";

import React, { useEffect } from 'react';

const HeroText: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        {/* Top div */}
        <div className='scrn-600:hidden mt-4'>
          <h1 className='scrn-750:pe-0 scrn-750:w-4/5'>
            <span className='font-bold scrn-750:font-semibold whitespace-normal apec-red text-2xl scrn-750:text-3xl scrn-1200:text-4xl scrn-1500:text-5xl scrn-1900:text-6xl tracking-wide'>
              One-Stop-Shop for All Your Petroleum Needs — Protecting Your Business, Customers and Future
            </span>
          </h1>
        </div>
        {/* Bottom div */}
        <div className='font-normal scrn-750:pe-0 pt-8'>
          <span className='text-xl scrn-1200:text-2xl scrn-1500:text-4xl tracking-widest'>
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
