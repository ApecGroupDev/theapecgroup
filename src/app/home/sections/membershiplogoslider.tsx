'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import '../../../styles/membershiplogoslider.css';

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
    <div className="bg-transparent px-12 md:px-36 scrn-2k:px-40 outline-dashed 
      h-124
      scrn-400:h-120 
      scrn-600:h-128 
      scrn-750:h-124 
      scrn-800:h-132 
      scrn-900:h-132 
      scrn-1000:h-152 
      scrn-1050:h-176 
      scrn-1100:h-208 
      scrn-1150:h-184 
      scrn-1200:h-192 
      scrn-1250:h-184 
      scrn-1450:h-198
      scrn-1500:h-208 
      scrn-1600:h-224 
      scrn-1650:h-228 
      scrn-1700:h-224 
      scrn-1800:h-232 
      scrn-1850:h-240
      scrn-1900:h-272 
      scrn-1950:h-264
      scrn-2000:h-272
      scrn-2100:h-304
      scrn-2150:h-312
      scrn-2200:h-320
      scrn-2250:h-320
      scrn-2300:h-352
      scrn-2350:h-352
      scrn-2400:h-360
      scrn-2450:h-368
      scrn-2500:h-360
      scrn-2550:h-368"
    >
      <div className="flex flex-col scrn-400:justify-center md:justify-center items-center scrn-900:pb-14 lg:pb-24 xl:pb-0 h-full w-full scrn-2k:gap-y-16">
        <div className="text-center">
          <h2 className="text-5xl scrn-300:text-4xl scrn-400:text-5xl md:text-5xl scrn-900:text-5xl lg:text-5xl xl:text-6xl scrn-1500:text-7xl scrn-1700:text-7xl scrn-1900:text-8xl scrn-2k:text-9xl font-extrabold text-gray-800 tracking-tight leading-tight">
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
          <p className="scrn-300:text-sm md:text-sm scrn-900:text-base xl:text-lg scrn-1500:text-xl scrn-1700:text-2xl scrn-1900:text-2xl scrn-2k:text-4xl text-gray-500 mt-2 max-w-2xl scrn-1500:max-w-full mac-16:max-w-full scrn-1900:max-w-full mx-auto">
            Our associations reflect our dedication to quality, collaboration, and industry leadership.
          </p>
        </div>
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
            draggable: true,
            snapOnRelease: true,
          }}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            300: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper scrn-1500:mt-24 scrn-1700:mt-20 scrn-1900:mt-20 scrn-2k:mt-12 w-full"
        >
          {associations.map((association, index) => (
            <SwiperSlide key={index}>
              <div className="mt-12 scrn-300:mt-0 scrn-400:mt-0 scrn-600:mt-0 flex flex-col items-center p-4 transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                  src={association.src}
                  alt={association.alt}
                  width={800}
                  height={800}
                  className="scrn-400:h-28 h-44 md:h-40 xl:h-60 lg:h-48 scrn-1500:h-64 scrn-1700:h-80 scrn-1900:h-80 scrn-2k:h-96 max-w-full object-contain mb-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  );
};

export default MembershipLogosCarousel;
