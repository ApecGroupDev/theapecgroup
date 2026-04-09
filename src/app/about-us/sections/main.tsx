"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, ShieldCheck, Award } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const values = [
  {
    icon: CheckCircle,
    title: "Customer Commitment",
    description:
      "Delivering value, quality, and reliability with every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing advancements to offer the best solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Building trust through transparency and professionalism.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for perfection in everything we do.",
  },
];


const MissionVisionValues: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#c62931] opacity-[0.06] blur-[120px] pointer-events-none rounded-full" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-20">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Who We Are
          </span>
        </div>
        <h2
          className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Mission, Vision & <span className="text-[#c62931]">Values.</span>
        </h2>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Mission + Vision side by side */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Mission */}
        <motion.div
          {...fadeUp(0.08)}
          className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />
          <span
            className="absolute bottom-6 right-8 text-8xl font-black text-[#111]/[0.03] leading-none select-none"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            01
          </span>

          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60 mb-3">
            Our Mission
          </span>
          <h3
            className="text-4xl lg:text-5xl font-black text-[#111] group-hover:text-[#c62931] leading-[1.0] tracking-tight mb-6 transition-colors duration-300"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Mission.
          </h3>
          <div className="h-px bg-[#111]/[0.07] mb-6" />
          <p className="text-[#111]/55 text-base leading-relaxed">
            We provide fast and quality execution at great value to our
            customers — helping fuel retailers operate efficiently, safely, and
            with full confidence in compliance.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          {...fadeUp(0.14)}
          className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />
          <span
            className="absolute bottom-6 right-8 text-8xl font-black text-[#111]/[0.03] leading-none select-none"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            02
          </span>

          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60 mb-3">
            Our Vision
          </span>
          <h3
            className="text-4xl lg:text-5xl font-black text-[#111] group-hover:text-[#c62931] leading-[1.0] tracking-tight mb-6 transition-colors duration-300"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Vision.
          </h3>
          <div className="h-px bg-[#111]/[0.07] mb-6" />
          <p className="text-[#111]/55 text-base leading-relaxed">
            To be the most trusted and innovative partner in the petroleum
            equipment industry, leading with cutting-edge technology,
            exceptional service, and sustainable practices.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            {...fadeUp(0.1 + i * 0.07)}
            className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

            <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#111]/[0.08] group-hover:border-[#c62931]/30 bg-[#f7f5f2] group-hover:bg-[#c62931]/5 transition-all duration-300 mb-5">
              <Icon className="w-4 h-4 text-[#111]/40 group-hover:text-[#c62931] transition-colors duration-300" />
            </span>

            <h4
              className="text-base font-black text-[#111] group-hover:text-[#c62931] tracking-tight mb-3 transition-colors duration-300"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {title}
            </h4>
            <div className="h-px bg-[#111]/[0.07] mb-3" />
            <p className="text-sm text-[#111]/50 leading-relaxed">
              {description}
            </p>

            <span
              className="absolute bottom-3 right-4 text-5xl font-black text-[#111]/[0.03] leading-none select-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default MissionVisionValues;
