import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import Wave from "./wave";

const Button = ({
  children,
  variant,
  size,
  icon,
}: {
  children: React.ReactNode;
  variant?: "outline";
  size?: "lg";
  icon?: boolean;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const sizeClasses = size === "lg" ? "px-8 py-3" : "px-4 py-2";

  const variantClasses =
    variant === "outline"
      ? "border-1 border-gray-800 bg-white hover:bg-gray-50 text-gray-800"
      : "bg-brand-blue-500 text-white hover:bg-brand-blue-600";

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses}`}>
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

const SectionOne = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-blue-50 to-brand-blue-100">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-12 md:pt-20 pb-32 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                予約から受付、決済、
                <br />
                顧客管理まで
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-brand-blue-500 leading-tight">
                顔ひとつで。
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-700 max-w-xl">
              顔認識を活用した次世代イベント体験プラットフォーム
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://www.meeeetup.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" icon>
                  View Services
                </Button>
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCeLr0_hbG8WAy4fvTDo39n_iEB7wf00aRjjWB580-OlFo5w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Devices */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/hero-banner.webp"
              alt="MeeeetUp platform on mobile and tablet devices"
              width={1000}
              height={1000}
              className="w-full max-w-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Logo Section - Wavy Transition with Text */}
      <div className="relative overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          @keyframes wave1 {
            0%, 100% { d: path('M0,25L60,20C120,15,240,5,360,10C480,15,600,25,720,20C840,15,960,5,1080,10C1200,15,1320,25,1380,20L1440,15L1440,60L0,60Z'); }
            50% { d: path('M0,10L60,6C120,3,240,0,360,2C480,6,600,16,720,10C840,6,960,0,1080,3C1200,6,1320,16,1380,10L1440,6L1440,60L0,60Z'); }
          }
          .scrolling-text {
            animation: scroll-left 20s linear infinite;
            white-space: nowrap;
          }
        `}</style>
        {/* Wavy SVG Top Edge - Creates transition from hero to blue section */}
        <svg
          className="block w-full text-brand-blue-500 -mb-px"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <defs>
            <clipPath id="wavy-clip">
              <path d="M0,25L60,20C120,15,240,5,360,10C480,15,600,25,720,20C840,15,960,5,1080,10C1200,15,1320,25,1380,20L1440,15L1440,60L0,60Z" />
            </clipPath>
          </defs>
          <path
            d="M0,25L60,20C120,15,240,5,360,10C480,15,600,25,720,20C840,15,960,5,1080,10C1200,15,1320,25,1380,20L1440,15L1440,60L0,60Z"
            fill="currentColor"
            style={{
              animation: "wave1 8s ease-in-out infinite",
            }}
          />
        </svg>
        {/* Scrolling Text - Inside blue area below wave */}
        <div className="bg-brand-blue-500 py-6 md:py-8 flex items-center">
          <div className="scrolling-text text-2xl md:text-2xl font-semibold text-white opacity-90">
            顔認識で変わる、イベント体験　•　人と人をつなぎ、最高のひとときをつくる　•　顔認識で変わる、イベント体験　•　人と人をつなぎ、最高のひとときをつくる　•
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
