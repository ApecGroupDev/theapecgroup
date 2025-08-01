"use client";
import React, { useEffect, useState, useRef } from 'react';
// import { useBackgroundIndex } from '@/contexts/BackgroundContext';
import Image from 'next/image';
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

  // const { imageIndex } = useBackgroundIndex();

  // const backgroundImages = [
  //   "/backgrounds/ourTeam/Hero_Team_New.png",
  //   "/backgrounds/ourTeam/Hero_Team_New.png",
  //   "/backgrounds/ourTeam/Hero_Team_New.png",
  //   "/backgrounds/ourTeam/Hero_Team_New.png",
  // ];

  // const selectedBg = imageIndex !== null ? imageIndex : 0;

  return (
    <div
      id="hero-section"
      ref={heroRef}
      className='relative flex pointer-events-none items-center overflow-hidden h-116 scrn-350:h-120 scrn-400:h-124 scrn-450:h-136 scrn-500:h-148 scrn-600:h-108 scrn-650:h-110 scrn-700:h-112 scrn-750:h-116 scrn-800:h-120 scrn-850:h-124 scrn-900:h-128 scrn-950:h-132 scrn-1000:h-140 scrn-1100:h-156 scrn-1200:h-164 scrn-1250:h-172 scrn-1300:h-176 scrn-1350:h-180 scrn-1400:h-188 scrn-1450:h-192 scrn-1500:h-198 scrn-1550:h-208 scrn-1600:h-216 scrn-1650:h-224 scrn-1700:h-228 scrn-1750:h-232 scrn-1800:h-240 scrn-1850:h-244 scrn-1900:h-264 scrn-1950:h-272 scrn-2000:h-280 scrn-2050:h-288 scrn-2100:h-296 scrn-2150:h-304 scrn-2200:h-312 scrn-2250:h-316 scrn-2300:h-324 scrn-2400:h-339 scrn-2500:h-352'>
      {/* Background Image */}
      <div className='absolute inset-0 z-10 mt-44 scrn-350:mt-36 scrn-400:mt-32 scrn-450:mt-48 scrn-500:mt-44 scrn-550:mt-40 scrn-600:mt-8 scrn-650:mt-4 scrn-750:mt-4 scrn-800:mt-4 scrn-900:mt-0 scrn-1000:mt-8 scrn-1050:mt-4 scrn-1100:mt-4 scrn-1250:mt-8 scrn-1300:mt-4 scrn-1400:mt-4 scrn-1500:mt-8 scrn-1600:mt-4 scrn-1700:mt-4'>
        <Image
          src="/backgrounds/ourTeam/Hero_Team_New.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      {/* Background Image Mobile */}
      {/* <div className='absolute inset-0 z-10 hidden scrn-500:mt-14 scrn-550:mt-10'>
        <Image
          src="/backgrounds/ourTeam/Hero_Team_New_Mobile.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div> */}

      {/* Left Text Section */}
      <div className={`scrn-800:pb-20 scrn-1000:pb-12 scrn-1200:pb-0 scrn-1900:pb-14 fixed scrn-750:ms-0 p-2 scrn-600:ps-4 scrn-1250:ps-12 text-left transition-opacity duration-75
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}>
        <div className='pb-24 scrn-400:pb-16 scrn-600:pb-8 scrn-700:pb-0'>
          {/* Breadcrumb */}
          <nav>
            <ul className='flex scrn-600:items-center space-x-2 font-semibold text-gray-600 tracking-widest text-2xs scrn-600:text-xs scrn-750:text-sm scrn-1000:text-lg scrn-1500:text-xl'>
              <li>
                <Link href="/home" className='hover:text-[#c62931]'>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className='text-[#c62931]'>Our Team</li>
            </ul>
          </nav>

          {/* Headline */}
          <div className='scrn-1250:space-x-4 scrn-1500:space-x-0'>
            <span className='italic text-4xl scrn-450:text-5xl scrn-600:text-7xl scrn-750:text-7xl scrn-800:text-7xl scrn-900:text-8xl scrn-1000:text-8xl scrn-1250:text-9xl scrn-1500:text-10xl scrn-1700:text-10xl scrn-1900:text-10xl scrn-2200:text-11xl scrn-2400:text-12xl'>
              OUR
            </span>
            <span className='scale-y-110 text-[#c62931] p-0 m-0 font-semibold whitespace-nowrap text-6xl scrn-450:text-7xl scrn-500:text-8xl scrn-600:text-8xl scrn-750:text-9xl scrn-800:text-9xl scrn-900:text-9xl scrn-1000:text-10xl scrn-1250:text-11xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-2200:text-16xl scrn-2400:text-18xl'>
              TEAM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
