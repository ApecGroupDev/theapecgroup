"use client";

import React from "react";
import ServicesBoxLinks2 from "@/components/servicesLinks2";
import Accordion, { AccordionItem } from "@/components/accordion";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import ElectricalContactForm from "@/components/electricalContactForm";

const items: AccordionItem[] = [
  { id: 'one', title: 'Who do you serve with your electrical services?', content: <p>We support gas stations, petroleum facilities, fleet yards, and convenience store operators.</p> },
  { id: 'two', title: 'Do you handle both new builds and existing stations?', content: <p>Yes — we provide turnkey installations for new fuel stations and upgrades for existing sites.</p> },
  { id: 'three', title: 'Are your services code-compliant?', content: <p>Absolutely — we follow NEC, OSHA, and local codes to ensure 100% compliance and safety.</p> },
  { id: 'four', title: 'Do you install canopy and lot lighting?', content: <p>Yes — we install and maintain canopy and parking lot lighting to keep your station safe and visible.</p> },
  { id: 'five', title: 'Do you provide emergency electrical service?', content: <p>Yes — our 24/7 emergency support keeps your fuel station online and prevents costly downtime.</p> },
];

const MainFinancing: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
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

        <div className='mt-12 grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
          <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
            <h2>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Why Choose APEC for Gas Station Electrical Work?
              </span>
            </h2>
            <div className='tracking-widest space-y-4 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl'>
              <div>30+ years of proven experience with fuel stations and petroleum facilities.</div>
              <div>Licensed, insured, and trusted for a spotless safety record.</div>
              <div>Complete solutions — design, installation, upgrades, and emergency service.</div>
              <div>Specialists in hazardous location and explosion-proof systems.</div>
              <div>Code-compliant execution — NEC, OSHA, and local authority approved.</div>
            </div>
            <div>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Our Gas Station Electrical Services Include:
              </span>
            </div>
            <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
              <CheckmarkBadge text="Power distribution and backup systems" />
              <CheckmarkBadge text="Canopy and parking lot lighting installation" />
              <CheckmarkBadge text="Underground electrical wiring" />
              <CheckmarkBadge text="Hazardous location and explosion-proof wiring" />
              <CheckmarkBadge text="Electrical system upgrades and retrofits" />
              <CheckmarkBadge text="Preventive maintenance and safety inspections" />
              <CheckmarkBadge text="24/7 emergency electrical services" />
            </div>
            <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
              <CheckmarkBadgeSmall text="Power distribution and backup systems" />
              <CheckmarkBadgeSmall text="Canopy and parking lot lighting installation" />
              <CheckmarkBadgeSmall text="Underground electrical wiring" />
              <CheckmarkBadgeSmall text="Hazardous location and explosion-proof wiring" />
              <CheckmarkBadgeSmall text="Electrical system upgrades and retrofits" />
              <CheckmarkBadgeSmall text="Preventive maintenance and safety inspections" />
              <CheckmarkBadgeSmall text="24/7 emergency electrical services" />
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
        <div className="w-full p-6 mt-24">
          <span className="text-[#c62931] text-xl font-bold">Gas Station Financing FAQs</span>
          <Accordion items={items} allowMultiple={false} defaultOpenIds={["one"]} />
        </div>
        <div className='space-x-2 font-semibold text-nowrap hidden scrn-600:block mt-16'>
          <ServicesBoxLinks2 />
        </div>
      </div>
    </div>
  );
};

export default MainFinancing;
