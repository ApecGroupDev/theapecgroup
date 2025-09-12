"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Services {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
}

const features: Services[] = [
  {
    title: "APEC CONSTRUCTION",
    description: "Gas Station Construction Company Services",
    imageSrc: "/servicesLogos/Apec-Constructions.webp",
    slug: "gas-station-construction",
  },
  {
    title: "APEC IMAGING AND CANOPIES",
    description: "Gas Station Canopy Panels Installation",
    imageSrc: "/servicesLogos/Apec-Imaging.webp",
    slug: "canopy-imaging-solutions",
  },
  {
    title: "METAL PRODUCTS COMPANY",
    description: "Gas Station Fuel Tanks Manufacturing",
    imageSrc: "/servicesLogos/Logo_MPC_Main_Only.webp",
    slug: "metalproductsusa.com",
  },
  {
    title: "APEC FINANCES",
    description: "Gas Station Financing and Loans Services",
    imageSrc: "/servicesLogos/Apec-Financing.webp",
    slug: "gas-station-financing"
  },
  {
    title: "APEC ELECTRICAL",
    description: "Electrical Solutions for Gas Stations",
    imageSrc: "/servicesLogos/Apec-Electrical.webp",
    slug: "gas-station-electrical",
  },
  {
    title: "APEC COMPLIANCE",
    description: "Gas Station Inspection and Compliance Services",
    imageSrc: "/servicesLogos/Apec-Compliance.webp",
    slug: "environmental-compliance-solutions",
  },
];

const ServicesBoxLinks2: React.FC = () => {
  const pathname = usePathname(); // 👈 Get current URL path

  const hiddenSlugsByPath: Record<string, string[]> = {
    "/services/gas-station-construction": ["gas-station-construction"],
    "/services/canopy-imaging-solutions": ["canopy-imaging-solutions"],
    "/services/gas-station-financing": ["gas-station-financing"],
    "/services/gas-station-electrical": ["gas-station-electrical"],
    "/services/environmental-compliance-solutions": ["environmental-compliance-solutions"],
  };

  const hiddenSlugs = hiddenSlugsByPath[pathname] || [];

  const filteredFeatures = features.filter(
    (feature) => !hiddenSlugs.includes(feature.slug)
  );
  return (
    <div>
      {/* Feature Boxes */}
      <div className="my-2">
        <span className="text-lg">You may also be interested in:</span>
      </div>
      <div className='flex flex-row mt-auto gap-4 scrn-1000:gap-6 scrn-1400:gap-8 scrn-2000:gap-12 my-12'>
        {filteredFeatures.map((feature, index) => {
          const isExternal = feature.slug === "metalproductsusa.com";
          const href = isExternal ? `https://${feature.slug}` : `/services/${feature.slug}`;

          return (
            <Link
              key={index}
              href={href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              passHref
            >
              <div
                className='relative group bg-gray-100 p-3 scrn-1000:p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 w-20 scrn-1000:w-24 scrn-1400:w-32 scrn-1900:w-40 scrn-2000:w-48'>

                <div className='flex items-center justify-center h-12 scrn-1000:h-12 scrn-1400:h-16 scrn-1900:h-24 scrn-2000:h-32'>
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className='w-full object-contain'
                  />
                </div>

                <div className='absolute inset-0 flex flex-col justify-center items-center p-0 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out'>
                  <p className='text-gray-700 text-center overflow-x-auto max-h-48 px-4 text-wrap text-3xs scrn-1000:text-xs'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesBoxLinks2;