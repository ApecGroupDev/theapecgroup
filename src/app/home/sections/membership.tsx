"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { associations } from "../components/associations";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const MembershipGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#f7f5f2] py-24"
    >
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#c62931]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c62931]/60">
              Industry Memberships
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-black text-[#111] leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Proud <span className="text-[#c62931]">Member Of:</span>
            </h2>
            <p className="text-[#111]/40 text-base max-w-md leading-relaxed lg:text-right">
              Our associations reflect our dedication to quality, collaboration,
              and industry leadership.
            </p>
          </div>
          <div className="mt-10 h-px bg-[#111]/[0.08]" />
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10"
        >
          {associations.map((assoc) => (
            <motion.div key={assoc.alt} variants={itemVariants}>
              <Link
                href={assoc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-110"
              >
                <Image
                  src={assoc.src}
                  alt={assoc.alt}
                  width={230}
                  height={230}
                  className="object-contain w-[130px] sm:w-[160px] md:w-[190px] lg:w-[210px]"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#111]/10 to-transparent" />
    </section>
  );
};

export default MembershipGrid;
