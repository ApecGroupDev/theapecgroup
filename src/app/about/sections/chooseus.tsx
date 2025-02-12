'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer

const ChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <section className="py-20 px-10 flex flex-col items-center justify-center text-center outline-dashed scrn-1500:h-256 scrn-1700:h-304 scrn-1900:h-320 scrn-2k:h-384 overflow-hidden">
      {/* Heading */}
      <span className="lg:text-6xl xl:text-8xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2k:text-9xl font-bold">
        Why
        <motion.p
          ref={ref} // Set the ref to the element
          className="xl:text-8xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2k:text-9xl font-bold text-red-600"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Choose Us
        </motion.p>
      </span>

      {/* Content */}
      <p className="lg:text-xl lg:max-w-2xl xl:max-w-4xl scrn-1500:max-w-6xl scrn-1700:max-w-6xl scrn-1900:max-w-6xl scrn-2k:max-w-7xl xl:text-2xl scrn-1500:text-2xl scrn-1900:text-3xl scrn-2k:text-4xl leading-normal font-normal scrn-2k:leading-relaxed tracking-wider lg:mt-10 xl:mt-12 scrn-1500:mt-12 scrn-1900:mt-12">
        Today, APEC Group offers a diverse range of services, including canopy imaging and installation,
        environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring,
        and digital marketing for dispensaries. We also provide tailored financing options to help you grow your business.
      </p>

      <p className="lg:text-xl lg:max-w-xl xl:max-w-3xl scrn-1500:max-w-4xl scrn-1700:max-w-4xl scrn-1900:max-w-4xl xl:text-2xl scrn-1500:text-2xl scrn-1900:text-3xl scrn-2k:text-4xl leading-normal font-normal scrn-2k:leading-relaxed tracking-wider lg:mt-8 xl:mt-6 scrn-1500:mt-8 scrn-1900:mt-8">
        With offices in Atlanta, Georgia, and Houston, Texas, we are dedicated to serving businesses nationwide
        with unparalleled expertise and commitment.
      </p>

      <p className="lg:text-xl xl:text-2xl scrn-1500:text-2xl scrn-1900:text-3xl scrn-2k:text-4xl font-normal scrn-2k:leading-relaxed lg:mt-6 xl:mt-6 scrn-1500:mt-8 scrn-1900:mt-8">Let us partner with you to build success for your business.</p>
      <p className="lg:text-xl xl:text-2xl scrn-1500:text-2xl scrn-1900:text-3xl scrn-2k:text-4xl font-normal scrn-2k:leading-relaxed lg:mt-6 xl:mt-6 scrn-1500:mt-8 scrn-1900:mt-8">What can we do for you today?</p>

      {/* Contact Button */}
      <a
        href="mailto:Sales@TheAPECgroup.com"
        className="px-16 mt-12 md:px-12 md:text-sm lg:px-20 scrn-2k:px-28 py-1 border-2 border-red-600 text-gray-800 lg:text-lg scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-3xl font-regular rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
      >
        Sales@TheAPECgroup.com
      </a>
    </section>
  );
};

export default ChooseUs;