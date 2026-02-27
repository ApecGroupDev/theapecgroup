"use client";

import React from "react";
import CheckmarkBadge from "@/components/checkmarkBadge";
import { Check } from "lucide-react";

const checklistItems = [
  "30+ years of petroleum systems expertise",
  "Licensed, insured, and safety-first on every project",
  "Complete solutions — fuels, tanks, pumps, compliance, emergency response",
  "Local experts across Georgia and Texas",
];

const badges = [
  "High-quality fuels, lubricants, and alternative fuels",
  "Fuel tank installation, replacement, removal, and repair",
  "Oil pump installation and replacement",
  "Fuel monitoring and compliance systems",
  "Emergency response and environmental remediation",
  "Turnkey project management for fueling sites",
];

const Introductory: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-4 mb-12">
        <p className="text-lg leading-relaxed">
          When you're managing a fueling operation, the stakes are high. A
          mistake could mean costly fines, lost customers, or even shutdowns. At{" "}
          <span className="apec-red font-semibold">
            The APEC Group (Atlanta Petroleum Equipment Company)
          </span>
          , we don't just supply petroleum products — we help protect what
          you've built. Since 1989, we've partnered with fuel retailers, fleet
          operators, and distributors across Georgia to deliver safe, compliant,
          and reliable fueling solutions.
        </p>
        <p className="text-lg apec-red italic">
          Looking for a partner who handles the complexity so you can focus on
          running your business? That's what we do.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 xl:gap-x-20 gap-y-12">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose <span className="apec-red">APEC</span>
          </h2>
          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 mt-4">
                <Check className="w-6 h-6 mt-0.5 flex-shrink-0 apec-red" />
                <span className="lg:text-lg 2xl:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Products &amp; <span className="apec-red">Services</span>
          </h2>
          <div className="space-y-4 mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadge key={i} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introductory;
