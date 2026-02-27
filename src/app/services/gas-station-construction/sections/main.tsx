"use client";

import React from "react";
import ConstructionContactForm from "@/components/constructionContactForm";
import CheckmarkBadge from "@/components/checkmarkBadge";
import { Check } from "lucide-react";

const badges = [
  "Custom station design and layout",
  "Permitting and site preparation",
  "Fuel tank and dispenser installation",
  "Canopy and C-store build-out",
  "Environmental compliance support",
  "Complete project management",
];

const checklistItems = [
  "Long-term careers in fuel infrastructure and petroleum construction",
  "Hands-on work: gas station builds, tank installations, system upgrades",
  "Team-first culture with a serious focus on safety",
  "Projects throughout Georgia",
  "35+ years of proven leadership and client trust",
];

const MainConstruction: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          Building a gas station isn’t just about concrete and pumps — it’s
          about creating a safe, compliant, and profitable site that will serve
          your customers for years.{" "}
          <span className="text-[#c62931] font-semibold">The APEC Group</span>{" "}
          offers complete gas station construction services, from design to
          final inspection. With more than 30 years of experience, we manage
          every detail so you can focus on your business with confidence.
        </p>
        <p className="tracking-wider text-lg text-[#c62931] italic mt-8">
          If you want it built right the first time — safely, efficiently, and
          to code — we’re the team to call.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 md:gap-x-6 xl:gap-x-24">
        <div className="h-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose APEC For{" "}
            <span className="text-[#c62931]">Gas Station Construction?</span>
          </h2>
          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 mt-4">
                <Check className="w-6 h-6 mt-0.5 flex-shrink-0 apec-red" />
                <span className="lg:text-lg 2xl:text-xl">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Gas Station{" "}
              <span className="text-[#c62931]">
                Construction Services Include:
              </span>
            </h2>
          </div>
          <div className="space-y-4 mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadge key={i} text={text} />
            ))}
          </div>
        </div>
        <div className="relative flex items-center mt-6 sm:mt-8 z-10">
          <div
            id="ConstructionContactForm"
            className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 bg-gray-200 rounded-xl shadow-2xl"
          >
            <h2 className="text-4xl font-extrabold mb-12">
              <span className="text-[#c62931]">Gas Station Construction</span>{" "}
              Service Request
            </h2>
            <ConstructionContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainConstruction;
