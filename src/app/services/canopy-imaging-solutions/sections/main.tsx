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
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Your canopy is more than a structure — it’s your gas station’s first impression. <span className="text-[#c62931] font-semibold">The APEC Group</span> provides custom canopy imaging solutions that enhance your brand, attract customers, and help your station stand out. With 30+ years of experience, we handle design, production, and installation to ensure your canopy looks as good as it performs.
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          Let’s help your station make a bold, lasting impression.
        </p>
      </div>

      <div className='mt-12 grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
          <h2>
            <span className='text-[#c62931] font-semibold scrn-800:text-xl scrn-1500:text-3xl'>
              Why Choose APEC for Canopy Imaging?
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-widest">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="scrn-1000:text-lg scrn-1500:text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <span className='text-[#c62931] font-semibold scrn-800:text-xl scrn-1500:text-3xl'>
              Our Canopy Imaging Solutions Include:
            </span>
          </div>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 scrn-500:mt-8 z-10'>
          <div id="ImagingContactForm" className="p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <span className='font-medium scrn-800:text-xl scrn-1500:text-3xl'>
              SERVICE REQUEST
            </span>
            <ImagingContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImaging;
