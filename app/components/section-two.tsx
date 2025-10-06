import Image from "next/image";
import React from "react";

const header = "顔認証を基盤とした社会インフラ";

const subHeaderLine1 = "世の中のあらゆる煩雑な、";
const subHeaderLine2 = "情報入力・本人確認・情報共有の作業をなくし、";
const subHeaderLine3 = "あらゆるオフライン体験をなめらかに";
const subHeaderLine4 = "アップグレードします。";

const SectionTwo: React.FC = () => {
  return (
    <section id="service" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image with lock overlay */}
          <div className="relative">
            <Image
              src="/section-two-banner.webp"
              alt="Secure access on laptop with lock overlay"
              width={1000}
              height={620}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md" />
          </div>

          {/* Right: Text content */}
          <div className="md:text-left text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">{header}</h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
              {subHeaderLine1}
              <br />
              {subHeaderLine2}
              <br />
              {subHeaderLine3}
              <br />
              {subHeaderLine4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
