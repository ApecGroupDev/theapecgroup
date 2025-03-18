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
        setFadeOut(top < -80); // Adjust to control when the fade starts
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero-section" className="scrn-300:h-124 scrn-mobile:h-136 sm:h-120 md:h-116 scrn-800:h-116 scrn-900:h-124 lg:h-132 scrn-1100:h-160 xl:h-176 scrn-1500:h-198 scrn-1700:h-224 scrn-1900:h-240 scrn-2k:h-320 sm:justify-center justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10 sm:mt-24 md:mt-0 scrn-300:hidden scrn-mobile:hidden">
        <Image
          src="/backgrounds/aboutUs/Hero.png"
          alt="Background"
          style={{objectFit: 'cover'}}
          width={2786}
          height={1438}
          priority
        />
      </div>

      {/* Background Image Mobile */}
      <div className="absolute inset-0 z-10 sm:hidden">
        <Image
          src="/backgrounds/aboutUs/Hero-Mobile.png"
          alt="Background"
          style={{objectFit: 'cover'}}
          width={2786}
          height={1438}
          priority
        />
      </div>

      {/* Left Text Section */}
      <div className={`fixed scrn-300:p-2 scrn-mobile:p-4 sm:p-8 md:ms-0 scrn-300:space-y-4 sm:space-y-8 md:space-y-0 xl:space-y-4 scrn-1500:space-y-4 scrn-1700:space-y-12 scrn-1900:space-y-4 scrn-2k:space-y-24 text-left md:p-12 scrn-900:my-8 lg:my-16 xl:my-24 scrn-1900:my-44 scrn-2k:my-40 transition-opacity duration-250 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Breadcrumb */}
        <nav className="pt-14 scrn-300:mt-20 scrn-mobile:mt-28">
          <ul className="flex items-center space-x-2 scrn-1500:text-2xl scrn-1700:text-2xl scrn-1900:text-xl scrn-2k:text-3xl font-semibold text-gray-600 tracking-widest">
            <li>
              <Link href="/home" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-red-600">About Us</li>
          </ul>
        </nav>

        {/* Headline */}
        <div>
          <div className="scrn-mobile:-space-y-3 sm:-space-y-3 md:space-y-0 scrn-800:-space-y-4 scrn-900:-space-y-6 lg:-space-y-4 xl:-space-y-6 scrn-1500:-space-y-8 scrn-1700:-space-y-8 scrn-1900:-space-y-12">
            <p className="text-7xl sm:text-8xl md:text-8xl scrn-800:text-9xl scrn-900:text-9xl lg:text-9xl xl:text-10xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-2k:text-18xl scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap">
              ABOUT
            </p>
            <p className="text-5xl sm:text-7xl md:text-7xl scrn-800:text-7xl scrn-900:text-8xl lg:text-8xl xl:text-9xl scrn-1500:text-10xl scrn-1700:text-10xl scrn-1900:text-11xl scrn-2k:text-13xl font-regular italic whitespace-nowrap">
              US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
