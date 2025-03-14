"use client";

import React from "react";

interface Services {
  title: string;
  description: string;
  imageSrc: string;
}

const features: Services[] = [
  {
    title: "APEC COMPLIANCE",
    description: "Gas Station Inspection and Compliance Services",
    imageSrc: "/servicesLogos/Apec-Compliance.png",
  },
  {
    title: "SPEC FINANCES",
    description: "Gas Station Financing and Loans Services",
    imageSrc: "/servicesLogos/Apec-Financing.png",
  },
  {
    title: "APEC IMAGING AND CANOPIES",
    description: "Gas Station Canopy Panels Installation",
    imageSrc: "/servicesLogos/Apec-Imaging.png",
  },
  {
    title: "APEC RENOVATIONS",
    description: "Gas Station Renovation and Remodelling Services",
    imageSrc: "/servicesLogos/Apec-Renovations.png",
  },
  {
    title: "APEC CONSTRUCTION",
    description: "Gas Station Construction Company Services",
    imageSrc: "/servicesLogos/Apec-Constructions.png",
  },
  {
    title: "APEC LINK",
    description: "Digital Marketing Content and Remote Monitoring Services",
    imageSrc: "/servicesLogos/Apec-Constructions.png",
  },
];

const MainServices: React.FC = () => {
  return (
    <div className="bg-transparent outline-dashed outline-green-500 scrn-1700:px-20 scrn-1900:px-28 scrn-1700:h-320 scrn-1900:h-352 scrn-2k:h-448">
      {/* Section Title */}
      <div className="text-center scrn-1700:py-16 scrn-1900:py-28 scrn-2k:py-32">
        <div className="scrn-1700:text-4xl scrn-1900:text-5xl font-semibold text-gray-800">
          Check out some of our services here!
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-3 scrn-1700:gap-y-24 scrn-1900:gap-y-32 scrn-2k:gap-y-44">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative mx-auto group bg-gray-100 bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all scrn-1700:w-116 scrn-1900:w-116 scrn-2k:w-140 duration-500"
          >
            {/* Image Display */}
            <div className="flex flex-col items-center justify-center scrn-1700:h-80 scrn-1900:h-80 scrn-2k:h-116">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-2/3 object-contain"
              />
            </div>

            {/* Description (Hidden by default, revealed on hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <p className="scrn-1700:text-3xl scrn-1900:text-4xl text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainServices;
