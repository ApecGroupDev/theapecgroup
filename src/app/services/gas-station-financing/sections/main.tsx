"use client";

import React from "react";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import FinancingContactForm from "@/components/financingContactForm";
import { Check } from "lucide-react";

const badges = [
  "Construction loans for new fuel stations",
  "Equipment financing (pumps, tanks, monitoring systems)",
  "Funding for upgrades and remodels",
  "Refinance options for existing fuel sites",
  "Consultation on project cost planning",
];

const checklistItems = [
  "30+ years’ experience in petroleum projects and financing",
  "Flexible funding options for construction, equipment, and upgrades",
  "Guidance from experts who understand fuel site operations",
  "Local expertise across Georgia",
  "Trusted by fuel retailers, distributors, and fleet operators",
];

const MainFinancing: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Building or upgrading a gas station takes more than a great plan — it takes the right financing to bring it to life. <span className="text-[#c62931] font-semibold">The APEC Group</span> offers tailored gas station financing solutions to help you fund construction, equipment, and site improvements. With over 30 years of experience in the petroleum industry, we understand your business needs and connect you with financing that works.
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          Let’s power your energy project with funding that fits.
        </p>
      </div>

      <div className='mt-12 grid md:grid-cols-2 md:gap-x-6 xl:gap-x-24'>
        <div className='h-auto'>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose APEC For <span className="text-[#c62931]">Gas Station Financing?</span>
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-4 mt-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-wider">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="lg:text-lg 2xl:text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Gas Station <span className="text-[#c62931]">Financing Solutions Include:</span>
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 sm:mt-8 z-10'>
          <div id="FinancingContactForm" className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold mb-12">
              <span className="text-[#c62931]">Gas Station Financing</span> Service Request
            </h2>
            <FinancingContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFinancing;
