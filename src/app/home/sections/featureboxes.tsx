"use client";

import React from "react";
import { FaUsers, FaTasks, FaMedal, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Change 7: Moved fadeUp outside the component to avoid re-creation on every render
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Change 5: Split quote and author into separate fields for cleaner rendering
// ✅ Change 1: Fixed icon-title mismatches (Experience → FaMedal, Service → FaHandshake)
const features = [
  {
    title: "TEAM",
    quote: "Teamwork is at the heart of great achievement.",
    author: "John C. Maxwell",
    icon: <FaUsers />,
  },
  {
    title: "EXECUTION",
    quote: "You can't build a reputation on what you are going to do.",
    author: "Henry Ford",
    icon: <FaTasks />,
  },
  {
    title: "EXPERIENCE",
    quote: "Experience is the teacher of all things.",
    author: "Julius Caesar",
    icon: <FaMedal />,
  },
  {
    title: "SERVICE",
    quote: "Great customer service means honoring the customer.",
    author: "Chris LoCurto",
    icon: <FaHandshake />,
  },
];

const FeatureBoxes: React.FC = () => {
  // ✅ Change 2: Lowered threshold to 0.1 so animation triggers more reliably
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    // ✅ Change 8: Added aria-labelledby pointing to the h2 for accessibility
    <section
      aria-labelledby="features-heading"
      className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(198,41,49,0.05),transparent_60%)]" />

      {/* ✅ Change 3: Fixed inconsistent padding progression */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* ✅ Change 8: Added id for aria-labelledby */}
          <h2
            id="features-heading"
            className="font-extrabold text-gray-900 text-4xl tracking-tight"
          >
            WHY CHOOSE <span className="text-[#c62931]">APEC?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Building excellence through teamwork, expertise, and unwavering
            commitment.
          </p>
        </motion.div>

        {/* ✅ Change 2: Moved ref to the grid so inView triggers when cards are visible */}
        {/* ✅ Change 4: Changed to lg:grid-cols-4 to avoid skipping breakpoint */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="
                flex flex-col items-center text-center justify-between
                bg-white/70 backdrop-blur-sm border border-gray-100
                rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                hover:shadow-[0_12px_32px_rgba(198,41,49,0.15)]
                hover:-translate-y-2
                transition-all duration-500 ease-out
                p-10 min-h-[360px]
              "
            >
              {/* Top content group */}
              <div className="flex flex-col items-center">
                <div
                  className="
                    flex items-center justify-center
                    w-20 h-20 mb-6 rounded-full
                    bg-[#c62931]/10 text-[#c62931] text-5xl
                  "
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 tracking-wide">
                  {feature.title}
                </h3>
                {/* ✅ Change 5: Quote and author rendered separately for better polish */}
                <p className="text-gray-600 text-base leading-relaxed max-w-[85%] mx-auto italic">
                  "{feature.quote}"
                </p>
              </div>

              {/* ✅ Change 5: Author styled distinctly at the bottom */}
              <p className="text-sm text-gray-400 font-medium mt-4">
                — {feature.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
