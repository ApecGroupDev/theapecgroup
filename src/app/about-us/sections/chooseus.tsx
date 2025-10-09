'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="flex flex-col items-center justify-center text-center py-40 scrn-1100:py-72 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      {/* Heading */}
      <motion.h2
        ref={ref}
        className="text-4xl scrn-600:text-5xl scrn-750:text-6xl scrn-1000:text-7xl font-bold"
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Why <span className="text-[#c62931]">Choose Us</span>
      </motion.h2>

      {/* Content */}
      <div className="mt-6 space-y-6 max-w-3xl text-base scrn-450:text-lg scrn-600:text-base scrn-700:text-sm scrn-900:text-base scrn-1100:text-xl scrn-1300:text-2xl scrn-1800:text-3xl scrn-2500:text-4xl">
        <p>
          Today, APEC Group offers a diverse range of services, including canopy imaging and installation,
          environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring,
          and digital marketing for dispensaries. We also provide tailored financing options to help you grow your business.
        </p>

        <p>
          With offices in Atlanta, Georgia, and Houston, Texas, we are dedicated to serving businesses nationwide
          with unparalleled expertise and commitment.
        </p>

        <p>
          <span>Let us partner with you to build success for your business.</span><br />
          <span>What can we do for you today?</span>
        </p>
      </div>

      {/* Contact Button */}
      <a
        href="mailto:Sales@TheAPECgroup.com"
        className="mt-8 px-10 py-3 border-2 rounded-lg border-[#c62931] text-gray-800 font-medium hover:bg-red-500 hover:text-white transition duration-200 text-sm scrn-750:text-lg scrn-1000:text-2xl"
      >
        Sales@TheAPECgroup.com
      </a>
    </section>
  );
};

export default ChooseUs;
