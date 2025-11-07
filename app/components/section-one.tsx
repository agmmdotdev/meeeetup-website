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
      : "bg-sky-500 text-white hover:bg-sky-600";

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses}`}>
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

const SectionOne = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-sky-100">
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
              <h1 className="text-5xl md:text-7xl font-bold text-sky-500 leading-tight">
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
            0%, 100% { d: path('M0,40L60,35C120,30,240,20,360,25C480,30,600,40,720,35C840,30,960,20,1080,25C1200,30,1320,40,1380,35L1440,30L1440,60L0,60Z'); }
            50% { d: path('M0,20L60,15C120,10,240,0,360,5C480,10,600,20,720,15C840,10,960,0,1080,5C1200,10,1320,20,1380,15L1440,10L1440,60L0,60Z'); }
          }
          .scrolling-text {
            animation: scroll-left 20s linear infinite;
            white-space: nowrap;
          }
        `}</style>
        {/* Wavy SVG Top Edge - Creates transition from hero to blue section */}
        <svg
          className="block w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <defs>
            <clipPath id="wavy-clip">
              <path d="M0,40L60,35C120,30,240,20,360,25C480,30,600,40,720,35C840,30,960,20,1080,25C1200,30,1320,40,1380,35L1440,30L1440,60L0,60Z" />
            </clipPath>
          </defs>
          {/* Wave Layer - fills from top with wavy edge */}
          <path
            d="M0,40L60,35C120,30,240,20,360,25C480,30,600,40,720,35C840,30,960,20,1080,25C1200,30,1320,40,1380,35L1440,30L1440,60L0,60Z"
            fill="#0ea5e9"
            style={{
              animation: "wave1 8s ease-in-out infinite",
            }}
          />
        </svg>
        {/* Scrolling Text - Inside blue area below wave */}
        <div className="bg-sky-500 py-6 md:py-8 flex items-center">
          <div className="scrolling-text text-2xl md:text-2xl font-semibold text-white opacity-90">
            顔認識で変わる、イベント体験　•　人と人をつなぎ、最高のひとときをつくる　•　顔認識で変わる、イベント体験　•　人と人をつなぎ、最高のひとときをつくる　•
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
