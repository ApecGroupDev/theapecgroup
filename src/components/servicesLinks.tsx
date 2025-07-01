"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    slug: "convenience-store-remodel",
  },
  {
    title: "APEC CONSTRUCTION",
    description: "Gas Station Construction Company Services",
    imageSrc: "/servicesLogos/Apec-Constructions.png",
    slug: "gas-station-construction",
  },
  {
    title: "APEC LINK",
    description: "Digital Marketing Content and Remote Monitoring Services",
    imageSrc: "/servicesLogos/Apec-Constructions.png",
    slug: "gas-station-pump-advertising",
  },
];

const ServicesBoxLinks: React.FC = () => {
  const pathname = usePathname(); // 👈 Get current URL path

  const hiddenSlugsByPath: Record<string, string[]> = {
    "/services/compliance": ["compliance"],
    "/services/financing": ["financing"],
    "/services/canopy-imaging-solutions": ["canopy-imaging-solutions"],
    "/services/convenience-store-remodel": ["convenience-store-remodel"],
    "/services/gas-station-construction": ["gas-station-construction"],
    "/services/gas-station-pump-advertising": ["gas-station-pump-advertising"],
    // add more pages and slugs to hide here
  };

  const hiddenSlugs = hiddenSlugsByPath[pathname] || [];

  const filteredFeatures = features.filter(
    (feature) => !hiddenSlugs.includes(feature.slug)
  );
  return (
    <div>
      {/* Feature Boxes */}
      <div className='flex flex-row mt-auto scrn-1000:pb-0 gap-4 scrn-1000:gap-6 scrn-1400:gap-8 scrn-2000:gap-12'>
        {filteredFeatures.map((feature, index) => (
          <Link key={index} href={`/services/${feature.slug}`} passHref>
            <div
              className='relative group bg-gray-100 p-3 scrn-1000:p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 w-20 scrn-1000:w-24 scrn-1400:w-32 scrn-1900:w-40 scrn-2000:w-48'>
              {/* Image Display */}
              <div className='flex items-center justify-center h-12 scrn-1000:h-12 scrn-1400:h-16 scrn-1900:h-24 scrn-2000:h-32'>
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className='w-full object-contain'
                />
              </div>

              {/* Description */}
              <div className='absolute inset-0 flex flex-col justify-center items-center p-0 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out'>
                <p className='text-gray-700 text-center overflow-x-auto max-h-48 px-4 text-wrap text-3xs scrn-1000:text-xs'>
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

export default ServicesBoxLinks;