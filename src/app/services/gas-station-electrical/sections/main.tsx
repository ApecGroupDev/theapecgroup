"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ElectricalContactForm from "@/components/electricalContactForm";
import CheckmarkBadge from "@/components/checkmarkBadge";

const badges = [
  "Power distribution and backup systems",
  "Canopy and parking lot lighting installation",
  "Underground electrical wiring",
  "Hazardous location and explosion-proof wiring",
  "Electrical system upgrades and retrofits",
  "Preventive maintenance and safety inspections",
  "24/7 emergency electrical services",
];

const checklistItems = [
  "30+ years of proven experience with fuel stations and petroleum facilities",
  "Licensed, insured, and trusted for a spotless safety record",
  "Complete solutions — design, installation, upgrades, and emergency service",
  "Specialists in hazardous location and explosion-proof systems",
  "Code-compliant execution — NEC, OSHA, and local authority approved",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const MainElectrical: React.FC = () => (
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
              Gas Station Electrical
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Code-compliant, <br />
            built to last.
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          <p className="text-white/50 text-base leading-relaxed mb-4">
            Running a gas station comes with unique electrical challenges. From
            hazardous location wiring to canopy lighting and underground
            systems, one mistake can lead to costly downtime, safety hazards, or
            regulatory violations. At{" "}
            <span className="font-semibold text-white/80">APEC</span>, we
            specialize in gas station electrical contracting — delivering
            turnkey installations, upgrades, and maintenance designed
            specifically for fueling environments. With decades of expertise, we
            ensure every project is code-compliant, efficient, and built to
            last.
          </p>
          <p className="text-[#c62931] text-sm font-bold tracking-wide">
            Let us handle your electrical systems so you can focus on fueling
            your customers — safely and profitably.
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
            Why Choose APEC For{" "}
            <span className="text-[#c62931]">Electrical Work?</span>
          </h2>
          <p className="text-[#111]/40 text-sm max-w-xs leading-relaxed lg:text-right">
            30+ years of proven experience with fuel stations and petroleum
            facilities.
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
              Our Electrical{" "}
              <span className="text-[#c62931]">Services Include.</span>
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
        <div
          className="relative z-10 px-4 sm:px-6 lg:px-16 pb-24"
          id="ElectricalContactForm"
        >
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
                Electrical{" "}
                <span className="text-[#c62931]">Service Request.</span>
              </h2>
              <ElectricalContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default MainElectrical;
