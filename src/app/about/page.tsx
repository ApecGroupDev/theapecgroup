import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 pt-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-md">
          About Us
        </h1>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The APEC Group began its journey as Atlanta Petroleum Equipment Company in 1989. What started as a small service company has grown into a leader in the petroleum equipment industry, offering a full range of services, including installation, repair, and support.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Over the years, APEC has consistently delivered high-quality products and services, staying at the forefront of industry advancements. Our commitment to innovation and excellence ensures we meet the evolving needs of our clients while maintaining our reputation as trusted experts in the field.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and Values Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with reliable, innovative, and efficient petroleum equipment solutions that drive success and ensure operational excellence.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and innovative partner in the petroleum equipment industry, leading with cutting-edge technology, exceptional service, and sustainable practices.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-gray-700">Customer Commitment</h3>
                <p className="text-gray-600">Delivering value, quality, and reliability with every project.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-700">Innovation</h3>
                <p className="text-gray-600">Embracing advancements to offer the best solutions.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-700">Integrity</h3>
                <p className="text-gray-600">Building trust through transparency and professionalism.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-700">Excellence</h3>
                <p className="text-gray-600">Striving for perfection in everything we do.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose APEC Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-xl p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Why Choose APEC Group?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Today, APEC Group offers a diverse range of services, including canopy imaging and installation, environmental compliance inspections, C-store renovations, EV charging solutions, remote site monitoring, and digital marketing for dispensers. We also provide tailored financing options to help you grow your business.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With offices in Atlanta, Georgia, and Houston, Texas, we are dedicated to serving businesses nationwide with unparalleled expertise and commitment.
          </p>
          <p className="text-lg text-gray-700 font-medium text-center">
            Let us partner with you to build success for your business. What can we do for you today?
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
