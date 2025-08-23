"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Services {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
}

const features: Services[] = [
  {
    title: "APEC IMAGING AND CANOPIES",
    description: "Gas Station Canopy Panels Installation",
    imageSrc: "/servicesLogos/Apec-Imaging.webp",
    slug: "canopy-imaging-solutions",
  },
  {
    title: "APEC COMPLIANCE",
    description: "Gas Station Inspection and Compliance Services",
    imageSrc: "/servicesLogos/Apec-Compliance.webp",
    slug: "environmental-compliance-solutions",
  },
  {
    title: "SPEC FINANCES",
    description: "Gas Station Financing and Loans Services",
    imageSrc: "/servicesLogos/Apec-Financing.webp",
    slug: "gas-station-financing"
  },
  {
    title: "APEC ELECTRICAL",
    description: "Gas Station Construction Company Services",
    imageSrc: "/servicesLogos/Apec-Electrical.webp",
    slug: "gas-station-electrical",
  },
];

const MainServices: React.FC = () => {
  return (
    <div className='bg-transparent h-128 scrn-400:h-132 scrn-500:h-148 scrn-600:h-160 scrn-800:h-180 scrn-850:h-180 scrn-900:h-184 scrn-950:h-192 scrn-1000:h-216 scrn-1050:h-216 scrn-1100:h-228 scrn-1150:h-240 scrn-1200:h-248 scrn-1300:h-256 scrn-1350:h-272 scrn-1400:h-276 scrn-1450:h-288 scrn-1500:h-304 scrn-1550:h-304 scrn-1600:h-316 scrn-1650:h-324 scrn-1700:h-324 scrn-1750:h-339 scrn-1800:h-352 scrn-1850:h-360 scrn-1900:h-339 scrn-2000:h-360 scrn-2050:h-368 scrn-2100:h-384 scrn-2200:h-416 scrn-2350:h-432 scrn-2450:h-448 scrn-2500:h-464'>
      {/* Section Title */}
      <div className='text-center'>
        <div className='font-semibold text-gray-800 scrn-300:text-sm scrn-600:text-base scrn-750:text-lg scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-4xl scrn-1900:text-5xl mt-4 scrn-600:mt-8 scrn-750:mt-0 scrn-800:mt-12 scrn-900:mt-4 scrn-1200:mt-20 scrn-1650:mt-28 scrn-1900:mt-24'>
          Check out some of our services here!
        </div>
      </div>

      {/* Feature Boxes */}
      <div className='flex justify-center flex-wrap mx-auto 
      scrn-600:max-w-128 
      scrn-700:max-w-416 
      mt-2 
      scrn-700:mt-8 
      scrn-1000:mt-12 
      scrn-1200:mt-14 
      scrn-1650:mt-24 
      scrn-2400:mt-32 
      gap-4 
      scrn-350:gap-6 
      scrn-800:gap-8 
      scrn-1100:gap-10 
      scrn-1400:gap-12 
      scrn-1700:gap-10 
      scrn-1900:gap-12'>
        {features.map((feature, index) => (
          <Link key={index} href={`/services/${feature.slug}`} passHref>
            <div
              key={index}
              className='relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 
              w-32 
              scrn-400:w-44 
              scrn-500:w-52
              scrn-700:w-64
              scrn-750:w-72
               scrn-800:w-72
               scrn-900:w-80 
               scrn-1000:w-96 
               scrn-1100:w-116 
               scrn-1200:w-64 
               scrn-1350:w-72
               scrn-1500:w-80
               scrn-1700:w-96
               scrn-1900:w-110'
            >
              {/* Image Display */}
              <div className='flex flex-col items-center justify-center 
              h-16 
              scrn-400:h-20 
              scrn-450:h-24 
              scrn-500:h-28 
              scrn-600:h-32 
              scrn-700:h-28
              scrn-800:h-28
              scrn-900:h-32 
              scrn-1000:h-32 
              scrn-1100:h-40 
              scrn-1200:h-48 
              scrn-1400:h-52
              scrn-1500:h-60  
              scrn-1700:h-72 
              scrn-1900:h-72'
              >
                {/* <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className='scrn-400:w-2/3 object-contain'
                /> */}
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={400} // Replace with actual width
                  height={200} // Replace with actual height
                  className="scrn-400:w-2/3 object-contain"
                />
              </div>

              {/* Description (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-0 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                <p className='text-gray-700 text-center overflow-y-auto max-h-48 px-4 text-xs scrn-600:text-sm scrn-800:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2500:text-4xl'>
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* ✅ Larger External Box with Centered Logo */}
        <a
          href="https://metalproducts.vercel.app/" // Replace with actual URL
          target="_blank"
          rel="noopener noreferrer"
          className='relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 
          w-60
          scrn-400:w-72
          scrn-500:w-72
          scrn-600:w-80
          scrn-700:w-96
          scrn-800:w-96
          scrn-900:w-120 
          scrn-1000:w-124
          scrn-1100:w-132
          scrn-1200:w-160
          scrn-1400:w-180
          scrn-1500:w-198
          scrn-1700:w-208
          scrn-1900:w-160
          h-36
          scrn-400:h-36
          scrn-450:h-40
          scrn-500:h-48
          scrn-600:h-44 
          scrn-800:h-48
          scrn-950:h-52
          scrn-1000:h-80
          scrn-1100:h-72
          scrn-1150:h-80
          scrn-1200:h-96
          scrn-1400:h-118
          scrn-1500:h-124
          scrn-1900:h-136
          flex-shrink-0'
        >
          {/* Logo - centered vertically and horizontally */}
          <div className='flex items-center justify-center h-full'>
            <Image
              src="/servicesLogos/Logo_MPC_Main.webp"
              alt="External Partner"
              width={5830}
              height={1858}
              className="w-full px-4 object-contain"
            />
          </div>

          {/* Description on Hover */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
            <p className='text-gray-700 text-center overflow-y-auto max-h-48 text-xs scrn-600:text-sm scrn-800:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2500:text-4xl'>
              Visit Metal Products Company website
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MainServices;
