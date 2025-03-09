import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="text-black font-inter md:px-8 md:pt-4 lg:pt-12 xl:pt-16 scrn-1500:pt-24 scrn-1700:pt-20 scrn-1700:px-20 scrn-1900:px-24 scrn-1900:pt-40 scrn-2k:px-32">
      <div className="grid md:grid-cols-3 gap-8 items-center text-gray-300">
        {/* Column 1: Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-1 lg:space-y-2">
          <span className="scrn-mobile:text-xs sm:text-xs md:text-xs md:pt-6 xl:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg footer-text-dark">For More Information</span>
          <span className='md:ps-0 lg:ps-6 scrn-mobile:text-xs sm:text-xs md:text-xs xl:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg whitespace-nowrap footer-text-dark'>855-444-APEC | Sales@TheAPECgroup.com</span>
          <div className="flex  space-x-4 md:ps-0 lg:ps-12">
            <SocialIcon
              url="https://twitter.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#e82228"
              className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
            />
            <SocialIcon
              url="https://www.instagram.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#e82228"
              className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
            />
            <SocialIcon
              url="https://www.facebook.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#e82228"
              className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#e82228"
              className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
            />
          </div>
        </div>

        {/* Column 2: Addresses and Contact Information */}
        <div className="flex flex-col space-y-4 pb-4 items-center md:pt-2">
          <p className="hidden md:block md:text-xs xl:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2k:text-xl leading-relaxed footer-text-dark">
            Main Office: Atlanta, Georgia<br />
            4732-E North Royal Atlanta<br />
            Drive Tucker, GA 30084
          </p>
          <p className="hidden md:block md:text-xs xl:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2k:text-xl leading-relaxed footer-text-dark">
            Branch Office: Houston, Texas<br />
            505 Garden Oaks Boulevard<br />
            Houston, TX 77018
          </p>
          <p className="hidden md:hidden lg:block md:text-xs xl:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2k:text-xl leading-relaxed footer-text-dark">
            For More Info: 855-444-APEC<br />
            <a
              href="mailto:Service@TheAPECgroup.com"
              className="text-[#e82228] hover:text-[#9c2e2b] transition-colors"
            >
              Service@TheAPECgroup.com
            </a>
            <br />
            <a
              href="mailto:Sales@TheAPECgroup.com"
              className="text-[#e82228] hover:text-[#9c2e2b] transition-colors"
            >
              Sales@TheAPECgroup.com
            </a>
          </p>
        </div>

        {/* Column 3: Logo */}
        <div className="flex justify-center md:justify-end scrn-900:mt-auto scrn-mobile:-mt-16 sm:-mt-16">
          <Link href="/">
            <Image
              src="/logos/APEC.png"
              alt="APEC Since 1989"
              height={1206}
              width={1315}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 h-20 sm:h-16 md:h-28 scrn-900:h-32 lg:h-40 xl:h-52 scrn-1500:h-60 scrn-1700:h-72 scrn-1900:h-72 scrn-2k:h-80 w-auto"
            />
          </Link>
        </div>
      </div>

      <hr className="h-px bg-gray-600 border-0"></hr>

      {/* Copyright*/}
      <div className="w-full py-4">
        <p className="text-xs md:text-xs xl:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2k:text-xl text-center text-gray-300 font-light">
          Copyright 2024–2025 © The APEC Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
