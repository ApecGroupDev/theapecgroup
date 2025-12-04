"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero3: React.FC = () => {
  return (
    <section className="relative bg-gray-200">
      <div
        className="
          max-w-[1440px] mx-auto px-6 py-6
          flex flex-col lg:flex-row items-center justify-between
          gap-12 lg:gap-20
        "
      >
        {/* Left – GIF */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center flex-shrink-0"
        >
          <Image
            src="/logos/One-Stop-Shop.gif"
            alt="One-Stop-Shop Animated Logo"
            unoptimized
            width={800}
            height={800}
            className="
              w-48 md:w-60 lg:w-72 xl:w-80 2xl:w-96
              object-contain
            "
          />
        </motion.div>

        {/* Right – Company Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h2
            className="
              text-[#c62931] font-semibold text-2xl lg:text-3xl xl:text-4xl mb-6
              leading-snug
            "
          >
            Backed by 30+ Years of Experience and Proven Excellence
          </h2>

          <p
            className="
              text-gray-700 text-lg lg:text-xl
              leading-relaxed tracking-wide mb-4
            "
          >
            With an unblemished safety record and decades of industry knowledge,{" "}
            <span className="font-semibold text-gray-900">
              The APEC Group (Atlanta Petroleum Equipment Company Inc)
            </span>{" "}
            has built a reputation as one of Georgia’s most trusted names in
            petroleum equipment and services.
          </p>

          <p
            className="
              text-gray-600 text-base lg:text-lg
              leading-relaxed tracking-wide
            "
          >
            From concept and design to installation and maintenance, we deliver
            reliable, high-performance solutions that help fuel retailers
            operate safely, efficiently, and profitably—every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3;
