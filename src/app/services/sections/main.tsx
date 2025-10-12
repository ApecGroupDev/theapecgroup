"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "GAS STATION CONSTRUCTION",
    description:
      "From design to grand opening, we build durable, compliant stations that are ready to serve customers from day one.",
    image: "/servicesLogos/Apec-Constructions.webp",
    link: "/services/gas-station-construction",
  },
  {
    title: "CANOPY IMAGING SOLUTIONS",
    description:
      "Custom canopy designs and installations that strengthen your brand, attract attention, and enhance customer experience.",
    image: "/servicesLogos/Apec-Imaging.webp",
    link: "services/canopy-imaging-solutions",
  },
  {
    title: "METAL PRODUCTS MANUFACTURING",
    description:
      "Reliable, high-quality metal products engineered for safety, compliance, and long-term performance.",
    image: "/servicesLogos/Logo_MPC_Main.webp",
    link: "https://www.metalproductsusa.com/",
  },
  {
    title: "GAS STATION FINANCING",
    description:
      "Flexible funding solutions that make it easier to build, renovate, or expand your petroleum business without cash flow stress.",
    image: "/servicesLogos/Apec-Financing.webp",
    link: "/services/gas-station-financing",
  },
  {
    title: "GAS STATION ELECTRICAL",
    description:
      "Full electrical system design, installation, and maintenance tailored for fueling stations and convenience stores.",
    image: "/servicesLogos/Apec-Electrical.webp",
    link: "/services/gas-station-electrical",
  },
  {
    title: "ENVIRONMENTAL COMPLIANCE SOLUTIONS",
    description:
      "Stay ahead of regulations with inspections, permitting, testing, and remediation that protect your investment and reputation.",
    image: "/servicesLogos/Apec-Compliance.webp",
    link: "/services/environmental-compliance-solutions",
  },
];

const MainServices: React.FC = () => {
  return (
    <div className='flex flex-col items-center scrn-600:justify-center h-auto w-full max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8'>
      {/* Introductory Paragraph */}
      <div className="mt-12">
        <p className="tracking-widest scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
          At <span className="apec-red font-semibold">The APEC Group</span>, we don’t just provide petroleum equipment — we deliver peace of mind. From <span className="apec-red font-semibold">environmental compliance</span> to <span className="apec-red font-semibold">gas station construction, financing, electricals, and canopy solutions</span>, we’re your one-stop partner for building and growing a profitable, future-proof petroleum business.
        </p>
      </div>

      <div className='h-auto pt-4 scrn-400:pt-8 scrn-600:pt-16'>
        <h2>
          <span className='font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-2000:text-5xl'>
            WHY CHOOSE APEC?
          </span>
        </h2>
        <div className='pt-4 tracking-widest space-y-6 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl'>
          <div><span className="apec-red font-semibold">END-TO-END SOLUTIONS</span> – From inspection and compliance to financing and construction — all under one trusted roof.</div>
          <div><span className="apec-red font-semibold">EXPERTISE THAT SAVES YOU MILLIONS</span> – Over 30 years of proven success helping gas station owners avoid fines, delays, and costly mistakes.</div>
          <div><span className="apec-red font-semibold">SUSTAINABILITY FIRST</span> – Our services help you meet environmental regulations without the headaches.</div>
          <div><span className="apec-red font-semibold">FINANCING THAT WORKS FOR YOU</span> – Flexible funding options so you can build or upgrade your station without cash flow worries.</div>
          <div><span className="apec-red font-semibold">FAST, EFFICIENT EXECUTION</span> – We deliver on time and on budget. Every time.</div>
        </div>
      </div>

      {/* Section Title */}
      <div className='italic apec-red text-2xl font-bold
          mt-32 scrn-600:mt-24 scrn-1200:mt-20'>
        CHECK OUT OUR SERVICES HERE!
      </div>

      {/* Services Section */}
      <section className="w-full px-4 py-12">
        <div className="space-y-40">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-stretch scrn-1000:flex-row ${index % 2 === 1 ? "scrn-1000:flex-row-reverse" : ""
                }`}
            >
              {/* Description */}
              <div className="flex-1 flex flex-col justify-center text-center scrn-1000:text-left px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 scrn-300:text-xs scrn-400:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-2500:text-3xl">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block scrn-600:w-1/3 scrn-1000:w-2/3 scrn-1200:w-1/3 text-center px-6 py-2 text-white bg-[#c62931] rounded-md mt-6 hover:bg-[#a92128] transition"
                >
                  Read More
                </Link>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center items-center px-6 py-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={350}
                  height={350}
                  className="animate-pulseScale"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainServices;
