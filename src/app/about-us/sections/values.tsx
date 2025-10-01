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
      <div className='flex flex-col mx-auto items-center justify-center text-center w-full overflow-hidden max-w-[2560px] py-40 scrn-1100:py-72'>
        <span className='text-white scrn-300:text-4xl scrn-800:text-5xl scrn-1250:text-7xl scrn-2500:text-9xl italic'>Our</span>
        <motion.span
          ref={ref}
          className='text-5xl scrn-800:text-6xl scrn-1250:text-7xl scrn-1500:text-8xl scrn-2500:text-10xl font-bold text-white'
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
                  <h3 className='scrn-1000:text-xl scrn-1500:text-2xl scrn-1900:text-4xl scrn-2500:text-5xl font-bold tracking-widest'>{value.title}</h3>
                </div>
                <p className='scrn-300:text-sm scrn-1200:text-lg scrn-1500:text-xl scrn-2500:text-2xl tracking-widest'>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
