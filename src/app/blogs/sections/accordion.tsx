"use client";

import React from "react";
import Accordion, { AccordionItem } from "@/components/accordion";

const items: AccordionItem[] = [
  { id: 'one', title: 'How often is the blog updated?', content: <p>We add new posts every week — covering timely trends, updates, and expert advice.</p> },
  { id: 'two', title: 'Is the blog content relevant to my region?', content: <p>Yes — we provide insights specific across Georgia and national regulations.</p> },
  { id: 'three', title: 'Can I request topics or ask questions?', content: <p>Absolutely. Contact us to request a topic or clarification — we may turn it into a future post.</p> },
  { id: 'four', title: 'Is this content beginner-friendly?', content: <p>Yes — our content is written in clear, natural language while offering real value for industry pros.</p> },
  { id: 'five', title: 'Can I share the blog posts with my team or customers?', content: <p>Yes — please do! Sharing helps fuel smarter, safer operations across the industry.</p> },
];

const AccordionBlogs: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col justify-center w-full h-auto py-24 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">APEC Blogs FAQs</span>
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

export default AccordionBlogs;
