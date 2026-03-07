"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Who do you serve with your environmental compliance services?",
    content:
      "We support gas stations, fleet yards, fuel distributors, C-stores, and other commercial fueling sites.",
  },
  {
    id: "two",
    title: "Can you handle all compliance paperwork and permitting?",
    content:
      "Yes — we take care of permits, reports, documentation, and liaising with regulators so you stay ahead.",
  },
  {
    id: "three",
    title: "Do you provide spill prevention and response?",
    content:
      "Absolutely — we offer prevention systems, emergency response, and cleanup services.",
  },
  {
    id: "four",
    title: "Are your services specific to Georgia and Texas regulations?",
    content:
      "Yes — we have deep local expertise and handle compliance to match all regional codes.",
  },
  {
    id: "five",
    title: "Can you test our tanks and lines for leaks?",
    content:
      "Yes — we provide certified testing and inspections to detect issues before they become costly problems.",
  },
];

const AccordionCompliance: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        Environmental Compliance <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about our environmental compliance services — answered clearly."
  />
);

export default AccordionCompliance;
