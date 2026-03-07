"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Who do you serve with your electrical services?",
    content:
      "We support gas stations, petroleum facilities, fleet yards, and convenience store operators.",
  },
  {
    id: "two",
    title: "Do you handle both new builds and existing stations?",
    content:
      "Yes — we provide turnkey installations for new fuel stations and upgrades for existing sites.",
  },
  {
    id: "three",
    title: "Are your services code-compliant?",
    content:
      "Absolutely — we follow NEC, OSHA, and local codes to ensure 100% compliance and safety.",
  },
  {
    id: "four",
    title: "Do you install canopy and lot lighting?",
    content:
      "Yes — we install and maintain canopy and parking lot lighting to keep your station safe and visible.",
  },
  {
    id: "five",
    title: "Do you provide emergency electrical service?",
    content:
      "Yes — our 24/7 emergency support keeps your fuel station online and prevents costly downtime.",
  },
];

const AccordionElectrical: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        Gas Station Electrical <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about our electrical services — answered clearly."
  />
);

export default AccordionElectrical;
