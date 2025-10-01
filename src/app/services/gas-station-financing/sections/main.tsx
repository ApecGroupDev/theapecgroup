"use client";

import React from "react";
import ServicesBoxLinks2 from "@/components/servicesLinks2";
import FinancingContactForm from "@/components/financingContactForm";
import Accordion, { AccordionItem } from "@/components/accordion";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do you provide financing directly or connect us with lenders?', content: <p>We work with trusted lending partners to connect you with the best funding options for your needs.</p> },
  { id: 'two', title: 'Can you help with both construction and equipment financing?', content: <p>Yes — we provide solutions for both construction and equipment, as well as upgrades and remodels.</p> },
  { id: 'three', title: 'Where do you offer gas station financing services?', content: <p>Georgia, Texas, and Atlanta — with local expertise to match regional requirements.</p> },
  { id: 'four', title: 'Is financing available for remodels or site upgrades?', content: <p>Absolutely — we can help secure funding for improvements, expansions, or compliance upgrades.</p> },
  { id: 'five', title: 'How quickly can financing be arranged?', content: <p>Timelines vary, but we work to secure fast approvals so you can keep your project moving.</p> },
];

const MainFinancing: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="mt-12">
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
            Building or upgrading a gas station takes more than a great plan — it takes the right financing to bring it to life. <span className="text-[#c62931] font-semibold">The APEC Group</span> offers tailored gas station financing solutions to help you fund construction, equipment, and site improvements. With over 30 years of experience in the petroleum industry, we understand your business needs and connect you with financing that works.
          </p>
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl text-[#c62931] italic mt-8">
            Let’s power your energy project with funding that fits.
          </p>
        </div>

        <div className='mt-12 grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
          <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
            <h2>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Why Choose APEC for Gas Station Financing?
              </span>
            </h2>
            <div className='tracking-widest space-y-4 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl'>
              <div>30+ years’ experience in petroleum projects and financing.</div>
              <div>Flexible funding options for construction, equipment, and upgrades.</div>
              <div>Guidance from experts who understand fuel site operations.</div>
              <div>Local expertise across Georgia.</div>
              <div>Trusted by fuel retailers, distributors, and fleet operators.</div>
            </div>
            <div>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Our Gas Station Financing Solutions Include:
              </span>
            </div>
            <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
              <CheckmarkBadge text="Construction loans for new fuel stations" />
              <CheckmarkBadge text="Equipment financing (pumps, tanks, monitoring systems)" />
              <CheckmarkBadge text="Funding for upgrades and remodels" />
              <CheckmarkBadge text="Refinance options for existing fuel sites" />
              <CheckmarkBadge text="Consultation on project cost planning" />
            </div>
            <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
              <CheckmarkBadgeSmall text="Construction loans for new fuel stations" />
              <CheckmarkBadgeSmall text="Equipment financing (pumps, tanks, monitoring systems)" />
              <CheckmarkBadgeSmall text="Funding for upgrades and remodels" />
              <CheckmarkBadgeSmall text="Refinance options for existing fuel sites" />
              <CheckmarkBadgeSmall text="Consultation on project cost planning" />
            </div>
          </div>
          <div className='relative flex items-center mt-6 scrn-500:mt-8 z-10'>
            <div id="FinancingContactForm" className="p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24 bg-gray-200 rounded-xl shadow-2xl">
              <span className='font-medium scrn-300:text-base scrn-500:text-xl scrn-750:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl'>
                SERVICE REQUEST
              </span>
              <FinancingContactForm />
            </div>
          </div>
        </div>
        <div className="w-full p-6 mt-24">
          <span className="text-[#c62931] text-xl font-bold">Gas Station Financing FAQs</span>
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
