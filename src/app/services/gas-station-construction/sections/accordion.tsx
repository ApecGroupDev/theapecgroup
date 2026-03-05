"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Do you handle permits and compliance?",
    content:
      "Yes — we manage all permitting, inspections, and regulatory requirements.",
  },
  {
    id: "two",
    title: "Can you design and build the entire station?",
    content:
      "Absolutely — we handle design, permitting, construction, and final inspection.",
  },
  {
    id: "three",
    title: "Where do you provide these services?",
    content: "We serve Georgia, Texas, and Atlanta with local expertise.",
  },
  {
    id: "four",
    title: "Do you build canopies and convenience store structures too?",
    content:
      "Yes — we provide full fueling site construction, including canopy and C-store build-out.",
  },
  {
    id: "five",
    title: "How long does construction take?",
    content:
      "Timelines vary by project size, but we provide clear schedules and deliver on time.",
  },
];

const AccordionConstruction: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        Gas Station Construction <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about our construction services — answered clearly."
  />
);

export default AccordionConstruction;
