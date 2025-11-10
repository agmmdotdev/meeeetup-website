import Image from "next/image";
import Link from "next/link";
import React from "react";

const logoUrl = "/logo-white.png";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "https://www.meeeetup.com/", label: "Service" },
  { href: "/#company", label: "Company" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-400 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <Image src={logoUrl} alt="MeeeetUp" width={140} height={40} />
            <p className="mt-2 text-xs text-white/80">
              © 2025 MeeeetUp Inc. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
