"use client";

import React from "react";
import ServicesBoxLinks from "@/components/servicesLinks";
import ComplianceContactForm from "@/components/complianceContactForm";
import CheckmarkBadge from "@/components/checkmarkBadge";
import CheckmarkBadgeSmall from "@/components/checkmarkBadgeSmall";
import AccordionCompliance from "./accordion";

const MainCompliance: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto'>
      <div className="max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl">
        <div className="mt-12">
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
            Environmental regulations in the petroleum industry are complex — and failing to comply can put your business, customers, and community at risk. At <span className="text-[#c62931] font-semibold">The APEC Group</span>, we provide <span className="text-[#c62931] font-semibold">custom environmental compliance solutions</span> that protect your business from fines, shutdowns, and environmental harm. With 30+ years of expertise, we help fuel retailers and operators meet or exceed all local, state, and federal requirements.
          </p>
          <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl text-[#c62931] italic mt-8">
            Let us handle compliance so you can focus on your business with peace of mind.
          </p>
        </div>

        <div className='mt-12 grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24'>
          <div className='h-auto space-y-3 scrn-500:space-y-4 scrn-1200:space-y-12 pt-4 scrn-400:pt-8 scrn-600:pt-16 scrn-1000:pt-20 scrn-1600:pt-32'>
            <h2>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Why Choose APEC for Environmental Compliance?
              </span>
            </h2>
            <div className='tracking-widest space-y-4 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl'>
              <div>30+ years’ experience managing petroleum system compliance.</div>
              <div>Licensed, insured, and known for a spotless safety record.</div>
              <div>Complete solutions — inspections, permitting, testing, remediation.</div>
              <div>Trusted local experts on Georgia’s regulatory requirements.</div>
              <div>Compliance guarantee — we stand behind our work.</div>
            </div>
            <div>
              <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
                Our Environmental Compliance Services Include:
              </span>
            </div>
            <div className='hidden scrn-1000:block scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2500:text-3xl scrn-800:font-normal scrn-900:font-normal scrn-900:space-y-2 scrn-1000:space-y-2 scrn-1500:space-y-6 scrn-1000:font-normal tracking-widest'>
              <CheckmarkBadge text="Fuel system inspections and leak detection" />
              <CheckmarkBadge text="Tank and line testing" />
              <CheckmarkBadge text="Compliance documentation and reporting" />
              <CheckmarkBadge text="Permitting and regulatory liaison" />
              <CheckmarkBadge text="Spill prevention and emergency response" />
              <CheckmarkBadge text="Environmental remediation and cleanup" />
            </div>
            <div className='scrn-1000:hidden scrn-300:text-xs scrn-450:text-sm scrn-600:text-sm scrn-750:text-sm scrn-800:text-base scrn-900:text-base scrn-300:space-y-2 scrn-450:space-y-2 scrn-600:space-y-2 scrn-750:space-y-3 scrn-800:space-y-2 scrn-900:space-y-2 tracking-widest'>
              <CheckmarkBadgeSmall text="Fuel system inspections and leak detection" />
              <CheckmarkBadgeSmall text="Tank and line testing" />
              <CheckmarkBadgeSmall text="Compliance documentation and reporting" />
              <CheckmarkBadgeSmall text="Permitting and regulatory liaison" />
              <CheckmarkBadgeSmall text="Spill prevention and emergency response" />
              <CheckmarkBadgeSmall text="Environmental remediation and cleanup" />
            </div>
          </div>
          <div className='relative flex items-center mt-6 scrn-500:mt-8 z-10'>
            <div id="ComplianceContactForm" className="p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24 bg-gray-200 rounded-xl shadow-2xl">
              <span className='font-medium scrn-300:text-base scrn-500:text-xl scrn-750:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1900:text-4xl'>
                SERVICE REQUEST
              </span>
              <ComplianceContactForm />
            </div>
          </div>
        </div>
        <div className="my-20">
          <AccordionCompliance />
        </div>
        <div className='space-x-2 font-semibold text-nowrap mt-16'>
          <ServicesBoxLinks />
        </div>
      </div>
    </div>
  );
};

export default MainCompliance;
