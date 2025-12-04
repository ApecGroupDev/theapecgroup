"use client";

import React from "react";
import { FaUsers, FaTasks, FaCogs, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "TEAM",
    description:
      "“The truth is that teamwork is at the heart of great achievement.” – John C. Maxwell.",
    icon: <FaUsers />,
  },
  {
    title: "EXECUTION",
    description:
      "“You can’t build a reputation on what you are going to do.” – Henry Ford.",
    icon: <FaTasks />,
  },
  {
    title: "EXPERIENCE",
    description: "“Experience is the teacher of all things.” – Julius Caesar.",
    icon: <FaChartLine />,
  },
  {
    title: "SERVICE",
    description:
      "“Great customer service means honoring the customer.” – Chris LoCurto.",
    icon: <FaCogs />,
  },
];

const FeatureBoxes: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(198,41,49,0.05),transparent_60%)]"></div>

      <div className="max-w-[1440px] mx-auto px-12 sm:px-6 lg:px-24 2xl:px-8 relative z-10">
        {/* Title */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-extrabold text-gray-900 text-4xl tracking-tight">
            WHY CHOOSE <span className="text-[#c62931]">APEC?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Building excellence through teamwork, expertise, and unwavering commitment.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8
          "
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="
                flex flex-col items-center text-center
                bg-white/70 backdrop-blur-sm border border-gray-100
                rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                hover:shadow-[0_12px_32px_rgba(198,41,49,0.15)]
                hover:-translate-y-2
                transition-all duration-500 ease-out
                p-10 min-h-[360px]
              "
            >
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
              <p className="text-gray-600 text-base leading-relaxed max-w-[85%] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
