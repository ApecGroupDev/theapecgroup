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
    <div className="bg-transparent outline-dashed outline-green-500 scrn-300:px-3 scrn-mobile:px-4 sm:px-8 md:px-12 scrn-800:px-14 scrn-900:px-14 lg:px-16 xl:px-12 scrn-1500:px-20 scrn-1700:px-20 scrn-1900:px-28 scrn-300:h-152 scrn-mobile:h-140 sm:h-128 md:h-152 scrn-800:h-160 scrn-900:h-192 lg:h-208 xl:h-240 scrn-1500:h-288 scrn-1700:h-320 scrn-1900:h-352 scrn-2k:h-448">
      {/* Section Title */}
      <div className="text-center scrn-300:py-4 scrn-mobile:py-6 sm:py-8 md:py-6 scrn-800:py-8 scrn-900:py-8 lg:py-8 xl:py-12 scrn-1500:py-16 scrn-1700:py-16 scrn-1900:py-28 scrn-2k:py-32">
        <div className="scrn-300:text-sm sm:text-base md:text-lg scrn-800:text-lg scrn-900:text-xl lg:text-xl xl:text-2xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1900:text-5xl font-semibold text-gray-800">
          Check out some of our services here!
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid scrn-300:grid-cols-2 scrn-mobile:grid-cols-2 sm:grid-cols-3 scrn-300:gap-y-4 scrn-mobile:gap-y-6 sm:gap-y-8 md:gap-y-10 scrn-800:gap-y-6 scrn-900:gap-y-10 lg:gap-y-10 xl:gap-y-16 scrn-1500:gap-y-16 scrn-1700:gap-y-24 scrn-1900:gap-y-32 scrn-2k:gap-y-44">
        {features.map((feature, index) => (
          <Link key={index} href={`/services/${feature.slug}`} passHref>
            <div
              key={index}
              className="relative mx-auto group bg-gray-100 bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all scrn-300:w-40 scrn-mobile:w-44 sm:w-40 md:w-44 scrn-800:w-52 scrn-900:w-56 lg:w-64 xl:w-80 scrn-1500:w-112 scrn-1700:w-116 scrn-1900:w-116 scrn-2k:w-140 duration-500"
            >
              {/* Image Display */}
              <div className="flex flex-col items-center justify-center scrn-300:h-24 scrn-mobile:h-20 sm:h-24 md:h-28 scrn-800:h-36 scrn-900:h-40 lg:h-48 xl:h-64 scrn-1500:h-72 scrn-1700:h-80 scrn-1900:h-80 scrn-2k:h-116">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-2/3 object-contain"
                />
              </div>

              {/* Description (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-0 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                <p className="sm:text-sm md:text-sm scrn-800:text-lg scrn-900:text-xl lg:text-xl xl:text-2xl scrn-1500:text-3xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2k:text-4xl text-gray-700 text-center overflow-y-auto max-h-48 px-4">
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
