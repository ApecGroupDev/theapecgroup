"use client";

import React from "react";
import Link from "next/link";

interface Services {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
}

const features: Services[] = [
  {
    title: "APEC COMPLIANCE",
    description: "Gas Station Inspection and Compliance Services",
    imageSrc: "/servicesLogos/Apec-Compliance.png",
    slug: "compliance",
  },
  {
    title: "SPEC FINANCES",
    description: "Gas Station Financing and Loans Services",
    imageSrc: "/servicesLogos/Apec-Financing.png",
    slug: "financing"
  },
  {
    title: "APEC IMAGING AND CANOPIES",
    description: "Gas Station Canopy Panels Installation",
    imageSrc: "/servicesLogos/Apec-Imaging.png",
    slug: "imaging-and-canopies",
  },
  {
    title: "APEC RENOVATIONS",
    description: "Gas Station Renovation and Remodelling Services",
    imageSrc: "/servicesLogos/Apec-Renovations.png",
    slug: "renovation",
  },
  {
    title: "APEC CONSTRUCTION",
    description: "Gas Station Construction Company Services",
    imageSrc: "/servicesLogos/Apec-Constructions.png",
    slug: "construction",
  },
  {
    title: "APEC LINK",
    description: "Digital Marketing Content and Remote Monitoring Services",
    imageSrc: "/servicesLogos/Apec-Constructions.png",
    slug: "link",
  },
];

const MainServices: React.FC = () => {
  return (
    <div className="bg-transparent
    h-128
    scrn-400:h-132
    scrn-500:h-148
    scrn-600:h-160
    scrn-800:h-164 
    scrn-850:h-172
    scrn-900:h-184
    scrn-950:h-192
    scrn-1000:h-216
    scrn-1050:h-216
    scrn-1100:h-228
    scrn-1150:h-240
    scrn-1200:h-248
    scrn-1300:h-256
    scrn-1350:h-272
    scrn-1400:h-276
    scrn-1450:h-288
    scrn-1500:h-304
    scrn-1550:h-304
    scrn-1600:h-316
    scrn-1650:h-324
    scrn-1700:h-324
    scrn-1750:h-339
    scrn-1800:h-352
    scrn-1850:h-360
    scrn-1900:h-339
    scrn-2000:h-360
    scrn-2050:h-368
    scrn-2100:h-384
    scrn-2200:h-416
    scrn-2350:h-432
    scrn-2450:h-448
    scrn-2500:h-464
    ">
      {/* Section Title */}
      <div className="text-center">
        <div className="font-semibold text-gray-800       
          scrn-300:text-sm 
          scrn-600:text-base 
          scrn-750:text-lg 
          scrn-800:text-lg 
          scrn-900:text-xl 
          scrn-1000:text-xl 
          scrn-1250:text-2xl 
          scrn-1500:text-4xl  
          scrn-1900:text-5xl
          
          mt-4
          scrn-600:mt-8
          scrn-750:mt-0
          scrn-800:mt-12
          scrn-1200:mt-20
          scrn-1650:mt-28
          scrn-1900:mt-24"
        >
          Check out some of our services here!
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="flex justify-center flex-wrap mx-auto scrn-600:max-w-128 scrn-700:max-w-416
      mt-2
      scrn-700:mt-8
      scrn-1000:mt-12
      scrn-1200:mt-14
      scrn-1650:mt-24
      scrn-1900:mt-24
      scrn-2400:mt-32
      
        gap-4
        scrn-350:gap-6
        scrn-800:gap-8 
        scrn-900:gap-8 
        scrn-1100:gap-10
        scrn-1400:gap-12 
        scrn-1700:gap-16 
        scrn-1900:gap-24"
      >
        {features.map((feature, index) => (
          <Link key={index} href={`/services/${feature.slug}`} passHref>
            <div
              key={index}
              className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 
            w-32
            scrn-400:w-40
            scrn-500:w-48
            scrn-600:w-48
            scrn-700:w-48
            scrn-800:w-52 
            scrn-900:w-60
            scrn-1000:w-64
            scrn-1100:w-72
            scrn-1200:w-80 
            scrn-1400:w-96
            scrn-1650:w-116 
            scrn-1700:w-120"
            >
              {/* Image Display */}
              <div className="flex flex-col items-center justify-center 
              h-16
              scrn-400:h-20
              scrn-450:h-24
              scrn-500:h-28
              scrn-600:h-32 
              scrn-700:h-32
              scrn-800:h-36 
              scrn-900:h-44
              scrn-1000:h-44 
              scrn-1100:h-56
              scrn-1200:h-60 
              scrn-1400:h-72
              scrn-1650:h-80 
              scrn-1700:h-96"
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="scrn-400:w-2/3 object-contain"
                />
              </div>

              {/* Description (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-0 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                <p className="text-gray-700 text-center overflow-y-auto max-h-48 px-4
                text-xs
                scrn-600:text-sm 
                scrn-750:text-sm 
                scrn-800:text-lg 
                scrn-900:text-xl 
                scrn-1000:text-xl 
                scrn-1250:text-2xl 
                scrn-1500:text-3xl 
                scrn-1700:text-3xl 
                scrn-1900:text-4xl 
                scrn-2500:text-4xl"
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainServices;
