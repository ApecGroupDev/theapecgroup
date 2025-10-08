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
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">Petroleum Careers FAQs</span>
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

export default AccordionCareers;
