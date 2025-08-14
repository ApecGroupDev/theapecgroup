"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  // const [searchOpen, setSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    checkScreenSize(); // Initial check

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      // if (!prev) setSearchOpen(false); // Close search if opening menu
      return !prev;
    });
  };

  // const toggleSearch = () => {
  //   setSearchOpen((prev) => {
  //     if (!prev) setIsOpen(false); // Close menu if opening search
  //     return !prev;
  //   });
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && isLargeScreen) {
        const currentScrollY = window.scrollY;
        setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isLargeScreen]);

  // Close search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        event.target instanceof Node &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  const [showDropdown, setShowDropdown] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header
      className={`bg-transparent max-w-[2560px] fixed top-0 w-full z-30 transition-transform duration-300 ${isLargeScreen
        ? isVisible
          ? "top-0"
          : "top-full"
        : "top-0" // Always show on mobile
        }`}
    >
      {/* Mobile Header */}
      <div className='scrn-1000:hidden container min-w-full relative flex items-center py-4'>
        {/* Search Icon (Left) */}
        {/* <button
          className='absolute mx-2 p-3 top-10 transform -translate-y-1/2 text-[#c62931] focus:outline-none z-20'
          onClick={toggleSearch}
          aria-label="Toggle Search"
        >
          {searchOpen ? (
            <FiX className='text-2xl' />
          ) : (
            <FiSearch className='text-2xl' />
          )}
        </button> */}
        {/* Search Input */}
        {/* <div
          className={`hidden absolute top-16 left-0 w-3/4 p-2 m-2 bg-white shadow-md rounded-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          <input
            type="text"
            placeholder="Search APEC"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full p-2 border rounded-md focus:outline-none'
          />
        </div> */}

        {/* Centered Logo */}
        <div className='absolute pt-12 scrn-600:pt-14 inset-0 flex justify-center items-center'>
          <Link href="/">
            <Image
              src="/logos/APEC.png"
              alt="Logo"
              width={1315}
              height={1206}
              className='h-24 scrn-600:h-28 w-auto'
            />
          </Link>
        </div>

        {/* Menu Button (Right) */}
        <button
          className='absolute right-4 top-10 transform -translate-y-1/2 text-[#c62931] focus:outline-none z-20'
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <span className='text-5xl'>×</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='h-8 w-8'
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`absolute left-0 right-0 top-20 bg-white/30 backdrop-blur-md p-6 rounded-md z-10 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          {[
            { label: "HOME", path: "/" },
            { label: "ABOUT", path: "/about-us" },
            { label: "TEAM", path: "/our-team" },
            { label: "SERVICES", path: "/services" },
            { label: "CAREERS", path: "/petroleum-companies-jobs" },
            { label: "BLOG", path: "/blogs" },
            { label: "CONTACT", path: "/contact-us" },
          ].map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`block text-lg font-medium tracking-widest py-2 transition-colors duration-200 ${isActive(path) ? "text-[#c62931]" : "text-gray-800 hover:text-[#c62931]"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Header - 3 Grid Layout */}
      <div className='hidden scrn-1000:grid grid-cols-3 items-center px-6 py-1'>
        {/* Left: Logo */}
        <div className='flex items-center'>
          <Link href="/">
            <Image
              src="/logos/APEC.png"
              alt="Logo"
              width={1315}
              height={1206}
              className='w-auto scrn-1000:h-24 scrn-1300:h-28 scrn-1600:h-32 scrn-1900:h-40 scrn-2200:h-48'
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="flex z-10 justify-center space-x-8 -mt-10 scrn-1600:-mt-14 scrn-1900:-mt-20 scrn-2200:-mt-28">
          {[
            { label: "HOME", path: "/" },
            { label: "ABOUT", path: "/about-us" },
            { label: "TEAM", path: "/our-team" },
            { label: "SERVICES", path: "/services" },
            { label: "CAREERS", path: "/petroleum-companies-jobs" },
            { label: "BLOG", path: "/blogs" },
            { label: "CONTACT", path: "/contact-us" },
          ].map(({ label, path }) =>
            label === "SERVICES" ? (
              <div
                key={path}
                className="relative group"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="relative">
                  <Link
                    href={path}
                    className={`capitalize scrn-750:text-xs scrn-1000:text-base text-gray-900 hover:text-[#c62931] transition-colors duration-200 relative ${pathname.startsWith(path) ? "text-red-800" : ""
                      }`}
                  >
                    {label}
                  </Link>
                  {pathname.startsWith(path) && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#c62931]" />
                  )}
                </div>

                {/* DROPDOWN MENU */}
                {showDropdown && (
                  <div className="absolute top-full w-auto text-nowrap bg-white/50 backdrop-blur-sm rounded-md py-2 z-50">
                    <Link
                      href="/services/gas-station-construction"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Gas Station Construction
                    </Link>
                    <Link
                      href="/services/canopy-imaging-solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Canopy Imaging Solutions
                    </Link>
                    <Link
                      href="https://metalproducts.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Fuel Tanks Manufacturing
                    </Link>
                    <Link
                      href="/services/gas-station-financing"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Gas Station Financing
                    </Link>
                    <Link
                      href="/services/gas-station-electrical"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Gas Station Electrical
                    </Link>
                    <Link
                      href="/services/environmental-compliance-solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Environmental Compliance Solutions
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={path}
                href={path}
                className={`capitalize scrn-750:text-xs scrn-1000:text-base text-gray-900 hover:text-[#c62931] transition-colors duration-200 relative ${(path === "/" ? pathname === "/" : pathname.startsWith(path))
                  ? "text-red-800"
                  : ""
                  }`}
              >
                {label}
                {(path === "/" ? pathname === "/" : pathname.startsWith(path)) && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#c62931]" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Right: Search Icon */}
        {/* <div className='hidden relative justify-end -mt-10 scrn-1600:-mt-14 scrn-1900:-mt-20 scrn-2200:-mt-28'>
          {showSearch ? (
            <input
              ref={searchRef}
              type="text"
              placeholder="Search APEC"
              className='p-2 rounded-full border z-50 border-gray-300 focus:border-[#c62931] focus:outline-none w-48 scrn-750:w-64 transition-all duration-200'
              autoFocus
            />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className='p-3 me-2 rounded-full bg-gray-100 hover:bg-[#c62931] hover:text-white transition-all duration-200 text-[#c62931]'
              aria-label="Search"
            >
              <FiSearch className='text-xl' />
            </button>
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
