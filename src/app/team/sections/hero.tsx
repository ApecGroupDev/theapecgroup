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
      className=" relative flex pointer-events-none items-center overflow-hidden
      h-116
      scrn-350:h-120
      scrn-400:h-124
      scrn-450:h-136
      scrn-500:h-148
      scrn-600:h-108
      scrn-650:h-110
      scrn-700:h-112
      scrn-750:h-116
      scrn-800:h-120
      scrn-850:h-124
      scrn-900:h-128
      scrn-950:h-132
      scrn-1000:h-140
      scrn-1100:h-156
      scrn-1200:h-160
      scrn-1300:h-172
      scrn-1400:h-180
      scrn-1450:h-184
      scrn-1500:h-192
      scrn-1550:h-198
      scrn-1600:h-208
      scrn-1700:h-228
      scrn-1800:h-240
      scrn-1850:h-244
      scrn-1900:h-264
      scrn-1950:h-272
      scrn-2000:h-280
      scrn-2050:h-288
      scrn-2100:h-296
      scrn-2150:h-304
      scrn-2200:h-312
      scrn-2250:h-316
      scrn-2300:h-324
      scrn-2400:h-339
      scrn-2500:h-352"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10 hidden scrn-600:block
        scrn-600:mt-10 
        scrn-750:mt-4
        scrn-800:mt-6
        scrn-900:mt-0 
        scrn-1000:mt-9 
        scrn-1100:mt-4
        scrn-1250:mt-9 
        scrn-1500:mt-0"
      >
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
      <div className="absolute inset-0 z-10 scrn-600:hidden
      mt-20
      scrn-500:mt-14
      scrn-550:mt-10"
      >
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
      <div className={`
      scrn-800:pb-20
      scrn-1000:pb-12
      scrn-1200:pb-0
      fixed scrn-750:ms-0 p-2 scrn-600:ps-4 scrn-1250:ps-12 text-left transition-opacity duration-100 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Breadcrumb */}
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
            <li className="text-red-600">Our Team</li>
          </ul>
        </nav>

        {/* Headline */}
        <div className='scrn-1250:space-x-4 scrn-1500:space-x-0'>
          <span className="
            text-4xl 
            scrn-450:text-5xl 
            scrn-600:text-7xl 
            scrn-750:text-7xl 
            scrn-800:text-7xl 
            scrn-900:text-8xl 
            scrn-1000:text-8xl 
            scrn-1250:text-9xl 
            scrn-1500:text-10xl 
            scrn-1700:text-10xl 
            scrn-1900:text-10xl 
            scrn-2500:text-12xl"
          >
            OUR
          </span>
          <span className="scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap
            text-6xl 
            scrn-450:text-7xl
            scrn-500:text-8xl 
            scrn-600:text-8xl 
            scrn-750:text-9xl 
            scrn-800:text-9xl 
            scrn-900:text-9xl 
            scrn-1000:text-10xl 
            scrn-1250:text-11xl 
            scrn-1500:text-12xl 
            scrn-1700:text-13xl 
            scrn-1900:text-14xl 
            scrn-2500:text-18xl"
          >
            TEAM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
