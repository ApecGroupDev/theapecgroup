"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const { top } = heroSection.getBoundingClientRect();
        setFadeOut(top < -80); // Adjust to control when the fade starts
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="hero-section"
      className=" relative pointer-events-none scrn-300:h-116 scrn-mobile:h-116 sm:h-112 md:h-120 scrn-800:h-120 scrn-900:h-128 lg:h-136 scrn-1100:h-160 xl:h-176 scrn-1500:h-208 scrn-1700:h-240 scrn-1900:h-256 scrn-2k:h-352 sm:justify-center justify-between overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10 sm:mt-6 md:mt-4 lg:mt-9 xl:mt-9 scrn-1500:mt-0 2xl:mt-0 scrn-300:hidden scrn-mobile:hidden">
        <Image
          src="/backgrounds/ourTeam/Hero.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      {/* Background Image Mobile */}
      <div className="absolute inset-0 z-10 sm:hidden">
        <Image
          src="/backgrounds/ourTeam/Hero-Mobile.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      {/* Left Text Section */}
      <div
        className={`fixed scrn-300:p-2 scrn-mobile:p-4 scrn-300:space-y-8 scrn-mobile:space-y-10 sm:p-8 md:ms-0 sm:space-y-5 md:space-y-0 scrn-800:space-y-4 scrn-900:space-y-4 lg:space- xl:space-y-6 scrn-1500:space-y-6 scrn-1700:space-y-20 scrn-1900:space-y-10 scrn-2k:space-y-32 text-left md:p-12 scrn-900:my-8 lg:my-16 xl:my-24 scrn-1900:my-40 scrn-2k:my-36 transition-opacity duration-250 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        {/* Breadcrumb */}
        <nav className="pt-14 scrn-300:mt-6 scrn-mobile:mt-6">
          <ul className="flex sm:items-center space-x-2 scrn-300:text-2xs scrn-mobile:text-2xs sm:text-3xs md:text-3xs scrn-800:text-2xs scrn-900:text-2xs lg:text-2xs xl:text-xs scrn-1500:text-md scrn-1700:text-md scrn-1900:text-xl scrn-2k:text-xl font-semibold text-gray-600 tracking-widest">
            <li>
              <Link href="/home" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-red-600">Our Team</li>
          </ul>
        </nav>

        {/* Headline */}
        <div className='scrn-300:space-x-2 xl:space-x-4 scrn-1500:space-x-0 2xl:space-x-0'>
          <span className="scrn-300:text-5xl scrn-mobile:text-5xl sm:text-7xl md:text-7xl scrn-800:text-7xl scrn-900:text-8xl lg:text-8xl xl:text-9xl scrn-1500:text-10xl scrn-1700:text-10xl scrn-1900:text-10xl scrn-2k:text-12xl font-regular italic whitespace-nowrap">
            OUR
          </span>
          <span className="scrn-300:text-6xl scrn-mobile:text-7xl sm:text-8xl md:text-9xl scrn-800:text-9xl scrn-900:text-9xl lg:text-10xl xl:text-11xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-2k:text-18xl scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap">
            TEAM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
