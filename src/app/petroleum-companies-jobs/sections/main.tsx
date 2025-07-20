"use client";

import React from 'react';
import Image from 'next/image';

const CareersMain: React.FC = () => {
  return (
    <div className='flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 scrn-800:mx-8 scrn-1350:mx-0 py-4 scrn-1750:py-24 scrn-2000:py-32 scrn-2100:py-44 scrn-2400:py-60'>

      {/* First Row */}
      <div className='flex w-full max-w-[1200px] gap-4'>

        {/* 2/3 Box - Job Openings with Background Image */}
        <div className='w-2/3 relative rounded-xl overflow-hidden shadow-md'>
          {/* Background Image */}
          <Image
            src="/backgrounds/careers/Background_1.jpg"
            alt="Current Openings Background"
            fill
            className="object-cover"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className='relative p-6 flex text-xl flex-col justify-center h-full text-white'>
            <h2 className='font-semibold mb-4'>Current Openings</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Environmental Compliance Technician / Trainee</li>
              <li>Field Service Technician / Trainee</li>
              <li>Construction Assistant</li>
            </ul>
          </div>
        </div>

        {/* 1/3 Box - Main Office Address */}
        <div className='w-1/3 bg-gray-500 rounded-xl text-white shadow-md p-6 flex flex-col justify-center'>
          <h2 className='text-xl font-semibold mb-4'>Main Office</h2>
          <p className=''>
            Atlanta, Georgia<br />
            Location Place<br />
            4732-E North Royal Atlanta Drive<br />
            Tucker, Georgia 30084
          </p>
        </div>

      </div>


      {/* First Row */}
      <div className='flex w-full max-w-[1200px] gap-4'>

        {/* 1/3 Box - Main Office Address */}
        <div className='w-1/3 bg-red-600 rounded-xl text-white shadow-md p-6 flex flex-col justify-center'>
          <h2 className='text-xl font-semibold mb-4'>Branch Office</h2>
          <p className=''>
            Houston, Texas<br />
            Location Place<br />
            505 Garden Oaks Boulevard<br />
            Houston, Texas 77018
          </p>
        </div>

        {/* 2/3 Box - Job Openings with Background Image */}
        <div className='w-2/3 relative rounded-xl overflow-hidden shadow-md'>
          {/* Background Image */}
          <Image
            src="/backgrounds/careers/Background_2.jpg"
            alt="Current Openings Background"
            fill
            className="object-cover"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className='relative p-6 flex text-xl flex-col justify-center h-full text-white'>
            <h2 className='font-semibold mb-4'>Current Openings</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Environmental Compliance Technician / Trainee</li>
              <li>Field Service Technician / Trainee</li>
              <li>Construction Assistant</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CareersMain;
