"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white shadow">
      <div className="container mx-auto flex flex-col items-center py-6">
        <Image
          src="/logos/APEC-only.png"
          alt="APEC Logo"
          width={150}
          height={60}
          className="mb-4"
        />
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          className={`flex-col md:flex md:flex-row md:space-x-6 transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex`}
        >
          <a href="/" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Home
          </a>
          <a href="/about" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            About Us
          </a>
          <a href="/team" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Our Team
          </a>
          <a href="/services" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            APEC Services
          </a>
          <a href="/careers" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Careers
          </a>
          <a href="/blog" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Blog
          </a>
          <a href="/contact" className="my-2 md:my-0 text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;