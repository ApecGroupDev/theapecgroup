import React from "react";

export const metadata = {
  title: "Petroleum Companies Jobs | APEC Careers",
  description: "Petroleum companies jobs at APEC offer careers in fuel systems, construction, compliance, and energy services. Join a trusted industry leader.",
};

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Gas Station Manager",
      location: "Atlanta, GA",
      description: "Oversee daily operations, manage staff, and ensure exceptional customer service at our gas station.",
      type: "Full-Time",
    },
    {
      title: "Fuel Delivery Driver",
      location: "Houston, TX",
      description: "Safely transport fuel to our locations and ensure timely delivery to customers.",
      type: "Full-Time",
    },
    {
      title: "Environmental Compliance Specialist",
      location: "Remote",
      description: "Ensure compliance with environmental regulations for our fuel and energy operations.",
      type: "Part-Time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Join Our Team</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We are committed to fostering an inclusive workplace that values diversity and promotes growth. Our company
          provides equal employment opportunities to all applicants and employees without regard to race, color, gender,
          religion, national origin, sexual orientation, age, veteran status, or disability.
        </p>
        <p className="text-center text-blue-600 hover:underline mb-12">
          <a href="#">View: Equal Employment Opportunity Policy</a>
        </p>

        {/* Job Openings Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <p className="text-sm text-gray-500 mb-2">Location: {job.location}</p>
                <p className="text-sm text-gray-500 mb-4">Type: {job.type}</p>
              </div>
              <button
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 self-start"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Why Work With Us Section */}
        <div className="bg-gray-100 p-8 rounded-lg mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Why Join Us?</h2>
          <p className="text-gray-600 mb-4">
            Our team is dedicated to excellence, innovation, and providing outstanding services to our customers. We
            believe in investing in our employees, offering opportunities for professional growth, leadership
            development, and career advancement.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Competitive salaries and comprehensive benefits packages.</li>
            <li>Opportunities for growth and professional development.</li>
            <li>Work with a team of passionate and skilled professionals.</li>
            <li>Innovative and dynamic work environment.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">
            For career inquiries, email us at
            <a
              href="mailto:careers@companyname.com"
              className="text-blue-600 hover:underline ml-1"
            >
              careers@companyname.com
            </a>
            .
          </p>
          <p className="text-center text-blue-600 hover:underline">
            <a href="#">View: Privacy Policy for Applicants</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
