"use client";

import React from "react";
import ContactForm from "@/components/contactForm";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";

const badges = [
  "Gas station construction planning and estimates",
  "Environmental compliance support (UST/AST)",
  "Fuel tank repairs, replacement, or transfers",
  "Financing options for petroleum projects",
  "Equipment installation (canopies, oil pumps, dispensers)",
  "Convenience store remodeling",
];

const MainImaging: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className='mt-12 grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            What We Can <span className="text-[#c62931]">Help You With:</span>
          </h2>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 scrn-500:mt-8 z-10'>
          <div id="MainContactForm" className="p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold mb-12">
              <span className="text-[#c62931]">Service Request</span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImaging;
