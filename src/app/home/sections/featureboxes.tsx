"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, CheckSquare, Medal, Handshake } from "lucide-react";

const features = [
  {
    title: "Team",
    quote: "Teamwork is at the heart of great achievement.",
    author: "John C. Maxwell",
    icon: Users,
  },
  {
    title: "Execution",
    quote: "You can't build a reputation on what you are going to do.",
    author: "Henry Ford",
    icon: CheckSquare,
  },
  {
    title: "Experience",
    quote: "Experience is the teacher of all things.",
    author: "Julius Caesar",
    icon: Medal,
  },
  {
    title: "Service",
    quote: "Great customer service means honoring the customer.",
    author: "Chris LoCurto",
    icon: Handshake,
  },
];

const FeatureBoxes: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      aria-labelledby="features-heading"
      className="relative w-full overflow-hidden bg-[#f7f5f2] py-32"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#c62931] opacity-[0.06] blur-[120px] pointer-events-none rounded-full" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Our Values
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              id="features-heading"
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Choose <span className="text-[#c62931]">APEC?</span>
            </h2>
            <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
              Building excellence through teamwork, expertise, and unwavering
              commitment to every project we take on.
            </p>
          </div>
          <div className="mt-10 h-px bg-[#111]/[0.08]" />
        </motion.div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(({ title, quote, author, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl p-7"
            >
              {/* Red left-edge reveal */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-[#111]/[0.08] group-hover:border-[#c62931]/30 bg-[#f7f5f2] group-hover:bg-[#c62931]/5 transition-all duration-300 mb-6">
                <Icon className="w-5 h-5 text-[#111]/40 group-hover:text-[#c62931] transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-black text-[#111] group-hover:text-[#c62931] mb-4 tracking-tight transition-colors duration-300"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {title}
              </h3>

              {/* Quote */}
              <p className="text-sm text-[#111]/50 leading-relaxed italic flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="mt-5 mb-4 h-px bg-[#111]/[0.07]" />

              {/* Author */}
              <p className="text-xs font-bold tracking-widest uppercase text-[#c62931]/60">
                — {author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  );
};

export default FeatureBoxes;
