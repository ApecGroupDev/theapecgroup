"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  heading: React.ReactNode;
  subtext: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const PageHero: React.FC<PageHeroProps> = ({
  imageSrc,
  imageAlt,
  eyebrow,
  heading,
  subtext,
  buttonLabel,
  onButtonClick,
}) => (
  <section className="relative w-full overflow-hidden py-48 lg:py-64 flex items-center">
    {/* Background image */}
    <div className="absolute inset-0">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-[rgba(198,41,49,0.12)] mix-blend-multiply" />
    </div>

    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931] to-transparent z-20" />

    {/* Content */}
    <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#c62931]" />
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/50">
          {eyebrow}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-white font-black leading-[1.0] tracking-tight
          text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          max-w-xs md:max-w-xl lg:max-w-3xl mb-6"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {heading}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="text-white/60 text-sm lg:text-base leading-relaxed max-w-sm mb-10"
      >
        {subtext}
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onButtonClick}
          className="group inline-flex items-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,41,49,0.5)]"
        >
          {buttonLabel}
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
