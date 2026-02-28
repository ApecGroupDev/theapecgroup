"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const TeamPage: React.FC = () => {
  const execs = teamMembers.slice(0, 2);
  const others = teamMembers.slice(2);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 mt-12 overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft red glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-[#c62931]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-[#c62931] uppercase mb-4">
            Our People
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Meet a Few of Our <br />
            <span className="text-[#c62931]">Leaders</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            100% privately owned and operated — committed to excellence across
            every project.
          </p>
          {/* Divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-[#c62931]" />
            <div className="h-px w-16 bg-gray-200" />
          </div>
        </motion.div>

        {/* Top Executives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14 max-w-2xl mx-auto">
          {execs.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(198,41,49,0.12)] hover:border-[#c62931]/20 transition-all duration-500"
            >
              {/* Red top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c62931] to-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Image */}
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={member.image || "/placeholders/profile.png"}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* Bottom gradient fade into card */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#c62931] uppercase mb-1">
                  {member.title}
                </p>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Team
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        {/* Other Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="group flex items-center gap-4 bg-white border border-gray-100 hover:border-[#c62931]/25 rounded-xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(198,41,49,0.08)] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-[#c62931]/30 transition-colors duration-300">
                <HardHat className="w-5 h-5 text-gray-400 group-hover:text-[#c62931] transition-colors duration-300" />
              </div>
              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs text-red-800 mt-0.5 tracking-wide uppercase truncate">
                  {member.title}
                </p>
              </div>
              {/* Subtle right accent bar */}
              <div className="ml-auto flex-shrink-0 w-1.5 h-6 rounded-full bg-transparent group-hover:bg-[#c62931]/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
