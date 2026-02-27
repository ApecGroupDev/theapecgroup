"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { associations } from "../components/associations";

const headingVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const MembershipGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900"
          >
            Proud <span className="text-[#c62931]">Member Of:</span>
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Our associations reflect our dedication to quality, collaboration,
            and industry leadership.
          </p>
        </div>

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10"
        >
          {associations.map((assoc) => (
            <motion.div key={assoc.alt} variants={itemVariants}>
              <Link
                href={assoc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-110"
              >
                <Image
                  src={assoc.src}
                  alt={assoc.alt}
                  width={230}
                  height={230}
                  className="object-contain w-[130px] sm:w-[160px] md:w-[190px] lg:w-[210px]"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipGrid;
