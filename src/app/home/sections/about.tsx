"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
      <div className="grid gap-6 scrn-1000:grid-cols-[1fr_2fr] items-center">

        {/* Left Image */}
        <div className="hidden scrn-1000:flex justify-start">
          <Image
            src="/products/aboutUsSection.webp"
            alt="APEC About Section"
            width={500}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <motion.p
            ref={ref}
            className="text-4xl font-semibold italic"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Welcome to
          </motion.p>

          <p className="text-4xl scrn-1250:text-7xl font-extrabold text-[#c62931]">
            APEC
          </p>

          <p className="text-4xl font-medium text-gray-800">
            Petroleum Equipment Services
          </p>

          <div className="mt-4 space-y-4 text-justify text-gray-800 tracking-wider text-lg">
            <p>
              The APEC Group you know today started out as Atlanta Petroleum Equipment Company in September 1989.
              From our modest beginnings as a small service company, we have grown into a leader offering a full
              line of petroleum equipment, installation, repair, and support services.
            </p>
            <p>
              APEC is committed to providing only the highest quality products and services. Our industry continues
              to evolve year after year, and we stay on the leading edge of innovations and technologies to support
              our customers’ needs — as the industry experts you can rely on.
            </p>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="bg-[#c62931] text-white py-4 px-12 rounded-md hover:bg-red-500 transition">
              Sales@TheAPECgroup.com
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
