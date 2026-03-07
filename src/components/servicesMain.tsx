"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CheckmarkBadge from "@/components/checkmarkBadge";

export type ServicePageProps = {
  // Band 1 — dark banner
  eyebrow: string;
  bannerHeading: React.ReactNode;
  bannerBody: React.ReactNode;
  bannerTagline: string;

  // Band 2 — why choose checklist
  whyHeading: React.ReactNode;
  whySubtext: string;
  checklistItems: string[];

  // Band 3 — services + form
  servicesHeading: React.ReactNode;
  badges: string[];
  formId: string;
  formHeading: React.ReactNode;
  FormComponent: React.ComponentType;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const ServicePage: React.FC<ServicePageProps> = ({
  eyebrow,
  bannerHeading,
  bannerBody,
  bannerTagline,
  whyHeading,
  whySubtext,
  checklistItems,
  servicesHeading,
  badges,
  formId,
  formHeading,
  FormComponent,
}) => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2]">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    {/* ── BAND 1: Dark intro banner ──────────────────────────────────────── */}
    <div className="relative bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#c62931] opacity-20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40">
              {eyebrow}
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {bannerHeading}
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          <div className="text-white/50 text-base leading-relaxed mb-4">
            {bannerBody}
          </div>
          <p className="text-[#c62931] text-sm font-bold tracking-wide">
            {bannerTagline}
          </p>
        </motion.div>
      </div>
    </div>

    {/* ── BAND 2: Why Choose (full-width checklist) ─────────────────────── */}
    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div {...fadeUp(0)} className="mb-12">
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
            {whyHeading}
          </h2>
          <p className="text-[#111]/40 text-sm max-w-xs leading-relaxed lg:text-right">
            {whySubtext}
          </p>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {checklistItems.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.08 + i * 0.06)}
            className="flex items-start gap-3 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-5 py-5 transition-all duration-300 hover:shadow-lg group"
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
    </div>

    {/* ── BAND 3: Services + Form side by side ──────────────────────────── */}
    <div className="relative">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
        {/* Services */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-16 pb-24">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                What We Offer
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-[#111] leading-[1.05] tracking-tight mb-10"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {servicesHeading}
            </h2>
            <div className="space-y-4">
              {badges.map((text, i) => (
                <motion.div key={i} {...fadeUp(0.06 + i * 0.06)}>
                  <CheckmarkBadge text={text} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-16 pb-24" id={formId}>
          <motion.div {...fadeUp(0.1)} className="sticky top-28">
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
                {formHeading}
              </h2>
              <FormComponent />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default ServicePage;
