"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/Auth_Dis/Auth_Dis_Dover.webp", alt: "Dover" },
  { src: "/logos/Auth_Dis/Auth_Dis_Wayne3.webp", alt: "Wayne" },
  { src: "/logos/Auth_Dis/Auth_Dis_Verifone.webp", alt: "Verifone" },
  { src: "/logos/Auth_Dis/Auth_Dis_OPW.webp", alt: "OPW" },
  { src: "/logos/Auth_Dis/Auth_Dis_Franklin.webp", alt: "Franklin" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero2: React.FC = () => (
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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#c62931] opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-14 text-center">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Trusted Partners
          </span>
        </div>
        <h2
          className="text-4xl lg:text-5xl font-black text-[#111] tracking-tight leading-[1.05]"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Authorized Distributor <span className="text-[#c62931]">For:</span>
        </h2>
      </motion.div>

      {/* Divider */}
      <motion.div {...fadeUp(0.1)} className="h-px bg-[#111]/[0.08] mb-14" />

      {/* Logo strip */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {logos.map((logo, i) => (
          <motion.div
            key={logo.alt}
            {...fadeUp(0.1 + i * 0.07)}
            className="group flex items-center justify-center w-56 h-36 flex-shrink-0 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl transition-all duration-500 hover:shadow-xl"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              quality={85}
              className="w-48 h-14 object-contain transition-all duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div {...fadeUp(0.5)} className="h-px bg-[#111]/[0.08] mt-14" />
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default Hero2;
