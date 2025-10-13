"use client";

import React from "react";
import Link from "next/link";
import { blogData } from "../components/blogData";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const checklistItems = [
  "Regulatory compliance updates (federal, state, and local)",
  "Environmental best practices for fuel systems",
  "Construction and remodeling insights for gas stations and C-stores",
  "Fuel tank maintenance and monitoring guidance",
  "Financing and equipment upgrade tips",
  "Branding and customer engagement strategies",
];

const badges = [
  "Gas station owners and operators",
  "Fuel tank installers and contractors",
  "Petroleum equipment suppliers",
  "C-store operators",
  "Environmental compliance professionals",
  "Fuel system financiers and investors",
];

const BlogMain: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          The oil and gas industry never stands still — and neither should you. <span className="text-[#c62931] font-semibold">The APEC Group</span> Blog delivers timely, practical, and insightful content for fuel retailers, energy professionals, and anyone invested in petroleum operations. From compliance changes to construction tips and marketing strategies, our blog helps you stay competitive and informed.
        </p>
      </div>

      <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-12 w-full mb-12'>
        <div className="grid space-y-16 scrn-700:space-y-0 scrn-700:grid-cols-2 scrn-700:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
          <div className='scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl space-y-2'>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
              What You’ll Find <span className="text-[#c62931]">In Our Blog</span>
            </h2>
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-widest">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="scrn-1000:text-lg scrn-1500:text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
              Who Should <span className="text-[#c62931]">Read This Blog?</span>
            </h2>
            <div className="space-y-3 scrn-1000:space-y-6 tracking-widest mt-4">
              {badges.map((text, i) => (
                <CheckmarkBadgeNew key={i} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 scrn-600:grid-cols-2 scrn-1000:grid-cols-4 gap-8 py-20">
        {blogData.map((blog, i) => (
          <Link
            key={i}
            href={`/blogs/${blog.slug}`}
            className="flex flex-col overflow-hidden rounded-xl shadow-2xl hover:shadow-xl transition-shadow duration-300 bg-gray-200"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="text-lg font-semibold text-[#c62931] mb-1">
                {blog.title}
              </h3>
              <p className="text-gray-700 font-medium text-lg flex-grow">{blog.subtitle}</p>
              <p className="mt-3 text-sm font-medium text-[#c62931] hover:underline">
                Read more →
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default BlogMain;
