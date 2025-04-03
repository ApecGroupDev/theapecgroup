"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <div className="w-full bg-transparent flex flex-col md:flex-row px-12 scrn-300:px-8 outline-dashed 
      scrn-300:h-128 
      scrn-mobile:h-132 
      sm:h-124 md:h-120 
      scrn-800:h-120 
      scrn-900:h-128 
      lg:h-140 
      scrn-1100:h-160 
      scrn-1150:h-184 
      scrn-1200:h-184 
      xl:h-184 
      scrn-1350:h-192
      scrn-1400:h-198
      scrn-1450:h-208
      scrn-1500:-mt-8 
      scrn-1500:h-224 
      scrn-1550:h-240
      scrn-1600:h-244
      scrn-1650:h-248
      scrn-1700:h-240 
      scrn-1800:h-256
      scrn-1850:h-272
      scrn-1900:h-256 
      scrn-1950:h-272
      scrn-2k:h-352
      scrn-2000:h-288
      scrn-2050:h-296
      scrn-2100:h-304
      scrn-2150:h-308
      scrn-2200:h-320"
    >
      {/* Left Image Section */}
      <div className="w-full hidden md:block md:w-2/5 xl:w-1/2">
        <Image
          src="/products/station.png"
          alt="Hero"
          width={3264}
          height={4601}
          className="rounded-lg object-cover w-7/12 md:w-full lg:w-11/12 xl:w-9/12 scrn-1500:w-10/12 mx-auto"
        />
      </div>

      {/* Right Text Section */}
      <div className="text-center scrn-300:mt-8 md:text-left md:w-3/5 lg:w-1/2 md:mt-10 xl:mt-16 flex flex-col lg:mx-auto scrn-1500:px-10 scrn-1500:mt-20 scrn-1700:pe-20 scrn-1700:mt-20 scrn-1900:pe-20 scrn-1900:mt-24 scrn-2k:pe-32 scrn-2k:mt-36">
        {/* Animated Welcome Text */}
        <motion.p
          ref={ref} // Set the ref to the element
          className="scrn-300:text-xl text-2xl scrn-mobile:mt-12 md:text-3xl xl:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1900:text-7xl scrn-2k:text-8xl font-semibold italic"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Welcome to
        </motion.p>
        <p className="scrn-300:text-4xl text-4xl md:text-4xl xl:text-6xl scrn-1500:text-7xl scrn-1700:text-7xl scrn-1900:text-8xl scrn-2k:text-9xl font-extrabold text-red-600">
          APEC
        </p>
        <p className="scrn-300:text-lg text-xl md:text-lg lg:text-2xl scrn-1500:text-3xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2k:text-5xl font-medium text-gray-800">
          Petroleum Equipment Services
        </p>
        <p className="mt-4 scrn-1900:mt-12 text-justify scrn-300:text-xs scrn-mobile:text-sm sm:text-base md:text-xs scrn-900:text-base lg:text-base xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-300:tracking-widest scrn-1900:tracking-widest scrn-2k:text-3xl text-gray-800">
          The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
          From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
          line of petroleum equipment, installation, repair and support services.
        </p>
        <p className="mt-4 scrn-300:text-xs scrn-mobile:text-sm sm:text-base md:text-xs text-justify scrn-900:text-base lg:text-base xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-300:tracking-widest scrn-1900:tracking-widest scrn-2k:text-3xl text-gray-800">
          APEC is committed to providing only the highest quality products and services available. Our industry continues
          to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
          and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
        </p>
        {/* Button */}
        <div className="mt-8 scrn-300:mt-4 scrn-mobile:mt-2 md:mt-4 scrn-1900:mt-12 scrn-2k:mt-20 flex justify-center">
          <button
            className="scrn-300:px-6 scrn-mobile:px-8 px-16 md:px-12 scrn-300:text-xs scrn-mobile:text-xs md:text-sm lg:px-20 scrn-2k:px-28 py-1 border-2 border-red-600 text-gray-800 lg:text-lg scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-3xl font-regular rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
          >
            Sales@TheAPECgroup.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
