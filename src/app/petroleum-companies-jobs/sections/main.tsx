"use client";

import React from 'react';
import CareersForm from '@/components/careersForm';

const CareersMain: React.FC = () => {
  return (
    <div className='flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 scrn-800:mx-8 scrn-1350:mx-0 py-4 scrn-1750:py-24 scrn-2000:py-32 scrn-2100:py-44 scrn-2400:py-60'>

      {/* First Row */}
      {/* <div className='flex flex-col-reverse scrn-800:flex-row w-full max-w-[1200px] gap-4 px-4'>
        <div className='scrn-800:w-2/3 relative rounded-xl overflow-hidden shadow-md'>
          <Image
            src="/backgrounds/careers/Background_1.webp"
            alt="Current Openings Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className='relative p-6 flex scrn-800:text-xl flex-col justify-center h-full text-white'>
            <h2 className='font-semibold mb-4'>Current Openings</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Environmental Compliance Technician / Trainee</li>
              <li>Field Service Technician / Trainee</li>
              <li>Construction Assistant</li>
            </ul>
          </div>
        </div>
        <div className='scrn-800:w-1/3 bg-gray-500 rounded-xl text-white shadow-md p-6 flex flex-col justify-center'>
          <h2 className='scrn-800:text-xl font-semibold mb-4'>Main Office</h2>
          <p className='font-semibold'>
            4732-E North Royal Atlanta Drive<br />
            Tucker, Georgia 30084
          </p>
        </div>
      </div> */}


      {/* Second Row */}
      {/* <div className='flex flex-col scrn-800:flex-row w-full max-w-[1200px] gap-4 px-4'>
        <div className='scrn-800:w-1/3 bg-red-600 rounded-xl text-white shadow-md p-6 flex flex-col justify-center'>
          <h2 className='scrn-800:text-xl font-semibold mb-4'>Branch Office</h2>
          <p className='font-semibold'>
            505 Garden Oaks Boulevard<br />
            Houston, Texas 77018
          </p>
        </div>
        <div className='scrn-800:w-2/3 relative rounded-xl overflow-hidden shadow-md'>
          <Image
            src="/backgrounds/careers/Background_2.webp"
            alt="Current Openings Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className='relative p-6 flex scrn-800:text-xl flex-col justify-center h-full text-white'>
            <h2 className='font-semibold mb-4'>Current Openings</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Environmental Compliance Technician / Trainee</li>
              <li>Field Service Technician / Trainee</li>
              <li>Construction Assistant</li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="w-full mx-auto scrn-1900:max-w-7xl py-12">
        <div className="grid grid-cols-1 scrn-1000:grid-cols-3 gap-6 rounded-xl shadow-lg overflow-hidden">

          {/* Column 1 - Office */}
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2 text-[#c62931]">Main Office</h2>
            <p className="text-sm opacity-80">Atlanta, Georgia</p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-[#c62931]">Branch Office</h2>
              <p className="text-sm opacity-80">Houston, Texas</p>
            </div>
          </div>

          {/* Column 2 - Location */}
          <div className="p-6 flex flex-col justify-center text-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-[#c62931]">Location</h2>
            <p className="text-sm mb-6">
              4732-E North Royal Atlanta Drive<br />
              Tucker, Georgia 30084
            </p>

            <p className="text-sm">
              505 Garden Oaks Boulevard<br />
              Houston, Texas 77018
            </p>
          </div>

          {/* Column 3 - Jobs Open */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0"></div>
            <div className="relative p-6 flex flex-col justify-center h-full">
              <h2 className="text-xl font-semibold mb-4 text-[#c62931]">Current Openings</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Environmental Compliance Technician / Trainee</li>
                <li>Field Service Technician / Trainee</li>
                <li>Construction Assistant</li>
                <li>Sales Person</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className='border-2 border-red-600 mx-auto w-4/5'/>
        <hr className='border-2 border-gray-500 mt-1 mx-auto w-3/5'/>

      <div className='relative rounded-3xl shadow-2xl mt-6 scrn-400:mt-6 scrn-450:mt-6 scrn-500:mt-8 scrn-550:mt-8 scrn-750:mt-0 mx-4 scrn-1900:max-w-7xl'>
        <div className='absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0'></div>
        <div className='relative z-10 p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24'>
          <span className='font-medium scrn-300:text-base scrn-500:text-xl scrn-600:text-xl scrn-750:text-lg scrn-800:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2000:text-4xl'>
            SEND YOUR INFORMATION HERE
          </span>
          <CareersForm />
        </div>
      </div>

    </div>
  );
};

export default CareersMain;
