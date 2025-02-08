import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div id="hero-section" className="relative items-center justify-between bg-transparent overflow-hidden 2k:min-h-screen">
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
      <div className="relative z-0 xl:-space-y-6 mac-14:-space-y-8 mac-16:-space-y-16 2xl:-space-y-16 2k:-space-y-8 text-center md:text-left p-12 xl:my-24 mac-14:my-40 mac-16:my-40 2xl:my-44 2k:my-40">
        {/* Breadcrumb */}
        <nav className="pt-14">
          <ul className="flex items-center space-x-2 2xl:text-xl 2k:text-3xl font-semibold text-gray-600 tracking-widest">
            <li>
              <Link href="/home" className="hover:text-red-600">
                Home
              </Link>   
            </li>
            <li>/</li>
            <li className="text-red-600">About Us</li>
          </ul>
        </nav>
        <div className='xl:-space-y-12 mac-14:-space-y-20 mac-16:-space-y-20 2xl:-space-y-28 2k:-space-y-36'>
          <p className="xl:text-10xl mac-14:text-11xl mac-16:text-13xl 2xl:text-14xl 2k:text-18xl scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap">
            ABOUT
          </p>
          <p className="xl:text-8xl mac-14:text-9xl 2xl:text-10xl 2k:text-12xl font-regular italic whitespace-nowrap">
            US
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
