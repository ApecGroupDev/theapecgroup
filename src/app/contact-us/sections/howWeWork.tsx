"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  ClipboardCheck,
  FileText,
  Handshake,
  ShieldCheck,
  Wrench,
  Building2,
  MessageSquare,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const steps = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within one business day.",
    stat: "< 24hrs",
  },
  {
    icon: ClipboardCheck,
    title: "Consultation",
    description:
      "Our experts review your project and provide tailored recommendations.",
    stat: "Free",
  },
  {
    icon: FileText,
    title: "Site Visit or Estimate",
    description:
      "For larger projects, we schedule a detailed inspection or quote.",
    stat: "On-Site",
  },
  {
    icon: Handshake,
    title: "Follow-Through",
    description:
      "We stay connected from your first call to project completion — and beyond.",
    stat: "End-to-End",
  },
];

const reasons = [
  { icon: ShieldCheck, text: "35+ years of hands-on petroleum experience" },
  {
    icon: Wrench,
    text: "Licensed, insured, and safety-certified professionals",
  },
  {
    icon: Building2,
    text: "Deep local expertise across Georgia, Texas, and the Southeast",
  },
  {
    icon: MessageSquare,
    text: "Transparent communication and reliable project delivery",
  },
  {
    icon: Handshake,
    text: "One trusted partner for construction, electrical, financing, and compliance",
  },
];

const HowWeWork: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Ambient glows */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.07] blur-[100px] pointer-events-none rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── HOW WE WORK ─────────────────────────────────────────────────── */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Our Process
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            How We Work <span className="text-[#c62931]">With You.</span>
          </h2>
          <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
            A simple, transparent process from first contact to project
            completion.
          </p>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
        {steps.map(({ icon: Icon, title, description, stat }, i) => (
          <motion.div
            key={title}
            {...fadeUp(0.08 + i * 0.08)}
            className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl overflow-hidden"
          >
            {/* Red left-edge reveal */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#111]/[0.08] group-hover:border-[#c62931]/30 bg-[#f7f5f2] group-hover:bg-[#c62931]/5 transition-all duration-300 mb-5">
              <Icon className="w-5 h-5 text-[#111]/40 group-hover:text-[#c62931] transition-colors duration-300" />
            </div>

            {/* Stat */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-xs font-black tracking-wide text-[#111]">
                {stat}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#c62931]" />
            </div>

            <h3
              className="text-xl font-black text-[#111] group-hover:text-[#c62931] mb-3 tracking-tight transition-colors duration-300"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {title}
            </h3>
            <p className="text-sm text-[#111]/50 leading-relaxed flex-1">
              {description}
            </p>

            {/* Step number */}
            <span
              className="absolute bottom-4 right-5 text-6xl font-black text-[#111]/[0.04] leading-none select-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── WHY CHOOSE APEC ─────────────────────────────────────────────── */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Our Difference
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Choose <span className="text-[#c62931]">APEC?</span>
          </h2>
          <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
            35+ years of petroleum excellence — one partner for every stage of
            your project.
          </p>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      <div className="relative">
        {/* Vertical red line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#c62931]/60 via-[#c62931]/20 to-transparent" />

        <div className="flex flex-col gap-0">
          {reasons.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              {...fadeUp(0.06 + i * 0.07)}
              className="group flex items-start gap-6 py-6 border-b border-[#111]/[0.06] last:border-0 transition-all duration-300"
            >
              {/* Dot on the line */}
              <span className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c62931] bg-[#c62931] transition-all duration-300 z-10 mt-0.5">
                <Icon className="w-4 h-4 text-white" />
              </span>

              <div className="flex flex-col">
                <p
                  className="text-2xl lg:text-3xl font-black text-[#111]/70 leading-tight tracking-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default HowWeWork;
