"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactForm";
import CheckmarkBadge from "@/components/checkmarkBadge";

const badges = [
  "Gas station construction planning and estimates",
  "Environmental compliance support (UST/AST)",
  "Fuel tank repairs, replacement, or transfers",
  "Financing options for petroleum projects",
  "Equipment installation (canopies, oil pumps, dispensers)",
  "Convenience store remodeling",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const MainContact: React.FC = () => (
  <section id="MainContactForm" className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Ambient glow */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#c62931] opacity-[0.06] blur-[120px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 xl:gap-24 items-start">
        {/* Left — What We Help With */}
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              How We Help
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight mb-10"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What We Can <span className="text-[#c62931]">Help You With.</span>
          </h2>
          <div className="space-y-4">
            {badges.map((text, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.07)}>
                <CheckmarkBadge text={text} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div {...fadeUp(0.15)}>
          <div className="border border-[#111]/[0.08] bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                Get in Touch
              </span>
            </div>
            <h2
              className="text-4xl font-black text-[#111] tracking-tight mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Contact Us <span className="text-[#c62931]">Now.</span>
            </h2>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default MainContact;
