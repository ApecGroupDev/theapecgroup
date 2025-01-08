"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { usePathname } from 'next/navigation'; // For accessing the current pathname

const Header: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`bg-transparent text-white fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        {/* <div className="flex items-center mb-4 md:mb-0">
          <Image src="/logos/APEC.png" alt="Logo" width={90} height={0} />
        </div> */}

        {/* Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navigation Links */}
        <nav className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex flex-grow justify-center`}>
          {['/', '/about', '/team', '/services', '/careers', '/blog', '/contact'].map((path) => (
            <Link key={path} href={path} className={`text-gray-900 hover:text-red-600 transition-colors duration-200 font-semibold relative ${pathname === path ? 'text-red-600' : ''}`}>
              {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
              {pathname === path && (
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-600" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;