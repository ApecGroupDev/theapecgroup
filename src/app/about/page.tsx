import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Content Section */}
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to our website! We are passionate about delivering the best service and experience to our customers. Our mission is to provide exceptional quality and ensure customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team is dedicated to innovation, collaboration, and excellence. We strive to make a positive impact in everything we do.
            </p>
            <p className="text-lg text-gray-600">
              Thank you for choosing us. We look forward to serving you and exceeding your expectations!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
