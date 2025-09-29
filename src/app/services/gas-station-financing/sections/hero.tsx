"use client";

import React, { useEffect } from 'react';
// import Image from 'next/image';

const Hero: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="hero-section"
      className='
      bg-[url("/backgrounds/services/financing/Hero_Financing.webp")] bg-cover bg-top bg-no-repeat bg-blend-multiply bg-black/40
      items-center relative flex overflow-hidden h-screen'>
      <div>
        {/* Top div */}
        <div>
          <h1 className='ps-8 pe-4 scrn-750:pe-0 scrn-750:w-4/5 scrn-1000:w-1/2'>
            <span className='font-bold scrn-750:font-semibold whitespace-normal text-gray-200 text-4xl scrn-750:text-3xl scrn-1200:text-4xl scrn-1500:text-5xl scrn-1900:text-6xl tracking-wide'>
              Flexible Gas Station Financing That Fuels Your Business Growth
            </span>
          </h1>
        </div>

        {/* Bottom div */}
        <div className='text-gray-200 font-normal ps-8 pe-4 scrn-750:pe-0 pt-8 scrn-750:w-4/5 scrn-1000:w-1/2'>
          <span className='text-xl scrn-1200:text-2xl scrn-1500:text-4xl'>
            30+ years helping fuel retailers secure funding for construction,
            equipment, and upgrades across Georgia.
          </span>
          <br />
          <button
            type="button"
            className='bg-[#c62931] text-white py-4 px-12 mt-8 rounded-md font-semibold hover:bg-red-500 transition'
            onClick={() => {
              const section = document.getElementById("FinancingContactForm");
              if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 322; // adjust 80px as needed
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            GET QUOTE
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
