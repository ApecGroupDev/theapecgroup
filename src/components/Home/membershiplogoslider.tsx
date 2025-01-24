'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import '../../styles/membershiplogoslider.css';

const associations = [
  { src: "/associations/ARA.png", alt: "ARA - Atlanta Retailers Association", name: "Atlanta Retailers Association" },
  { src: "/associations/GACS.png", alt: "GACS - Georgia Association of Convenience Stores", name: "Georgia Association of Convenience Stores" },
  { src: "/associations/GHRA.png", alt: "GHRCA - Greater Houston Retailers Cooperative Association, Inc.", name: "Greater Houston Retailers Cooperative Association, Inc." },
  { src: "/associations/GOA.png", alt: "GOA - Georgia Oilman’s Association", name: "Georgia Oilman’s Association" },
  { src: "/associations/GTEC.png", alt: "GTEC - Georgia Tank Environmental Contractors Association", name: "Georgia Tank Environmental Contractors Association" },
  { src: "/associations/PEI.png", alt: "PEI - Petroleum Equipment Institute", name: "Petroleum Equipment Institute" },
  { src: "/associations/TFFA.png", alt: "TFFA - Texas Food & Fuel Association", name: "Texas Food & Fuel Association" },
];

const MembershipLogosCarousel: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-transparent px-12 md:px-36 2k:px-40">
      <div className="text-center">
        <h2 className="text-5xl md:text-5xl w-900:text-5xl lg:text-5xl xl:text-6xl mac-14:text-7xl mac-16:text-7xl 2xl:text-8xl 2k:text-9xl font-extrabold text-gray-800 tracking-tight leading-tight">
          <motion.p
            ref={ref}
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-red-600">Proud</span>
          </motion.p>
          Member Of
        </h2>
        <p className="md:text-sm w-900:text-base xl:text-lg mac-14:text-xl mac-16:text-2xl 2xl:text-2xl 2k:text-4xl text-gray-500 mt-2 max-w-2xl mac-14:max-w-full mac-16:max-w-full 2xl:max-w-full mx-auto">
          Our associations reflect our dedication to quality, collaboration, and industry leadership.
        </p>
      </div>
      <Swiper
        modules={[Scrollbar, Navigation]}
        navigation
        scrollbar={{
          hide: false,
          draggable: true, // Makes the scrollbar interactive and draggable
          snapOnRelease: true, // Ensures the scrollbar snaps to the nearest slide after dragging
        }}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          300: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper mac-14:mt-24 mac-16:mt-20 2xl:mt-40 2k:mt-56"
      >
        {associations.map((association, index) => (
          <SwiperSlide key={index}>
            <div className="mt-12 md:mt-0 flex flex-col items-center p-4 transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src={association.src}
                alt={association.alt}
                className="h-44 md:h-40 xl:h-60 lg:h-48 mac-14:h-64 mac-16:h-80 2xl:h-80 2k:h-128 max-w-full object-contain mb-4"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MembershipLogosCarousel;
