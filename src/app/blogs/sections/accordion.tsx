"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  {
    id: "one",
    title: "How often is the blog updated?",
    content:
      "We add new posts every week — covering timely trends, updates, and expert advice.",
  },
  {
    id: "two",
    title: "Is the blog content relevant to my region?",
    content:
      "Yes — we provide insights specific across Georgia and national regulations.",
  },
  {
    id: "three",
    title: "Can I request topics or ask questions?",
    content:
      "Absolutely. Contact us to request a topic or clarification — we may turn it into a future post.",
  },
  {
    id: "four",
    title: "Is this content beginner-friendly?",
    content:
      "Yes — our content is written in clear, natural language while offering real value for industry pros.",
  },
  {
    id: "five",
    title: "Can I share the blog posts with my team or customers?",
    content:
      "Yes — please do! Sharing helps fuel smarter, safer operations across the industry.",
  },
];

const AccordionBlogs: React.FC = () => (
  <Accordion
    items={items}
    allowMultiple={true}
    defaultOpenIds={["one", "two"]}
    eyebrow="FAQ"
    heading={
      <>
        APEC Blogs <span className="text-[#c62931]">FAQs.</span>
      </>
    }
    subtext="Common questions about our blog — answered clearly."
  />
);

export default AccordionBlogs;
