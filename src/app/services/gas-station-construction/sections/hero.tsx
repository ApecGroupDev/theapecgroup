"use client";

import React, { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const fadeOutThreshold = -20;
  const heroRef = useRef<HTMLDivElement | null>(null); // 👈 Step 1: create ref

  // Scroll to top on page load
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  // Fade out hero section based on scroll
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { top } = hero.getBoundingClientRect();
          const shouldFadeOut = top < fadeOutThreshold;
          setFadeOut(prev => (prev !== shouldFadeOut ? shouldFadeOut : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="hero-section"
      ref={heroRef}
      className='relative flex pointer-events-none items-center overflow-hidden h-116 scrn-400:h-112 scrn-450:h-118 scrn-500:h-118 scrn-550:h-118 scrn-600:h-120 scrn-650:h-120 scrn-700:h-120 scrn-750:h-116 scrn-800:h-120 scrn-850:h-124 scrn-900:h-128 scrn-950:h-132 scrn-1000:h-140 scrn-1050:h-144 scrn-1100:h-148 scrn-1150:h-156 scrn-1200:h-164 scrn-1250:h-168 scrn-1300:h-176 scrn-1350:h-180 scrn-1400:h-188 scrn-1450:h-195 scrn-1500:h-198 scrn-1550:h-208 scrn-1600:h-216 scrn-1650:h-224 scrn-1700:h-228 scrn-1750:h-232 scrn-1800:h-240 scrn-1850:h-248 scrn-1900:h-256 scrn-1950:h-260 scrn-2000:h-268 scrn-2050:h-276 scrn-2100:h-280 scrn-2150:h-288 scrn-2200:h-296 scrn-2250:h-304 scrn-2300:h-308 scrn-2350:h-312 scrn-2400:h-316 scrn-2450:h-324 scrn-2500:h-326'>
      {/* Background Image */}
      {/* <div className='absolute z-10'>
        <Image
          src="/backgrounds/services/construction/Hero_Construction_New.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1437}
          priority
          className='h-96 scrn-400:h-80 scrn-400:mt-10 scrn-450:h-96 scrn-450:mt-6 scrn-500:h-96 scrn-500:mt-10 scrn-600:h-114 scrn-600:mt-4 scrn-700:h-full scrn-700:mt-12 scrn-750:pb-10 scrn-800:pb-0 scrn-800:mt-0 scrn-900:mt-0 scrn-1000:mt-8 scrn-1100:mt-0'/>
      </div> */}

      {/* Left Text Section */}
      <div className={`fixed scrn-750:ms-0 p-2 scrn-600:ps-4 text-left transition-opacity duration-75
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}>
        {/* Breadcrumb */}
        <nav>
          <ul className='flex scrn-600:items-center space-x-2 font-semibold text-gray-600 tracking-widest text-2xs scrn-600:text-xs scrn-750:text-sm scrn-1000:text-lg scrn-1500:text-xl'>
            <li>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Services</li>
            <li>/</li>
            <li className='text-[#c62931]'>APEC Construction</li>
          </ul>
        </nav>

        <div>
          <span className='font-semibold whitespace-nowrap text-[#c62931]'>
            <span className='text-5xl scrn-450:text-6xl scrn-700:text-7xl scrn-800:text-8xl scrn-900:text-8xl scrn-1000:text-8xl scrn-1100:text-9xl scrn-1500:text-9xl scrn-1700:text-10xl scrn-1900:text-11xl scrn-2500:text-12xl'>
              APEC
            </span><br />
            <span className='text-2xl scrn-400:text-3xl scrn-450:text-4xl scrn-600:text-4xl scrn-700:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1100:text-7xl scrn-1300:text-8xl scrn-1700:text-9xl scrn-2300:text-10xl'>
              CONSTRUCTION
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
