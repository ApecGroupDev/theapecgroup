"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Who do you serve?', content: <p>APEC Group serves Gas stations, fleet yards, fuel distributors, convenience stores, and commercial fueling sites across Georgia.</p> },
  { id: 'two', title: 'Do you supply petroleum products directly, or just install equipment?', content: <p>Both. We provide fuels, lubricants, alternative fuels, and complete system services — tanks, pumps, lines, monitoring, compliance.</p> },
  { id: 'three', title: 'Can you help me choose the right products or equipment?', content: <p>Yes. We assess your site’s needs, fuel types, and growth plans to recommend safe, efficient, future-ready solutions.</p> },
  { id: 'four', title: 'Do you handle alternative fuels?', content: <p>Yes — systems ready for ethanol blends, biodiesel, and more.</p> },
  { id: 'five', title: 'Can you manage compliance?', content: <p>100%. We handle permits, inspections, testing, and documentation — no hassle for you.</p> },
  { id: 'six', title: 'What if I have an emergency?', content: <p>Call us. Our emergency response team acts fast to limit damage and restore operations.</p> },
  { id: 'seven', title: 'Do you handle full fueling site projects?', content: <p>Yes — from design to sign-off, we manage it all.</p> },
];

const AccordionHome: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">FAQs</span>
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

export default AccordionHome;
