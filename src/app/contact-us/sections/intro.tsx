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

const highlights = [
  { label: "Fast, Clear Communication" },
  { label: "Real-World Solutions" },
  { label: "Direct Expert Access" },
];

const scrollToForm = () => {
  const section = document.getElementById("MainContactForm");
  if (section) {
    const y = section.getBoundingClientRect().top + window.scrollY - 180;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const IntroContact: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    {/* Ambient glow */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none rounded-full" />
    {/* Top border */}f
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />
    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        {/* Left — Heading */}
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Contact Us
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            You're in the <span className="text-[#c62931]">Right Place.</span>
          </h1>
          <p className="text-[#111]/50 text-base leading-relaxed mb-10">
            Have a question? Need a quote? Want expert advice on your next fuel
            station or compliance project? Our team is ready to help — no call
            centers, no runaround.
          </p>

          {/* Highlight pills */}
          <div className="flex flex-wrap gap-3">
            {highlights.map(({ label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 border border-[#111]/[0.08] bg-white text-[#111]/60 text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c62931]" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Body text + CTA */}
        <motion.div {...fadeUp(0.15)}>
          <div className="border border-[#111]/[0.08] bg-white rounded-2xl p-8 space-y-5">
            <p className="text-[#111]/60 text-base leading-relaxed">
              At{" "}
              <span className="font-semibold text-[#111]/80">
                The APEC Group
              </span>
              , we make it easy to get the answers and support you need. Whether
              you're planning construction, seeking financing, upgrading fuel
              equipment, or ensuring regulatory compliance — we've got you
              covered.
            </p>
            <div className="h-px bg-[#111]/[0.07]" />
            <p className="text-[#111]/60 text-base leading-relaxed">
              When you reach out, you'll talk directly to{" "}
              <span className="font-semibold text-[#111]/80">
                experienced professionals
              </span>{" "}
              — so you get practical, real-world guidance when you need it most.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,41,49,0.3)]"
              >
                Get in Touch
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default IntroContact;
