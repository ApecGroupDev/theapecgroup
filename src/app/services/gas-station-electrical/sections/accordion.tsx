"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Who do you serve with your electrical services?', content: <p>We support gas stations, petroleum facilities, fleet yards, and convenience store operators.</p> },
  { id: 'two', title: 'Do you handle both new builds and existing stations?', content: <p>Yes — we provide turnkey installations for new fuel stations and upgrades for existing sites.</p> },
  { id: 'three', title: 'Are your services code-compliant?', content: <p>Absolutely — we follow NEC, OSHA, and local codes to ensure 100% compliance and safety.</p> },
  { id: 'four', title: 'Do you install canopy and lot lighting?', content: <p>Yes — we install and maintain canopy and parking lot lighting to keep your station safe and visible.</p> },
  { id: 'five', title: 'Do you provide emergency electrical service?', content: <p>Yes — our 24/7 emergency support keeps your fuel station online and prevents costly downtime.</p> },
];

const AccordionElectrical: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">Gas Station Electrical FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionElectrical;
