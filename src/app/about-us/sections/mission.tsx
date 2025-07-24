"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className='w-full bg-transparent overflow-hidden border-b-2 border-dashed border-red-700'>
      <div className='scrn-700:bg-[url("/backgrounds/Mission_bg.png")] justify-items-center bg-no-repeat bg-contain w-full overflow-hidden max-w-[2560px] pt-20 scrn-500:pt-20 scrn-600:pt-12 scrn-700:pt-0 h-128 scrn-400:h-132 scrn-500:h-132 scrn-700:h-128 scrn-750:h-124 scrn-800:h-132 scrn-900:h-140 scrn-1000:h-152 scrn-1100:h-168 scrn-1200:h-188 scrn-1300:h-198 scrn-1400:h-216 scrn-1450:h-224 scrn-1500:h-208 scrn-1550:h-216 scrn-1600:h-240 scrn-1650:h-248 scrn-1700:h-256 scrn-1800:h-264 scrn-1850:h-272 scrn-1900:h-272 scrn-2000:h-280 scrn-2100:h-296 scrn-2200:h-308 scrn-2250:h-312 scrn-2300:h-320 scrn-2350:h-326 scrn-2450:h-339 scrn-2550:h-352'>
        <div className='flex flex-col ml-auto scrn-300:p-6 scrn-450:p-4 text-center scrn-700:text-end scrn-600:mt-4 scrn-600:me-4 scrn-750:mt-6 scrn-750:me-6 scrn-800:mt-8 scrn-800:me-8 scrn-900:mt-8 scrn-900:me-10 scrn-1000:mt-12 scrn-1000:me-12 scrn-1250:mt-24 scrn-1250:me-20 scrn-1500:mt-20 scrn-1500:me-24 scrn-1900:mt-28 scrn-1900:me-32'>
          <span className='text-6xl scrn-300:text-4xl scrn-450:mt-6 scrn-600:text-5xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-2500:text-9xl italic'>Our</span>
          <motion.span
            ref={ref}
            className='text-7xl scrn-300:text-5xl scrn-600:text-6xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1200:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2500:text-10xl font-bold text-[#c62931]'
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            MISSION
          </motion.span>
          <p className='text-pretty tracking-widest text-base scrn-450:text-lg scrn-600:text-base scrn-700:text-sm scrn-800:text-sm scrn-900:text-base scrn-1000:text-base scrn-1100:text-xl scrn-1250:text-xl scrn-1300:text-2xl scrn-1500:text-2xl scrn-1800:text-3xl scrn-2500:text-4xl scrn-500:mx-12 scrn-700:mx-0 scrn-300:mt-4 scrn-450:mt-6 scrn-600:mt-4 scrn-700:mt-4 scrn-1000:mt-10 scrn-1500:mt-16 scrn-900:mt-6 scrn-1900:mt-20'>
            To empower businesses with reliable, innovative, <br className='scrn-450:hidden scrn-700:block' /> and efficient
            petroleum equipment solutions <br className='scrn-450:hidden scrn-700:block' /> that drive success
            and ensure <br className='scrn-450:hidden scrn-700:block' /> operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
