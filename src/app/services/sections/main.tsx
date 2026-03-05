"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Gas Station Construction",
    description:
      "From design to grand opening, we build durable, compliant stations that are ready to serve customers from day one.",
    tag: "Full Build",
    stat: "500+ Built",
    image: "/servicesLogos/Apec-Constructions.webp",
    link: "/services/gas-station-construction",
  },
  {
    title: "Canopy Imaging Solutions",
    description:
      "Custom canopy designs and installations that strengthen your brand, attract attention, and enhance customer experience.",
    tag: "Branding",
    stat: "1,200+ Installs",
    image: "/servicesLogos/Apec-Imaging.webp",
    link: "/services/canopy-imaging-solutions",
  },
  {
    title: "Metal Products Manufacturing",
    description:
      "Reliable, high-quality metal products engineered for safety, compliance, and long-term performance.",
    tag: "Manufacturing",
    stat: "Custom Orders",
    image: "/servicesLogos/Logo_MPC_Main.webp",
    link: "https://www.metalproductsusa.com/",
  },
  {
    title: "Gas Station Financing",
    description:
      "Flexible funding solutions that make it easier to build, renovate, or expand your petroleum business without cash flow stress.",
    tag: "Funding",
    stat: "Fast Approval",
    image: "/servicesLogos/Apec-Financing.webp",
    link: "/services/gas-station-financing",
  },
  {
    title: "Gas Station Electrical",
    description:
      "Full electrical system design, installation, and maintenance tailored for fueling stations and convenience stores.",
    tag: "Installation",
    stat: "Code Compliant",
    image: "/servicesLogos/Apec-Electrical.webp",
    link: "/services/gas-station-electrical",
  },
  {
    title: "Environmental Compliance",
    description:
      "Stay ahead of regulations with inspections, permitting, testing, and remediation that protect your investment and reputation.",
    tag: "Regulatory",
    stat: "EPA Certified",
    image: "/servicesLogos/Apec-Compliance.webp",
    link: "/services/environmental-compliance-solutions",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

// ─── CARD ─────────────────────────────────────────────────────────────────────

const ServiceCard: React.FC<{
  service: (typeof services)[number];
  index: number;
}> = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div {...fadeUp(index * 0.08)}>
      <Link
        href={service.link}
        className="group relative flex flex-col h-full border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Red left-edge reveal */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Image + tag */}
        <div className="relative flex items-center justify-between px-6 pt-6 pb-5 bg-[#f7f5f2] border-b border-[#111]/[0.06] transition-colors duration-500">
          <div className="absolute inset-0 bg-[#c62931] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
          <Image
            src={service.image}
            alt={service.title}
            width={120}
            height={120}
            className="relative z-10 max-h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[#111]/[0.05] text-[#111]/40">
            {service.tag}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
          {/* Stat */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-xs font-black tracking-wide text-[#111]">
              {service.stat}
            </span>
            <ChevronRight className="w-3 h-3 text-[#c62931]" />
          </div>

          {/* Title */}
          <h3
            className="text-xl font-black tracking-tight text-[#111] group-hover:text-[#c62931] mb-3 transition-colors duration-300"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#111]/50 flex-1">
            {service.description}
          </p>

          {/* Divider */}
          <div className="mt-5 mb-4 h-px bg-[#111]/[0.07]" />

          {/* Footer */}
          <div className="flex items-center justify-between text-[#111]/25 group-hover:text-[#c62931] transition-colors duration-300">
            <span className="text-xs font-bold tracking-widest uppercase">
              Learn More
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-current group-hover:bg-[#c62931] group-hover:border-[#c62931] transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-white transition-colors duration-300" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ─── SECTION ──────────────────────────────────────────────────────────────────

const MainServices: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Ambient glow */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-20">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            What We Offer
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Core <span className="text-[#c62931]">Services.</span>
          </h2>
          <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
            Comprehensive petroleum solutions built on decades of experience —
            every stage covered under one roof.
          </p>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.link} service={service} index={index} />
        ))}
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default MainServices;
