import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({
  children,
  variant,
  size,
}: {
  children: React.ReactNode;
  variant?: "outline";
  size?: "lg";
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const sizeClasses = size === "lg" ? "px-8 py-3" : "px-4 py-2";

  const variantClasses =
    variant === "outline"
      ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      : "bg-sky-500 text-primary-foreground hover:bg-sky-500/90 text-white";

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

const SectionOne = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-b from-gray-50 to-sky-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:text-left text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
              予約から受付・決済、顧客管理まで
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-sky-500 mb-6">
              顔ひとつで。
            </h1>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://www.meeeetup.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size={"lg"}>View Services</Button>
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size={"lg"} variant={"outline"}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-banner.webp"
              alt="MeeeetUp platform on mobile and tablet devices"
              width={1000}
              height={1000}
              className="rounded-lg "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
