"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CheckmarkBadge from "@/components/checkmarkBadge";

const checklistItems = [
  "30+ years of petroleum systems expertise",
  "Licensed, insured, and safety-first on every project",
  "Complete solutions — fuels, tanks, pumps, compliance, emergency response",
  "Local experts across Georgia and Texas",
];

const badges = [
  "High-quality fuels, lubricants, and alternative fuels",
  "Fuel tank installation, replacement, removal, and repair",
  "Oil pump installation and replacement",
  "Fuel monitoring and compliance systems",
  "Emergency response and environmental remediation",
  "Turnkey project management for fueling sites",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Introductory: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro text */}
      <motion.div {...fadeUp(0)} className="max-w-3xl mb-24">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            About APEC
          </span>
        </div>
        <p
          className="text-3xl lg:text-4xl font-black text-[#111] leading-[1.2] tracking-tight mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          We don&apos;t just supply petroleum products —{" "}
          <span className="text-[#c62931]">
            we help protect what you&apos;ve built.
          </span>
        </p>
        <p className="text-[#111]/50 text-base leading-relaxed mb-4">
          When you&apos;re managing a fueling operation, the stakes are high. A
          mistake could mean costly fines, lost customers, or even shutdowns. At{" "}
          <span className="font-semibold text-[#111]/80">
            The APEC Group (Atlanta Petroleum Equipment Company)
          </span>
          , since 1989 we&apos;ve partnered with fuel retailers, fleet
          operators, and distributors across Georgia to deliver safe, compliant,
          and reliable fueling solutions.
        </p>
        <p className="text-[#c62931]/70 text-sm italic leading-relaxed">
          Looking for a partner who handles the complexity so you can focus on
          running your business? That&apos;s what we do.
        </p>
      </motion.div>

      {/* Two columns */}
      <div className="grid md:grid-cols-2 gap-12 xl:gap-24">
        {/* Left — Why Choose APEC */}
        <motion.div {...fadeUp(0.1)}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Our Difference
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Choose <span className="text-[#451b1d]">APEC?</span>
          </h2>
          <div className="space-y-4">
            {checklistItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.15 + i * 0.07)}
                className="flex items-start gap-3 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-lg group"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#c62931]/10 group-hover:bg-[#c62931]/20 transition-colors duration-300 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#c62931]" />
                </span>
                <span className="text-[#111]/70 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Products & Services */}
        <motion.div {...fadeUp(0.15)}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              What We Offer
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Products &amp; <span className="text-[#c62931]">Services.</span>
          </h2>
          <div className="space-y-4">
            {badges.map((text, i) => (
              <motion.div key={i} {...fadeUp(0.2 + i * 0.06)}>
                <CheckmarkBadge text={text} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default Introductory;
