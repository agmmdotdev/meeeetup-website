"use client";

import React from "react";
import Image from "next/image";

const VisionSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Image Card */}
        <div className="overflow-hidden rounded-3xl bg-slate-900/5">
          <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[460px]">
            <Image
              src="/the-overlay.png"
              alt="MeeeetUp Vision"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Copy */}
        <div className="mt-10 sm:mt-12">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-9 w-1 rounded-full bg-sky-500" />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                すべての人が、顔ひとつで社会とつながる世界を
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            私たちは、顔認証を基盤に、人と人、人と社会をなめらかにつなぎ、
            誰もが安心して必要なサービスや出会いにアクセスできる世界を実現します。
          </p>

          <div className="mt-8">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-300 transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              View Services
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
