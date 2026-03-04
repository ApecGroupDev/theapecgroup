"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "Who do you serve?",
    content:
      "APEC Group serves gas stations, fleet yards, fuel distributors, convenience stores, and commercial fueling sites across Georgia.",
  },
  {
    id: "two",
    title:
      "Do you supply petroleum products directly, or just install equipment?",
    content:
      "Both. We provide fuels, lubricants, alternative fuels, and complete system services — tanks, pumps, lines, monitoring, compliance.",
  },
  {
    id: "three",
    title: "Can you help me choose the right products or equipment?",
    content:
      "Yes. We assess your site's needs, fuel types, and growth plans to recommend safe, efficient, future-ready solutions.",
  },
  {
    id: "four",
    title: "Do you handle alternative fuels?",
    content: "Yes — systems ready for ethanol blends, biodiesel, and more.",
  },
  {
    id: "five",
    title: "Can you manage compliance?",
    content:
      "100%. We handle permits, inspections, testing, and documentation — no hassle for you.",
  },
  {
    id: "six",
    title: "What if I have an emergency?",
    content:
      "Call us. Our emergency response team acts fast to limit damage and restore operations.",
  },
  {
    id: "seven",
    title: "Do you handle full fueling site projects?",
    content: "Yes — from design to sign-off, we manage it all.",
  },
];

const AccordionHome: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        Frequently Asked <span className="text-[#c62931]">Questions.</span>
      </>
    }
    subtext="Everything you need to know about working with The APEC Group."
  />
);

export default AccordionHome;
