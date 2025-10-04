"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do you handle both design and installation?', content: <p>Yes — we provide full-service canopy imaging from design to final install.</p> },
  { id: 'two', title: 'Can you update or refresh an existing canopy?', content: <p>Absolutely — we can refurbish, rebrand, or upgrade your current canopy for a fresh new look.</p> },
  { id: 'three', title: 'Where do you offer canopy imaging services?', content: <p>We serve Georgia, Texas, and Atlanta with local expertise.</p> },
  { id: 'four', title: 'Are the materials weather-resistant?', content: <p>Yes — we use high-quality, durable materials built to withstand the elements and keep your station looking sharp.</p> },
];

const AccordionImaging: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">Imaging and Canopy FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionImaging;
