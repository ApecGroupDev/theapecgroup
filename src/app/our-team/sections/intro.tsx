"use client";

import React from "react";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const checklistItems = [
  "Licensed, certified, and safety-trained professionals",
  "30+ years of experience across construction, compliance, and maintenance",
  "Deep knowledge of state and federal petroleum regulations",
  "Local expertise across Georgia",
  "Friendly, responsive, and solutions-focused",
];

const badges = [
  "Integrity: We do what’s right, not what’s easy",
  "Excellence: Every project deserves our best",
  "Accountability: We take ownership, from permits to pumps",
  "Service: We treat your site like it’s our own",
];

const IntroBlog: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12 tracking-wider text-lg">
        <p>
          At <span className="apec-red font-semibold">The APEC Group,</span> our strength lies in our people. From project managers and engineers to compliance specialists and service technicians, each member of our team is dedicated to your success. With 30+ years of combined experience in petroleum systems, our professionals are not only skilled — they’re deeply committed to safety, precision, and innovation.
        </p>
        <p className="mt-8 apec-red italic">
          Whether you’re building a gas station, repairing a fuel tank, or navigating regulations, you’ll have experts by your side — every step of the way.
        </p>
      </div>

      <div className='h-auto pt-12 w-full'>
        <div className="grid scrn-800:grid-cols-2 scrn-800:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
          <div className='h-auto'>
            <h2 className="text-4xl font-extrabold text-gray-900">
              What Sets <span className="text-[#c62931]">Our Team Apart</span>
            </h2>
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-wider mt-4">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="scrn-1000:text-lg scrn-1500:text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="mt-12 scrn-800:mt-0">
              <h2 className="text-4xl font-extrabold text-gray-900">
                Our Team <span className="text-[#c62931]">Values</span>
              </h2>
            </div>
            <div className="space-y-3 scrn-1000:space-y-6 tracking-wider mt-4">
              {badges.map((text, i) => (
                <CheckmarkBadgeNew key={i} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlog;
