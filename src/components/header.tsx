"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      className={`bg-transparent text-white fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto relative flex items-center py-12 px-6">
        {/* Logo Section */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Link href="/">
            <img
              src="/logos/APEC.png"
              alt="Logo"
              className="md:h-16 w-800:h-18 w-900:h-20 lg:h-24 2k:h-28 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mx-auto`}
        >
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
              className={`text-gray-900 hover:text-red-600 transition-colors duration-200 font-semibold relative ${pathname === path ? "text-red-600" : ""
                }`}
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              {pathname === path && (
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-600" />
              )}
            </Link>
          ))}
        </nav>

        {/* Menu Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
};

export default Header;
