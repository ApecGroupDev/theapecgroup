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
    <section className='w-full bg-gradient-to-b from-white from-1% to-red-600 to-75% text-center text-gray-200'>
      <div className='flex flex-col items-center justify-center text-center w-full overflow-hidden max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-40 xl:py-72'>
        <span className='text-white scrn-300:text-4xl md:text-5xl xl:text-7xl italic'>Our</span>
        <motion.span
          ref={ref}
          className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white'
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          VALUES
        </motion.span>

        <div className='mt-3 lg:mt-12 flex flex-col gap-8 items-center'>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index}>
                <div className='flex items-center justify-center gap-4'>
                  <Icon size={48} className='hidden 2xl:block' />
                  <Icon size={24} className='lg:block 2xl:hidden' />
                  <h3 className='lg:text-xl 2xl:text-2xl font-bold tracking-widest'>{value.title}</h3>
                </div>
                <p className='scrn-300:text-sm xl:text-lg 2xl:text-xl tracking-widest'>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
