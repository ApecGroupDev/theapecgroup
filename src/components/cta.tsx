"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#c62931] to-[#921c23] text-white py-12 my-20 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Ready to Build or Grow Your Gas Station Business?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/90 max-w-2xl mx-auto mb-10"
        >
          Let’s discuss how APEC can help you design, construct, and maintain your fueling business with confidence.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-14"
        >
          <a
            href="/contact-us"
            className="inline-block bg-white text-[#c62931] font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-[#f9f9f9] hover:scale-105 transition-all duration-300"
          >
            Get a Free Consultation
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-8 text-white/90"
        >
          {[
            {
              icon: <Phone className="w-5 h-5 text-white" />,
              label: "Call Us",
              value: "855-444-2732",
              href: "tel:8554442732",
            },
            {
              icon: <Mail className="w-5 h-5 text-white" />,
              label: "Email Us",
              value: "Sales@TheAPECgroup.com",
              href: "mailto:Sales@TheAPECgroup.com",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-full backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-wide text-white/70">{item.label}</span>
                <span className="font-semibold text-white group-hover:text-white">{item.value}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
