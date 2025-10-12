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
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      <div className="text-center mb-6">
        <span className="text-3xl font-bold">Gas Station Construction FAQs</span>
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

export default AccordionConstruction;