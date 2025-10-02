import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='text-black bg-[#333333] font-inter'>
      {/* Gradient Bar */}
      <div className="h-4 bg-gradient-to-r from-[#333333] from-10% to-red-700 to-90%" />
      <div className='grid grid-cols-3 gap-8 pt-12 items-center text-gray-300 scrn-750:px-8 scrn-1900:px-24 scrn-2500:px-32'>
        {/* Column 1: Social Media Icons */}
        <div className='flex flex-col ms-2 scrn-600:ms-4 scrn-600:mt-8 scrn-750:mt-0 scrn-750:ms-0 items-start space-y-2 scrn-750:space-y-1 scrn-1000:space-y-2'>
          <span className='text-xs scrn-750:pt-6 scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg footer-text-dark whitespace-nowrap'>For More Information</span>
          <span className='text-xs scrn-750:ps-0 scrn-1000:ps-6 scrn-125:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg whitespace-nowrap footer-text-dark'><a href="tel:855-444-2732">855-444-2732</a> | <a href="mailto:Sales@TheAPECgroup.com">Sales@TheAPECgroup.com</a></span>
          <div className='hidden scrn-750:flex space-x-4 scrn-750:ps-0 scrn-1000:ps-12'>
            <SocialIcon
              url="https://twitter.com/theapecgroup"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
            <SocialIcon
              url="https://www.instagram.com/the_apec_group/"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
            <SocialIcon
              url="https://www.facebook.com/people/APEC-Group/100078538340182/"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
            <SocialIcon
              url="https://www.linkedin.com/company/apec-group-petroleum-equipment-and-services"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
          </div>
          <div className='flex scrn-750:hidden space-x-4 pb-2 scrn-400:pb-0'>
            <SocialIcon
              url="https://twitter.com/theapecgroup"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
            <SocialIcon
              url="https://www.instagram.com/the_apec_group/"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
            <SocialIcon
              url="https://www.facebook.com/people/APEC-Group/100078538340182/"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
            <SocialIcon
              url="https://www.linkedin.com/company/apec-group-petroleum-equipment-and-services"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className='transition-transform transform hover:scale-125'
            />
          </div>
        </div>

        {/* Column 2: Addresses and Contact Information */}
        <div className='flex flex-col space-y-4 pb-4 items-center scrn-750:pt-2'>
          <p className='hidden scrn-800:block scrn-750:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl leading-relaxed footer-text-dark'>
            Main Office: Atlanta, Georgia<br />
            4732-E North Royal Atlanta<br />
            Drive Tucker, GA 30084
          </p>
          <p className='hidden scrn-800:block scrn-750:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl leading-relaxed footer-text-dark'>
            Branch Office: Houston, Texas<br />
            505 Garden Oaks Boulevard<br />
            Houston, TX 77018
          </p>
          <div className="space-y-2 hidden scrn-800:block scrn-750:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl leading-relaxed footer-text-dark">
            <p>For More Info: <a href="tel:855-444-2732">855-444-2732</a></p>
            <a href="mailto:Service@TheAPECgroup.com" className="text-[#c62931] hover:text-red-500 transition-colors">Service@TheAPECgroup.com</a><br />
            <a href="mailto:Sales@TheAPECgroup.com" className="text-[#c62931] hover:text-red-500 transition-colors">Sales@TheAPECgroup.com</a>
          </div>
        </div>

        {/* Column 3: Logo */}
        <div className='hidden scrn-350:flex justify-center scrn-750:hidden'>
          <Link href="/">
            <Image
              src="/logos/APEC.webp"
              alt="APEC Since 1989"
              height={116}
              width={106}
              className='transition-transform duration-300 ease-in-out transform hover:scale-105 scrn-450:h-24 scrn-600:h-32 scrn-750:h-28 scrn-1000:h-40 scrn-1250:h-52 scrn-1500:h-60 scrn-1700:h-72 scrn-1900:h-72 scrn-2500:h-80 w-auto'
            />
          </Link>
        </div>
        <div className='hidden scrn-750:flex justify-center scrn-750:justify-end'>
          <Link href="/">
            <Image
              src="/logos/APEC.webp"
              alt="APEC Since 1989"
              height={227}
              width={208}
              className='transition-transform duration-300 ease-in-out transform hover:scale-105 scrn-450:h-24 scrn-600:h-32 scrn-750:h-28 scrn-1000:h-40 scrn-1250:h-52 scrn-1500:h-60 scrn-1700:h-72 scrn-1900:h-72 scrn-2500:h-80 w-auto'
            />
          </Link>
        </div>

      </div>

      <hr className='h-px bg-gray-600 border-0'></hr>

      {/* Copyright*/}
      <div className='w-full py-4'>
        <p className='text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl text-center text-gray-300 font-light'>
          Copyright 2024–2025 © The APEC Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
