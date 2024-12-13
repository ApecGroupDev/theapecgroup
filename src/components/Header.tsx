'use client';

import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex justify-center py-4">
        <div className="text-2xl font-bold text-gray-800">LOGO</div>
      </div>

      {/* Navigation Section */}
      <nav className="relative">
        <button
          className="block md:hidden absolute top-6 right-6 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul
          className={`flex flex-col md:flex-row justify-center items-center md:space-x-8 md:static absolute top-16 left-0 w-full bg-white md:bg-transparent transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
            }`}
        >
          <li className="py-2 md:py-0">
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/about-us" className="text-gray-800 hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/our-team" className="text-gray-800 hover:text-blue-500">
              Our Team
            </Link>
          </li>
          <li className="relative group py-2 md:py-0">
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer">
              APEC Services
            </span>
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md hidden group-hover:block">
              <li>
                <Link
                  href="/services/service1"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Service 1
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service2"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Service 2
                </Link>
              </li>
              <li>
                <Link
                  href="/services/service3"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Service 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/careers" className="text-gray-800 hover:text-blue-500">
              Careers
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/blog" className="text-gray-800 hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-blue-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
