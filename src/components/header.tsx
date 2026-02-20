"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  white?: boolean; // true = white nav text (all pages), false/omitted = dark nav text (landing page)
}

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about-us" },
  { label: "TEAM", path: "/our-team" },
  { label: "SERVICES", path: "/services" },
  { label: "CAREERS", path: "/petroleum-companies-jobs" },
  { label: "BLOG", path: "/blogs" },
  { label: "CONTACT", path: "/contact-us" },
];

const SERVICES_DROPDOWN = [
  {
    label: "Gas Station Construction",
    href: "/services/gas-station-construction",
  },
  {
    label: "Canopy Imaging Solutions",
    href: "/services/canopy-imaging-solutions",
  },
  {
    label: "Fuel Tanks Manufacturing",
    href: "https://metalproductsusa.com",
    external: true,
  },
  { label: "Gas Station Financing", href: "/services/gas-station-financing" },
  { label: "Gas Station Electrical", href: "/services/gas-station-electrical" },
  {
    label: "Environmental Compliance Solutions",
    href: "/services/environmental-compliance-solutions",
  },
];

const Header: React.FC<HeaderProps> = ({ white = false }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // The only difference between variants: nav link text color
  const navTextColor = white ? "text-white" : "text-gray-900";

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1000);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && isLargeScreen) {
        const currentScrollY = window.scrollY;
        setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLargeScreen]);

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
    if (showSearch) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearch]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header
      className={`bg-transparent max-w-[2560px] fixed top-0 w-full z-30 transition-transform duration-300 ${
        isLargeScreen ? (isVisible ? "top-0" : "top-full") : "top-0"
      }`}
    >
      {/* Mobile Header */}
      <div className="lg:hidden container min-w-full relative flex items-center p-1 sm:p-2">
        <Link href="/">
          <Image
            src="/logos/APEC.webp"
            alt="Logo"
            width={116}
            height={106}
            className="h-24 sm:h-28 w-auto"
          />
        </Link>

        <div className="absolute right-4 top-12 sm:top-11 -translate-y-1/2 flex items-center gap-2">
          <a
            href="tel:855-444-2732"
            className="flex items-center gap-2 bg-[#c62931] text-white p-2 crn-600:p-4 rounded-md hover:bg-red-500 transition"
          >
            <FaPhoneAlt className="text-sm sm:text-lg" />
            <span className="text-sm hidden scrn-350:block">
              FREE CONSULTATION
            </span>
            <span className="text-sm scrn-350:hidden">FREE</span>
          </a>

          <button
            className="text-[#c62931] focus:outline-none z-20 flex items-center"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <span className="text-6xl leading-none">×</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
        </div>

        <nav
          className={`absolute left-0 right-0 top-20 bg-white/30 backdrop-blur-md p-6 rounded-md z-10 transition-all duration-300 ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`block text-lg font-medium tracking-widest py-2 transition-colors duration-200 ${
                isActive(path)
                  ? "text-[#c62931]"
                  : "text-gray-800 hover:text-[#c62931]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-3 items-center px-6 py-1">
        {/* Left: Logo */}
        <div className="flex items-center sm:hidden">
          <Link href="/">
            <Image
              src="/logos/APEC.webp"
              alt="Logo"
              width={116}
              height={106}
              className="w-auto lg:h-24 xl:h-28 2xl:h-32"
            />
          </Link>
        </div>
        <div className="items-center hidden sm:flex">
          <Link href="/">
            <Image
              src="/logos/APEC.webp"
              alt="Logo"
              width={227}
              height={208}
              className="w-auto lg:h-24 xl:h-28 2xl:h-32"
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="flex z-10 justify-center space-x-8 -mt-10 2xl:-mt-14">
          {NAV_LINKS.map(({ label, path }) =>
            label === "SERVICES" ? (
              <div
                key={path}
                className="relative group"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="relative flex items-center gap-1">
                  <Link
                    href={path}
                    className={`capitalize md:text-xs lg:text-base hover:text-red-500 transition-colors duration-200 relative flex items-center gap-1 ${
                      pathname.startsWith(path) ? "text-red-400" : navTextColor
                    }`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-200 ${
                        showDropdown
                          ? "rotate-180 text-red-400"
                          : `${white ? "" : ""} group-hover:text-[#c62931]`
                      }`}
                    />
                  </Link>
                  {pathname.startsWith(path) && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#c62931]" />
                  )}
                </div>

                {showDropdown && (
                  <div className="absolute top-full w-auto text-nowrap bg-white/50 backdrop-blur-sm rounded-md py-2 z-50">
                    {SERVICES_DROPDOWN.map(({ label, href, external }) => (
                      <Link
                        key={href}
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#c62931] hover:text-white rounded-md"
                        onClick={() => setShowDropdown(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={path}
                href={path}
                className={`capitalize md:text-xs lg:text-base hover:text-red-500 transition-colors duration-200 relative ${
                  isActive(path) ? "text-red-400" : navTextColor
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500" />
                )}
              </Link>
            ),
          )}
        </nav>

        {/* Right: CTA */}
        <div className="flex justify-end -mt-10 2xl:-mt-14">
          <Link
            className="hidden xl:flex items-center gap-2 bg-[#c62931] text-white py-2 px-4 rounded-md hover:bg-red-500 transition"
            href="/contact-us#MainContactForm"
            scroll={false}
          >
            <FaPhoneAlt className="text-lg" />
            FREE CONSULTATION
          </Link>
          <Link
            className="flex xl:hidden items-center gap-2 bg-[#c62931] text-white py-2 px-8 rounded-md hover:bg-red-500 transition"
            href="/contact-us#MainContactForm"
            scroll={false}
          >
            <FaPhoneAlt className="text-lg" />
            FREE
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
