"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Do you handle both design and installation?",
    content:
      "Yes — we provide full-service canopy imaging from design to final install.",
  },
  {
    id: "two",
    title: "Can you update or refresh an existing canopy?",
    content:
      "Absolutely — we can refurbish, rebrand, or upgrade your current canopy for a fresh new look.",
  },
  {
    id: "three",
    title: "Where do you offer canopy imaging services?",
    content: "We serve Georgia, Texas, and Atlanta with local expertise.",
  },
  {
    id: "four",
    title: "Are the materials weather-resistant?",
    content:
      "Yes — we use high-quality, durable materials built to withstand the elements and keep your station looking sharp.",
  },
];

const AccordionImaging: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        Imaging and Canopy <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about our canopy imaging and installation services."
  />
);

export default AccordionImaging;
