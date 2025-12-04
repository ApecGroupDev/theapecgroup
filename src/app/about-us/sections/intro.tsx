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
    <div className='bg-transparent flex flex-col items-center justify-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Intro Paragraph */}
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Since 1989, <span className="apec-red font-semibold">The APEC Group(Atlanta Petroleum Equipment Company)</span>  has helped fuel retailers, contractors,
          and business owners power their operations with confidence. From underground tanks to above-ground solutions,
          from environmental compliance to full gas station builds — we bring expertise, integrity, and a commitment to results.
        </p>
        <p className="mt-8 tracking-wider text-lg">
          Whether you run a single site or a multi-location network, we’re your trusted partner in
          safe, efficient, and future-ready petroleum infrastructure.
        </p>
      </div>

      {/* Second Section */}
      <div className='mt-12 grid md:grid-cols-2 md:gap-x-10 xl:gap-x-24'>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Who We <span className="text-[#c62931]">Serve</span>
          </h2>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Certifications & <span className="text-[#c62931]">Affiliations</span>
          </h2>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
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
