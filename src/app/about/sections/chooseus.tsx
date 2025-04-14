'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer

const ChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <section className="flex flex-col items-center text-center outline-green-500 outline-dashed overflow-y-visible scrn-750:overflow-hidden
      py-20 
      px-10 
    
      h-160
      scrn-450:h-196 
      scrn-600:h-148 
      scrn-700:h-148
      scrn-800:h-152 
      scrn-900:h-164 
      scrn-1000:h-188
      scrn-1100:h-195 
      scrn-1200:h-208 
      scrn-1300:h-224
      scrn-1400:h-232
      scrn-1500:h-256
      scrn-1550:h-260 
      scrn-1700:h-304 
      scrn-1900:h-320 
      scrn-2550:h-416"
    >
      {/* Heading */}
      <span className="text-3xl scrn-750:text-3xl scrn-800:text-4xl scrn-900:text-5xl scrn-1000:text-6xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2550:text-9xl font-bold">
        Why
        <motion.p
          ref={ref} // Set the ref to the element
          className="text-4xl scrn-750:text-4xl scrn-800:text-5xl scrn-900:text-6xl scrn-1000:text-7xl scrn-1500:text-8xl scrn-1900:text-8xl scrn-2550:text-9xl font-bold text-red-600"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Choose Us
        </motion.p>
      </span>

      {/* Content */}
      <p className="leading-normal font-normal scrn-2550:leading-relaxed tracking-wider 
      mt-3 
      scrn-450:mt-6 
      scrn-600:mt-6 
      scrn-750:mt-4 
      scrn-800:mt-6 
      scrn-900:mt-8 
      scrn-1000:mt-10  
      scrn-1500:mt-12 
      scrn-1900:mt-12

      scrn-400:max-w-96
      scrn-600:max-w-md
      scrn-800:max-w-lg
      scrn-900:max-w-2xl
      scrn-1300:max-w-3xl
      scrn-1500:max-w-4xl

      text-xs 
      scrn-400:text-sm
      scrn-900:text-base 
      scrn-1000:text-lg
      scrn-1300:text-2xl"
      >
        Today, APEC Group offers a diverse range of services, including canopy imaging and installation,
        environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring,
        and digital marketing for dispensaries. We also provide tailored financing options to help you grow your business.
      </p>

      <p className="leading-normal font-normal scrn-2550:leading-relaxed tracking-wider 
      scrn-300:mt-2 
      scrn-450:mt-4 
      scrn-600:mt-6 
      scrn-750:mt-4 
      scrn-800:mt-4 
      scrn-900:mt-4 
      scrn-1000:mt-8  
      scrn-1500:mt-8 
      scrn-1900:mt-8

      scrn-400:max-w-80
      scrn-600:max-w-sm
      scrn-800:max-w-md
      scrn-900:max-w-lg
      scrn-1300:max-w-xl
      scrn-1500:max-w-2xl

      text-xs
      scrn-400:text-sm 
      scrn-900:text-base 
      scrn-1000:text-lg
      scrn-1300:text-2xl"
      >
        With offices in Atlanta, Georgia, and Houston, Texas, we are dedicated to serving businesses nationwide
        with unparalleled expertise and commitment.
      </p>

      <p className="font-normal scrn-2550:leading-relaxed 
      text-xs
      scrn-400:text-sm 
      scrn-900:text-base
      scrn-1000:text-lg
      scrn-1300:text-2xl 
      scrn-1500:text-2xl 
      scrn-1900:text-3xl 
      scrn-2550:text-4xl

      scrn-400:max-w-64
      scrn-800:max-w-xs
      scrn-900:max-w-md
      scrn-1300:max-w-lg
      scrn-1500:max-w-xl
      
      scrn-300:mt-2 
      scrn-450:mt-4 
      scrn-600:mt-6 
      scrn-750:mt-4 
      scrn-800:mt-4 
      scrn-900:mt-4 
      scrn-1000:mt-6  
      scrn-1500:mt-8 
      scrn-1900:mt-8"><span>Let us partner with you to build success for your business.</span><br /><span>What can we do for you today?</span></p>

      {/* Contact Button */}
      <a
        href="mailto:Sales@TheAPECgroup.com"
        className="px-16 font-regular py-1 border-2 rounded-lg hover:bg-red-600 border-red-600 text-gray-800  hover:text-white transition duration-200
        mt-4 
        scrn-900:mt-4 
        scrn-600:mt-6
        scrn-1500:mt-16

        scrn-300:px-8 
        scrn-750:px-12 
        scrn-1000:px-20 
        scrn-2550:px-28 
        
        text-xs
        scrn-750:text-sm 
        scrn-1000:text-lg 
        scrn-1700:text-2xl 
        scrn-1900:text-2xl 
        scrn-2550:text-3xl"
      >
        Sales@TheAPECgroup.com
      </a>
    </section>
  );
};

export default ChooseUs;