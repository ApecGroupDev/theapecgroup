"use client";

import React, { useEffect } from 'react';

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
      bg-[url("/backgrounds/blog/Hero_Blog.webp")] bg-cover bg-top bg-no-repeat bg-blend-multiply bg-black/40
      items-center relative flex overflow-hidden h-screen'>
      <div>
        {/* Top div */}
        <div>
          <h1 className='ps-8 pe-4 scrn-750:pe-0 scrn-750:w-4/5 scrn-1000:w-1/2'>
            <span className='font-bold scrn-750:font-semibold whitespace-normal text-gray-200 text-4xl scrn-750:text-3xl scrn-1200:text-4xl scrn-1500:text-5xl scrn-1900:text-6xl tracking-wide'>
              Insights That Fuel the Future — Oil and Gas Industry Blogs
            </span>
          </h1>
        </div>

        {/* Bottom div */}
        <div className='text-gray-200 font-normal ps-8 pe-4 scrn-750:pe-0 pt-8 scrn-750:w-4/5 scrn-1000:w-1/2'>
          <span className='text-xl scrn-1200:text-2xl scrn-1500:text-4xl'>
            Powered by 30+ years of industry experience, APEC’s blog helps fuel retailers
            and energy professionals stay ahead with expert insights, trends, and compliance updates.
          </span>
          <br />
          <button
            type="button"
            className="bg-[#c62931] text-white py-4 px-12 mt-8 rounded-md font-semibold hover:bg-red-500 transition"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
