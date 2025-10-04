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
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">Gas Station Financing FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionFinancing;
