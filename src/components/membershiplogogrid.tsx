import React from "react";

const associations = [
  { src: "/associations/ARA.png", alt: "ARA - Atlanta Retailers Association", name: "Atlanta Retailers Association" },
  { src: "/associations/GACS.png", alt: "GACS - Georgia Association of Convenience Stores", name: "Georgia Association of Convenience Stores" },
  { src: "/associations/GHRA.png", alt: "GHRCA - Greater Houston Retailers Cooperative Association, Inc.", name: "Greater Houston Retailers Cooperative Association, Inc." },
  { src: "/associations/GOA.png", alt: "GOA - Georgia Oilman’s Association", name: "Georgia Oilman’s Association" },
  { src: "/associations/GTEC.png", alt: "GTEC - Georgia Tank Environmental Contractors Association", name: "Georgia Tank Environmental Contractors Association" },
  { src: "/associations/PEI.png", alt: "PEI - Petroleum Equipment Institute", name: "Petroleum Equipment Institute" },
  { src: "/associations/TFFA.png", alt: "TFFA - Texas Food & Fuel Association", name: "Texas Food & Fuel Association" },
];

const splitText = (text: string, maxWords: number): [string, string] => {
  const words = text.split(" ");
  const firstLine = words.slice(0, maxWords).join(" ");
  const secondLine = words.slice(maxWords).join(" ");
  return [firstLine, secondLine]; // Return both lines as an array
};

const MembershipLogosGrid: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Proud Member Of
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-4 sm:px-6 lg:px-8">
        {associations.map((association, index) => {
          const [firstLine, secondLine] = splitText(association.name, 3); // Destructure the two lines
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 transition:hover-105"
            >
              {/* Logo */}
              <img
                src={association.src}
                alt={association.alt}
                className="h-48 max-w-full object-contain mb-4"
                style={{ backgroundColor: "transparent" }}
              />
              {/* Company Name */}
              <p className="text-md text-gray-700 text-center font-normal">
                <span>{firstLine}</span>
                {secondLine && <span className="block">{secondLine}</span>}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MembershipLogosGrid;

