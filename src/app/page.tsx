import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-12">
      <h1 className="text-4xl font-bold text-center my-4">
        Welcome to APEC
      </h1>
      <p className="text-lg text-center mb-8">
        Your gateway to exceptional services and insightful information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p>
            Learn more about our mission and values, and how we serve our community.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Team</h2>
          <p>
            Meet the dedicated professionals behind APEC and their commitment to excellence.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <p>
            Discover the range of services we offer to help you succeed.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;