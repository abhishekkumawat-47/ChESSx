"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  const handleClickOutside = useCallback((event) => {
    const navbar = document.getElementById("navbar-container");
    if (isVisible && navbar && !navbar.contains(event.target)) {
      setIsVisible(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible, handleClickOutside]);

  // Close menu on window resize (for desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const closeMenu = () => setIsVisible(false);

  const navLinks = [
    { href: "/", label: "Home", isActive: true },
    { href: "/about", label: "About", isActive: false },
    { href: "/events", label: "Events", isActive: false },
    { href: "/blog", label: "Blog", isActive: false },
    { href: "/contact", label: "Contact", isActive: false },
    { href: "/team", label: "Team", isActive: false }
  ];

  return (
    <nav
      id="navbar-container"
      className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-50 font-sans text-md 
      ${hasScrolled ? "top-5 opacity-100 translate-y-0" : "top-0 opacity-0 -translate-y-3 pointer-events-none"} 
      w-11/12 sm:w-4/5 md:w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-3/5 backdrop-blur-md bg-black/40 rounded-full shadow-lg`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <Image 
              src="/Logo.png" 
              fill 
              sizes="32px"
              className="rounded-full object-cover" 
              alt="Logo" 
              priority
            />
          </div>
          <span className="text-lg md:text-xl font-serif font-medium text-white">
            ChESS<span className="text-yellow-500">xIITP</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleVisibility}
          type="button"
          className="p-2 w-8 h-8 text-white rounded-lg md:hidden hover:bg-gray-100/20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-controls="navbar-user"
          aria-expanded={isVisible}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isVisible ? "rotate-90" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-black/75 rounded-lg shadow-lg md:shadow-none md:relative md:bg-transparent md:backdrop-blur-none md:mt-0 md:flex md:items-center transition-all duration-300 ease-in-out
          ${isVisible ? "opacity-100 scale-100 transform" : "opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto"}`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 md:flex-row md:space-x-1 lg:space-x-4">
            {navLinks.map(({ href, label, isActive }) => (
              <li key={href}>
                <Link
                  onClick={closeMenu}
                  href={href}
                  className={`block py-2 px-3 text-white rounded transition-colors duration-200
                    ${isActive 
                      ? "bg-yellow-500/20 text-yellow-400 md:bg-transparent" 
                      : "hover:bg-gray-100/20 md:hover:bg-transparent md:hover:text-yellow-400"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;