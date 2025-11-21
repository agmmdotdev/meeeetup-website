"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200 bg-white"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="MeeeetUp home"
          onClick={closeMobileMenu}
        >
          <Image
            src="/meeeetup.png"
            alt="MeeeetUp logo"
            width={140}
            height={32}
            priority
            className="h-auto w-32 lg:w-36"
          />
          <span className="hidden text-sm text-gray-600 lg:inline">
            Face Recognition Platform
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-brand-blue-600 transition-colors hover:text-brand-blue-700"
          >
            Home
          </Link>
          <Link
            href="https://www.meeeetup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            href="/recruitments"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Recruitment
          </Link>
          <Link
            href="/articles"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            News
          </Link>
        </nav>

        {/* Desktop Contact Us Button */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 md:inline-block"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1.5 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-current transition-all duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-current transition-all duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[73px] z-40 bg-white transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        <nav className="flex flex-col px-6 py-8">
          <Link
            href="/"
            className="border-b border-gray-200 py-4 text-base font-medium text-brand-blue-600 transition-colors hover:text-brand-blue-700"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="https://www.meeeetup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gray-200 py-4 text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/recruitments"
            className="border-b border-gray-200 py-4 text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            Recruitment
          </Link>
          <Link
            href="/articles"
            className="border-b border-gray-200 py-4 text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            News
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-md border border-gray-300 px-6 py-3 text-center text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
