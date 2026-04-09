"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CheckmarkBadge from "@/components/checkmarkBadge";
import { fadeUp } from "@/lib/animations";

const checklistItems = [
  "Regulatory compliance updates (federal, state, and local)",
  "Environmental best practices for fuel systems",
  "Construction and remodeling insights for gas stations and C-stores",
  "Fuel tank maintenance and monitoring guidance",
  "Financing and equipment upgrade tips",
  "Branding and customer engagement strategies",
];

const badges = [
  "Gas station owners and operators",
  "Fuel tank installers and contractors",
  "Petroleum equipment suppliers",
  "C-store operators",
  "Environmental compliance professionals",
  "Fuel system financiers and investors",
];


const IntroBlog: React.FC = () => (
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
              APEC Blog
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Stay Informed, <span className="text-[#c62931]">Stay Ahead.</span>
          </h1>
          <p className="text-[#111]/50 text-base leading-relaxed">
            The oil and gas industry never stands still — and neither should
            you.{" "}
            <span className="font-semibold text-[#111]/80">The APEC Group</span>{" "}
            Blog delivers timely, practical, and insightful content for fuel
            retailers, energy professionals, and anyone invested in petroleum
            operations. From compliance changes to construction tips and
            marketing strategies, our blog helps you stay competitive and
            informed.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>

    {/* ── WHAT YOU'LL FIND + WHO SHOULD READ ───────────────────────────── */}
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
          {/* Left — What You'll Find */}
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                Blog Topics
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What You’ll Find{" "}
              <span className="text-[#c62931]">In Our Blog.</span>
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

          {/* Right — Who Should Read */}
          <motion.div {...fadeUp(0.1)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                For You If...
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Who Should <span className="text-[#c62931]">Read This Blog?</span>
            </h2>
            <p className="text-[#111]/40 text-sm italic leading-relaxed mb-4">
              Written for the people who keep the petroleum industry moving.
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

export default IntroBlog;
