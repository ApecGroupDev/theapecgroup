import React from "react";
import { FaUsers, FaTasks, FaHandshake, FaCogs, FaChartLine } from "react-icons/fa";

interface FeatureBox {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureBox[] = [
  {
    title: "TEAM",
    description: "“The truth is that teamwork is at the heart of great achievement” – John C. Maxwell.",
    icon: <FaUsers className="md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "EXECUTION",
    description: "“You can’t build a reputation on what you are going to do” – Henry Ford.",
    icon: <FaTasks className="md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "CUSTOMER",
    description: "“Get closer than ever to your customers.” – Steve Jobs.",
    icon: <FaHandshake className="md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "EXPERIENCE",
    description: "“Experience is the teacher of all things” – Julius Caesar.",
    icon: <FaChartLine className="md:text-2xl lg:text-4xl text-red-600" />,
  },
  {
    title: "SERVICE",
    description: "“Great customer service means honoring the customer” – Chris LoCurto.",
    icon: <FaCogs className="md:text-2xl lg:text-4xl text-red-600" />,
  },
];

const FeatureBoxes: React.FC = () => {
  return (
    <div className="bg-transparent md:px-24">
      {/* Section Title */}
      <div className="text-center">
        <p className="md:text-3xl w-900:text-5xl lg:text-5xl xl:text-6xl mac-14:text-7xl mac-16:text-7xl 2xl:text-8xl 2k:text-8xl font-extrabold text-gray-800 mb-4">
          WHY CHOOSE<span className="text-red-600"> APEC?</span>
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 gap-8 mac-16:mt-12 2xl:mt-16">
        {/* First Row: 3 Boxes */}
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="relative mx-auto group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all md:w-10/12 lg:w-11/12 xl:w-10/12 mac-14:w-11/12 2xl:w-9/12 duration-500"
          >
            <div className="flex flex-col items-center justify-center md:h-20 w-900:h-32 lg:h-40 xl:h-52 mac-14:h-60 mac-16:h-72 2xl:h-80 2k:h-96">
              {feature.icon}
              <h3 className="md:text-sm lg:text-xl 2xl:text-2xl font-bold text-center mt-4 text-gray-800">{feature.title}</h3>
            </div>

            {/* Description (Hidden by default, revealed on hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <p className="text-lg lg:text-md text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* Second Row: 2 Boxes (Centered) */}
        <div className="flex flex-wrap justify-center gap-14 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:gap-24 mac-14:gap-32 mac-16:gap-24 2xl:col-span-3 2xl:gap-44">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 w-full sm:w-1/2 md:w-1/4 lg:w-3/12"
            >
              <div className="flex flex-col items-center justify-center md:h-20 w-900:h-32 lg:h-40 xl:h-52 mac-14:h-60 mac-16:h-72 2xl:h-80 2k:h-96">
                {feature.icon}
                <h3 className="md:text-sm lg:text-xl xl:text-2xl font-bold text-center mt-4 text-gray-800">{feature.title}</h3>
              </div>

              {/* Description (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                <p className="md:text-sm lg:text-lg text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBoxes;
