"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

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
          src="/backgrounds/services/renovation/Hero_Renovation.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1437}
          priority
        />
      </div>

      <div
        className={`fixed scrn-300:p-2 scrn-mobile:p-4 scrn-300:space-y-8 scrn-mobile:space-y-16 sm:p-8 md:ms-0 sm:space-y-5 md:space-y-12 scrn-800:space-y-12 scrn-800:tracking-tighter scrn-900:space-y-12 lg:space-y-9 xl:space-y-14 scrn-1500:space-y-12 scrn-1700:space-y-20 scrn-1900:space-y-20 scrn-2k:space-y-32 text-left md:p-12 scrn-1900:ps-16 scrn-300:my-12 scrn-mobile:my-12 scrn-900:my-8 lg:my-16 xl:my-28 scrn-1500:my-40 scrn-1700:my-48 scrn-1900:my-52 scrn-2k:my-80 transition-opacity duration-100 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <nav className="pt-14 scrn-300:mt-6 scrn-mobile:mt-6">
          <ul className="flex sm:items-center space-x-2 scrn-300:text-2xs scrn-mobile:text-2xs sm:text-2xs md:text-base scrn-800:text-sm scrn-900:text-2xs lg:text-2xs xl:text-xs scrn-1500:text-md scrn-1700:text-md scrn-1900:text-xl scrn-2k:text-xl font-semibold text-gray-600 tracking-widest">
            <li>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Services</li>
            <li>/</li>
            <li className="text-red-600">Gas Station Renovation Company</li>
          </ul>
        </nav>

        <div>
          <span className="font-semibold whitespace-nowrap text-red-600">
            <span className='scrn-900:text-5xl scrn-900:tracking-wider lg:text-6xl lg:tracking-normal xl:text-7xl xl:tracking-wider scrn-1500:text-8xl scrn-1500:tracking-normal scrn-1700:text-8xl scrn-1700:tracking-wider scrn-1900:text-9xl scrn-1900:tracking-tighter scrn-2k:text-10xl scrn-2k:tracking-normal'>
              GAS STATION
            </span><br />
            <span className='scrn-900:text-3xl scrn-900:tracking-normal lg:text-4xl lg:tracking-tight xl:text-5xl xl:tracking-tight scrn-1500:text-6xl scrn-1500:tracking-tighter scrn-1700:text-6xl scrn-1900:text-6xl scrn-1900:tracking-wider scrn-2k:text-7xl scrn-2k:tracking-widest'>
              RENOVATION COMPANY
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
