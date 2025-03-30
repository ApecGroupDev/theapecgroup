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
        setFadeOut(top < -80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="hero-section"
      className=" relative pointer-events-none scrn-300:h-128 scrn-mobile:h-136 sm:h-112 md:h-116 scrn-800:h-120 scrn-900:h-128 lg:h-136 scrn-1100:h-160 xl:h-176 scrn-1500:h-208 scrn-1700:h-240 scrn-1900:h-256 scrn-2k:h-352 sm:justify-center justify-between overflow-hidden"
    >
      <div className="absolute sm:inset-0 z-10 scrn-300:bottom-20 scrn-300:scale-150 scrn-mobile:bottom-16 scrn-mobile:scale-150 sm:mt-12 md:mt-0">
        <Image
          src="/backgrounds/services/financing/Hero_Financing.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1437}
          priority
        />
      </div>

      <div
        className={`fixed scrn-300:p-2 space-y-8 xl:space-y-12 scrn-mobile:p-4 sm:p-8 md:-ms-3 text-left md:p-12 scrn-800:-ms-3 scrn-900:-ms-3 scrn-1900:ps-24 scrn-300:my-20 scrn-mobile:my-32 sm:my-5 md:-my-5 scrn-800:-my-5 scrn-900:-my-2 lg:my-4 xl:my-6 scrn-1500:my-16 scrn-1700:my-16 scrn-1900:my-36 scrn-2k:my-60 transition-opacity duration-100 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <nav className="pt-14 scrn-300:mt-6 scrn-mobile:mt-6">
          <ul className="flex sm:items-center space-x-2 scrn-300:text-2xs scrn-mobile:text-2xs sm:text-3xs md:text-3xs scrn-800:text-2xs scrn-900:text-2xs lg:text-2xs xl:text-xs scrn-1500:text-md scrn-1700:text-md scrn-1900:text-xl scrn-2k:text-xl font-semibold text-gray-600 tracking-widest">
            <li>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Services</li>
            <li>/</li>
            <li className="text-red-600">Gas Station Financing Company</li>
          </ul>
        </nav>

        <div>
          <span className="scrn-300:text-5xl scrn-mobile:text-5xl sm:text-3xl md:text-4xl scrn-800:text-4xl scrn-800:tracking-wider scrn-900:text-5xl scrn-900:tracking-tighter lg:text-5xl lg:tracking-normal xl:text-6xl xl:tracking-wide scrn-1500:text-7xl scrn-1500:tracking-wide scrn-1700:text-8xl scrn-1700:tracking-tighter scrn-1900:text-8xl scrn-1900:tracking-tighter scrn-2k:text-9xl scrn-2k:tracking-tight scale-y-110 p-0 m-0 font-semibold whitespace-nowrap">
            GAS STATION <br className='sm:hidden' /> FINANCING <br />
            COMPANY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
