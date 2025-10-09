"use client";

import React from "react";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const checklistItems = [
  "30+ years of petroleum systems expertise",
  "Licensed, insured, and safety-first on every project",
  "Complete solutions — fuels, tanks, pumps, compliance, emergency response",
  "Local experts in Georgia, Texas, and Atlanta",
];

const badges = [
  "High-quality fuels, lubricants, and alternative fuels",
  "Fuel tank installation, replacement, removal, and repair",
  "Oil pump installation and replacement",
  "Fuel monitoring and compliance systems",
  "Emergency response and environmental remediation",
  "Turnkey project management for fueling sites",
];

const Introductory: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 mb-12">
        <div className="mt-12 space-y-3">
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
            When you’re managing a fueling operation, the stakes are high. A mistake could mean costly fines, lost customers, or even shutdowns.
            At <span className="apec-red font-semibold">The APEC Group(Atlanta Petroleum Equipment Company)</span>, we don’t just supply petroleum
            products —we are a petroleum products company that helps protect what you’ve built. Since 1989, we’ve partnered with fuel retailers,
            fleet operators, and distributors across Georgia to deliver safe, compliant, and reliable fueling solutions.
          </p>
          <p className="tracking-widest apec-red font-semibold scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
            Looking for a partner who handles the complexity so you can focus on running your business? That’s what we do.
          </p>
        </div>

        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-12 w-full mb-12'>
          <div className="grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
            <div className='scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl space-y-2'>
              <h2 className="mb-8">
                <span className='font-semibold uppercase text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-2xl scrn-1700:text-3xl'>
                  Core Value Points
                </span>
              </h2>
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 tracking-widest">
                  <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="mt-12 scrn-600:mt-0 mb-8">
                <span className='font-semibold text-sm uppercase scrn-500:text-base scrn-800:text-xl scrn-1500:text-2xl scrn-1700:text-3xl'>
                  Our Petroleum Products & Services:
                </span>
              </div>
              <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
                {badges.map((text, i) => (
                  <CheckmarkBadgeNew key={i} text={text} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Introductory;
