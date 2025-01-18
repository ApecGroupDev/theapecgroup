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
      className={`bg-transparent fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto relative flex items-center md:py-4">
        {/* Logo Section */}
        <div className="absolute md:left-4 md:top-8 xl:left-6 xl:top-10 mac-16:top-14 2xl:-left-14 2xl:top-16 2k:left-8 2k:top-20 transform -translate-y-1/2">
          <Link href="/">
            <img
              src="/logos/APEC.png"
              alt="Logo"
              className="md:h-16 xl:h-20 mac-16:h-24 2xl:h-28 2k:h-32"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 2xl:space-x-8 mx-auto`}
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
              className={`md:text-sm mac-14:text-lg mac-16:text-lg 2xl:text-xl text-gray-900 hover:text-red-600 transition-colors duration-200 relative ${pathname === path ? "text-red-600" : ""
                }`}
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              {pathname === path && (
                <span className="absolute left-0 right-0 md:top-5 mac-14:top-6 mac-16:top-6 2xl:top-7 bottom-0 h-0.5 bg-red-600" />
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
