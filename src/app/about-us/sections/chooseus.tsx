"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const ChooseUs: React.FC = () => (
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
      {/* Eyebrow */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Why APEC
          </span>
        </div>
        <h2
          className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Why <span className="text-[#c62931]">Choose Us.</span>
        </h2>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-end">
        <div className="space-y-6">
          <motion.p
            {...fadeUp(0.1)}
            className="text-[#111]/60 text-base leading-relaxed"
          >
            Today,{" "}
            <span className="font-semibold text-[#111]/80">APEC Group</span>{" "}
            offers a diverse range of services — from canopy imaging and
            installation to environmental compliance inspections, C-store
            renovations, EV charging solutions, remote site monitoring, and
            digital marketing for dispensaries.
          </motion.p>

          <motion.p
            {...fadeUp(0.18)}
            className="text-[#111]/60 text-base leading-relaxed"
          >
            With offices in{" "}
            <span className="font-semibold text-[#111]/80">
              Atlanta, Georgia
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#111]/80">Houston, Texas</span>
            , we proudly serve clients nationwide — delivering results backed by
            decades of expertise and a commitment to excellence.
          </motion.p>
        </div>

        <motion.div {...fadeUp(0.22)} className="flex flex-col gap-6">
          <p
            className="text-3xl lg:text-4xl font-black text-[#111] leading-[1.2] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Let’s build success together.{" "}
            <span className="text-[#c62931]">
              What can we do for you today?
            </span>
          </p>

          <a
            href="mailto:Sales@TheAPECgroup.com"
            className="group self-start inline-flex items-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,41,49,0.3)]"
          >
            Sales@TheAPECgroup.com
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default ChooseUs;
