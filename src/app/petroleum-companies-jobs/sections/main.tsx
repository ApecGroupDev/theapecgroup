"use client";

import React from "react";
import CareersForm from "@/components/careersForm";
import CheckmarkBadgeNew from "@/components/checkmarkBadgeNew";
import { Check } from "lucide-react";

const steps = [
  {
    title: "1. Browse open roles",
    description: "and choose the right fit",
  },
  {
    title: "2. Submit your resume",
    description: "(and optional cover letter)",
  },
  {
    title: "3. Questions?",
    description: "Contact us at service@theapecgroup.com",
  },
];

const checklistItems = [
  "Long-term careers in fuel infrastructure and petroleum construction",
  "Hands-on work: gas station builds, tank installations, system upgrades",
  "Team-first culture with a serious focus on safety",
  "Projects throughout Georgia",
  "35+ years of proven leadership and client trust",
];

const badges = [
  "Custom canopy design and branding",
  "Production of durable canopy signage and elements",
  "Full canopy imaging installation",
  "Canopy and C-store build-out",
  "LED lighting integration",
  "Refurbishment of existing canopies",
];

const MainCareers: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      <div className="mt-12">
        <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          For over 35 years, we’ve helped shape fuel infrastructure across Georgia surrounding regions — and we’re just getting started.
          Since 1989, we’ve built a reputation for integrity, innovation, and results in the petroleum services industry.
          Whether you’re a seasoned foreman or entering the workforce, APEC offers career stability, growth potential, and meaningful work.
        </p>
        <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">

        </p>
        <p className="apec-red tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl italic mt-8">
          If you’re searching for petroleum companies jobs where you can grow, contribute, and thrive — this is it.
        </p>
      </div>

      <div className="mt-12 grid scrn-600:grid-cols-2 scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24">
        {/* Left Column – What Makes APEC Different */}
        <div className="h-auto pt-4 scrn-400:pt-8 space-y-3 scrn-500:space-y-4 scrn-1200:space-y-8 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          <span className="text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl">
            What Makes APEC Different?
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-widest">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column – Benefits of Working at APEC Group */}
        <div className="h-auto pt-4 scrn-400:pt-8 space-y-3 scrn-500:space-y-4 scrn-1200:space-y-8">
          <span className="apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl">
            Benefits of Working at APEC Group
          </span>
          <p className="italic tracking-widest scrn-800:font-normal scrn-900:font-normal scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl">
            We invest in our people with competitive benefits and a supportive culture.
          </p>
          <div className="space-y-3 scrn-1000:space-y-6 tracking-widest">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="py-32">
        <div>
          <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
            NOW HIRING: Petroleum Jobs Near You
          </span>
          <p className="italic mt-4 scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal tracking-widest">
            We’re actively hiring for petroleum companies jobs in operations, compliance, and delivery — with immediate openings like:
          </p>
        </div>
        <div className="mt-8 outline-dashed outline-[#c62931] p-4 rounded-lg text-center">
          <span className='font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
            Service Technician – Atlanta, GA
          </span>
          <p className="scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal tracking-widest">
            Looking for an experienced technician with expertise in POS systems and fuel dispensers. Past certifications and at least
            two years of experience are required. Must be willing to work long hours and be on-call on weekends.
          </p>
          <p className="scrn-1000:text-lg mt-2 scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal tracking-widest">
            <span className="apec-red">Location:</span> <span className="font-semibold">Atlanta, GA</span> <br />
            <span className="apec-red">Type:</span> <span className="font-semibold">Full-Time</span>
          </p>
        </div>
      </div>

      {/* STEPS TO APPLY */}
      <section className="w-full mt-12 space-y-8 pb-24">
        <div>
          <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
            How to Apply
          </span>
          <p className="italic mt-4 scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal tracking-widest">
            Start your petroleum career with a company that has your back.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 scrn-850:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start justify-between border border-[#c62931] transition
                scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl"
            >
              <h3 className="font-semibold apec-red mb-2">
                {step.title}
              </h3>
              <p className="text-gray-800">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className='relative rounded-3xl shadow-2xl mt-6 scrn-500:mt-8'>
        <div className='absolute inset-0 bg-gray-200 backdrop-blur-md rounded-3xl z-0'></div>
        <div className='relative text-center z-10 p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24'>
          <span className='apec-red font-medium scrn-300:text-base scrn-500:text-xl scrn-750:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl'>
            APPLY NOW!
          </span>
          <div id="FinancingContactForm">
            <CareersForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCareers;
