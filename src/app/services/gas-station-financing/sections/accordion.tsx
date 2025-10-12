"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do you provide financing directly or connect us with lenders?', content: <p>We work with trusted lending partners to connect you with the best funding options for your needs.</p> },
  { id: 'two', title: 'Can you help with both construction and equipment financing?', content: <p>Yes — we provide solutions for both construction and equipment, as well as upgrades and remodels.</p> },
  { id: 'three', title: 'Where do you offer gas station financing services?', content: <p>Georgia, Texas, and Atlanta — with local expertise to match regional requirements.</p> },
  { id: 'four', title: 'Is financing available for remodels or site upgrades?', content: <p>Absolutely — we can help secure funding for improvements, expansions, or compliance upgrades.</p> },
  { id: 'five', title: 'How quickly can financing be arranged?', content: <p>Timelines vary, but we work to secure fast approvals so you can keep your project moving.</p> },
];

const AccordionFinancing: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      <div className="text-center mb-6">
        <span className="text-3xl font-bold">Gas Station Financing FAQs</span>
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

export default AccordionFinancing;
