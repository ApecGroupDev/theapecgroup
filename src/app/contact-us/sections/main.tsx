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
    <div className='bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='mt-12 grid md:grid-cols-2 md:gap-x-10 xl:gap-x-24'>
        <div className='h-auto md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-32'>
          <h2 className="text-4xl font-extrabold text-gray-900">
            What We Can <span className="text-[#c62931]">Help You With:</span>
          </h2>
          <div className="space-y-3 lg:space-y-6 tracking-widest mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 sm:mt-8 z-10'>
          <div id="MainContactForm" className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold mb-12">
              <span className="text-[#c62931]">Contact Us</span> Now!
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImaging;
