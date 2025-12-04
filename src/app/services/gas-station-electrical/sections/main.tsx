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
    <div className='bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Running a gas station comes with unique electrical challenges. From hazardous location wiring to canopy lighting and underground systems, one mistake can lead to costly downtime,
          safety hazards, or regulatory violations.
        </p>
        <p className="mt-8 tracking-wider text-lg">
          At <span className="text-[#c62931] font-semibold">APEC</span>, we specialize in <span className="text-[#c62931] font-semibold">gas station electrical contracting</span>
          — delivering <span className="text-[#c62931] font-semibold">turnkey installations, upgrades, and maintenance</span> designed specifically for fueling environments.
          With decades of expertise, we ensure every project is <span className="text-[#c62931] font-semibold">code-compliant, efficient, and built to last.</span>
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          Let us handle your electrical systems so you can focus on fueling your customers — safely and profitably.
        </p>
      </div>

      <div className='mt-12 grid md:grid-cols-2 md:gap-x-6 xl:gap-x-24'>
        <div className='h-auto'>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose APEC For <span className="text-[#c62931]">Gas Station Electrical Work?</span>
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
              Our Gas Station <span className="text-[#c62931]">Electrical Services Include:</span>
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
        <div className='relative flex items-center mt-6 sm:mt-8 z-10'>
          <div id="ElectricalContactForm" className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-gray-200 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold mb-12">
              <span className="text-[#c62931]">Gas Station Electrical</span> Service Request
            </h2>
            <ElectricalContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFinancing;
