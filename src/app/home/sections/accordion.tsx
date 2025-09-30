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
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6">
          <span className="text-[#c62931] text-xl font-bold">FAQs</span>
          <Accordion items={items} allowMultiple={false} defaultOpenIds={["one"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionHome;
