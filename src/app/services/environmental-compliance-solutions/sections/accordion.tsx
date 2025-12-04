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
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <span className="text-3xl font-bold">Environmental Compliance FAQs</span>
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

export default AccordionCompliance;
