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
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="w-full p-6 text-center">
          <span className="text-4xl font-bold">APEC Blogs FAQs</span>
          <Accordion className="text-left" items={items} allowMultiple={true} defaultOpenIds={["one", "two"]} />
        </div>
      </div>
    </div >
  );
};

export default AccordionBlogs;
