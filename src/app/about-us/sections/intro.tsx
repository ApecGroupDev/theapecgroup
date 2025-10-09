"use client";

import React from "react";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";

const badges = [
  "Gas station owners and developers",
  "Convenience store operators",
  "Fuel distributors and fleet yards",
  "Contractors and commercial property owners",
];

const badges2 = [
  "ARA - Atlanta Retailers Association",
  "GACS - Georgia Association of Convenience Stores",
  "GHRCA - Greater Houston Retailers Cooperative Association, Inc.",
  "GOA - Georgia Oilman’s Association",
  "GTEC - Georgia Tank Environmental Contractors Association",
  "PEI - Petroleum Equipment Institute",
  "TFFA - Texas Food & Fuel Association",
];

const IntroAbout: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center justify-center max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      {/* Intro Paragraph */}
      <div className="mt-12">
        <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          Since 1989, <span className="apec-red font-semibold">The APEC Group(Atlanta Petroleum Equipment Company)</span>  has helped fuel retailers, contractors,
          and business owners power their operations with confidence. From underground tanks to above-ground solutions,
          from environmental compliance to full gas station builds — we bring expertise, integrity, and a commitment to results.
        </p>
        <p className="mt-8 tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          Whether you run a single site or a multi-location network, we’re your trusted partner in
          safe, efficient, and future-ready petroleum infrastructure.
        </p>
      </div>

      {/* Second Section */}
      <div className='mt-12 grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8'>
          <div>
            <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
              Who We Serve
            </span>
          </div>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className="h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8">
          <div>
            <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
              Certifications & Affiliations
            </span>
          </div>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges2.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default IntroAbout;
