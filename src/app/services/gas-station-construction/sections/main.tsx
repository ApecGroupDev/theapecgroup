"use client";

import React from "react";
import ServicesBoxLinks2 from "@/components/servicesLinks2";
import ConstructionContactForm from "@/components/constructionContactForm";
import Accordion, { AccordionItem } from "@/components/accordion";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";

const items: AccordionItem[] = [
  { id: 'one', title: 'Do you handle permits and compliance?', content: <p>Yes — we manage all permitting, inspections, and regulatory requirements.</p> },
  { id: 'two', title: 'Can you design and build the entire station?', content: <p>Absolutely — we handle design, permitting, construction, and final inspection.</p> },
  { id: 'three', title: 'Where do you provide these services?', content: <p>We serve Georgia, Texas, and Atlanta with local expertise.</p> },
  { id: 'four', title: 'Do you build canopies and convenience store structures too?', content: <p>Yes — we provide full fueling site construction, including canopy and C-store build-out.</p> },
  { id: 'five', title: 'How long does construction take?', content: <p>Timelines vary by project size, but we provide clear schedules and deliver on time.</p> },
];

const MainConstruction: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="mt-12">
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
            Building a gas station isn’t just about concrete and pumps — it’s about creating a safe, compliant, and profitable site that will serve your customers for years. <span className="text-[#c62931] font-semibold">The APEC Group</span> offers complete gas station construction services, from design to final inspection. With more than 30 years of experience, we manage every detail so you can focus on your business with confidence.
          </p>
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl text-[#c62931] italic mt-8">
            If you want it built right the first time — safely, efficiently, and to code — we’re the team to call.
          </p>
        </div>

        <div className='mt-12 grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
          <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
            <h2>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Why Choose APEC for Gas Station Construction?
              </span>
            </h2>
            <div className='tracking-widest space-y-4 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl'>
              <div>30+ years’ experience delivering durable fuel sites.</div>
              <div>Licensed, insured, and a spotless safety record.</div>
              <div>End-to-end service: design, permitting, build, inspection.</div>
              <div>Local compliance expertise in Georgia, Texas, and Atlanta.</div>
              <div>We guarantee our work meets all regulatory standards.</div>
            </div>
            <div>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Our Gas Station Construction Services Include:
              </span>
            </div>
            <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
              <CheckmarkBadge text="Custom station design and layout" />
              <CheckmarkBadge text="Permitting and site preparation" />
              <CheckmarkBadge text="Fuel tank and dispenser installation" />
              <CheckmarkBadge text="Canopy and C-store build-out" />
              <CheckmarkBadge text="Environmental compliance support" />
              <CheckmarkBadge text="Complete project management" />
            </div>
            <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
              <CheckmarkBadgeSmall text="Custom station design and layout" />
              <CheckmarkBadgeSmall text="Permitting and site preparation" />
              <CheckmarkBadgeSmall text="Fuel tank and dispenser installation" />
              <CheckmarkBadgeSmall text="Canopy and C-store build-out" />
              <CheckmarkBadgeSmall text="Environmental compliance support" />
              <CheckmarkBadgeSmall text="Complete project management" />
            </div>
          </div>
          <div className='relative rounded-3xl shadow-2xl mt-6 scrn-500:mt-8'>
            <div className='absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0'></div>
            <div className='relative z-10 p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24'>
              <span className='font-medium scrn-300:text-base scrn-500:text-xl scrn-750:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl'>
                SERVICE REQUEST
              </span>
              <div id="ConstructionContactForm">
                <ConstructionContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-6 mt-24">
          <span className="text-[#c62931] text-xl font-bold">Gas Station Construction FAQs</span>
          <Accordion items={items} allowMultiple={false} defaultOpenIds={["one"]} />
        </div>
        <div className='space-x-2 font-semibold text-nowrap hidden scrn-600:block mt-16'>
          <ServicesBoxLinks2 />
        </div>
      </div>
    </div>
  );
};

export default MainConstruction;
