import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="text-black font-inter md:px-8 pt-32 md:pt-4 lg:pt-6 xl:pt-24 mac-14:pt-40 mac-16:pt-52 mac-16:px-20 2xl:px-24 2xl:pt-52 2k:px-32">
      <div className="grid md:grid-cols-3 gap-8 items-center text-gray-300">
        {/* Column 1: Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-1 lg:space-y-2">
          <span className="scrn-mobile:text-xs sm:text-xs md:text-xs md:pt-6 xl:text-sm mac-14:text-base mac-16:text-lg 2xl:text-lg footer-text-dark">For More Information</span>
          <span className='md:ps-0 lg:ps-6 scrn-mobile:text-xs sm:text-xs md:text-xs xl:text-sm mac-14:text-base mac-16:text-lg 2xl:text-lg whitespace-nowrap footer-text-dark'>855-444-APEC | Sales@TheAPECgroup.com</span>
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
          <p className="hidden md:block md:text-xs xl:text-sm mac-14:text-base mac-16:text-lg 2xl:text-lg 2k:text-xl leading-relaxed footer-text-dark">
            Main Office: Atlanta, Georgia<br />
            4732-E North Royal Atlanta<br />
            Drive Tucker, GA 30084
          </p>
          <p className="hidden md:block md:text-xs xl:text-sm mac-14:text-base mac-16:text-lg 2xl:text-lg 2k:text-xl leading-relaxed footer-text-dark">
            Branch Office: Houston, Texas<br />
            505 Garden Oaks Boulevard<br />
            Houston, TX 77018
          </p>
          <p className="hidden md:hidden lg:block md:text-xs xl:text-sm mac-14:text-base mac-16:text-lg 2xl:text-lg 2k:text-xl leading-relaxed footer-text-dark">
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
        <div className="flex justify-center md:justify-end scrn-mobile:-mt-16 sm:-mt-16">
          <Link href="/">
            <Image
              src="/logos/APEC.png"
              alt="APEC Since 1989"
              height={1206}
              width={1315}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 h-20 sm:h-16 md:h-28 lg:h-40 xl:h-52 mac-14:h-60 mac-16:h-72 2xl:h-72 2k:h-80 w-auto"
            />
          </Link>
        </div>
      </div>

      <hr className="h-px bg-gray-600 border-0"></hr>

      {/* Copyright*/}
      <div className="w-full py-4">
        <p className="text-xs md:text-xs xl:text-sm mac-14:text-base mac-16:text-lg 2xl:text-lg 2k:text-xl text-center text-gray-300 font-light">
          Copyright 2024–2025 © The APEC Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
