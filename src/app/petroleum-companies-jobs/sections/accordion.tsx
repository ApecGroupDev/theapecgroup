"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do I need petroleum industry experience?', content: <p>Not always. We offer training for many roles — especially in fuel delivery and equipment service.</p> },
  { id: 'two', title: 'How fast is the hiring process?', content: <p>We typically schedule interviews within a week of reviewing applications.</p> },
  { id: 'three', title: 'Do you provide safety and compliance training?', content: <p>Absolutely. We prioritize safety and ensure all employees are trained to industry standards.</p> },
  { id: 'four', title: 'Where do you operate?', content: <p>Our core operations are in Georgia and surrounding Southeastern states.</p> },
];

const AccordionCareers: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">Petroleum Careers FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionCareers;
