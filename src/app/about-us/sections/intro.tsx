"use client";

import React from "react";
import { motion } from "framer-motion";
import CheckmarkBadge from "@/components/checkmarkBadge";
import { Check } from "lucide-react";

const badges = [
  "Gas station owners and developers",
  "Convenience store operators",
  "Fuel distributors and fleet yards",
  "Contractors and commercial property owners",
];

const badges2 = [
  "ARA - Atlanta Retailers Association",
  "GACS - Georgia Association of Convenience Stores",
  "GHRCA - Greater Houston Retailers Cooperative Association, Inc.",
  "GOA - Georgia Oilman's Association",
  "GTEC - Georgia Tank Environmental Contractors Association",
  "PEI - Petroleum Equipment Institute",
  "TFFA - Texas Food & Fuel Association",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const IntroAbout: React.FC = () => (
  <div className="w-full">
    {/* ── INTRO ─────────────────────────────────────────────────────────── */}
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          {/* Left — Intro text */}
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                About Us
              </span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Powering Petroleum{" "}
              <span className="text-[#c62931]">Since 1989.</span>
            </h1>
            <p className="text-[#111]/50 text-base leading-relaxed mb-4">
              Since 1989,{" "}
              <span className="font-semibold text-[#111]/80">
                The APEC Group (Atlanta Petroleum Equipment Company)
              </span>{" "}
              has helped fuel retailers, contractors, and business owners power
              their operations with confidence. From underground tanks to
              above-ground solutions, from environmental compliance to full gas
              station builds — we bring expertise, integrity, and a commitment
              to results.
            </p>
            <p className="text-[#c62931]/80 text-base leading-relaxed italic">
              Whether you run a single site or a multi-location network, we’re
              your trusted partner in safe, efficient, and future-ready
              petroleum infrastructure.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div {...fadeUp(0.12)} className="grid grid-cols-1 gap-4">
            {[
              {
                value: "35+",
                label: "Years in Business",
                sub: "Serving clients since 1989",
              },
              {
                value: "2",
                label: "Office Locations",
                sub: "Atlanta, GA & Houston, TX",
              },
              {
                value: "100%",
                label: "Licensed and Insured",
                sub: "Quality Assurance",
              },
            ].map(({ value, label, sub }, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.12 + i * 0.08)}
                className="flex items-center gap-7 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-6 py-5 transition-all duration-300 hover:shadow-lg group"
              >
                <span
                  className="text-4xl font-black text-[#c62931] leading-none tracking-tight flex-shrink-0 w-20"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {value}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-[#111] tracking-tight">
                    {label}
                  </span>
                  <span className="text-xs text-[#111]/40 mt-0.5">{sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>

    {/* ── WHO WE SERVE + CERTIFICATIONS ────────────────────────────────── */}
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-24">
          {/* Left — Who We Serve */}
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                Clients
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Who We <span className="text-[#c62931]">Serve.</span>
            </h2>
            <div className="space-y-4">
              {badges.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.05 + i * 0.07)}
                  className="flex items-start gap-3 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-lg group"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#c62931]/10 group-hover:bg-[#c62931]/20 transition-colors duration-300 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#c62931]" />
                  </span>
                  <span className="text-sm text-[#111]/70 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Certifications & Affiliations */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                Industry Standing
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Certifications &{" "}
              <span className="text-[#c62931]">Affiliations.</span>
            </h2>
            <p className="text-[#111]/40 text-sm italic leading-relaxed mb-4">
              Proud members of the organizations that set the standard for
              petroleum excellence.
            </p>
            <div className="space-y-4">
              {badges2.map((text, i) => (
                <motion.div key={i} {...fadeUp(0.1 + i * 0.06)}>
                  <CheckmarkBadge text={text} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  </div>
);

export default IntroAbout;
