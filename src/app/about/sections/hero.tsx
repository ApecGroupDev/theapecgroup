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
      <div className="relative z-0 -space-y-8 text-center md:text-left p-12 my-40">
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
        <div className='2xl:-space-y-36 2k:-space-y-48'>
          <p className="2xl:text-14xl 2k:text-18xl scale-y-110 text-red-600 p-0 m-0 font-semibold whitespace-nowrap">
            ABOUT
          </p>
          <p className="2xl:text-10xl 2k:text-12xl font-regular italic whitespace-nowrap">
            US
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
