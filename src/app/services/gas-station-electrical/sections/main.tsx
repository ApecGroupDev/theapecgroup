"use client";

import React from "react";
import ElectricalContactForm from "@/components/electricalContactForm";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const badges = [
  "Power distribution and backup systems",
  "Canopy and parking lot lighting installation",
  "Underground electrical wiring",
  "Hazardous location and explosion-proof wiring",
  "Electrical system upgrades and retrofits",
  "Preventive maintenance and safety inspections",
  "24/7 emergency electrical services",
];

const checklistItems = [
  "30+ years of proven experience with fuel stations and petroleum facilities",
  "Licensed, insured, and trusted for a spotless safety record",
  "Complete solutions — design, installation, upgrades, and emergency service",
  "Specialists in hazardous location and explosion-proof systems",
  "Code-compliant execution — NEC, OSHA, and local authority approved",
];

const MainFinancing: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12">
        <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          Running a gas station comes with unique electrical challenges. From hazardous location wiring to canopy lighting and underground systems, one mistake can lead to costly downtime,
          safety hazards, or regulatory violations.
        </p>
        <p className="mt-12 tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          At <span className="text-[#c62931] font-semibold">APEC</span>, we specialize in <span className="text-[#c62931] font-semibold">gas station electrical contracting</span>
          — delivering <span className="text-[#c62931] font-semibold">turnkey installations, upgrades, and maintenance</span> designed specifically for fueling environments.
          With decades of expertise, we ensure every project is <span className="text-[#c62931] font-semibold">code-compliant, efficient, and built to last.</span>
        </p>
        <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl text-[#c62931] italic mt-8">
          Let us handle your electrical systems so you can focus on fueling your customers — safely and profitably.
        </p>
      </div>

      <div className='mt-12 grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
          <h2>
            <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
              Why Choose APEC for Gas Station Electrical Work?
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-widest">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
              Our Gas Station Electrical Services Include:
            </span>
          </div>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 scrn-500:mt-8 z-10'>
          <div id="ElectricalContactForm" className="p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <span className='font-medium scrn-300:text-base scrn-500:text-xl scrn-750:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl'>
              SERVICE REQUEST
            </span>
            <ElectricalContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFinancing;
