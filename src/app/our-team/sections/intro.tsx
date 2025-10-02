"use client";

import React from "react";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import { Check } from "lucide-react";

const checklistItems = [
  "Licensed, certified, and safety-trained professionals",
  "30+ years of experience across construction, compliance, and maintenance",
  "Deep knowledge of state and federal petroleum regulations",
  "Local expertise across Georgia",
  "Friendly, responsive, and solutions-focused",
];

const IntroBlog: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="mt-12 tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          <p>
            At <span className="apec-red font-semibold">The APEC Group,</span> our strength lies in our people. From project managers and engineers to compliance specialists and service technicians, each member of our team is dedicated to your success. With 30+ years of combined experience in petroleum systems, our professionals are not only skilled — they’re deeply committed to safety, precision, and innovation.
          </p>
          <p className="mt-8">
            Whether you’re building a gas station, repairing a fuel tank, or navigating regulations, you’ll have experts by your side — every step of the way.
          </p>
        </div>

        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-12 w-full mb-12'>
          <div className="grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
            <div className='scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl space-y-2'>
              <h2 className="mb-8">
                <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                  What Sets Our Team Apart
                </span>
              </h2>
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 tracking-widest">
                  <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="mt-12 scrn-600:mt-0">
                <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                  Our Team Values
                </span>
              </div>
              <div className='hidden mt-8 space-y-2 scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-1000:space-y-4 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
                <CheckmarkBadge text="Integrity: We do what’s right, not what’s easy" />
                <CheckmarkBadge text="Excellence: Every project deserves our best" />
                <CheckmarkBadge text="Accountability: We take ownership, from permits to pumps" />
                <CheckmarkBadge text="Service: We treat your site like it’s our own" />
              </div>
              <div className='mt-8 scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
                <CheckmarkBadgeSmall text="Integrity: We do what’s right, not what’s easy" />
                <CheckmarkBadgeSmall text="Excellence: Every project deserves our best" />
                <CheckmarkBadgeSmall text="Accountability: We take ownership, from permits to pumps" />
                <CheckmarkBadgeSmall text="Service: We treat your site like it’s our own" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default IntroBlog;
