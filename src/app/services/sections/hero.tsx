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
      className=" relative pointer-events-none scrn-600:justify-center justify-between overflow-hidden
      scrn-300:h-112 
      scrn-450:h-112 
      scrn-600:h-112 
      scrn-750:h-116 
      scrn-800:h-120 
      scrn-900:h-128 
      scrn-1000:h-136 
      scrn-1100:h-160 
      scrn-1250:h-176 
      scrn-1500:h-208 
      scrn-1700:h-240 
      scrn-1900:h-256 
      scrn-2500:h-352"
    >
      {/* Background Image */}
      <div className="absolute scrn-600:inset-0 z-10 scrn-300:bottom-20 scrn-300:scale-150 scrn-450:bottom-16 scrn-450:scale-150">
        <Image
          src="/backgrounds/services/Hero_Services.png"
          alt="Background"
          style={{ objectFit: 'cover' }}
          width={2786}
          height={1438}
          priority
        />
      </div>

      {/* Left Text Section */}
      <div
        className={`fixed text-left
          scrn-300:p-2 
          scrn-450:p-4 
          scrn-750:p-12

          scrn-300:space-y-8 
          scrn-450:space-y-10 
          scrn-600:p-8 scrn-750:ms-0 
          scrn-600:space-y-5 
          scrn-750:space-y-0 
          scrn-800:space-y-4 
          scrn-900:space-y-4 
          scrn-1000:space- 
          scrn-1250:space-y-6 
          scrn-1500:space-y-6 
          scrn-1700:space-y-20 
          scrn-1900:space-y-10 
          scrn-2550:space-y-32 
          
          scrn-900:my-8 
          scrn-1000:my-16 
          scrn-1250:my-24 
          scrn-1900:my-40 
          scrn-2550:my-36 

          transition-opacity duration-250 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        {/* Breadcrumb */}
        <nav className="pt-14 scrn-300:mt-6 scrn-450:mt-6">
          <ul className="flex scrn-600:items-center space-x-2 font-semibold text-gray-600 tracking-widest
            scrn-1500:text-2xl 
            scrn-1700:text-2xl 
            scrn-1900:text-xl 
            scrn-2500:text-3xl"
          >
            <li>
              <Link href="/home" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-red-600">Services</li>
          </ul>
        </nav>

        {/* Headline */}
        <div className=''>
          <span className="scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap
            scrn-300:text-6xl 
            scrn-450:text-7xl 
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
            SERVICES
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
