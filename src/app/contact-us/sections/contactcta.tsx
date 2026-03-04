"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const contacts = [
  {
    icon: Phone,
    label: "Call Us",
    value: "855-444-2732",
    href: "tel:8554442732",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "Sales@TheAPECgroup.com",
    href: "mailto:Sales@TheAPECgroup.com",
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "Within one business day",
    href: null,
  },
] as const;

const ContactCTA: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-32">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Glows */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#c62931] opacity-20 blur-[120px] pointer-events-none" />
    <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#c62931] opacity-10 blur-[100px] pointer-events-none" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931] to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40">
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Let's Start the{" "}
            <span className="text-[#c62931]">Conversation.</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-white/50 text-base leading-relaxed max-w-md mb-10"
          >
            Ready to grow your petroleum business? Let's discuss how APEC can
            help you build, maintain, and scale with confidence.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <a
              href="#MainContactForm"
              className="group inline-flex items-center gap-3 bg-[#c62931] hover:bg-[#a8232a] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,41,49,0.4)]"
            >
              Contact Our Team
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right — Contact cards */}
        <motion.div {...fadeUp(0.15)} className="flex flex-col gap-4">
          {contacts.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-[#c62931]/40 bg-white/5 group-hover:bg-[#c62931]/10 transition-all duration-300">
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-[#c62931] transition-colors duration-300" />
                </span>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                    {value}
                  </span>
                </div>
                {href && (
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#c62931] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </>
            );

            const cls =
              "group flex items-center gap-4 border border-white/[0.07] hover:border-[#c62931]/40 bg-white/[0.02] hover:bg-[#c62931]/5 rounded-2xl px-5 py-4 transition-all duration-300";

            return href ? (
              <a key={label} href={href} className={cls}>
                {inner}
              </a>
            ) : (
              <div key={label} className={cls}>
                {inner}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </section>
);

export default ContactCTA;
