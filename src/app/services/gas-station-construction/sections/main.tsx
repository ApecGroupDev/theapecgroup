"use client";

import React from "react";
import ConstructionContactForm from "@/components/constructionContactForm";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const badges = [
  "Custom station design and layout",
  "Permitting and site preparation",
  "Fuel tank and dispenser installation",
  "Canopy and C-store build-out",
  "Environmental compliance support",
  "Complete project management",
];

const checklistItems = [
  "Long-term careers in fuel infrastructure and petroleum construction",
  "Hands-on work: gas station builds, tank installations, system upgrades",
  "Team-first culture with a serious focus on safety",
  "Projects throughout Georgia",
  "35+ years of proven leadership and client trust",
];

const MainConstruction: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Building a gas station isn’t just about concrete and pumps — it’s about creating a safe, compliant, and profitable site that will serve your customers for years. <span className="text-[#c62931] font-semibold">The APEC Group</span> offers complete gas station construction services, from design to final inspection. With more than 30 years of experience, we manage every detail so you can focus on your business with confidence.
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          If you want it built right the first time — safely, efficiently, and to code — we’re the team to call.
        </p>
      </div>

      <div className='mt-12 grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
          <h2>
            <span className='text-[#c62931] font-semibold scrn-800:text-xl scrn-1500:text-3xl'>
              Why Choose APEC for Gas Station Construction?
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
              Our Gas Station Construction Services Include:
            </span>
          </div>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 scrn-500:mt-8 z-10'>
          <div id="ConstructionContactForm" className="p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <span className='font-medium scrn-800:text-xl scrn-1500:text-3xl'>
              SERVICE REQUEST
            </span>
            <ConstructionContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainConstruction;
