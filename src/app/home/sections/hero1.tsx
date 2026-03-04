"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "1989", label: "Founded" },
  { value: "30+", label: "Years Experience" },
  { value: "6", label: "Core Services" },
];

const Hero1: React.FC = () => (
  <>
    {/* ── HERO VIDEO SECTION ───────────────────────────────────────────── */}
    <section className="relative w-full h-screen overflow-hidden hidden md:block">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10
          object-[85%_center]
          scrn-350:object-[84%_center]
          scrn-400:object-[85%_center]
          scrn-450:object-[87%_center]
          scrn-500:object-[86%_center]
          scrn-550:object-[87%_center]
          scrn-600:object-[92%_center]
          scrn-650:object-[85%_center]
          scrn-700:object-[90%_center]"
      >
        <source src="/videos/PumpAnimation.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 z-20" />

      {/* Desktop text — hidden on mobile */}
      <div className="relative z-30 hidden md:flex flex-col justify-center h-full px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/80">
            Since 1989 · Atlanta Petroleum Equipment Company
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black leading-[1.0] tracking-tight
            text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
            max-w-xs md:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl mb-6"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Your{" "}
          <span
            className="text-[#ff464f]"
            style={{
              textShadow:
                "0 0 40px rgba(198,41,49,0.6), 0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            One-Stop Shop
          </span>
          <br />
          for Petroleum Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xs md:max-w-sm lg:max-w-md mb-10"
        >
          Protecting your business, customers, and future — from construction
          and compliance to financing and electrical, all under one trusted
          roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,41,49,0.5)]"
          >
            Get a Free Consultation
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-300"
          >
            Explore Services
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-px mt-14"
        >
          {stats.map((stat, i, arr) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col px-6 first:pl-0">
                <span
                  className="text-2xl font-black text-white tracking-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/75 mt-0.5">
                  {stat.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-8 bg-white/15 mx-2" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── MOBILE TEXT SECTION — visible only below md ──────────────────── */}
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-44 md:hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#c62931] opacity-20 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931] to-transparent" />

      <div className="relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40">
            Since 1989 · APEC Group
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black leading-[1.05] tracking-tight text-4xl mb-5"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Your <span className="text-[#c62931]">One-Stop Shop</span>
          <br />
          for Petroleum Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-sm leading-relaxed mb-8"
        >
          Protecting your business, customers, and future — from construction
          and compliance to financing and electrical, all under one trusted
          roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 mb-10"
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-7 py-4 rounded-full transition-all duration-300"
          >
            Get a Free Consultation
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/25 text-sm font-semibold tracking-wide px-7 py-4 rounded-full transition-all duration-300"
          >
            Explore Services
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <span
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {stat.value}
              </span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-white/30 mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  </>
);

export default Hero1;
