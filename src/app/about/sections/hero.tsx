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
    <div id="hero-section" className="scrn-300:h-124 scrn-450:h-136 scrn-600:h-120 scrn-750:h-116 scrn-800:h-116 scrn-900:h-124 scrn-1000:h-132 scrn-1100:h-160 scrn-1250:h-176 scrn-1500:h-198 scrn-1700:h-224 scrn-1900:h-240 scrn-2550:h-320 scrn-600:justify-center justify-between overflow-hidden">

      <div className="absolute inset-0 z-10 scrn-600:mt-24 scrn-750:mt-0 hidden scrn-600:block">
        <Image
          src="/backgrounds/aboutUs/Hero_About.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 scrn-600:hidden">
        <Image
          src="/backgrounds/aboutUs/Hero_About_Mobile.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      <div className={`fixed scrn-300:p-2 scrn-450:p-4 scrn-600:p-8 scrn-750:ms-0 scrn-300:space-y-4 scrn-600:space-y-8 scrn-750:space-y-0 scrn-1250:space-y-4 scrn-1500:space-y-4 scrn-1700:space-y-12 scrn-1900:space-y-4 scrn-2550:space-y-24 text-left scrn-750:p-12 scrn-900:my-8 scrn-1000:my-16 scrn-1250:my-24 scrn-1900:my-44 scrn-2550:my-40 transition-opacity duration-100 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <nav className="pt-14 scrn-300:mt-20 scrn-450:mt-28">
          <ul className="flex scrn-600:items-center space-x-2 scrn-300:text-2xs scrn-450:text-2xs scrn-600:text-3xs scrn-750:text-3xs scrn-800:text-2xs scrn-900:text-2xs scrn-1000:text-2xs scrn-1250:text-xs scrn-1500:text-md scrn-1700:text-md scrn-1900:text-xl scrn-2550:text-xl font-semibold text-gray-600 tracking-widest">
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
          <div className="scrn-450:-space-y-3 scrn-600:-space-y-3 scrn-750:space-y-0 scrn-800:-space-y-4 scrn-900:-space-y-6 scrn-1000:-space-y-4 scrn-1250:-space-y-6 scrn-1500:-space-y-8 scrn-1700:-space-y-8 scrn-1900:-space-y-12">
            <p className="text-7xl scrn-600:text-8xl scrn-750:text-8xl scrn-800:text-9xl scrn-900:text-9xl scrn-1000:text-9xl scrn-1250:text-10xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-2550:text-18xl scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap">
              ABOUT
            </p>
            <p className="text-5xl scrn-600:text-7xl scrn-750:text-7xl scrn-800:text-7xl scrn-900:text-8xl scrn-1000:text-8xl scrn-1250:text-9xl scrn-1500:text-10xl scrn-1700:text-10xl scrn-1900:text-11xl scrn-2550:text-13xl font-regular italic whitespace-nowrap">
              US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
