"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="w-full bg-transparent overflow-hidden">
      <div className='scrn-700:bg-[url("/backgrounds/aboutUs/Mission_bg.webp")] bg-no-repeat bg-contain w-full max-w-[2560px] flex items-center py-40 scrn-1100:py-72'>
        {/* Text container */}
        <div className="flex flex-col ml-auto scrn-700:text-right px-6 scrn-700:pr-12 scrn-700:max-w-sm scrn-800:max-w-md scrn-900:max-w-xl scrn-1300:max-w-4xl">
          <span className="text-6xl scrn-300:text-4xl scrn-600:text-5xl scrn-750:text-4xl scrn-800:text-5xl scrn-2500:text-9xl italic">
            Our
          </span>
          <motion.span
            ref={ref}
            className="scrn-300:text-5xl scrn-600:text-6xl scrn-750:text-5xl scrn-800:text-6xl scrn-1200:text-7xl scrn-1500:text-8xl scrn-2500:text-10xl font-bold text-[#c62931]"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            MISSION
          </motion.span>
          <p className="text-pretty tracking-widest text-base scrn-450:text-lg scrn-600:text-base scrn-700:text-sm scrn-900:text-base scrn-1100:text-xl scrn-1300:text-2xl scrn-1800:text-3xl scrn-2500:text-4xl">
            We provide fast and quality execution at great value to our customers — helping fuel
            retailers operate efficiently, safely, and with full confidence in compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
