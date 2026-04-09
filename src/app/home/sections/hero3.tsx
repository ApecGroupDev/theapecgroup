"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";


const stats = [
  { value: "1989", label: "Founded" },
  { value: "30+", label: "Years Experience" },
  { value: "6", label: "Core Services" },
];

const Hero3: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2]">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Ambient glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#c62931] opacity-[0.06] blur-[100px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left — GIF */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex items-center justify-center w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl border border-[#111]/[0.08] bg-white shadow-xl overflow-hidden"
        >
          <Image
            src="/logos/One-Stop-Shop.gif"
            alt="One-Stop-Shop Animated Logo"
            unoptimized
            width={800}
            height={800}
            className="w-4/5 h-4/5 object-contain"
          />
        </motion.div>

        {/* Right — Text */}
        <div className="flex flex-col max-w-2xl text-center lg:text-left">
          {/* Eyebrow */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex items-center gap-2 mb-5 justify-center lg:justify-start"
          >
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Our Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.15)}
            className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#111] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Backed by <span className="text-[#c62931]">30+ Years</span> of
            Proven Excellence.
          </motion.h2>

          {/* Body */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-[#111]/50 leading-relaxed mb-4"
          >
            With an unblemished safety record and decades of industry knowledge,{" "}
            <span className="font-semibold apec-red">
              The APEC Group (Atlanta Petroleum Equipment Company Inc)
            </span>{" "}
            has built a reputation as one of Georgia&apos;s most trusted names in
            petroleum equipment and services.
          </motion.p>

          <motion.p
            {...fadeUp(0.25)}
            className="text-[#111]/40 leading-relaxed mb-10"
          >
            From concept and design to installation and maintenance, we deliver
            reliable, high-performance solutions that help fuel retailers
            operate safely, efficiently, and profitably — every time.
          </motion.p>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex items-center justify-center lg:justify-start gap-px"
          >
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col items-center lg:items-start px-6 first:pl-0">
                  <span
                    className="text-3xl font-black text-[#111] tracking-tight"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#111]/35 mt-0.5">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-[#111]/[0.1] mx-2" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default Hero3;
