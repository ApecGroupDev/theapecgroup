'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const associations = [
  {
    src: "/associations/ARA.webp",
    alt: "ARA - Atlanta Retailers Association",
    link: "https://www.araonline.us/",
  },
  {
    src: "/associations/GACS.webp",
    alt: "GACS - Georgia Association of Convenience Stores",
    link: "https://www.gacs.com/",
  },
  {
    src: "/associations/GHRA.webp",
    alt: "GHRA - Greater Houston Retailers Cooperative Association, Inc.",
    link: "https://www.ghraonline.com/",
  },
  {
    src: "/associations/GOA.webp",
    alt: "GOA - Georgia Oilman’s Association",
    link: "https://www.georgiaoilmensassoc.com/",
  },
  {
    src: "/associations/GTEC.webp",
    alt: "GTEC - Georgia Tank Environmental Contractors Association",
    link: "https://gteca.com/",
  },
  {
    src: "/associations/PEI.webp",
    alt: "PEI - Petroleum Equipment Institute",
    link: "https://www.pei.org/",
  },
  {
    src: "/associations/TFFA.webp",
    alt: "TFFA - Texas Food & Fuel Association",
    link: "https://www.tffa.com/",
  },
];

const MembershipGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl scrn-600:text-5xl scrn-1000:text-6xl font-extrabold text-gray-900"
          >
            Proud <span className="text-[#c62931]">Member Of:</span>
          </motion.h2>
          <p className="text-base scrn-600:text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Our associations reflect our dedication to quality, collaboration, and industry leadership.
          </p>
        </div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 scrn-600:grid-cols-3 scrn-1000:grid-cols-4 gap-y-12 gap-x-10 items-center justify-items-center justify-center [grid-auto-flow:row]"
        >
          {associations.map((assoc, index) => (
            <Link
              key={index}
              href={assoc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 hover:scale-125"
            >
              <Image
                src={assoc.src}
                alt={assoc.alt}
                width={250}
                height={250}
                className="object-contain w-[160px] scrn-600:w-[180px] scrn-750:w-[200px] scrn-1000:w-[230px] scrn-1500:w-[260px]"
              />
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MembershipGrid;
