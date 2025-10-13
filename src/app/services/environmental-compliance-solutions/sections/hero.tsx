'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const section = document.getElementById('ComplianceContactForm');
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/services/compliance/Hero_Compliance.webp"
          alt="Custom Canopy Imaging for Gas Stations"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Brand-toned overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[rgba(198,41,49,0.2)] mix-blend-multiply"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col scrn-1000:flex-row items-center justify-between px-6 pt-32 pb-20 scrn-1000:pt-48 scrn-1000:pb-32 scrn-2000:pt-72 scrn-2000:pb-60">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center scrn-1000:text-left max-w-3xl"
        >
          <h1 className="text-4xl scrn-500:text-5xl scrn-900:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Environmental Compliance Solutions That Protect Your Business and the Environment
          </h1>

          <div className="mt-6 h-[4px] w-24 bg-[#c62931] mx-auto scrn-1000:mx-0 rounded-full"></div>

          <p className="mt-8 text-gray-200 text-lg scrn-700:text-xl font-light max-w-md mx-auto scrn-1000:mx-0 leading-relaxed">
            30+ years of experience keeping petroleum businesses compliant across
            Georgia — trusted by fuel retailers, distributors, and fleet operators.
          </p>

          <div className="mt-10 flex justify-center scrn-1000:justify-start">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-10 py-4 bg-[#c62931] text-white font-semibold rounded-full shadow-md hover:bg-[#a91f27] transition-all duration-300"
            >
              GET QUOTE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

