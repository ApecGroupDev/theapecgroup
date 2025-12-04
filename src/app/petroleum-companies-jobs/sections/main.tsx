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
  "Long-term careers in fuel infrastructure and petroleum construction",
  "Hands-on work: gas station builds, tank installations, system upgrades",
  "Team-first culture with a serious focus on safety",
  "Projects throughout Georgia, Texas, and the Southeast",
  "35+ years of proven leadership and client trust",
];

const MainCareers: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center sm:justify-center h-auto max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          For over 35 years, we’ve helped shape fuel infrastructure across Georgia surrounding regions — and we’re just getting started.
          Since 1989, we’ve built a reputation for integrity, innovation, and results in the petroleum services industry.
          Whether you’re a seasoned foreman or entering the workforce, APEC offers career stability, growth potential, and meaningful work.
        </p>
        <p className="apec-red tracking-wider text-lg italic mt-8">
          If you’re searching for petroleum companies jobs where you can grow, contribute, and thrive — this is it.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 md:gap-x-6 xl:gap-x-24">
        {/* Left Column – What Makes APEC Different */}
        <div className="h-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            What Makes <span className="text-[#c62931]">APEC Different?</span>
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-4 mt-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 tracking-widest">
                <Check className="w-6 h-6 flex-shrink-0 text-[#c62931]" />
                <span className="lg:text-lg 2xl:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column – Benefits of Working at APEC Group */}
        <div className="h-auto mt-12 md:mt-0">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Benefits Of Working <span className="text-[#c62931]">At APEC Group</span>
          </h2>
          <p className="italic tracking-wider lg:text-lg 2xl:text-xl mt-4">
            We invest in our people with competitive benefits and a supportive culture.
          </p>
          <div className="space-y-3 lg:space-y-6 tracking-wider mt-4">
            {badges.map((text, i) => (
              <CheckmarkBadgeNew key={i} text={text} />
            ))}
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="py-32">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            NOW HIRING: <span className="text-[#c62931]">Petroleum Jobs Near You</span>
          </h2>
          <p className="italic mt-4 text-lg tracking-wider">
            We’re actively hiring for petroleum companies jobs in operations, compliance, and delivery — with immediate openings like:
          </p>
        </div>

        {/* Job Listing 1 */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm border border-[#c62931]/30 rounded-2xl p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:border-[#c62931]/60">
          <h3 className="font-bold text-[#c62931] text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl mb-3 tracking-wide">
            Service Technician – Atlanta, GA
          </h3>

          <p className="text-gray-800 text-lg tracking-wider leading-relaxed max-w-4xl mx-auto">
            Looking for an experienced technician with expertise in POS systems and fuel dispensers.
            Past certifications and at least two years of experience are required.
            Must be willing to work long hours and be on-call on weekends.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-800 text-sm sm:text-base xl:text-lg">
            <div>
              <span className="text-[#c62931] font-medium">📍 Location:</span>{' '}
              <span className="font-semibold">Atlanta, GA</span>
            </div>
            <span className="hidden sm:inline-block text-gray-400">|</span>
            <div>
              <span className="text-[#c62931] font-medium">💼 Type:</span>{' '}
              <span className="font-semibold">Full-Time</span>
            </div>
          </div>
        </div>

        {/* Job Listing 2 */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm border border-[#c62931]/30 rounded-2xl p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:border-[#c62931]/60">
          <h3 className="font-bold text-[#c62931] text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl mb-3 tracking-wide">
            Budget Analyst – Tucker, GA
          </h3>

          <p className="text-gray-800 text-lg tracking-wider leading-relaxed max-w-4xl mx-auto">
            Atlanta Petroleum Equipment Company seeks a full-time Budget Analyst to assist with cost analysis, fiscal allocation, and budget preparation. Responsibilities include reviewing operating budgets for completeness, accuracy, and conformance with procedures and regulations, as well as analyzing accounting records and financial resources for program development.
            <br /><br />
            Must have a Bachelor’s degree in Actuarial Science (or foreign equivalent) and at least 6 months of work experience in business management. Resumes can be sent to 4732 N. Royal Atlanta Drive, Suite E, Tucker, GA 30084.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-800 text-sm sm:text-base xl:text-lg">
            <div>
              <span className="text-[#c62931] font-medium">📍 Location:</span>{' '}
              <span className="font-semibold">Tucker, GA</span>
            </div>
            <span className="hidden sm:inline-block text-gray-400">|</span>
            <div>
              <span className="text-[#c62931] font-medium">💼 Type:</span>{' '}
              <span className="font-semibold">Full-Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* STEPS TO APPLY */}
      <section className="w-full pb-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              How To <span className="text-[#c62931]">Apply</span>
            </h2>
            <p className="italic text-lg md:text-xl text-gray-700 tracking-wide">
              Start your petroleum career with a company that has your back.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="
            relative bg-white/80 backdrop-blur-sm border border-gray-200 
            rounded-3xl p-10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] 
            hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] 
            hover:-translate-y-2 transition-all duration-300
          "
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#c62931] text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg overflow-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='relative rounded-3xl max-w-4xl shadow-2xl mt-6 sm:mt-8'>
        <div className='absolute inset-0 bg-gray-200 backdrop-blur-md rounded-3xl z-0'></div>
        <div className='relative text-center z-10 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24'>
          <h2 className="text-4xl font-extrabold mb-12">
            <span className="text-[#c62931]">Apply Now!</span>
          </h2>
          <div id="FinancingContactForm">
            <CareersForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCareers;
