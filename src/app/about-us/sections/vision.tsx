"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VisionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="w-full bg-transparent overflow-hidden pt-12">
      <div className='md:bg-[url("/backgrounds/aboutUs/Vision_bg.webp")] bg-no-repeat bg-right bg-contain w-full max-w-[2560px] flex items-center py-40 lg:py-72'>
        {/* Text container */}
        <div className="flex flex-col mr-auto text-left px-6 sm:pl-12 sm:max-w-sm md:max-w-md lg:max-w-xl 2xl:max-w-4xl">
          <span className="text-6xl scrn-300:text-4xl sm:text-5xl md:text-4xl lg:text-5xl italic">
            Our
          </span>
          <motion.span
            ref={ref}
            className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#c62931]"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            VISION
          </motion.span>
          <p className="text-pretty tracking-widest text-base scrn-450:text-lg sm:text-base md:text-sm lg:text-base xl:text-xl 2xl:text-3xl">
            To be the most trusted and innovative partner in the petroleum equipment industry, leading with cutting-edge technology, exceptional service, and sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
