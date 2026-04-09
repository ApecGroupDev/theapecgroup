"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const offices = [
  {
    label: "Main Office",
    address: "4732-E North Royal Atlanta Drive",
    city: "Tucker, GA 30084",
    mapHref:
      "https://maps.google.com/?q=4732+N+Royal+Atlanta+Drive+Tucker+GA+30084",
  },
  {
    label: "Branch Office",
    address: "505 Garden Oaks Blvd",
    city: "Houston, TX 77018",
    mapHref: "https://maps.google.com/?q=505+Garden+Oaks+Blvd+Houston+TX+77018",
  },
];

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
    icon: Clock,
    label: "Office Hours",
    value: "Monday–Friday, 9AM–5PM",
    href: null,
  },
];


const OurOffices: React.FC = () => (
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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#c62931] opacity-[0.06] blur-[120px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#c62931]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
            Locations
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our <span className="text-[#c62931]">Offices.</span>
          </h2>
          <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
            Serving clients from our headquarters in Georgia and branch office
            in Texas — ensuring fast response and dedicated local support.
          </p>
        </div>
        <div className="mt-10 h-px bg-[#111]/[0.08]" />
      </motion.div>

      {/* Office cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {offices.map(({ label, address, city, mapHref }, i) => (
          <motion.a
            key={label}
            {...fadeUp(0.1 + i * 0.08)}
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl px-8 py-8 transition-all duration-500 hover:shadow-2xl overflow-hidden"
          >
            {/* Red left-edge reveal */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#111]/[0.08] group-hover:border-[#c62931]/40 bg-[#f7f5f2] group-hover:bg-[#c62931]/5 transition-all duration-300">
                <MapPin className="w-4 h-4 text-[#111]/40 group-hover:text-[#c62931] transition-colors duration-300" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111]/30">
                {label}
              </span>
            </div>

            <p
              className="text-2xl font-black text-[#111] group-hover:text-[#c62931] tracking-tight mb-1 transition-colors duration-300"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {address}
            </p>
            <p className="text-sm text-[#111]/50">{city}</p>

            <div className="mt-6 h-px bg-[#111]/[0.07]" />
            <div className="mt-4 flex items-center justify-between text-[#111]/25 group-hover:text-[#c62931] transition-colors duration-300">
              <span className="text-xs font-bold tracking-widest uppercase">
                View on Maps
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full border border-current group-hover:bg-[#c62931] group-hover:border-[#c62931] transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-white transition-colors duration-300" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contact info cards */}
      <div className="grid sm:grid-cols-3 gap-5">
        {contacts.map(({ icon: Icon, label, value, href }, i) => {
          const inner = (
            <>
              <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#111]/[0.08] group-hover:border-[#c62931]/40 bg-[#f7f5f2] group-hover:bg-[#c62931]/5 transition-all duration-300">
                <Icon className="w-4 h-4 text-[#111]/40 group-hover:text-[#c62931] transition-colors duration-300" />
              </span>
              <div className="flex flex-col mt-4">
                <span className="text-[10px] uppercase tracking-widest text-[#111]/30 mb-1">
                  {label}
                </span>
                <span className="text-sm font-semibold text-[#111]/70 group-hover:text-[#111] transition-colors duration-300">
                  {value}
                </span>
              </div>
            </>
          );

          const cls =
            "group flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-6 py-5 transition-all duration-300 hover:shadow-xl";

          return (
            <motion.div key={label} {...fadeUp(0.2 + i * 0.07)}>
              {href ? (
                <a href={href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Bottom border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
  </section>
);

export default OurOffices;
