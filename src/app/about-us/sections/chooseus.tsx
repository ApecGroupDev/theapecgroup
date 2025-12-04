'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,41,49,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Heading */}
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900"
        >
          Why <span className="text-[#c62931]">Choose Us</span>
        </motion.h2>

        {/* Divider Line */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-24 h-[4px] bg-[#c62931] rounded-full mt-6"
        />

        {/* Content */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 space-y-8 text-gray-700 font-light leading-relaxed tracking-wide text-base scrn-450:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl max-w-[950px]"
        >
          <p>
            Today, <span className="font-semibold text-gray-900">APEC Group</span> offers a diverse range of services — from canopy imaging and installation to environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring, and digital marketing for dispensaries.
          </p>

          <p>
            With offices in <span className="font-semibold text-gray-900">Atlanta, Georgia</span> and <span className="font-semibold text-gray-900">Houston, Texas</span>, we proudly serve clients nationwide — delivering results backed by decades of expertise and a commitment to excellence.
          </p>

          <p className="text-gray-800 font-medium">
            Let’s build success together.<br />
            <span className="text-[#c62931] font-semibold">What can we do for you today?</span>
          </p>
        </motion.div>

        {/* Contact Button */}
        <motion.a
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          href="mailto:Sales@TheAPECgroup.com"
          className="mt-10 inline-block bg-[#c62931] text-white font-semibold tracking-wide px-12 py-4 rounded-full shadow-md hover:shadow-xl hover:bg-red-600 transition-all duration-300 text-base md:text-lg lg:text-xl"
        >
          Sales@TheAPECgroup.com
        </motion.a>
      </div>
    </section>
  );
};

export default ChooseUs;
