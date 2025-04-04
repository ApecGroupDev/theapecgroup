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
        scrn-1100:h-160 
        xl:h-176 
        scrn-1500:h-208 
        scrn-1550:h-208
        scrn-1700:h-228 
        scrn-1900:h-256 
        scrn-2k:h-352
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
            xl:text-xs 
            scrn-1500:text-md 
            scrn-1700:text-md 
            scrn-1900:text-xl 
            scrn-2k:text-xl
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
            xl:text-5xl
            2xl:text-11xl
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
