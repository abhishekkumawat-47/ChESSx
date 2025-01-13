"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    setIsVisible(false);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-950 font-sans text-lg">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/Logoo.png" className="h-10 rounded-full" alt="Logo" />
          <span className="self-center  text-2xl font-medium whitespace-nowrap dark:text-white">
            ChESS<span className="text-yellow-400">xIITP</span>
          </span>
        </Link>

        {/* User Actions */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <SignedOut>
            <SignInButton className="lg:px-4 lg:py-1 md:px-3 md:py-1 px-2 py-1 bg-yellow-500 font-medium hover:opacity-90 text-black rounded-full  ease-linear duration-100" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* Hamburger Menu */}
          <button
            onClick={toggleVisibility}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-800"
            aria-controls="navbar-user"
            aria-expanded={isVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isVisible ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-900">
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-black bg-yellow-500  hover:text-yellow-600 rounded md:bg-transparent md:text-yellow-400 md:p-0 md:dark:text-yellow-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-900"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-900"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-900"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 
                dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent 
                dark:border-gray-900"
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
