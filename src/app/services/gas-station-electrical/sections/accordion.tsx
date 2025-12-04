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
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <span className="text-3xl font-bold">Gas Station Electrical FAQs</span>
      </div>
      <Accordion
        className="text-left w-full"
        items={items}
        allowMultiple={true}
        defaultOpenIds={["one", "two"]}
      />
    </div>
  );
};

export default AccordionElectrical;
