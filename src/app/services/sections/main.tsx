"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
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
    link: "/services/canopy-imaging-solutions",
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
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-32">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Our <span className="text-[#c62931]">Core Services</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg tracking-wider uppercase">
            Comprehensive petroleum solutions built on decades of experience.
          </p>
          <div className="mt-6 w-24 h-[4px] bg-[#c62931] mx-auto rounded-full shadow-md"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 scrn-800:grid-cols-2 scrn-1300:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl hover:border-[#c62931]/70 transition-all duration-500 flex flex-col"
            >
              {/* Logo Section (equal height) */}
              <div className="flex items-center justify-center h-48 bg-gray-50 border-b border-gray-200 group-hover:bg-[#c62931]/5 transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={180}
                  height={180}
                  className="max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-between flex-1 p-8 text-center scrn-1000:text-left">
                <div>
                  <h3 className="text-lg scrn-1000:text-xl font-bold text-gray-900 mb-3 tracking-wide uppercase group-hover:text-[#c62931] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm scrn-800:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={service.link}
                    className="inline-block w-full text-center px-6 py-3 bg-[#c62931] text-white font-semibold rounded-md hover:bg-[#a91f27] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
