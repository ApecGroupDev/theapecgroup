"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import CareersForm from "@/components/careersForm";

const steps = [
  {
    title: "Browse Open Roles",
    description:
      "Explore our current openings and find the position that fits your skills and goals.",
  },
  {
    title: "Submit Your Resume",
    description:
      "Send us your resume and an optional cover letter telling us why you're a great fit.",
  },
  {
    title: "Still Have Questions?",
    description:
      "Reach out directly at service@theapecgroup.com and we'll get back to you promptly.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const MainCareers: React.FC = () => (
  <div className="w-full">
    {/* ── HOW TO APPLY ──────────────────────────────────────────────────── */}
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Get Started
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            How to <span className="text-[#c62931]">Apply.</span>
          </h2>
          <div className="mt-10 h-px bg-[#111]/[0.08]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp(0.1 + i * 0.08)}
              className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Red left-edge reveal */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

              {/* Step number */}
              <span
                className="text-6xl font-black text-[#111]/[0.06] leading-none mb-4 select-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                0{i + 1}
              </span>

              <h3
                className="text-xl font-black text-[#111] group-hover:text-[#c62931] mb-3 tracking-tight transition-colors duration-300"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[#111]/50 leading-relaxed flex-1">
                {step.description}
              </p>

              <div className="mt-5 h-px bg-[#111]/[0.07]" />
              <div className="mt-4 flex items-center gap-2 text-[#111]/20 group-hover:text-[#c62931] transition-colors duration-300">
                <span className="text-xs font-bold tracking-widest uppercase">
                  Step {i + 1}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>

    {/* ── NOW HIRING ────────────────────────────────────────────────────── */}
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Open Positions
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Now <span className="text-[#c62931]">Hiring.</span>
            </h2>
            <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
              We're actively hiring for roles in operations, compliance, and
              delivery — with immediate openings.
            </p>
          </div>
          <div className="mt-10 h-px bg-[#111]/[0.08]" />
        </motion.div>

        {/* Job card */}
        <motion.div
          {...fadeUp(0.1)}
          className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl px-8 py-7 transition-all duration-500 hover:shadow-2xl overflow-hidden"
        >
          {/* Red left-edge reveal */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

          <div className="flex-1">
            <h3
              className="text-2xl font-black text-[#111] group-hover:text-[#c62931] mb-3 tracking-tight transition-colors duration-300"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Service Technician
            </h3>
            <p className="text-sm text-[#111]/50 leading-relaxed max-w-2xl">
              Looking for an experienced technician with expertise in POS
              systems and fuel dispensers. Past certifications and at least two
              years of experience required. Must be willing to work long hours
              and be on-call on weekends.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#111]/50">
                <MapPin className="w-3.5 h-3.5 text-[#c62931]" /> Atlanta, GA
              </span>
              <span className="w-1 h-1 rounded-full bg-[#111]/20" />
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#111]/50">
                <Briefcase className="w-3.5 h-3.5 text-[#c62931]" /> Full-Time
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-2 text-[#111]/25 group-hover:text-[#c62931] transition-colors duration-300">
            <span className="text-xs font-bold tracking-widest uppercase">
              Apply Now
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-current group-hover:bg-[#c62931] group-hover:border-[#c62931] transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-white transition-colors duration-300" />
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>

    {/* ── APPLICATION FORM ──────────────────────────────────────────────── */}
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c62931] opacity-[0.06] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Join the Team
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Apply <span className="text-[#c62931]">Now.</span>
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="border border-[#111]/[0.08] bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          id="FinancingContactForm"
        >
          <CareersForm />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  </div>
);

export default MainCareers;
