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
    <div className="flex flex-col scrn-mobile:justify-end items-center justify-center text-white scrn-mobile:h-112 md:h-120 scrn-800:h-116 scrn-900:h-128 lg:h-152 xl:h-192 scrn-1500:h-192 scrn-1700:h-208 scrn-1900:h-288 scrn-2k:h-352 overflow-hidden scrn-1900:pt-48 scrn-2k:pb-96">
      <div className="w-auto flex flex-col">
        {/* Top Section: APEC + OUT and WORK */}
        <div className="flex scrn-mobile:gap-2 md:gap-4 scrn-800:gap-4 lg:gap-6 xl:gap-8 scrn-1500:gap-12 scrn-1900:gap-0">
          {/* Left Side (APEC + OUT) */}
          <div className="w-auto flex flex-col flex-1">

            <div className="xl:-space-y-8 xl:mt-14 scrn-1500:space-y-8 scrn-1500:-mt-0 scrn-1700:-space-y-10 scrn-1900:space-y-12 scrn-2k:mt-32">
              {/* APEC + will always (Same Line, Bottom Alignment) */}
              <div className="flex items-center justify-end">
                <span className="scrn-mobile:text-2xl md:text-5xl scrn-800:text-5xl scrn-900:text-5xl lg:text-5xl xl:text-5xl scrn-1500:text-6xl scrn-1700:text-8xl scrn-1900:text-8xl scrn-2k:text-10xl font-semibold">
                  APEC
                </span>
                <span className="scrn-mobile:text-lg md:text-3xl scrn-800:text-3xl scrn-900:text-3xl lg:text-3xl xl:text-3xl scrn-1500:text-3xl scrn-1700:text-5xl scrn-1900:text-5xl scrn-2k:text-7xl font-extralight tracking-widest">
                  will always
                </span>
              </div>

              {/* OUT (Aligned at the Top) */}
              <div className="flex justify-end items-start">
                <span className="scrn-mobile:text-5xl md:text-8xl scrn-800:text-9xl scrn-900:text-9xl lg:text-9xl xl:text-10xl scrn-1500:text-10xl scrn-1700:text-12xl scrn-1900:text-12xl scrn-2k:text-13xl font-semibold italic xl:mt-12 scrn-1500:-mt-10 scrn-1900:-mt-16 scrn-1900:me-6 scrn-2k:me-10">
                  OUT
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (WORK + the competition) */}
          <div className="w-auto flex flex-col items-center relative">
            {/* WORK */}
            <div className="w-full flex items-center justify-center scrn-900:ms-8">
              <span className="text-transparent scrn-mobile:text-6xl md:text-9xl scrn-800:text-9xl scrn-900:text-9xl lg:text-9xl xl:text-11xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl scrn-1900:scale-y-110 font-bold scrn-mobile:mt-4 scrn-900:mt-6 lg:mt-6 xl:mt-24 scrn-1700:mt-32 scrn-1900:mt-6 scrn-2k:mt-80">
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
                    absolute scrn-1900:scale-y-110 font-bold scrn-mobile:mt-4 scrn-900:mt-6 lg:mt-6 xl:mt-6 scrn-1500:-mt-12 scrn-1900:mt-6
                    ${index === 0
                      ? "text-black scrn-mobile:text-6xl md:text-9xl lg:text-9xl scrn-800:text-9xl scrn-900:text-9xl lg:text-10xl xl:text-11xl scrn-1500:text-12xl scrn-1700:text-13xl scrn-1900:text-14xl"
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
            <div className="w-full flex items-center justify-end lg:-mt-2 xl:-mt-16 scrn-1500:-mt-16 scrn-1700:-mt-10 scrn-1900:-mt-4 scrn-1900:ms-32 scrn-2k:-mt-44">
              <span className="scrn-mobile:text-lg md:text-3xl scrn-800:text-3xl scrn-900:text-3xl lg:text-3xl xl:text-4xl scrn-1500:text-4xl scrn-1700:text-5xl scrn-1900:text-5xl scrn-2k:text-7xl tracking-widest">the competition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
