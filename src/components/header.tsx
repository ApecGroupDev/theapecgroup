import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex flex-col items-center py-6">
        <Image
          src="/logos/APEC-only.png"
          alt="APEC Logo"
          width={150}
          height={60}
          className="mb-4"
        />
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="/team" className="text-gray-700 hover:text-blue-500">
            Our Team
          </a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            APEC Services
          </a>
          <a href="/careers" className="text-gray-700 hover:text-blue-500">
            Careers
          </a>
          <a href="/blog" className="text-gray-700 hover:text-blue-500">
            Blog
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;