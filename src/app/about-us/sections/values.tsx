"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Lightbulb, ShieldCheck, Award } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "CUSTOMER COMMITMENT",
    description: "Delivering value, quality, and reliability with every project.",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description: "Embracing advancements to offer the best solutions.",
  },
  {
    icon: ShieldCheck,
    title: "INTEGRITY",
    description: "Building trust through transparency and professionalism.",
  },
  {
    icon: Award,
    title: "EXCELLENCE",
    description: "Striving for perfection in everything we do.",
  },
];

const ValuesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className='w-full bg-transparent text-center text-gray-200'>
      <div className='flex flex-col mx-auto items-center text-center w-full overflow-hidden max-w-[2560px] pt-12 scrn-500:pt-0 scrn-600:pt-16 scrn-1100:pt-24 scrn-1200:pt-32 scrn-1300:pt-44 scrn-1400:pt-52 h-128 scrn-400:h-132 scrn-500:h-124 scrn-700:h-128 scrn-750:h-124 scrn-800:h-132 scrn-900:h-140 scrn-1000:h-152 scrn-1100:h-168 scrn-1200:h-188 scrn-1300:h-198 scrn-1400:h-216 scrn-1450:h-224 scrn-1500:h-208 scrn-1550:h-216 scrn-1600:h-240 scrn-1650:h-248 scrn-1700:h-256 scrn-1800:h-264 scrn-1850:h-272 scrn-1900:h-272 scrn-2000:h-280 scrn-2100:h-296 scrn-2200:h-308 scrn-2250:h-312 scrn-2300:h-320 scrn-2350:h-326 scrn-2450:h-339 scrn-2550:h-35'>
        <span className='text-6xl text-white scrn-300:text-4xl scrn-300:mt-4 scrn-450:mt-6 scrn-1900:mt-24 scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-5xl scrn-1000:text-5xl scrn-1250:text-7xl scrn-2500:text-9xl italic'>Our</span>
        <motion.span
          ref={ref}
          className='text-5xl scrn-750:text-5xl scrn-800:text-6xl scrn-900:text-6xl scrn-1000:text-6xl scrn-1250:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2500:text-10xl font-bold text-white'
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          VALUES
        </motion.span>

        <div className='mt-3 scrn-1000:mt-12 flex flex-col gap-8 items-center'>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index}>
                <div className='flex items-center justify-center gap-4'>
                  <Icon size={48} className='hidden scrn-1600:block' />
                  <Icon size={24} className='scrn-1000:block scrn-1600:hidden' />
                  <h3 className='scrn-1000:text-xl scrn-1200:text-xl scrn-1500:text-2xl scrn-1900:text-4xl scrn-2500:text-5xl font-bold'>{value.title}</h3>
                </div>
                <p className='scrn-300:text-sm scrn-1200:text-lg scrn-1500:text-xl scrn-1900:text-xl scrn-2500:text-2xl tracking-wide'>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
