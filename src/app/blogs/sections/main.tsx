"use client";

import React from "react";
import Link from "next/link";
import { blogData } from "../components/blogData";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import { Check } from "lucide-react";
import Accordion, { AccordionItem } from "@/components/accordion";

const checklistItems = [
  "Regulatory compliance updates (federal, state, and local)",
  "Environmental best practices for fuel systems",
  "Construction and remodeling insights for gas stations and C-stores",
  "Fuel tank maintenance and monitoring guidance",
  "Financing and equipment upgrade tips",
  "Branding and customer engagement strategies",
];

const items: AccordionItem[] = [
  { id: 'one', title: 'How often is the blog updated?', content: <p>We add new posts every week — covering timely trends, updates, and expert advice.</p> },
  { id: 'two', title: 'Is the blog content relevant to my region?', content: <p>Yes — we provide insights specific across Georgia and national regulations.</p> },
  { id: 'three', title: 'Can I request topics or ask questions?', content: <p>Absolutely. Contact us to request a topic or clarification — we may turn it into a future post.</p> },
  { id: 'four', title: 'Is this content beginner-friendly?', content: <p>Yes — our content is written in clear, natural language while offering real value for industry pros.</p> },
  { id: 'five', title: 'Can I share the blog posts with my team or customers?', content: <p>Yes — please do! Sharing helps fuel smarter, safer operations across the industry.</p> },
];

const BlogMain: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="flex flex-col items-center scrn-600:justify-center gap-y-4 h-auto mb-12 max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="mt-12">
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
            The oil and gas industry never stands still — and neither should you. <span className="text-[#c62931] font-semibold">The APEC Group</span> Blog delivers timely, practical, and insightful content for fuel retailers, energy professionals, and anyone invested in petroleum operations. From compliance changes to construction tips and marketing strategies, our blog helps you stay competitive and informed.
          </p>
        </div>

        <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-12 w-full mb-12'>
          <div className="grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
            <div className='scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl space-y-2'>
              <h2 className="mb-8">
                <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                  What You’ll Find in Our Blog
                </span>
              </h2>
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 tracking-widest">
                  <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="mt-12 scrn-600:mt-0">
                <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                  Who Should Read This Blog?
                </span>
              </div>
              <div className='hidden mt-8 space-y-2 scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-1000:space-y-4 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
                <CheckmarkBadge text="Gas station owners and operators" />
                <CheckmarkBadge text="Fuel tank installers and contractors" />
                <CheckmarkBadge text="Petroleum equipment suppliers" />
                <CheckmarkBadge text="C-store operators" />
                <CheckmarkBadge text="Environmental compliance professionals" />
                <CheckmarkBadge text="Fuel system financiers and investors" />
              </div>
              <div className='mt-8 scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
                <CheckmarkBadgeSmall text="Gas station owners and operators" />
                <CheckmarkBadgeSmall text="Fuel tank installers and contractors" />
                <CheckmarkBadgeSmall text="Petroleum equipment suppliers" />
                <CheckmarkBadgeSmall text="C-store operators" />
                <CheckmarkBadgeSmall text="Environmental compliance professionals" />
                <CheckmarkBadgeSmall text="Fuel system financiers and investors" />
              </div>
            </div>
          </div>
        </div>

        {[0, 4].map((startIdx) => (
          <div
            key={startIdx}
            className="grid grid-cols-1 scrn-1000:grid-cols-2 gap-4"
          >
            {/* Left Large Thumbnail */}
            <Link
              href={`/blogs/${blogData[startIdx].slug}`}
              className="relative overflow-hidden rounded-lg scrn-1000:h-full shadow-lg cursor-pointer h-64 scrn-450:h-72 scrn-500:h-80 scrn-800:h-96 scrn-900:h-118"
            >
              <img
                src={blogData[startIdx].imageUrl}
                alt="Blog Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent" />
              <div className="absolute text-base scrn-600:text-2xl bottom-2 left-4 right-4 text-black font-semibold">
                <p className="text-[#c62931]">{blogData[startIdx].title}</p>
                <p>{blogData[startIdx].subtitle}</p>
              </div>
            </Link>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 scrn-600:grid-cols-2 gap-4 scrn-1000:h-1/2">
                {[startIdx + 1, startIdx + 2].map((i) => (
                  <Link
                    key={i}
                    href={`/blogs/${blogData[i].slug}`}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 scrn-450:h-72 scrn-500:h-80 scrn-900:h-96 scrn-1000:h-full"
                  >
                    <img
                      src={blogData[i].imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent" />
                    <div className="absolute text-base scrn-600:text-xl bottom-2 left-4 text-black font-semibold">
                      <p className="text-[#c62931]">{blogData[i].title}</p>
                      <p>{blogData[i].subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href={`/blogs/${blogData[startIdx + 3].slug}`}
                className="relative scrn-1000:h-1/2 overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 scrn-450:h-72 scrn-500:h-80 scrn-800:h-96 scrn-900:h-118"
              >
                <img
                  src={blogData[startIdx + 3].imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-white to-transparent" />
                <div className="absolute text-base scrn-600:text-2xl bottom-2 left-4 text-black font-semibold">
                  <p className="text-[#c62931]">{blogData[startIdx + 3].title}</p>
                  <p>{blogData[startIdx + 3].subtitle}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}

        <div className="w-full p-6 mt-24">
          <span className="text-[#c62931] text-xl font-bold">FAQs About the APEC Blog</span>
          <Accordion items={items} allowMultiple={false} defaultOpenIds={["one"]} />
        </div>

      </div>
    </div >
  );
};

export default BlogMain;
