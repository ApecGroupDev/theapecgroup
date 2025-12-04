"use client";

import React from "react";
import ImagingContactForm from "@/components/imagingContactForm";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const badges = [
  "Custom canopy design and branding",
  "Production of durable canopy signage and elements",
  "Full canopy imaging installation",
  "Canopy and C-store build-out",
  "LED lighting integration",
  "Refurbishment of existing canopies",
];

const checklistItems = [
  "30+ years’ experience managing petroleum system compliance",
  "Licensed, insured, and known for a spotless safety record",
  "Complete solutions — inspections, permitting, testing, remediation",
  "Trusted local experts on Georgia’s regulatory requirements",
  "Compliance guarantee — we stand behind our work",
];

const MainImaging: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Your canopy is more than a structure — it’s your gas station’s first impression. <span className="text-[#c62931] font-semibold">The APEC Group</span> provides custom canopy imaging solutions that enhance your brand, attract customers, and help your station stand out. With 30+ years of experience, we handle design, production, and installation to ensure your canopy looks as good as it performs.
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          Let’s help your station make a bold, lasting impression.
        </p>
      </div>

      <div className='mt-12 grid md:grid-cols-2 md:gap-x-6 xl:gap-x-24'>
        <div className='h-auto'>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose APEC For <span className="text-[#c62931]">Canopy Imaging?</span>
          </h2>
          <div className="flex flex-wrap gap-x-24 gap-y-4 mt-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-wider">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="lg:text-lg 2xl:text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Canopy <span className="text-[#c62931]">Imaging Solutions Include:</span>
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 sm:mt-8 z-10'>
          <div id="ImagingContactForm" className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-extrabold mb-12">
              <span className="text-[#c62931]">Canopy Imaging Solutions</span> Service Request
            </h2>
            <ImagingContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImaging;
