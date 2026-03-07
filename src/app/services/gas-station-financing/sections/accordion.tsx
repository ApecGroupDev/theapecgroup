"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Do you provide financing directly or connect us with lenders?",
    content:
      "We work with trusted lending partners to connect you with the best funding options for your needs.",
  },
  {
    id: "two",
    title: "Can you help with both construction and equipment financing?",
    content:
      "Yes — we provide solutions for both construction and equipment, as well as upgrades and remodels.",
  },
  {
    id: "three",
    title: "Where do you offer gas station financing services?",
    content:
      "Georgia, Texas, and Atlanta — with local expertise to match regional requirements.",
  },
  {
    id: "four",
    title: "Is financing available for remodels or site upgrades?",
    content:
      "Absolutely — we can help secure funding for improvements, expansions, or compliance upgrades.",
  },
  {
    id: "five",
    title: "How quickly can financing be arranged?",
    content:
      "Timelines vary, but we work to secure fast approvals so you can keep your project moving.",
  },
];

const AccordionFinancing: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        Gas Station Financing <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about our financing solutions — answered clearly."
  />
);

export default AccordionFinancing;
