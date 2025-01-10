'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
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
  return (
    <section className="bg-transparent pb-96 2xl:mt-96 2xl:px-60">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight">
          <span className="text-red-600">Proud</span> Member Of
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-2 max-w-2xl mx-auto">
          Our associations reflect our dedication to quality, collaboration, and industry leadership.
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {associations.map((association, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-4 transition-transform duration-300 ease-in-out hover:scale-110">
              <img
                src={association.src}
                alt={association.alt}
                className="h-60 max-w-full object-contain mb-4"
              />
              <p className="text-sm 2xl:text-md text-gray-700 text-center">{association.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MembershipLogosCarousel;
