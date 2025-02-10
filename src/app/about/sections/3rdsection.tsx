'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["WORK", "SMART", "MANEUVER"];

const ThirdSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="w-auto flex flex-col">
        {/* Top Section: APEC + OUT and WORK */}
        <div className="flex lg:gap-6 xl:gap-8 mac-14:gap-12 2xl:gap-0">
          {/* Left Side (APEC + OUT) */}
          <div className="w-auto flex flex-col flex-1">
            <div className="xl:-space-y-8 xl:mt-14 mac-14:space-y-8 mac-14:-mt-0 mac-16:space-y-12 2xl:space-y-12 2k:mt-32">
              {/* APEC + will always (Same Line, Bottom Alignment) */}
              <div className="flex items-center justify-end">
                <span className="lg:text-5xl xl:text-5xl mac-14:text-6xl 2xl:text-8xl 2k:text-10xl font-semibold">APEC</span>
                <span className="lg:text-3xl xl:text-3xl mac-14:text-3xl 2xl:text-5xl 2k:text-7xl font-extralight tracking-widest">
                  will always
                </span>
              </div>

              {/* OUT (Aligned at the Top) */}
              <div className="flex justify-end items-start">
                <span className="lg:text-9xl xl:text-10xl mac-14:text-10xl 2xl:text-12xl 2k:text-13xl font-semibold italic xl:mt-12 mac-14:-mt-10 2xl:-mt-16 2xl:me-6 2k:me-10">
                  OUT
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (WORK + the competition) */}
          <div className="w-auto flex flex-col items-center relative">
            {/* WORK */}
            <div className="w-full flex items-center justify-center">
              <span className="lg:text-10xl xl:text-11xl mac-14:text-12xl 2xl:text-14xl 2xl:scale-y-110 font-bold lg:-mt-6 xl:mt-6 mac-14:-mt-12 2xl:mt-6 2k:mt-80 text-transparent">
                WORK
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`
                    absolute 2xl:scale-y-110 font-bold lg:-mt-6 xl:mt-6 mac-14:-mt-12 2xl:mt-6
                    ${index === 0
                      ? "text-black lg:text-10xl xl:text-11xl mac-14:text-12xl 2xl:text-14xl"
                      : index === 1
                        ? "text-transparent text-smart-animation" 
                        : "text-white text-[10rem] tracking-tight text-maneuver-animation" 
                    }
                  `}
                >
                  {words[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* the competition (Directly Below WORK) */}
            <div className="w-full flex items-center justify-end lg:-mt-12 xl:-mt-16 mac-14:-mt-16 2xl:-mt-24 2xl:ms-32 2k:-mt-60">
              <span className="lg:text-3xl xl:text-4xl mac-14:text-4xl 2xl:text-5xl 2k:text-7xl tracking-widest">the competition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
