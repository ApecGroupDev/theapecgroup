"use client";

import React from "react";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import { Check } from "lucide-react";

const checklistItems = [
  "30+ years of petroleum systems expertise",
  "Licensed, insured, and safety-first on every project",
  "Complete solutions — fuels, tanks, pumps, compliance, emergency response",
  "Local experts in Georgia, Texas, and Atlanta",
];

const Introductory: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
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
          <div className="grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
            <div className='scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl space-y-2'>
              <h2 className="mb-8">
                <span className='font-semibold underline text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
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
              <div className="mt-12 scrn-600:mt-0">
                <span className='font-semibold underline text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                  Our Petroleum Products & Services:
                </span>
              </div>
              <div className='hidden mt-8 space-y-2 scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-1000:space-y-4 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
                <CheckmarkBadge text="High-quality fuels, lubricants, and alternative fuels" />
                <CheckmarkBadge text="Fuel tank installation, replacement, removal, and repair" />
                <CheckmarkBadge text="Oil pump installation and replacement" />
                <CheckmarkBadge text="Fuel monitoring and compliance systems" />
                <CheckmarkBadge text="Emergency response and environmental remediation" />
                <CheckmarkBadge text="Turnkey project management for fueling sites" />
              </div>
              <div className='mt-8 scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
                <CheckmarkBadgeSmall text="High-quality fuels, lubricants, and alternative fuels" />
                <CheckmarkBadgeSmall text="Fuel tank installation, replacement, removal, and repair" />
                <CheckmarkBadgeSmall text="Oil pump installation and replacement" />
                <CheckmarkBadgeSmall text="Fuel monitoring and compliance systems" />
                <CheckmarkBadgeSmall text="Emergency response and environmental remediation" />
                <CheckmarkBadgeSmall text="Turnkey project management for fueling sites" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Introductory;
