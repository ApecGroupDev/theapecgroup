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

const externalSlugs = [
  "metalproductsusa.com",
  "https://www.theapecgroup.com/contact-us",
];

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
    description: "Financing and Loans Services",
    imageSrc: "/servicesLogos/Apec-Financing.webp",
    slug: "gas-station-financing",
  },
  {
    title: "APEC ELECTRICAL",
    description: "Electrical Solutions for Gas Stations",
    imageSrc: "/servicesLogos/Apec-Electrical.webp",
    slug: "gas-station-electrical",
  },
  {
    title: "APEC COMPLIANCE",
    description: "Inspection and Compliance Services",
    imageSrc: "/servicesLogos/Apec-Compliance.webp",
    slug: "environmental-compliance-solutions",
  },
  {
    title: "APEC CONSULTATION",
    description: "Free Consultation Anytime!",
    imageSrc: "/logos/APEC.webp",
    slug: "https://www.theapecgroup.com/contact-us",
  },
];

const ServicesBoxLinks: React.FC = () => {
  const pathname = usePathname();

  const hiddenSlugsByPath: Record<string, string[]> = {
    "/services/gas-station-construction": ["gas-station-construction"],
    "/services/canopy-imaging-solutions": ["canopy-imaging-solutions"],
    "/services/gas-station-financing": ["gas-station-financing"],
    "/services/gas-station-electrical": ["gas-station-electrical"],
    "/services/environmental-compliance-solutions": ["environmental-compliance-solutions",],
  };

  const hiddenSlugs = hiddenSlugsByPath[pathname] || [];

  const filteredFeatures = features.filter(
    (feature) => !hiddenSlugs.includes(feature.slug)
  );

  return (
    <div className="w-full pb-24">
      {/* Section Heading */}
      <div className="my-6">
        <h2 className="text-xl scrn-1000:text-2xl font-semibold">
          You may also be interested in:
        </h2>
      </div>

      {/* Responsive Grid (multiple per row, not full width) */}
      <div className="grid scrn-600:grid-cols-2 scrn-1000:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFeatures.map((feature, index) => {
          // check if slug is external
          const isExternal = externalSlugs.includes(feature.slug);

          // build the href
          const href = isExternal
            ? feature.slug.startsWith("http")
              ? feature.slug // already full URL
              : `https://${feature.slug}` // add protocol if just domain
            : `/services/${feature.slug}`;

          return (
            <Link
              key={index}
              href={href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              passHref
            >
              <div className="group bg-gray-300 rounded-xl mb-12 transition-all duration-300 overflow-hidden outline-red-600 outline-1 outline">
                {/* Logo */}
                <div className="flex items-center justify-center bg-gray-50 p-6 h-32">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    width={200}
                    height={120}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Title + Description */}
                <div className="p-4 text-center">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium">
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

export default ServicesBoxLinks;
