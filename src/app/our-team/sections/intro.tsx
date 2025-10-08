"use client";

import React from "react";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const checklistItems = [
  "Licensed, certified, and safety-trained professionals",
  "30+ years of experience across construction, compliance, and maintenance",
  "Deep knowledge of state and federal petroleum regulations",
  "Local expertise across Georgia",
  "Friendly, responsive, and solutions-focused",
];

const badges = [
  "Integrity: We do what’s right, not what’s easy",
  "Excellence: Every project deserves our best",
  "Accountability: We take ownership, from permits to pumps",
  "Service: We treat your site like it’s our own",
];

const IntroBlog: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12 tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
        <p>
          At <span className="apec-red font-semibold">The APEC Group,</span> our strength lies in our people. From project managers and engineers to compliance specialists and service technicians, each member of our team is dedicated to your success. With 30+ years of combined experience in petroleum systems, our professionals are not only skilled — they’re deeply committed to safety, precision, and innovation.
        </p>
        <p className="mt-8">
          Whether you’re building a gas station, repairing a fuel tank, or navigating regulations, you’ll have experts by your side — every step of the way.
        </p>
      </div>

      <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-12 w-full mb-12'>
        <div className="grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
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
            <div className="mt-12 scrn-600:mt-0 mb-8">
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Our Team Values
              </span>
            </div>
            <div className="space-y-3 scrn-1000:space-y-6 tracking-widest mt-4">
              {badges.map((text, i) => (
                <CheckmarkBadgeNew key={i} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlog;
