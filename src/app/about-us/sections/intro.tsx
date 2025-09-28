"use client";

import React from "react";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";

const IntroAbout: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center min-h-screen'>
      {/* Intro Paragraph */}
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
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
      </div>

      {/* Second Section */}
      <div className='mt-12 grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8'>
          <div>
            <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
              Who We Serve
            </span>
          </div>
          <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
            <CheckmarkBadge text="Gas station owners and developers" />
            <CheckmarkBadge text="Convenience store operators" />
            <CheckmarkBadge text="Fuel distributors and fleet yards" />
            <CheckmarkBadge text="Contractors and commercial property owners" />
          </div>
          <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
            <CheckmarkBadgeSmall text="Gas station owners and developers" />
            <CheckmarkBadgeSmall text="Convenience store operators" />
            <CheckmarkBadgeSmall text="Fuel distributors and fleet yards" />
            <CheckmarkBadgeSmall text="Contractors and commercial property owners" />
          </div>
        </div>
        <div className="h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8">
          <div>
            <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
              Certifications & Affiliations
            </span>
          </div>
          <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
            <CheckmarkBadge text="ARA - Atlanta Retailers Association" />
            <CheckmarkBadge text="GACS - Georgia Association of Convenience Stores" />
            <CheckmarkBadge text="GHRCA - Greater Houston Retailers Cooperative Association, Inc." />
            <CheckmarkBadge text="GOA - Georgia Oilman’s Association" />
            <CheckmarkBadge text="GTEC - Georgia Tank Environmental Contractors Association" />
            <CheckmarkBadge text="PEI - Petroleum Equipment Institute" />
            <CheckmarkBadge text="TFFA - Texas Food & Fuel Association" />
          </div>
          <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
            <CheckmarkBadgeSmall text="ARA - Atlanta Retailers Association" />
            <CheckmarkBadgeSmall text="GACS - Georgia Association of Convenience Stores" />
            <CheckmarkBadgeSmall text="GHRCA - Greater Houston Retailers Cooperative Association, Inc." />
            <CheckmarkBadgeSmall text="GOA - Georgia Oilman’s Association" />
            <CheckmarkBadgeSmall text="GTEC - Georgia Tank Environmental Contractors Association" />
            <CheckmarkBadgeSmall text="PEI - Petroleum Equipment Institute" />
            <CheckmarkBadgeSmall text="TFFA - Texas Food & Fuel Association" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default IntroAbout;
