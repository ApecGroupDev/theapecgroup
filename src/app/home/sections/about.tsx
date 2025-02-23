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
    <div className="w-full bg-transparent flex flex-col md:flex-row px-12 outline-dashed scrn-2k:h-320">
      {/* Left Image Section */}
      <div className="w-full hidden md:block md:w-2/5 xl:w-1/2">
        <Image
          src="/products/station.png"
          alt="Hero"
          width={3264}
          height={4601}
          className="rounded-lg object-cover w-7/12 md:w-full lg:w-11/12 xl:w-9/12 mac-14:w-10/12 mx-auto"
        />
      </div>

      {/* Right Text Section */}
      <div className="text-center md:text-left md:w-3/5 lg:w-1/2 xl:mt-16 flex flex-col lg:mx-auto mac-14:px-10 mac-14:mt-20 mac-16:pe-20 mac-16:mt-20 2xl:pe-20 2xl:mt-24 scrn-2k:pe-32 scrn-2k:mt-36">
        {/* Animated Welcome Text */}
        <motion.p
          ref={ref} // Set the ref to the element
          className="text-4xl md:text-4xl xl:text-5xl mac-14:text-6xl mac-16:text-6xl 2xl:text-7xl scrn-2k:text-8xl font-semibold italic"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Welcome to
        </motion.p>
        <p className="text-5xl md:text-5xl xl:text-6xl mac-14:text-7xl mac-16:text-7xl 2xl:text-8xl scrn-2k:text-9xl font-extrabold text-red-600">
          APEC
        </p>
        <p className="text-2xl md:text-xl lg:text-2xl mac-14:text-3xl mac-16:text-3xl 2xl:text-4xl scrn-2k:text-5xl font-medium text-gray-800">
          Petroleum Equipment Services
        </p>
        <p className="mt-4 2xl:mt-12 text-justify md:text-sm w-900:text-base lg:text-base xl:text-lg mac-14:text-xl mac-16:text-2xl 2xl:text-2xl 2xl:tracking-widest scrn-2k:text-3xl text-gray-800">
          The APEC group you know today started out originally as Atlanta Petroleum Equipment Company in September of 1989.
          From our modest beginning as a small service company, we have grown to a leader in our industry offering a full
          line of petroleum equipment, installation, repair and support services.
        </p>
        <p className="mt-4 md:text-sm text-justify w-900:text-base lg:text-base xl:text-lg mac-14:text-xl mac-16:text-2xl 2xl:text-2xl 2xl:tracking-widest scrn-2k:text-3xl text-gray-800">
          APEC is committed to providing only the highest quality products and services available. Our industry continues
          to evolve technically year after year. APEC is committed to staying on the leading edge of all the latest innovations
          and technologies to not only support our customer’s needs but so we can also be the industry experts you can rely on.
        </p>
        {/* Button */}
        <div className="mt-8 md:mt-4 2xl:mt-12 scrn-2k:mt-20 flex justify-center">
          <button
            className="px-16 md:px-12 md:text-sm lg:px-20 scrn-2k:px-28 py-1 border-2 border-red-600 text-gray-800 lg:text-lg mac-16:text-2xl 2xl:text-2xl scrn-2k:text-3xl font-regular rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
          >
            Sales@TheAPECgroup.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
