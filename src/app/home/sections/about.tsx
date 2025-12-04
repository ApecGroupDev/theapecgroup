"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-gray-50 to-white z-0" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT CONTENT */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative space-y-8 lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:w-[4px] lg:before:h-full lg:before:bg-[#c62931] lg:before:rounded-full lg:before:-translate-x-6"
        >
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
              Building Trust <br /> Since <span className="text-[#c62931]">1989</span>
            </h2>
            <p className="text-xl italic text-gray-600">
              Where innovation meets integrity — the APEC standard.
            </p>
          </div>

          <div className="text-lg lg:text-xl text-gray-700 leading-relaxed space-y-5 tracking-wide">
            <p>
              Founded as Atlanta Petroleum Equipment Company in 1989, APEC has evolved from a small service provider into an industry leader — offering full-spectrum petroleum equipment, installation, and support services.
            </p>
            <p>
              Our commitment to quality and progress drives us forward. As the industry evolves, we stay ahead — combining heritage, innovation, and expertise to deliver lasting results you can depend on.
            </p>
          </div>

          <div className="pt-6">
            <motion.a
              href="mailto:Sales@TheAPECgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#c62931] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Sales@TheAPECgroup.com
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex flex-col items-center lg:items-end justify-center gap-6"
        >
          {/* Primary Image */}
          <div className="relative w-full lg:w-[90%] h-[300px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/home/chevron_canopy.webp"
              alt="APEC Operations"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Secondary Image */}
          <div className="relative -mt-24 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-10 w-[85%] sm:w-[70%] lg:w-[55%] h-[220px] sm:h-[260px] lg:h-[280px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/home/green_pumps.webp"
              alt="APEC Project"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
