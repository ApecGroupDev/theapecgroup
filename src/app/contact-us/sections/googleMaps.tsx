"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const GoogleMaps: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[#f7f5f2] py-32">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: `radial-gradient(circle, #c6293120 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Find Us
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Visit Our <span className="text-[#c62931]">Office.</span>
          </h2>
          <a
            href="https://maps.google.com/?q=Atlanta+Petroleum+Equipment+Co+Tucker+GA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#111]/40 hover:text-[#c62931] font-semibold transition-colors duration-200"
          >
            <MapPin className="w-4 h-4" />
            4732-E North Royal Atlanta Drive, Tucker, GA 30084
          </a>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-[#111]/[0.08] shadow-2xl"
      >
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5625.444795644097!2d-84.19747312274932!3d33.86014347322978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a60d37eeaeb9%3A0x378e67f08f914808!2sAtlanta%20Petroleum%20Equipment%20Co!5e1!3m2!1sen!2sph!4v1752174129484!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default GoogleMaps;
