"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="w-full bg-transparent overflow-hidden">
      <div className='sm:bg-[url("/backgrounds/aboutUs/Mission_bg.webp")] bg-no-repeat bg-contain w-full max-w-[2560px] flex items-center py-40 lg:py-72'>
        {/* Text container */}
        <div className="flex flex-col ml-auto sm:text-right px-6 sm:pr-12 sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-4xl">
          <span className="text-6xl scrn-300:text-4xl sm:text-5xl md:text-4xl 2xl:text-9xl italic">
            Our
          </span>
          <motion.span
            ref={ref}
            className="scrn-300:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#c62931]"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            MISSION
          </motion.span>
          <p className="text-pretty tracking-widest text-base scrn-450:text-lg sm:text-base md:text-sm lg:text-base xl:text-xl 2xl:text-3xl">
            We provide fast and quality execution at great value to our customers — helping fuel
            retailers operate efficiently, safely, and with full confidence in compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
