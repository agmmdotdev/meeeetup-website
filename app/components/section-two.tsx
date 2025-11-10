import Image from "next/image";
import React from "react";

const tag = "サービス概要";
const header = "顔認証を基盤とした社会インフラ";
const subHeader =
  "世の中のあらゆる煩雑な、情報入力・本人確認・情報共有の作業をなくし、あらゆるオフライン体験をなめらかにアップグレードします。";

const SectionTwo: React.FC = () => {
  return (
    <section id="service" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <Image
              src="/section-two-banner.webp"
              alt="Woman using a tablet for facial recognition"
              width={1000}
              height={620}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Right: Text content */}
          <div className="md:text-left">
            <span className="inline-block rounded-full bg-brand-blue-100 px-4 py-2 text-sm font-semibold text-brand-blue-700">
              {tag}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              {header}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              {subHeader}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
