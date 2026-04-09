"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const features = [
  {
    title: "End-to-End Solutions",
    description:
      "From inspection and compliance to financing and construction — all under one trusted roof.",
    stat: "6 Services",
  },
  {
    title: "Expertise That Saves You Millions",
    description:
      "Over 30 years of proven success helping gas station owners avoid fines, delays, and costly mistakes.",
    stat: "30+ Years",
  },
  {
    title: "Sustainability First",
    description:
      "Our services help you meet environmental regulations without the headaches.",
    stat: "EPA Certified",
  },
  {
    title: "Financing That Works for You",
    description:
      "Flexible funding options so you can build or upgrade your station without cash flow worries.",
    stat: "Fast Approval",
  },
  {
    title: "Fast, Efficient Execution",
    description: "We deliver on time and on budget. Every time.",
    stat: "500+ Projects",
  },
];


const IntroServices: React.FC = () => (
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
      {/* Intro paragraph */}
      <motion.div {...fadeUp(0)} className="max-w-3xl mb-24">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Who We Are
          </span>
        </div>
        <p
          className="text-3xl lg:text-4xl font-black text-[#111] leading-[1.2] tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          We don&apos;t just provide petroleum equipment —{" "}
          <span className="text-[#c62931]">we deliver peace of mind.</span>
        </p>
        <p className="mt-6 text-[#111]/50 text-base leading-relaxed max-w-2xl">
          From environmental compliance to gas station construction, financing,
          electricals, and canopy solutions — The APEC Group is your one-stop
          partner for building and growing a profitable, future-proof petroleum
          business.
        </p>
      </motion.div>

      {/* Why Choose APEC header */}
      <motion.div {...fadeUp(0.1)} className="mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Choose <span className="text-[#c62931]">APEC?</span>
          </h2>
          <p className="text-[#111]/40 text-base max-w-sm leading-relaxed lg:text-right">
            Five reasons operators across the country trust us with their most
            critical projects.
          </p>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            {...fadeUp(0.1 + index * 0.07)}
            className={
              index === features.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
            }
          >
            <div className="group relative flex flex-col h-full border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl p-7">
              {/* Red left-edge reveal */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

              {/* Stat + title */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black tracking-wide text-[#111]">
                    {feature.stat}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#c62931]" />
                </div>
              </div>

              <h3
                className="text-xl font-black tracking-tight text-[#111] group-hover:text-[#c62931] mb-3 transition-colors duration-300"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#111]/50 flex-1">
                {feature.description}
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
          </motion.div>
        ))}
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default IntroServices;
