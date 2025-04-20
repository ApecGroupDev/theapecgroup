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
    <div className="bg-transparent outline-dashed outline-1 outline-green-500
    h-128
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
          
          scrn-1900:mt-24"
        >
          Check out some of our services here!
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="flex justify-center flex-wrap mx-auto max-w-384
      scrn-1900:mt-24
      scrn-2400:mt-32
      
        gap-4
        scrn-350:gap-6
        scrn-400:gap-6
        scrn-750:gap-6
        scrn-800:gap-8 
        scrn-900:gap-8 
        scrn-1400:gap-10 
        scrn-1700:gap-16 
        scrn-1900:gap-24"
      >
        {features.map((feature, index) => (
          <Link key={index} href={`/services/${feature.slug}`} passHref>
            <div
              key={index}
              className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 
            w-32
            scrn-350:w-36
            scrn-400:w-36
            scrn-450:w-40
            scrn-500:w-48 
            scrn-600:w-40 
            scrn-750:w-44
            scrn-800:w-48 
            scrn-900:w-44 
            scrn-950:w-48
            scrn-1000:w-60
            scrn-1100:w-64
            scrn-1150:w-72 
            scrn-1250:w-72
            scrn-1300:w-80 
            scrn-1500:w-80
            scrn-1600:w-96 
            scrn-1700:w-112
            scrn-1900:w-118"
            >
              {/* Image Display */}
              <div className="flex flex-col items-center justify-center 
              h-16
              scrn-350:h-20
              scrn-500:h-28
              scrn-600:h-24 
              scrn-750:h-28 
              scrn-800:h-28 
              scrn-900:h-28 
              scrn-950:h-32
              scrn-1000:h-40 
              scrn-1100:h-44
              scrn-1150:h-48
              scrn-1250:h-48
              scrn-1300:h-52 
              scrn-1400:h-56 
              scrn-1500:h-60
              scrn-1600:h-64 
              scrn-1700:h-72
              scrn-1900:h-80
              scrn-2000:h-80"
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-2/3 object-contain"
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
