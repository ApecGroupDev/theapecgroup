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
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <span className="text-3xl font-bold">Imaging and Canopy FAQs</span>
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

export default AccordionImaging;
