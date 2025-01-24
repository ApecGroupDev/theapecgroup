"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi"; // Importing a search icon

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-transparent fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container min-w-full relative flex items-center py-4">
        {/* Search Icon (left side on mobile) */}
        <button
          className="md:hidden ms-2 md:ml-4 xl:ml-6 mac-16:ml-8 2xl:ml-10 p-3 me-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-all duration-200 text-red-600"
          aria-label="Search"
        >
          <FiSearch className="text-2xl" />
        </button>

        {/* Centered Logo (mobile view) */}
        <div className="absolute inset-0 flex justify-center items-center md:hidden">
          <Link href="/">
            <img
              src="/logos/APEC.png"
              alt="Logo"
              className="h-20" // Adjust size as needed
            />
          </Link>
        </div>


        {/* Logo Section (hidden on mobile) */}
        <div
          className={`absolute md:left-4 md:top-8 xl:left-6 xl:top-10 mac-16:top-14 mac-16:left-6 2xl:left-14 2xl:top-16 2k:left-8 2k:top-20 transform -translate-y-1/2 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
            } hidden md:block`}
        >
          <Link href="/">
            <img src="/logos/APEC.png" alt="Logo" className="md:h-16 xl:h-20 mac-16:h-24 2xl:h-28 2k:h-32" />
          </Link>
        </div>

        {/* Menu Button */}
        <button
          className="absolute right-4 top-10 transform -translate-y-1/2 text-red-600 focus:outline-none md:hidden z-20"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span className="text-5xl">×</span> // Close Icon
          ) : (
            <svg // Hamburger Icon
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`flex flex-col sm: items-start space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:mx-auto transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            } md:max-h-none md:opacity-100`}
        >
          {/* Frosted Background */}
          <div
            className={`absolute inset-0 bg-gray-100 bg-opacity-100 p-4 rounded-3xl z-10 transform transition-all duration-200 ease-out ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} md:hidden`}
            onClick={toggleMenu}
          ></div>

          {[
            "/",
            "/about",
            "/team",
            "/services",
            "/careers",
            "/blog",
            "/contact",
          ].map((path) => (
            <Link
              key={path}
              href={path}
              className={`md:text-xs lg:text-base mac-14:text-lg mac-16:text-lg xl:text-base 2xl:text-xl text-gray-900 hover:text-red-600 transition-colors duration-200 relative ${pathname === path ? "text-red-600" : ""
                } z-20`}
              onClick={() => setIsOpen(false)}
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              {pathname === path && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600" />
              )}
            </Link>
          ))}
        </nav>

        {/* Search Icon */}
        <button
          className="hidden md:block ml-auto md:ml-4 xl:ml-6 mac-16:ml-8 2xl:ml-10 p-3 px-6 me-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-all duration-200 text-red-600"
          aria-label="Search"
        >
          <FiSearch className="text-xl mac-16:text-2xl 2xl:text-3xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
