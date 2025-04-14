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
    <div className="flex flex-col items-center justify-center text-white overflow-hidden 
      scrn-600:pt-32
      scrn-700:pt-20
      scrn-1100:pt-0
      scrn-1500:pt-40
      scrn-1600:pt-0
      scrn-1900:pt-48 
      scrn-2550:pb-96

      h-116
      scrn-400:h-110 
      scrn-600:h-120 
      scrn-700:h-120 
      scrn-800:h-128 
      scrn-900:h-128
      scrn-950:h-132 
      scrn-1000:h-152
      scrn-1100:h-172 
      scrn-1200:h-180
      scrn-1300:h-188
      scrn-1400:h-195
      scrn-1450:h-208
      scrn-1500:h-224
      scrn-1600:h-232
      scrn-1700:h-208 
      scrn-1900:h-288 
      scrn-2550:h-352"
    >
      <div className="w-auto flex flex-col">
        {/* Top Section: APEC + OUT and WORK */}
        <div className="flex scrn-300:gap-4 scrn-450:gap-2 scrn-500:gap-3 scrn-600:gap-4 scrn-700:gap-6 scrn-800:gap-8 scrn-900:gap-12 scrn-1000:gap-12 scrn-1300:gap-8 scrn-1500:gap-12 scrn-1900:gap-0">
          {/* Left Side (APEC + OUT) */}
          <div className="w-auto flex flex-col flex-1">

            <div className="scrn-1500:space-y-8 scrn-1500:-mt-0 scrn-1700:-space-y-10 scrn-1900:space-y-12 scrn-2550:mt-32">
              {/* APEC + will always (Same Line, Bottom Alignment) */}
              <div className="flex items-center justify-end">
                <span className="font-semibold
                  text-xl 
                  scrn-450:text-2xl
                  scrn-500:text-3xl 
                  scrn-600:text-4xl 
                  scrn-700:text-5xl 
                  scrn-800:text-5xl 
                  scrn-900:text-5xl 
                  scrn-1000:text-6xl
                  scrn-1300:text-7xl 
                  scrn-1500:text-8xl 
                  scrn-1700:text-8xl 
                  scrn-1900:text-8xl 
                  scrn-2550:text-10xl"
                >
                  APEC
                </span>
                <span className="font-extralight tracking-widest
                  text-base
                  scrn-450:text-lg
                  scrn-500:text-2xl 
                  scrn-600:text-2xl 
                  scrn-700:text-3xl 
                  scrn-800:text-3xl 
                  scrn-900:text-3xl 
                  scrn-1000:text-3xl
                  scrn-1300:text-4xl  
                  scrn-1500:text-5xl 
                  scrn-1700:text-5xl 
                  scrn-1900:text-5xl 
                  scrn-2550:text-7xl"
                >
                  will always
                </span>
              </div>

              {/* OUT (Aligned at the Top) */}
              <div className="flex justify-end items-start">
                <span className="font-semibold italic
                text-4xl 
                scrn-450:text-5xl 
                scrn-600:text-7xl 
                scrn-700:text-8xl 
                scrn-800:text-8xl 
                scrn-900:text-9xl 
                scrn-1000:text-9xl  
                scrn-1300:text-10xl
                scrn-1500:text-11xl 
                scrn-1700:text-12xl 
                scrn-1900:text-12xl 
                scrn-2550:text-13xl 
 
                scrn-1500:-mt-10 
                scrn-1900:-mt-16 
                scrn-1900:me-6 
                scrn-2550:me-10">
                  OUT
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (WORK + the competition) */}
          <div className="w-auto flex flex-col items-center relative">
            {/* WORK */}
            <div className="w-full flex items-center justify-center scrn-900:ms-8">
              <span className="text-transparent font-bold scrn-1900:scale-y-110
                mt-7
                scrn-450:mt-4 
                scrn-600:mt-6
                scrn-700:mt-12
                scrn-800:mt-12
                scrn-900:mt-16 
                scrn-1000:mt-24
                scrn-1300:mt-32 
                scrn-1700:mt-32 
                scrn-1900:mt-6 
                scrn-2550:mt-80">
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
                  mt-7
                  scrn-400:mt-4
                  scrn-450:mt-4 
                  scrn-600:mt-6
                  scrn-700:mt-12
                  scrn-800:mt-12
                  scrn-900:mt-10 
                  scrn-1000:mt-12
                  scrn-1300:mt-10 scrn-1300:ms-28 
                  scrn-1700:mt-32 
                  scrn-1900:mt-6 
                  scrn-2550:mt-80 
                    absolute scrn-1900:scale-y-110 font-bold
                    ${index === 0
                      ? "text-black scrn-300:text-4xl scrn-450:text-4xl scrn-500:text-5xl scrn-600:text-6xl scrn-700:text-7xl scrn-800:text-7xl scrn-900:text-8xl scrn-1000:text-8xl scrn-1000:text-10xl scrn-1300:text-10xl scrn-1500:text-10xl scrn-1700:text-13xl scrn-1900:text-14xl"
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
            <div className="w-full flex items-center justify-end
                scrn-400:-mt-2
                scrn-450:mt-0
                scrn-500:mt-2 
                scrn-1000:-mt-2 
                scrn-1500:mt-2 
                scrn-1700:-mt-10 
                scrn-1900:-mt-4 
                scrn-1900:ms-32 
                scrn-2550:-mt-44"
                >
              <span className="
                text-base
                scrn-450:text-lg 
                scrn-500:text-xl
                scrn-600:text-2xl 
                scrn-700:text-3xl 
                scrn-800:text-3xl 
                scrn-900:text-3xl 
                scrn-1000:text-3xl
                scrn-1300:text-5xl 
                scrn-1500:text-5xl 
                scrn-1700:text-5xl 
                scrn-1900:text-5xl 
                scrn-2550:text-7xl"
              >
                the competition
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
