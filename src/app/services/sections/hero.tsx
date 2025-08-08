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
  }, [fadeOutThreshold]);

  return (
    <div
      id="hero-section"
      ref={heroRef}
      className='relative flex pointer-events-none items-center overflow-hidden h-80 scrn-450:h-96 scrn-500:h-114 scrn-600:h-118 scrn-700:h-124 scrn-750:h-128 scrn-800:h-120 scrn-850:h-124 scrn-900:h-128 scrn-950:h-132 scrn-1000:h-140 scrn-1050:h-144 scrn-1100:h-148 scrn-1150:h-152 scrn-1200:h-160 scrn-1300:h-172 scrn-1400:h-180 scrn-1450:h-184 scrn-1500:h-192 scrn-1550:h-198 scrn-1600:h-208 scrn-1700:h-228 scrn-1800:h-240 scrn-1850:h-244 scrn-1900:h-264 scrn-1950:h-280 scrn-2050:h-288 scrn-2100:h-296 scrn-2150:h-304 scrn-2200:h-312 scrn-2250:h-316 scrn-2300:h-324 scrn-2400:h-339 scrn-2500:h-352'>

      {/* Left Text Section */}
      <div className={`fixed scrn-800:pb-20 scrn-1000:pb-12 scrn-1200:pb-0 scrn-750:ms-0 p-2 scrn-600:ps-4 scrn-1250:ps-12 text-left transition-opacity duration-75
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Breadcrumb */}
        <nav>
          <ul className='flex scrn-600:items-center space-x-2 font-semibold text-gray-600 tracking-widest text-2xs scrn-600:text-xs scrn-750:text-sm scrn-1000:text-lg scrn-1500:text-xl'>
            <li>
              <Link href="/home" className='hover:text-[#c62931]'>
                Home
              </Link>
            </li>
            <li>/</li>
            <li className='text-[#c62931]'>Services</li>
          </ul>
        </nav>

        {/* Headline */}
        <div>
          <span className='scale-y-110 text-[#c62931] p-0 m-0 font-semibold whitespace-nowrap text-5xl scrn-400:text-7xl scrn-600:text-8xl scrn-750:text-9xl scrn-800:text-9xl scrn-900:text-9xl scrn-1000:text-10xl scrn-1250:text-11xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-2200:text-16xl scrn-2400:text-18xl'>
            SERVICES
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
