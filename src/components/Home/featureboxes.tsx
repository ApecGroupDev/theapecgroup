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
    icon: <FaUsers className="text-5xl text-red-600" />,
  },
  {
    title: "EXECUTION",
    description: "“You can’t build a reputation on what you are going to do” – Henry Ford.",
    icon: <FaTasks className="text-5xl text-red-600" />,
  },
  {
    title: "CUSTOMER",
    description: "“Get closer than ever to your customers.” – Steve Jobs.",
    icon: <FaHandshake className="text-5xl text-red-600" />,
  },
  {
    title: "EXPERIENCE",
    description: "“Experience is the teacher of all things” – Julius Caesar.",
    icon: <FaChartLine className="text-5xl text-red-600" />,
  },
  {
    title: "SERVICE",
    description: "“Great customer service means honoring the customer” – Chris LoCurto.",
    icon: <FaCogs className="text-5xl text-red-600" />,
  },
];

const FeatureBoxes: React.FC = () => {
  return (
    <section className="px-6 py-12 min-h-[70rem]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          WHY <span className="text-red-600">APEC?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what makes APEC unique and why our team, execution, and customer-first approach set us apart.
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 gap-8">
        {/* First Row: 3 Boxes */}
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500"
          >
            <div className="flex flex-col items-center justify-center h-40 lg:h-48 xl:h-64">
              {feature.icon}
              <h3 className="text-2xl font-bold text-center mt-4 text-gray-800">{feature.title}</h3>
            </div>

            {/* Description (Hidden by default, revealed on hover) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
              <p className="text-lg text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* Second Row: 2 Boxes (Centered) */}
        <div className="flex flex-wrap justify-center gap-14 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
            >
              <div className="flex flex-col items-center justify-center h-40 lg:h-48 xl:h-64">
                {feature.icon}
                <h3 className="text-2xl font-bold text-center mt-4 text-gray-800">{feature.title}</h3>
              </div>

              {/* Description (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 bg-white bg-opacity-95 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
                <p className="text-lg text-gray-700 text-center overflow-y-auto max-h-48 px-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
