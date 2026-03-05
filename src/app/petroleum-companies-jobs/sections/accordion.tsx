"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Do I need petroleum industry experience?",
    content:
      "Not always. We offer training for many roles — especially in fuel delivery and equipment service.",
  },
  {
    id: "two",
    title: "How fast is the hiring process?",
    content:
      "We typically schedule interviews within a week of reviewing applications.",
  },
  {
    id: "three",
    title: "Do you provide safety and compliance training?",
    content:
      "Absolutely. We prioritize safety and ensure all employees are trained to industry standards.",
  },
  {
    id: "four",
    title: "Where do you operate?",
    content:
      "Our core operations are in Georgia and surrounding Southeastern states.",
  },
];

const AccordionCareers: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one","two"]}
    eyebrow="FAQ"
    heading={
      <>
        Careers <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about working at APEC — answered honestly."
  />
);

export default AccordionCareers;
