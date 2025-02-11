import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div id="hero-section" className="scrn-1700:h-224 scrn-1900:h-240 scrn-2k:h-352 relative items-center justify-between bg-transparent overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/backgrounds/Building.png"
          alt="Background"
          objectFit="cover"
          className=""
          width={2786}
          height={1438}
        />
      </div>

      {/* Left Text Section */}
      <div className="relative z-0 xl:space-y-4 mac-14:space-y-4 scrn-1700:space-y-12 scrn-1900:space-y-4 scrn-2k:space-y-12 text-center md:text-left p-12 w-900:my-12 lg:my-16 xl:my-24 mac-14:my-40 scrn-1900:my-44 scrn-2k:my-40">
        {/* Breadcrumb */}
        <nav className="pt-14">
          <ul className="flex items-center space-x-2 scrn-1700:text-2xl scrn-1900:text-xl scrn-2k:text-3xl font-semibold text-gray-600 tracking-widest">
            <li>
              <Link href="/home" className="hover:text-red-600">
                Home
              </Link>   
            </li>
            <li>/</li>
            <li className="text-red-600">About Us</li>
          </ul>
        </nav>
        <div className='w-900:-space-y-6 lg:-space-y-4 xl:-space-y-6 mac-14:-space-y-8 scrn-1700:-space-y-8 scrn-1900:-space-y-12'>
          <p className="w-900:text-9xl lg:text-9xl xl:text-10xl mac-14:text-11xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-2k:text-18xl scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap">
            ABOUT
          </p>
          <p className="w-900:text-8xl lg:text-8xl xl:text-9xl mac-14:text-9xl scrn-1700:text-10xl scrn-1900:text-11xl scrn-2k:text-13xl font-regular italic whitespace-nowrap">
            US
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
