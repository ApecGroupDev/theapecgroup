"use client";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import React from "react";
import ServicesBoxLinks from "@/components/servicesLinks";
import ElectricalContactForm from "@/components/electricalContactForm";

const MainElectrical: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-168 scrn-400:h-152 scrn-500:h-160 scrn-800:h-164 scrn-850:h-172 scrn-900:h-184 scrn-950:h-192 scrn-1000:h-216 scrn-1100:h-228 scrn-1150:h-240 scrn-1200:h-248 scrn-1300:h-256 scrn-1350:h-272 scrn-1400:h-276 scrn-1450:h-288 scrn-1500:h-304 scrn-1550:h-304 scrn-1600:h-316 scrn-1650:h-324 scrn-1700:h-324 scrn-1750:h-339 scrn-1800:h-352 scrn-1850:h-360 scrn-1900:h-352 scrn-1950:h-368 scrn-2000:h-384 scrn-2100:h-416 scrn-2250:h-432 scrn-2300:h-448 scrn-2400:h-464 scrn-2450:h-464 scrn-2500:h-480'>
      <div className='grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24 scrn-750:pt-8 scrn-800:pt-8 scrn-900:pt-12 scrn-1000:pt-0 scrn-1500:pt-24'>
        <div className='h-auto space-y-3 scrn-400:space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-6 scrn-400:pt-8 scrn-450:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
          <p className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2000:text-5xl'>
            APEC is the Premier Choice for Electrical Services in Fuel Station Development
          </p>
          <p className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2000:text-5xl'>
            Complete Electrical Solutions for Gas Stations & Petroleum Infrastructure
          </p>
          <p className='tracking-widest hidden scrn-600:block scrn-300:text-xs scrn-400:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl'>
            At APEC, we specialize in delivering safe, reliable, and efficient electrical systems 
            tailored for fuel stations and petroleum facilities. From power distribution to lighting 
            and controls — we’re your one-stop electrical partner.
          </p>
          <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
            <CheckmarkBadge text="Turnkey Electrical Installations" />
            <CheckmarkBadge text="Fuel Station Power & Lighting Systems" />
            <CheckmarkBadge text="Timely, Code-Compliant Execution" />
          </div>
          <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
            <CheckmarkBadgeSmall text="Turnkey Electrical Installations" />
            <CheckmarkBadgeSmall text="Fuel Station Power & Lighting Systems" />
            <CheckmarkBadgeSmall text="Timely, Code-Compliant Execution" />
          </div>
        </div>
        <div className='relative rounded-3xl shadow-2xl mt-6 scrn-400:mt-6 scrn-450:mt-6 scrn-500:mt-8 scrn-550:mt-8'>
          <div className='absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0'></div>
          <div className='relative z-10 p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24'>
            <span className='font-medium scrn-300:text-base scrn-500:text-xl scrn-600:text-xl scrn-750:text-lg scrn-800:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2000:text-4xl'>
              SERVICE REQUEST
            </span>
            <ElectricalContactForm />
          </div>
        </div>
        <div className='space-x-2 font-semibold text-nowrap hidden scrn-600:block pt-6 scrn-400:pt-6 scrn-450:pt-12 scrn-500:pt-8 scrn-550:pt-8 scrn-600:pt-24 scrn-700:pt-20 scrn-750:pt-6 scrn-800:pt-4 scrn-850:pt-8 scrn-900:pt-12 scrn-950:pt-16 scrn-1000:pt-28 scrn-1200:pt-28 scrn-1300:pt-40 scrn-1350:pt-48 scrn-1400:pt-56 scrn-1450:pt-64 scrn-1500:pt-40 scrn-1600:pt-48 scrn-1800:pt-64 scrn-1900:pt-72 scrn-2400:pt-96'>
          <ServicesBoxLinks />
        </div>
      </div>
    </div>
  );
};

export default MainElectrical;
