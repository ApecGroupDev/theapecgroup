import React from "react";
import { FaUsers, FaTasks, FaHandshake } from "react-icons/fa";

interface FeatureBox {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureBox[] = [
  {
    title: "TEAM",
    description:
      "“The truth is that teamwork is at the heart of great achievement” – John C. Maxwell. At the APEC group we are laser focused on recruiting and nourishing the best talent. To form an unbeatable team, we must provide not only a learning environment for our enthusiastic new team members but also culture for existing team members to grow their experience and capabilities too. Our diverse, motivated team requires a safe, stable work environment for them to flourish. The importance of a loyal, dedicated team is foundational at APEC.",
    icon: <FaUsers className="text-5xl text-red-600" />,
  },
  {
    title: "EXECUTION",
    description:
      "“You can’t build a reputation on what you are going to do” – Henry Ford. With the goal of delivering incredible results that amaze our customers, APEC is committed to providing the very best execution on the management of our projects and services. This is easy to say, not so easy to do. A deep analysis of each project, constant communications with our customers, and an organized, foresight mentality to uncover unforeseen challenges is the key to our success. There’s a distinct reason we’re growing at the rate we are and our execution is at the heart of it.",
    icon: <FaTasks className="text-5xl text-red-600" />,
  },
  {
    title: "CUSTOMER",
    description:
      "“Get closer than ever to your customers. So close that you tell them what they need well before they realize it themselves” – Steve Jobs. One thing that clearly separates APEC from other petroleum equipment companies across the nation is that we don’t just sell solutions. Our ownership has years of experience being a retailer, which helps us know our customer’s needs first-hand. Add to this our team’s diversity, which is our Superpower. It’s this diversity that connects us to our customer’s culture, and their language. This is a true differentiator for us and our customers too.",
    icon: <FaHandshake className="text-5xl text-red-600" />,
  },
];

const FeatureBoxes: React.FC = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">WHY APEC?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what makes APEC unique and why our team, execution, and customer-first approach set us apart.
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 transform hover:scale-105"
          >
            {/* Icon and Title */}
            <div className="flex flex-col items-center justify-center h-72">
              {feature.icon}
              <h3 className="text-2xl font-bold text-center mt-4 text-gray-800">
                {feature.title}
              </h3>
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
    </section>
  );
};

export default FeatureBoxes;
