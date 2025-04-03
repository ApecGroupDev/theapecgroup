"use client";

import React from "react";
import { FaUsers, FaTasks, FaHandshake, FaCogs, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeatureBox {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureBox[] = [
  {
    title: "TEAM",
    description: "“The truth is that teamwork is at the heart of great achievement” – John C. Maxwell.",
    icon: <FaUsers className="text-4xl md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "EXECUTION",
    description: "“You can’t build a reputation on what you are going to do” – Henry Ford.",
    icon: <FaTasks className="text-4xl md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "CUSTOMER",
    description: "“Get closer than ever to your customers.” – Steve Jobs.",
    icon: <FaHandshake className="text-4xl md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "EXPERIENCE",
    description: "“Experience is the teacher of all things” – Julius Caesar.",
    icon: <FaChartLine className="text-4xl md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "SERVICE",
    description: "“Great customer service means honoring the customer” – Chris LoCurto.",
    icon: <FaCogs className="text-4xl md:text-2xl lg:text-4xl text-red-600" />,
  },
];

const FeatureBoxes: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div className="bg-transparent scrn-300:px-2 scrn-mobile:px-3 sm:px-20 
      scrn-300:h-120 
      scrn-mobile:h-128 
      sm:h-140 
      md:px-24 md:h-128 
      scrn-800:px-28 scrn-800:h-132 
      scrn-900:px-36 scrn-900:h-144 
      lg:-top-4 lg:px-28 lg:h-176 
      scrn-1150:h-184 
      scrn-1200:h-192 
      xl:px-40 xl:h-198 
      scrn-1300:h-224
      scrn-1350:h-240
      scrn-1400:h-244
      scrn-1450:h-248
      scrn-1500:px-52 scrn-1500:h-256 
      scrn-1650:h-272
      scrn-1700:px-48 scrn-1700:h-288 
      scrn-1750:h-304
      scrn-1800:h-308
      scrn-1850:h-308
      scrn-1900:px-40 scrn-1900:h-304 
      scrn-1901:h-320
      scrn-1950:h-326
      scrn-2k:px-72 scrn-2k:h-416
      scrn-2000:h-326
      scrn-2050:h-326
      scrn-2100:h-326
      scrn-2150:h-326
      scrn-2200:h-326"
    >
      {/* Section Title */}
      <div className="text-center">
        <motion.p
          ref={ref} // Set the ref to the element
          className="text-5xl scrn-300:text-4xl md:text-5xl scrn-900:text-5xl lg:text-5xl xl:text-6xl scrn-1500:text-7xl scrn-1700:text-7xl scrn-1900:text-8xl scrn-2k:text-9xl font-extrabold text-gray-800"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          WHY CHOOSE
        </motion.p>
        <p className="hidden sm:block text-5xl  md:text-5xl scrn-900:text-5xl lg:text-5xl xl:text-6xl scrn-1500:text-7xl scrn-1700:text-7xl scrn-1900:text-8xl scrn-2k:text-9xl font-extrabold text-gray-800 mb-4">
          <span className="text-red-600"> APEC?</span>
        </p>
        <p className="hidden scrn-300:block scrn-300:text-4xl scrn-mobile:block text-5xl md:text-5xl scrn-900:text-5xl lg:text-5xl xl:text-6xl scrn-1500:text-7xl scrn-1700:text-7xl scrn-1900:text-8xl scrn-2k:text-9xl font-extrabold text-gray-800 mb-4">
          <span className="text-white"> APEC?</span>
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-3 scrn-300:gap-y-2 scrn-mobile:gap-y-2 sm:gap-y-6 md:gap-y-8 scrn-800:gap-y-6 scrn-900:gap-y-6 lg:gap-y-10 xl:gap-y-12 scrn-1500:gap-y-14 scrn-1700:mt-12 scrn-1700:gap-y-20 scrn-1900:mt-12 scrn-1900:gap-y-24 scrn-2k:gap-y-28">
        {/* First Row: 3 Boxes */}
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="relative mx-auto group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all scrn-300:w-28 scrn-mobile:w-32 sm:w-36 md:w-36 scrn-800:w-40 scrn-900:w-44 lg:w-52 xl:w-64 scrn-1500:w-72 scrn-1700:w-108 scrn-1900:w-116 scrn-2k:w-128 duration-500"
          >
            <div className="flex flex-col items-center justify-center scrn-300:h-16 scrn-mobile:h-20 sm:h-24 md:h-20 scrn-800:h-24 scrn-900:h-28 lg:h-32 xl:h-44 scrn-1500:h-56 scrn-1700:h-64 scrn-1900:h-72 scrn-2k:h-96">
              {feature.icon}
              <h3 className="scrn-300:text-xs scrn-300:font-semibold md:text-sm lg:text-xl scrn-1900:text-2xl font-bold text-center mt-4 text-gray-800">{feature.title}</h3>
            </div>

            {/* Description (Hidden by default, revealed on hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <p className="scrn-300:text-xs md:text-xs scrn-800:text-xs scrn-900:text-xs lg:text-sm xl:text-base text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* Second Row: 2 Boxes (Centered) */}
        <div className="flex flex-wrap justify-center col-span-3 gap-6 scrn-300:gap-2 scrn-mobile:gap-2 md:gap-12 scrn-800:gap-8 scrn-900:gap-8 scrn-1500:gap-20 scrn-1700:gap-24 scrn-1900:gap-28 scrn-2k:gap-36">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 scrn-300:w-28 scrn-mobile:w-32 sm:w-36 md:w-36 scrn-800:w-40 scrn-900:w-44 lg:w-52 xl:w-64 scrn-1500:w-72 scrn-1700:w-108 scrn-1900:w-116 scrn-2k:w-128"
            >
              <div className="flex flex-col items-center justify-center scrn-300:h-16 scrn-mobile:h-20 sm:h-24 md:h-20 scrn-800:h-24 scrn-900:h-28 lg:h-32 xl:h-44 scrn-1500:h-56 scrn-1700:h-64 scrn-1900:h-72 scrn-2k:h-96">
                {feature.icon}
                <h3 className="scrn-300:text-xs scrn-300:font-semibold md:text-sm lg:text-xl xl:text-2xl font-bold text-center mt-4 text-gray-800">{feature.title}</h3>
              </div>

              {/* Description (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                <p className="scrn-300:text-xs md:text-xs scrn-800:text-xs scrn-900:text-xs lg:text-sm xl:text-base text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                  {feature.description}
                </p>
              </div>

              {/* Test push for correcting git push */}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBoxes;
