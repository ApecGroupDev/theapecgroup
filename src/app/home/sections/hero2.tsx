"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero2: React.FC = () => {
  const logos = [
    { src: "/logos/Auth_Dis/Auth_Dis_Dover.webp", alt: "Dover" },
    { src: "/logos/Auth_Dis/Auth_Dis_Wayne3.webp", alt: "Wayne" },
    { src: "/logos/Auth_Dis/Auth_Dis_Verifone.webp", alt: "Verifone" },
    { src: "/logos/Auth_Dis/Auth_Dis_OPW.webp", alt: "OPW" },
    { src: "/logos/Auth_Dis/Auth_Dis_Franklin.webp", alt: "Franklin" },
  ];

  return (
    <section className="relative bg-transparent py-16">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Text content */}
        <div className="relative z-30 flex items-center justify-start h-full px-4 scrn-600:px-8 scrn-1000:px-16 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="
            text-gray-900 font-extrabold leading-tight scrn-750:hidden text-center
            text-3xl scrn-500:text-4xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          >
            <span className="text-[#c62931] italic font-extrabold tracking-wide">
              One-Stop-Shop
            </span>{" "}
            for All Your Petroleum Needs — Protecting Your Business, Customers, and Future
          </motion.h1>
        </div>
        {/* Heading */}
        <h2 className="text-4xl scrn-1000:text-5xl font-extrabold text-gray-900 leading-snug pb-8">
          Authorized Distributor <span className="text-[#c62931]">For:</span>
        </h2>

        {/* Logos Row */}
        <div
          className="
            grid grid-cols-2 scrn-700:grid-cols-3 scrn-1000:grid-cols-5
            items-center justify-items-center gap-10 scrn-700:gap-12 scrn-1000:gap-16 w-full
          "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center
                transition-transform duration-300 hover:scale-105
              "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                quality={75}
                className="w-36 scrn-700:w-40 scrn-900:w-44 scrn-1200:w-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
