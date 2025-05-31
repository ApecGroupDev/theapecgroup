"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VisionSection: React.FC = () => {
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  return (
    <div className="scrn-700:bg-[url('/backgrounds/Vision_bg.png')] bg-no-repeat bg-right bg-contain w-full overflow-hidden max-w-[2560px]
          pt-12
          scrn-500:pt-8
          scrn-600:pt-12
          scrn-700:pt-0

          h-128 
          scrn-400:h-132
          scrn-500:h-124
          scrn-700:h-128
          scrn-750:h-124
          scrn-800:h-132
          scrn-900:h-140
          scrn-1000:h-152
          scrn-1100:h-168
          scrn-1200:h-188
          scrn-1300:h-198
          scrn-1400:h-216
          scrn-1450:h-224
          scrn-1500:h-208 
          scrn-1550:h-216
          scrn-1600:h-240
          scrn-1650:h-248
          scrn-1700:h-256
          scrn-1800:h-264
          scrn-1850:h-272
          scrn-1900:h-272
          scrn-2000:h-280
          scrn-2100:h-296
          scrn-2200:h-308
          scrn-2250:h-312
          scrn-2300:h-320
          scrn-2350:h-326
          scrn-2450:h-339
          scrn-2550:h-352"
    >
      <div className="flex flex-col scrn-300:p-6 scrn-450:p-4 text-center scrn-700:text-start scrn-700:items-start scrn-600:mt-4 scrn-600:ms-4 scrn-750:mt-6 scrn-750:ms-6 scrn-800:mt-8 scrn-800:ms-8 scrn-900:mt-8 scrn-900:ml-10 scrn-1000:mt-12 scrn-1000:ms-12 scrn-1250:mt-24 scrn-1250:ml-20 scrn-1500:ml-24 scrn-1500:mt-20 scrn-1900:ml-32 scrn-1900:mt-28">
        <span className="text-6xl scrn-300:text-4xl scrn-450:mt-6 scrn-600:text-5xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1500:text-7xl scrn-1900:text-7xl scrn-2500:text-9xl italic">Our</span>
        <motion.span
          ref={visionRef}
          className="text-7xl scrn-300:text-5xl scrn-600:text-6xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1200:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2500:text-10xl font-bold text-[#c62931]"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: visionInView ? 0 : 50, opacity: visionInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          VISION
        </motion.span>
        <p className="text-pretty tracking-widest
            scrn-300:text-lg 
              scrn-450:text-lg 
              scrn-600:text-base
              scrn-700:text-sm
              scrn-800:text-sm
              scrn-900:text-base
              scrn-1000:text-base
              scrn-1100:text-xl
              scrn-1250:text-xl
              scrn-1300:text-2xl
              scrn-1500:text-2xl
              scrn-1800:text-3xl
              scrn-2500:text-4xl

              scrn-500:mx-12
              scrn-700:mx-0
            
              scrn-300:mt-4
              scrn-450:mt-6 
              scrn-600:mt-4
              scrn-700:mt-4
              scrn-1000:mt-10 
              scrn-1500:mt-16 
              scrn-900:mt-6 
              scrn-1900:mt-20">
          To be the most trusted and innovative partner in the <br className="scrn-450:block scrn-600:block" /> petroleum
          equipment industry, leading with <br className="scrn-450:hidden scrn-600:block" /> cutting-edge technology,
          exceptional <br className="scrn-450:hidden scrn-600:block" /> service, and sustainable practices.
        </p>
      </div>
    </div>
  );
};

export default VisionSection;
