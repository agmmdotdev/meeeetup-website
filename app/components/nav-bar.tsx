import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="MeeeetUp home"
        >
          <Image
            src="/meeeetup.png"
            alt="MeeeetUp logo"
            width={120}
            height={28}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-gray-700 underline underline-offset-4 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="https://www.meeeetup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 underline underline-offset-4 hover:text-gray-900"
          >
            Service
          </Link>
          <Link
            href="#company"
            className="text-gray-700 underline underline-offset-4 hover:text-gray-900"
          >
            Company
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-300 px-4 py-1.5 text-gray-700 underline underline-offset-4 hover:bg-gray-50 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
