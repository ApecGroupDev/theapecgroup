"use client";

import React from "react";;
import ComplianceContactForm from "@/components/complianceContactForm";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const badges = [
  "Fuel system inspections and leak detection",
  "Tank and line testing",
  "Compliance documentation and reporting",
  "Permitting and regulatory liaison",
  "Spill prevention and emergency response",
  "Environmental remediation and cleanup",
];

const checklistItems = [
  "30+ years’ experience managing petroleum system compliance",
  "Licensed, insured, and known for a spotless safety record",
  "Complete solutions — inspections, permitting, testing, remediation",
  "Trusted local experts on Georgia’s regulatory requirements",
  "Compliance guarantee — we stand behind our work",
];

const MainCompliance: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Environmental regulations in the petroleum industry are complex — and failing to comply can put your business, customers, and community at risk. At <span className="text-[#c62931] font-semibold">The APEC Group</span>, we provide <span className="text-[#c62931] font-semibold">custom environmental compliance solutions</span> that protect your business from fines, shutdowns, and environmental harm. With 30+ years of expertise, we help fuel retailers and operators meet or exceed all local, state, and federal requirements.
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          Let us handle compliance so you can focus on your business with peace of mind.
        </p>
      </div>

      <div className='mt-12 grid md:grid-cols-2 md:gap-x-6 xl:gap-x-24'>
        <div className='h-auto'>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose APEC For <span className="text-[#c62931]">Environmental Compliance?</span>
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
              Our Environmental <span className="text-[#c62931]">Compliance Services Include:</span>
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 sm:mt-8 z-10'>
          <div id="ComplianceContactForm" className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold mb-12">
              <span className="text-[#c62931]">Environmental Compliance Solutions</span> Service Request
            </h2>
            <ComplianceContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCompliance;
