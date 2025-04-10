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
    icon: <FaUsers className="text-4xl scrn-750:text-2xl scrn-1000:text-4xl text-red-600" />,
  },
  {
    title: "EXECUTION",
    description: "“You can’t build a reputation on what you are going to do” – Henry Ford.",
    icon: <FaTasks className="text-4xl scrn-750:text-2xl scrn-1000:text-4xl text-red-600" />,
  },
  {
    title: "CUSTOMER",
    description: "“Get closer than ever to your customers.” – Steve Jobs.",
    icon: <FaHandshake className="text-4xl scrn-750:text-2xl scrn-1000:text-4xl text-red-600" />,
  },
  {
    title: "EXPERIENCE",
    description: "“Experience is the teacher of all things” – Julius Caesar.",
    icon: <FaChartLine className="text-4xl scrn-750:text-2xl scrn-1000:text-4xl text-red-600" />,
  },
  {
    title: "SERVICE",
    description: "“Great customer service means honoring the customer” – Chris LoCurto.",
    icon: <FaCogs className="text-4xl scrn-750:text-2xl scrn-1000:text-4xl text-red-600" />,
  },
];

const FeatureBoxes: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div className="bg-transparent scrn-1000:-top-4
      h-140
      scrn-450:h-140
      scrn-500:h-160
      scrn-600:h-140 
      scrn-750:h-152 
      scrn-800:h-152 
      scrn-900:h-176
      scrn-950:h-180
      scrn-1000:h-176
      scrn-1100:h-184 
      scrn-1150:h-184 
      scrn-1200:h-208
      scrn-1300:h-224
      scrn-1400:h-248 
      scrn-1500:h-256 
      scrn-1600:h-272 
      scrn-1700:h-288 
      scrn-1750:h-304
      scrn-1800:h-308
      scrn-1850:h-308 
      scrn-1900:h-326
      scrn-1950:h-326
      scrn-2000:h-326
      scrn-2050:h-326
      scrn-2100:h-326
      scrn-2150:h-326
      scrn-2200:h-326
      scrn-2250:h-352
      scrn-2300:h-352
      scrn-2350:h-352
      scrn-2400:h-360
      scrn-2450:h-368
      scrn-2500:h-384
      scrn-2550:h-416"
    >
      {/* Section Title */}
      <div className="text-center font-extrabold text-gray-800
          text-5xl 
          scrn-300:text-4xl 
          scrn-750:text-5xl 
          scrn-900:text-5xl 
          scrn-1000:text-5xl
          scrn-1200:text-6xl  
          scrn-1500:text-7xl 
          scrn-1700:text-7xl 
          scrn-1900:text-8xl 
          scrn-2k:text-9xl">
        <motion.p
          ref={ref} // Set the ref to the element
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          WHY CHOOSE
        </motion.p>
        <p className="hidden scrn-750:block scrn-900:hidden scrn-1100:block mb-4">
          <span className="text-red-600"> APEC?</span>
        </p>
        <p className=" scrn-750:hidden scrn-900:block scrn-1100:hidden mb-4">
          <span className="text-white"> APEC?</span>
        </p>
      </div>

      {/* First row: 3 boxes */}
      <div className="flex justify-center flex-wrap 
        gap-4 
        scrn-350:gap-6
        scrn-400:gap-6
        scrn-750:gap-6
        scrn-800:gap-8 
        scrn-900:gap-8 
        scrn-1400:gap-10 
        scrn-1700:gap-24 
        scrn-1900:gap-28 
        scrn-2k:gap-36"
      >
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index} className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 
            w-32
            scrn-350:w-36
            scrn-400:w-36
            scrn-450:w-40
            scrn-500:w-48 
            scrn-600:w-40 
            scrn-750:w-44
            scrn-800:w-48 
            scrn-900:w-44 
            scrn-950:w-48
            scrn-1000:w-60
            scrn-1100:w-64
            scrn-1150:w-72 
            scrn-1250:w-72
            scrn-1300:w-80 
            scrn-1500:w-80
            scrn-1600:w-96 
            scrn-1700:w-108 
            scrn-1900:w-116 
            scrn-2000:w-128"
          >
            <div className="flex flex-col items-center justify-center 
              h-18 
              scrn-350:h-20
              scrn-500:h-28
              scrn-600:h-24 
              scrn-750:h-28 
              scrn-800:h-28 
              scrn-900:h-28 
              scrn-950:h-32
              scrn-1000:h-40 
              scrn-1100:h-44
              scrn-1150:h-48
              scrn-1250:h-48
              scrn-1300:h-52 
              scrn-1400:h-56 
              scrn-1500:h-60
              scrn-1600:h-64 
              scrn-1900:h-72 
              scrn-2000:h-96
            ">
              {feature.icon}
              <h3 className="scrn-300:text-xs scrn-300:font-semibold scrn-750:text-sm scrn-1000:text-xl font-bold text-center mt-4 text-gray-800">
                {feature.title}
              </h3>
            </div>

            {/* Description hover box */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <p className="scrn-300:text-xs scrn-750:text-xs scrn-800:text-xs scrn-900:text-xs scrn-1000:text-sm scrn-1200:text-base scrn-1500:text-xl text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second row: 2 centered boxes */}
      <div className="flex justify-center flex-wrap 
        mt-4
        scrn-350:mt-6
        scrn-1400:mt-10

        gap-4
        scrn-350:gap-6
        scrn-400:gap-6
        scrn-750:gap-6 
        scrn-800:gap-8 
        scrn-900:gap-8 
        scrn-1400:gap-10 
        scrn-1700:gap-24 
        scrn-1900:gap-28 
        scrn-2000:gap-36"
      >
        {features.slice(3).map((feature, index) => (
          <div
            key={index} className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 
            w-32
            scrn-350:w-36
            scrn-400:w-36
            scrn-450:w-40 
            scrn-500:w-48
            scrn-600:w-40 
            scrn-750:w-44 
            scrn-800:w-48 
            scrn-900:w-44 
            scrn-950:w-48
            scrn-1000:w-60 
            scrn-1100:w-64
            scrn-1150:w-72
            scrn-1250:w-72 
            scrn-1300:w-80
            scrn-1500:w-80 
            scrn-1600:w-96 
            scrn-1700:w-108 
            scrn-1900:w-116 
            scrn-2000:w-128"
          >
            <div className="flex flex-col items-center justify-center 
              h-18
              scrn-400:h-20 
              scrn-500:h-28
              scrn-600:h-24 
              scrn-750:h-28 
              scrn-800:h-28 
              scrn-900:h-28 
              scrn-950:h-32
              scrn-1000:h-40 
              scrn-1100:h-44
              scrn-1150:h-48
              scrn-1250:h-48 
              scrn-1300:h-52
              scrn-1400:h-56
              scrn-1500:h-60 
              scrn-1600:h-64 
              scrn-1900:h-72 
              scrn-2000:h-96"
            >
              {feature.icon}
              <h3 className="scrn-300:text-xs scrn-300:font-semibold scrn-750:text-sm scrn-1000:text-xl font-bold text-center mt-4 text-gray-800">
                {feature.title}
              </h3>
            </div>

            {/* Description hover box */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <p className="scrn-300:text-xs scrn-750:text-xs scrn-800:text-xs scrn-900:text-xs scrn-1000:text-sm scrn-1200:text-base scrn-1500:text-xl text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeatureBoxes;
