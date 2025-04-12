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
    <div id="hero-section" className="relative flex items-center
      h-116
      scrn-350:h-120
      scrn-400:h-132
      scrn-450:h-140
      scrn-500:h-148 
      scrn-550:h-160
      scrn-600:h-114
      scrn-700:h-124 
      scrn-750:h-128
      scrn-800:h-116 
      scrn-900:h-124 
      scrn-1000:h-132 
      scrn-1100:h-160 
      scrn-1250:h-176 
      scrn-1500:h-198 
      scrn-1700:h-224 
      scrn-1900:h-240 
      scrn-2550:h-320"
    >

      <div className="absolute inset-0 z-10 hidden scrn-600:block
        scrn-600:mt-28
        scrn-650:mt-24"
      >
        <Image
          src="/backgrounds/aboutUs/Hero_About.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 scrn-600:hidden
        mt-12
        scrn-350:mt-0"
      >
        <Image
          src="/backgrounds/aboutUs/Hero_About_Mobile.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      <div className={`
      scrn-600:pt-24
      scrn-700:
      fixed scrn-750:ms-0 p-2 scrn-600:ps-4 scrn-1250:ps-12 text-left transition-opacity duration-100 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}

      >
        <nav className="">
          <ul className="flex scrn-600:items-center space-x-2 font-semibold text-gray-600 tracking-widest
            text-2xs 
            scrn-600:text-xs
            scrn-750:text-sm
            scrn-1000:text-lg 
            scrn-1500:text-xl"
          >
            <li>
              <Link href="/home" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-red-600">About Us</li>
          </ul>
        </nav>

        <div>
          <div className=" 
            scrn-750:space-y-0 
            scrn-800:-space-y-4 
            scrn-900:-space-y-6 
            scrn-1000:-space-y-4 
            scrn-1250:-space-y-6 
            scrn-1500:-space-y-8 
            scrn-1700:-space-y-8 
            scrn-1900:-space-y-12"
          >
            <p className="scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap
              text-7xl 
              scrn-500:text-8xl 
              scrn-750:text-8xl 
              scrn-800:text-9xl 
              scrn-900:text-9xl 
              scrn-1000:text-9xl 
              scrn-1250:text-10xl 
              scrn-1500:text-12xl 
              scrn-1700:text-13xl 
              scrn-1900:text-14xl 
              scrn-2550:text-18xl"
            >
              ABOUT
            </p>
            <p className="font-regular italic whitespace-nowrap
              text-5xl 
              scrn-500:text-7xl 
              scrn-750:text-7xl 
              scrn-800:text-7xl 
              scrn-900:text-8xl 
              scrn-1000:text-8xl 
              scrn-1250:text-9xl 
              scrn-1500:text-10xl 
              scrn-1700:text-10xl 
              scrn-1900:text-11xl 
              scrn-2550:text-13xl"
            >
              US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
