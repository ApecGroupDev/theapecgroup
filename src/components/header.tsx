"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Team", path: "/our-team" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/petroleum-companies-jobs" },
  { label: "Blog", path: "/blogs" },
  { label: "Contact", path: "/contact-us" },
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

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setVisible(current < 10 || current < lastScrollY.current);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931] to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28 relative">
          {/* Logo — larger, with subtle glow */}
          <Link href="/" className="flex-shrink-0 relative group">
            <div className="absolute -inset-3 rounded-xl blur-md transition-all duration-300" />
            <Image
              src="/logos/APEC.webp"
              alt="APEC Group"
              width={227}
              height={208}
              className="relative w-auto h-16 lg:h-20 xl:h-24 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav — absolutely centered */}
          <nav className="hidden xl:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 uppercase">
            {NAV_LINKS.map(({ label, path }) =>
              label === "Services" ? (
                <div
                  key={path}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    href={path}
                    className={`flex items-center gap-1 font-bold transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                      isActive(path)
                        ? "text-white/80"
                        : "text-white hover:text-[#c62931]"
                    }`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-200 ${showDropdown ? "rotate-180 text-[#c62931]" : ""}`}
                    />
                  </Link>
                  {isActive(path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#c62931]" />
                  )}

                  {/* Dropdown — has padding-top bridge to prevent gap from closing it */}
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                      showDropdown
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="w-72 border border-white/[0.08] bg-[#0a0a0a] rounded-2xl py-2 overflow-hidden shadow-2xl">
                      {SERVICES_DROPDOWN.map(({ label, href, external }) => (
                        <Link
                          key={href}
                          href={href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          onClick={() => setShowDropdown(false)}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-[#c62931]/10 transition-all duration-200 group"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#c62931] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className={`relative font-medium transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                    isActive(path)
                      ? "text-white"
                      : "text-white hover:text-[#c62931]"
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c62931]" />
                  )}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="tel:8554442732"
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              <Phone className="w-3.5 h-3.5" />
              855-444-2732
            </a>
            <Link
              href="/contact-us#MainContactForm"
              scroll={false}
              className="group inline-flex items-center gap-2 bg-[#c62931] hover:bg-[#a8232a] text-white font-medium text-xs tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(198,41,49,0.5)]"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile — phone + hamburger */}
          <div className="flex xl:hidden items-center gap-3">
            <a
              href="tel:8554442732"
              className="flex items-center gap-2 bg-[#c62931] text-white text-xs font-bold px-4 py-2.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden scrn-350:block">Free Consultation</span>
              <span className="scrn-350:hidden">Call</span>
            </a>
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 text-white hover:border-white/40 transition-all duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/[0.06] bg-[#0a0a0a]/98 backdrop-blur-md px-4 py-4">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className={`flex uppercase items-center justify-between py-3 border-b border-white/[0.05] last:border-0 text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive(path)
                  ? "text-[#c62931]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
              {isActive(path) && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#c62931]" />
              )}
            </Link>
          ))}

          <div className="mt-3 pt-3 border-t border-white/[0.05]">
            <p className="font-bold tracking-[0.2em] uppercase text-white/75 mb-3">
              Our Services
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES_DROPDOWN.map(({ label, href, external }) => (
                <Link
                  key={href}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setIsOpen(false)}
                  className="text-white uppercase py-2 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
