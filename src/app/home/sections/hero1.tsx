"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero1: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden outline-red-400 outline py-96">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 
        object-[85%_center] 
        scrn-350:object-[84%_center] 
        scrn-400:object-[85%_center] 
        scrn-450:object-[87%_center] 
        scrn-500:object-[86%_center] 
        scrn-550:object-[87%_center]
        scrn-600:object-[92%_center] 
        scrn-650:object-[93%_center]
        scrn-700:object-[95%_center]
        scrn-750:object-[80%_center]"
      >
        <source src="/videos/PumpAnimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent z-20" />

      {/* Text content */}
      <div className="relative z-20 md:flex items-center justify-start h-full px-4 sm:px-8 lg:px-16 hidden">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="
    text-white text-left font-extrabold leading-tight
    text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl
    max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl 2xl:max-w-5xl
    drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]
  "
        >
          <span className="text-[#c62931] italic font-extrabold tracking-wide">
            One-Stop-Shop
          </span>{" "}
          for All Your Petroleum Needs — Protecting Your Business, Customers, and Future
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero1;
