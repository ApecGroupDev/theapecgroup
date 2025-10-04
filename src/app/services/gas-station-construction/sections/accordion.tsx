"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do you handle permits and compliance?', content: <p>Yes — we manage all permitting, inspections, and regulatory requirements.</p> },
  { id: 'two', title: 'Can you design and build the entire station?', content: <p>Absolutely — we handle design, permitting, construction, and final inspection.</p> },
  { id: 'three', title: 'Where do you provide these services?', content: <p>We serve Georgia, Texas, and Atlanta with local expertise.</p> },
  { id: 'four', title: 'Do you build canopies and convenience store structures too?', content: <p>Yes — we provide full fueling site construction, including canopy and C-store build-out.</p> },
  { id: 'five', title: 'How long does construction take?', content: <p>Timelines vary by project size, but we provide clear schedules and deliver on time.</p> },
];

const AccordionConstruction: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">Gas Station Construction FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionConstruction;
