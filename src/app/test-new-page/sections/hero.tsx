"use client";

import React, { useEffect } from 'react';
// import Image from 'next/image';

const Hero: React.FC = () => {
  // const [fadeOut, setFadeOut] = useState(false);
  // const fadeOutThreshold = -20;
  // const heroRef = useRef<HTMLDivElement | null>(null); // 👈 Step 1: create ref

  // Scroll to top on page load
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  // Fade out hero section based on scroll
  // useEffect(() => {
  //   const hero = heroRef.current;
  //   if (!hero) return;

  //   let ticking = false;

  //   const handleScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         const { top } = hero.getBoundingClientRect();
  //         const shouldFadeOut = top < fadeOutThreshold;
  //         setFadeOut(prev => (prev !== shouldFadeOut ? shouldFadeOut : prev));
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [fadeOutThreshold]);

  return (
    <div
      id="hero-section"
      // ref={heroRef}
      className='
      bg-[url("/backgrounds/services/imaging-and-canopies/Test-Page-Hero.jpg")] bg-cover bg-top bg-no-repeat
      items-center relative flex pointer-events-none overflow-hidden h-screen'>
      {/* <Image
        src="/servicesLogos/Apec-Imaging.webp"
        alt="Logo"
        width={1920}
        height={1080}
        className='w-auto mx-auto scrn-1000:h-24 scrn-1300:h-28 scrn-1600:h-32 scrn-1900:h-80 scrn-2200:h-48 mb-auto pt-24'
      /> */}

      <div
      // className={`fixed scrn-750:ms-0 p-2 scrn-600:ps-4 text-left transition-opacity duration-75 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="">
          {/* Top div */}
          <div className='mb-8 mt-12 ps-2'>
            <h1>
              <span
                className='font-semibold whitespace-nowrap text-[#c62931] text-5xl scrn-400:text-6xl scrn-600:text-7xl scrn-750:text-8xl scrn-1200:text-9xl scrn-1500:text-9xl scrn-1600:text-10xl scrn-1900:text-10xl scrn-2500:text-13xl'>
                IMAGING & <br />
                CANOPIES
              </span>
            </h1>
          </div>

          {/* Bottom div */}
          <div>
            <h1 className='bg-red-600/65 p-2 scrn-600:w-2/3'>
              <span
                className='font-semibold whitespace-normal text-gray-200 text-3xl scrn-750:text-4xl scrn-1000:text-5xl scrn-1500:text-6xl'>
                Custom Canopy Imaging That Elevates Your Gas Station’s Brand
              </span>
            </h1>
            <div className='bg-white/65 p-2 scrn-600:w-2/3'>
              <h1 className='text-2xl scrn-750:text-2xl scrn-1000:text-3xl scrn-1500:text-4xl'>
                <span>
                  30+ years helping fuel retailers across Georgia, Texas, and
                  Atlanta create standout stations with custom canopy designs and installations.
                </span>
              </h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
