"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow — right side to complement the image */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#c62931] opacity-[0.06] blur-[120px] pointer-events-none rounded-full" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c62931]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Building Trust <br /> Since{" "}
              <span className="text-[#c62931]">1989.</span>
            </h2>

            <p className="text-[#111]/40 text-base italic mb-8">
              Where innovation meets integrity — the APEC standard.
            </p>

            {/* Divider */}
            <div className="h-px bg-[#111]/[0.08] mb-8" />

            {/* Body */}
            <div className="space-y-4 mb-10">
              <p className="text-[#111]/60 text-base leading-relaxed">
                Founded as Atlanta Petroleum Equipment Company in 1989, APEC has
                evolved from a small service provider into an industry leader —
                offering full-spectrum petroleum equipment, installation, and
                support services.
              </p>
              <p className="text-[#111]/60 text-base leading-relaxed">
                Our commitment to quality and progress drives us forward. As the
                industry evolves, we stay ahead — combining heritage,
                innovation, and expertise to deliver lasting results you can
                depend on.
              </p>
            </div>

            {/* CTA */}
            <a
              href="mailto:Sales@TheAPECgroup.com"
              className="group inline-flex items-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,41,49,0.3)]"
            >
              Sales@TheAPECgroup.com
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>

          {/* RIGHT — Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col items-center lg:items-end justify-center"
          >
            {/* Primary image */}
            <div className="relative w-full lg:w-[90%] h-[300px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden border border-[#111]/[0.08] shadow-2xl">
              <Image
                src="/home/chevron_canopy.webp"
                alt="APEC Operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay tint for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating secondary image */}
            <div className="relative -mt-20 lg:mt-0 lg:absolute lg:-bottom-8 lg:-left-8 w-[80%] sm:w-[65%] lg:w-[52%] h-[200px] sm:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden border-4 border-[#f7f5f2] shadow-xl">
              <Image
                src="/home/green_pumps.webp"
                alt="APEC Project"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  );
};

export default About;
