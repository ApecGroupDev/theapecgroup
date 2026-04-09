"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface Service {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
}

const features: Service[] = [
  {
    title: "APEC Construction",
    description: "Gas Station Construction Services",
    imageSrc: "/servicesLogos/Apec-Constructions.webp",
    slug: "gas-station-construction",
  },
  {
    title: "APEC Imaging & Canopies",
    description: "Gas Station Canopy Panels Installation",
    imageSrc: "/servicesLogos/Apec-Imaging.webp",
    slug: "canopy-imaging-solutions",
  },
  {
    title: "Metal Products Company",
    description: "Gas Station Fuel Tanks Manufacturing",
    imageSrc: "/servicesLogos/Logo_MPC_Main_Only.webp",
    slug: "metalproductsusa.com",
  },
  {
    title: "APEC Finances",
    description: "Financing and Loans Services",
    imageSrc: "/servicesLogos/Apec-Financing.webp",
    slug: "gas-station-financing",
  },
  {
    title: "APEC Electrical",
    description: "Electrical Solutions for Gas Stations",
    imageSrc: "/servicesLogos/Apec-Electrical.webp",
    slug: "gas-station-electrical",
  },
  {
    title: "APEC Compliance",
    description: "Inspection and Compliance Services",
    imageSrc: "/servicesLogos/Apec-Compliance.webp",
    slug: "environmental-compliance-solutions",
  },
  {
    title: "Free Consultation",
    description: "Speak with our team anytime",
    imageSrc: "/logos/APEC.webp",
    slug: "https://www.theapecgroup.com/contact-us",
  },
];

const hiddenSlugsByPath: Record<string, string[]> = {
  "/services/gas-station-construction": ["gas-station-construction"],
  "/services/canopy-imaging-solutions": ["canopy-imaging-solutions"],
  "/services/gas-station-financing": ["gas-station-financing"],
  "/services/gas-station-electrical": ["gas-station-electrical"],
  "/services/environmental-compliance-solutions": [
    "environmental-compliance-solutions",
  ],
};

const externalSlugs = [
  "metalproductsusa.com",
  "https://www.theapecgroup.com/contact-us",
];

const ServiceCard: React.FC<{ feature: Service; index: number }> = ({
  feature,
  index,
}) => {
  const [hovered, setHovered] = useState(false);

  const isExternal = externalSlugs.includes(feature.slug);
  const href = isExternal
    ? feature.slug.startsWith("http")
      ? feature.slug
      : `https://${feature.slug}`
    : `/services/${feature.slug}`;

  return (
    <motion.div {...fadeUp(index * 0.07)}>
      <Link
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
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

        {/* Image area */}
        <div className="relative flex items-center justify-center h-36 bg-[#f7f5f2] border-b border-[#111]/[0.06] overflow-hidden">
          <div className="absolute inset-0 bg-[#c62931] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
          <Image
            src={feature.imageSrc}
            alt={feature.title}
            width={160}
            height={100}
            className="relative z-10 max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
          <h3
            className="text-lg font-black tracking-tight text-[#111] group-hover:text-[#c62931] mb-1.5 transition-colors duration-300"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {feature.title}
          </h3>
          <p className="text-sm text-[#111]/50 leading-relaxed flex-1">
            {feature.description}
          </p>

          <div className="mt-5 h-px bg-[#111]/[0.07]" />

          <div className="mt-4 flex items-center justify-between text-[#111]/25 group-hover:text-[#c62931] transition-colors duration-300">
            <span className="text-xs font-bold tracking-widest uppercase">
              {isExternal ? "Visit Site" : "Learn More"}
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

const ServicesBoxLinks: React.FC = () => {
  const pathname = usePathname();
  const hiddenSlugs = hiddenSlugsByPath[pathname] || [];
  const filteredFeatures = features.filter(
    (f) => !hiddenSlugs.includes(f.slug),
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-24">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.06] blur-[100px] pointer-events-none rounded-full" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Explore More
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              You May Also{" "}
              <span className="text-[#c62931]">Be Interested In.</span>
            </h2>
          </div>
          <div className="mt-10 h-px bg-[#111]/[0.08]" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFeatures.map((feature, index) => (
            <ServiceCard key={feature.slug} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  );
};

export default ServicesBoxLinks;
