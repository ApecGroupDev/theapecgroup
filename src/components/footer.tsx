import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='text-black bg-[#333333] font-inter'>
      {/* Gradient Bar */}
      <div className="h-4 bg-gradient-to-r from-[#333333] from-10% to-red-700 to-90%" />
      <div className='grid grid-cols-1 scrn-750:grid-cols-2 scrn-1000:grid-cols-3 gap-8 pt-12 items-center text-gray-300 scrn-750:px-8 scrn-1900:px-24 scrn-2500:px-32
      justify-center
      '>
        {/* Column 1: Social Media Icons */}
        <div className='flex flex-col scrn-600:mt-8 scrn-750:mt-0 items-center space-y-2 scrn-750:space-y-1 scrn-1000:space-y-2'>
          <span className='scrn-750:pt-6 footer-text-dark whitespace-nowrap'>For More Information</span>
          <span className='text-xs scrn-400:text-base scrn-1000:ps-6 whitespace-nowrap footer-text-dark'><a href="tel:855-444-2732">855-444-2732</a> | <a href="mailto:Sales@TheAPECgroup.com">Sales@TheAPECgroup.com</a></span>
          <div className='hidden scrn-750:flex space-x-4 pb-4'>
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
          <div className='flex items-center mx-auto scrn-750:hidden space-x-4 pb-4'>
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
        <div className='flex flex-col space-y-4 pb-4 items-center scrn-750:pt-2 text-center mx-auto'>
          <p className='leading-relaxed footer-text-dark'>
            Main Office: Atlanta, Georgia<br />
            4732-E North Royal Atlanta<br />
            Drive Tucker, GA 30084
          </p>
          <p className='leading-relaxed footer-text-dark'>
            Branch Office: Houston, Texas<br />
            505 Garden Oaks Boulevard<br />
            Houston, TX 77018
          </p>
          <div className="space-y-2 leading-relaxed footer-text-dark">
            <p>For More Info: <a href="tel:855-444-2732">855-444-2732</a></p>
            <a href="mailto:Service@TheAPECgroup.com" className="text-[#c62931] hover:text-red-500 transition-colors">Service@TheAPECgroup.com</a><br />
            <a href="mailto:Sales@TheAPECgroup.com" className="text-[#c62931] hover:text-red-500 transition-colors">Sales@TheAPECgroup.com</a>
          </div>
        </div>

        {/* Column 3: Logo */}
        <div className='justify-center scrn-750:hidden scrn-1000:block'>
          <Link href="/">
            <Image
              src="/logos/APEC.webp"
              alt="APEC Since 1989"
              height={227}
              width={208}
              className='scale-75 h-auto w-auto mx-auto'
            />
          </Link>
        </div>

      </div>

      <hr className='h-px bg-gray-600 border-0'></hr>

      {/* Copyright*/}
      <div className='w-full py-4'>
        <p className='text-center text-gray-300 font-light'>
          Copyright 2024–2025 © The APEC Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
