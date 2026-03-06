"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CheckmarkBadge from "@/components/checkmarkBadge";

const checklistItems = [
  "Licensed, certified, and safety-trained professionals",
  "30+ years of experience across construction, compliance, and maintenance",
  "Deep knowledge of state and federal petroleum regulations",
  "Local expertise across Georgia",
  "Friendly, responsive, and solutions-focused",
];

const badges = [
  "Integrity: We do what's right, not what's easy",
  "Excellence: Every project deserves our best",
  "Accountability: We take ownership, from permits to pumps",
  "Service: We treat your site like it's our own",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const IntroTeam: React.FC = () => (
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
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Our Team
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Experts by <span className="text-[#c62931]">Your Side.</span>
          </h1>
          <p className="text-[#111]/50 text-base leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold text-[#111]/80">
              The APEC Group,
            </span>{" "}
            our strength lies in our people. From project managers and engineers
            to compliance specialists and service technicians, each member of
            our team is dedicated to your success. With 30+ years of combined
            experience in petroleum systems, our professionals are not only
            skilled — they're deeply committed to safety, precision, and
            innovation.
          </p>
          <p className="text-[#c62931]/80 text-base leading-relaxed italic">
            Whether you're building a gas station, repairing a fuel tank, or
            navigating regulations, you'll have experts by your side — every
            step of the way.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>

    {/* ── WHAT SETS OUR TEAM APART + TEAM VALUES ────────────────────────── */}
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
          {/* Left — What Sets Our Team Apart */}
          <motion.div {...fadeUp(0)}>
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
              What Sets <span className="text-[#c62931]">Our Team Apart.</span>
            </h2>
            <div className="space-y-4">
              {checklistItems.map((item, i) => (
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

          {/* Right — Team Values */}
          <motion.div {...fadeUp(0.1)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                What We Stand For
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Our Team <span className="text-[#c62931]">Values.</span>
            </h2>
            <p className="text-[#111]/40 text-sm italic leading-relaxed mb-8">
              The principles that guide every project, every decision, every
              day.
            </p>
            <div className="space-y-4">
              {badges.map((text, i) => (
                <motion.div key={i} {...fadeUp(0.1 + i * 0.07)}>
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

export default IntroTeam;
