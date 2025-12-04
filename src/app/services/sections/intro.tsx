"use client";

import React from "react";

const IntroServices: React.FC = () => {
  return (
    <div className='flex flex-col items-center sm:justify-center h-auto w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Introductory Paragraph */}
      <div className="mt-12">
        <p className="tracking-wider text-lg">
          At <span className="apec-red font-semibold">The APEC Group</span>, we don’t just provide petroleum equipment — we deliver peace of mind. From <span className="apec-red font-semibold">environmental compliance</span> to <span className="apec-red font-semibold">gas station construction, financing, electricals, and canopy solutions</span>, we’re your one-stop partner for building and growing a profitable, future-proof petroleum business.
        </p>
      </div>

      <div className="h-auto pt-12 sm:pt-16 md:pt-20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Why <span className="text-[#c62931]">Choose APEC?</span>
        </h2>

        {/* Feature List */}
        {(() => {
          const features = [
            {
              title: 'END-TO-END SOLUTIONS',
              description:
                'From inspection and compliance to financing and construction — all under one trusted roof.',
            },
            {
              title: 'EXPERTISE THAT SAVES YOU MILLIONS',
              description:
                'Over 30 years of proven success helping gas station owners avoid fines, delays, and costly mistakes.',
            },
            {
              title: 'SUSTAINABILITY FIRST',
              description:
                'Our services help you meet environmental regulations without the headaches.',
            },
            {
              title: 'FINANCING THAT WORKS FOR YOU',
              description:
                'Flexible funding options so you can build or upgrade your station without cash flow worries.',
            },
            {
              title: 'FAST, EFFICIENT EXECUTION',
              description:
                'We deliver on time and on budget. Every time.',
            },
          ];

          return (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-[#c62931] font-bold text-lg md:text-xl mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 lg:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default IntroServices;
