"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/20 bg-white/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="MeeeetUp home"
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

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
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
            href="#recruitment"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Recruitment
          </Link>
          <Link
            href="#news"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            News
          </Link>
        </nav>

        {/* Contact Us Button */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
