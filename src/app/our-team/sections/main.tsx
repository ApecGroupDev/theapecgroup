"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react";
import { fadeUp } from "@/lib/animations";

type TeamMember = {
  name: string;
  title: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Mehboob "Ali" Husain',
    title: "President",
    image: "/placeholders/profile.png",
  },
  {
    name: "Mavis Brown",
    title: "Controller",
    image: "/placeholders/profile.png",
  },
  { name: "Earl Sego", title: "VP of Construction" },
  { name: "Ron Brown", title: "Service Manager" },
  { name: "Dami Ajasa", title: "Operations Manager" },
  { name: "Jorge Salazar", title: "COO Imaging & Canopies" },
  { name: "Walid Bayoumi", title: "Sales Executive" },
  { name: "Rani Sonpari", title: "Customer Care" },
  { name: "Billy Boulware", title: "Asst. Service Manager" },
  { name: "Peggy Hulka", title: "POS Manager" },
  { name: "Michael Henning", title: "Parts Specialist" },
  { name: "Wade LeComte", title: "Commercial Sales Executive" },
];


const TeamPage: React.FC = () => {
  const execs = teamMembers.slice(0, 2);
  const others = teamMembers.slice(2);

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#c62931] opacity-[0.06] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931]/40 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Our People
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Meet a Few of Our <span className="text-[#c62931]">Leaders.</span>
            </h2>
            <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
              100% privately owned and operated — committed to excellence across
              every project.
            </p>
          </div>
          <div className="mt-10 h-px bg-[#111]/[0.08]" />
        </motion.div>

        {/* Top Executives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 max-w-2xl">
          {execs.map((member, i) => (
            <motion.div
              key={member.name}
              {...fadeUp(0.08 + i * 0.08)}
              className="group relative flex flex-col border border-[#111]/[0.08] hover:border-[#c62931]/60 bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              {/* Red left-edge reveal */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out z-10" />

              {/* Image */}
              <div className="relative w-full h-64 bg-[#f7f5f2] overflow-hidden">
                <Image
                  src={member.image || "/placeholders/profile.png"}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c62931]/60 mb-1 block">
                  {member.title}
                </span>
                <h3
                  className="text-xl font-black text-[#111] group-hover:text-[#c62931] tracking-tight transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team divider */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-5">
          <div className="flex-1 h-px bg-[#111]/[0.08]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111]/30">
            Team
          </span>
          <div className="flex-1 h-px bg-[#111]/[0.08]" />
        </motion.div>

        {/* Other Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((member, i) => (
            <motion.div
              key={member.name}
              {...fadeUp(0.05 + (i % 3) * 0.07)}
              className="group relative flex items-center gap-4 border border-[#111]/[0.08] hover:border-[#c62931]/50 bg-white rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Red left-edge reveal */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c62931] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

              {/* Avatar */}
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border border-[#111]/[0.08] group-hover:border-[#c62931]/30 bg-[#f7f5f2] group-hover:bg-[#c62931]/5 transition-all duration-300">
                <HardHat className="w-4 h-4 text-[#111]/30 group-hover:text-[#c62931] transition-colors duration-300" />
              </span>

              {/* Text */}
              <div className="min-w-0 flex flex-col">
                <h3
                  className="text-sm font-black text-[#111] group-hover:text-[#c62931] truncate tracking-tight transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs text-[#111]/40 mt-0.5 tracking-wide uppercase truncate">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  );
};

export default TeamPage;
