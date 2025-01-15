import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-black py-6 font-inter mt-24">
      <div className="2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-gray-300">
          {/* Column 1: Social Media Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="text-lg">For More Information</span>
            <span className='ps-6'>855-444-APEC | Sales@TheAPECgroup.com</span>
            <div className="flex space-x-4 ps-12">
              <SocialIcon
                url="https://twitter.com"
                target="_blank"
                style={{ height: 40, width: 40, borderRadius: 8 }}
                bgColor="#e82228"
                className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
              />
              <SocialIcon
                url="https://www.instagram.com"
                target="_blank"
                style={{ height: 40, width: 40, borderRadius: 8 }}
                bgColor="#e82228"
                className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
              />
              <SocialIcon
                url="https://www.facebook.com"
                target="_blank"
                style={{ height: 40, width: 40, borderRadius: 8 }}
                bgColor="#e82228"
                className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
              />
              <SocialIcon
                url="https://www.linkedin.com"
                target="_blank"
                style={{ height: 40, width: 40, borderRadius: 8 }}
                bgColor="#e82228"
                className="hover:bg-[#e82228] transition-transform transform hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2: Addresses and Contact Information */}
          <div className="flex flex-col items-center text-left space-y-4 pb-6">
            <p className="text-base leading-relaxed">
              Main Office: Atlanta, Georgia<br />
              4732-E North Royal Atlanta<br />
              Drive Tucker, GA 30084
            </p>
            <p className="text-base leading-relaxed">
              Branch Office: Houston, Texas<br />
              505 Garden Oaks Boulevard<br />
              Houston, TX 77018
            </p>
            <p className="text-base leading-relaxed">
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
          <div className="flex justify-end">
            <Link href="/">
              <img
                src="https://theapecgroup.com/wp-content/uploads/2022/12/APEC-Since1989.png"
                alt="APEC Logo"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105 2xl:h-60"
              />
            </Link>
          </div>
        </div>
      </div>

      <hr className="h-px bg-gray-600 border-0"></hr>

      {/* Copyright*/}
      <div className="w-full 2xl:pt-6">
        <p className="text-md text-center text-gray-300 font-light">
          Copyright 2024–2025 © The APEC Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
