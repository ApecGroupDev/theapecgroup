"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Who do you serve with your environmental compliance services?', content: <p>We support gas stations, fleet yards, fuel distributors, C-stores, and other commercial fueling sites.</p> },
  { id: 'two', title: 'Can you handle all compliance paperwork and permitting?', content: <p>Yes — we take care of permits, reports, documentation, and liaising with regulators so you stay ahead.</p> },
  { id: 'three', title: 'Do you provide spill prevention and response?', content: <p>Absolutely — we offer prevention systems, emergency response, and cleanup services.</p> },
  { id: 'four', title: 'Are your services specific to Georgia and Texas regulations?', content: <p>Yes — we have deep local expertise and handle compliance to match all regional codes.</p> },
  { id: 'five', title: 'Can you test our tanks and lines for leaks?', content: <p>Yes — we provide certified testing and inspections to detect issues before they become costly problems.</p> },
];

const AccordionCompliance: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">Environmental Compliance FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionCompliance;
