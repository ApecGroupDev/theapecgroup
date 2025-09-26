"use client";

import React from "react";
import ServicesBoxLinks2 from "@/components/servicesLinks2";
import Accordion, { AccordionItem } from "@/components/accordion";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import CareersForm from "@/components/careersForm";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do I need petroleum industry experience?', content: <p>Not always. We offer training for many roles — especially in fuel delivery and equipment service.</p> },
  { id: 'two', title: 'How fast is the hiring process?', content: <p>We typically schedule interviews within a week of reviewing applications.</p> },
  { id: 'three', title: 'Do you provide safety and compliance training?', content: <p>Absolutely. We prioritize safety and ensure all employees are trained to industry standards.</p> },
  { id: 'four', title: 'Where do you operate?', content: <p>Our core operations are in Georgia and surrounding Southeastern states.</p> },
];

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

const MainFinancing: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
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

        <div className='mt-12 grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
          <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8'>
            <h2>
              <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                What makes APEC different?
              </span>
            </h2>
            <div className='tracking-widest space-y-4 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl'>
              <div>Long-term careers in fuel infrastructure and petroleum construction.</div>
              <div>Hands-on work: gas station builds, tank installations, system upgrades.</div>
              <div>Team-first culture with a serious focus on safety.</div>
              <div>Projects throughout Georgia.</div>
              <div>35+ years of proven leadership and client trust.</div>
            </div>
          </div>
          <div className="h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8">
            <div>
              <span className='apec-red font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Benefits of Working at APEC Group
              </span>
            </div>
            <p className="italic scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal tracking-widest">
              We invest in our people with competitive benefits and a supportive culture.
            </p>
            <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
              <CheckmarkBadge text="Competitive salary with regular hours" />
              <CheckmarkBadge text="Health, dental, and vision insurance" />
              <CheckmarkBadge text="401(k) with company match" />
              <CheckmarkBadge text="Paid time off & holidays" />
              <CheckmarkBadge text="On-the-job training and safety certification" />
              <CheckmarkBadge text="Real growth paths in petroleum services" />
            </div>
            <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
              <CheckmarkBadgeSmall text="Competitive salary with regular hours" />
              <CheckmarkBadgeSmall text="Health, dental, and vision insurance" />
              <CheckmarkBadgeSmall text="401(k) with company match" />
              <CheckmarkBadgeSmall text="Paid time off & holidays" />
              <CheckmarkBadgeSmall text="On-the-job training and safety certification" />
              <CheckmarkBadgeSmall text="Real growth paths in petroleum services" />
            </div>
          </div>
        </div>

        {/* OPEN POSITIONS */}
        <div className="mt-20">
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

        {/* STEPS TO APPLY */}
        <section className="w-full mt-12 space-y-8">
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
          <div className='absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0'></div>
          <div className='relative text-center z-10 p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24'>
            <span className='apec-red font-medium scrn-300:text-base scrn-500:text-xl scrn-750:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl'>
              APPLY NOW!
            </span>
            <div id="FinancingContactForm">
              <CareersForm />
            </div>
          </div>
        </div>
        <div className="w-full p-6 mt-24">
          <span className="apec-red text-xl font-bold">Petroleum Careers FAQs</span>
          <Accordion items={items} allowMultiple={false} defaultOpenIds={["one"]} />
        </div>
        <div className='space-x-2 font-semibold text-nowrap hidden scrn-600:block mt-16'>
          <ServicesBoxLinks2 />
        </div>
      </div>
    </div>
  );
};

export default MainFinancing;
