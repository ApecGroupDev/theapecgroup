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
      className=" relative flex items-center pointer-events-none overflow-hidden
        scrn-300:h-128 
        scrn-mobile:h-136 
        sm:h-112 
        md:h-116 
        scrn-800:h-120 
        scrn-900:h-128 
        lg:h-136 
        scrn-1100:h-156 
        xl:h-176 
        scrn-1150:h-164
        scrn-1200:h-168
        scrn-1250:h-176
        scrn-1300:h-184
        scrn-1350:h-188
        scrn-1400:h-192
        scrn-1450:h-198
        scrn-1500:h-208
        scrn-1550:h-216
        scrn-1600:h-224
        scrn-1650:h-228
        scrn-1700:h-232
        scrn-1750:h-240
        scrn-1800:h-248
        scrn-1850:h-256
        scrn-1900:h-264
        scrn-1950:h-268
        scrn-2000:h-272
        scrn-2050:h-280
        scrn-2100:h-288
        scrn-2150:h-296
        scrn-2200:h-304
        scrn-2250:h-308
        scrn-2300:h-316
        scrn-2350:h-320
        scrn-2400:h-324
        scrn-2450:h-326
        scrn-2500:h-339
        scrn-2550:h-352
      ">
      <div className="absolute sm:inset-0 z-10 scrn-300:bottom-20 scrn-300:scale-150 scrn-mobile:bottom-16 scrn-mobile:scale-150 sm:mt-12 md:mt-0">
        <Image
          src="/backgrounds/services/link/Hero_Link.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1437}
          priority
        />
      </div>

      <div
        className={`fixed scrn-300:p-2 space-y-8 text-left flex items-center transition-opacity duration-100 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <div className='ps-12'>
          <nav className='gap-y-12'>
            <ul className="flex sm:items-center space-x-2 font-semibold text-gray-600 tracking-widest
            text-2xs 
            sm:text-3xs 
            md:text-3xs 
            lg:text-3xs 
            xl:text-lg
            2xl:text-xl
          ">
              <li>
                <Link href="/home">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>Services</li>
              <li>/</li>
              <li className="text-red-600">APEC Link</li>
            </ul>
          </nav>

          <div>
            <span className="font-semibold whitespace-nowrap text-red-600
            scrn-300:text-5xl 
            scrn-mobile:text-5xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl
            xl:text-10xl
            2xl:text-11xl
            scrn-1700:text-12xl
            scrn-1900:text-12xl
          ">
              APEC LINK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
