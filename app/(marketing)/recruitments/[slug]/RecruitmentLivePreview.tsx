"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import { ArrowLeft, Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode, JSX } from "react";
import type { Media, Recruitment } from "payload-types";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

type Props = {
  initialJob: Recruitment;
};

const isMediaUpload = (value: Recruitment["headerImage"]): value is Media =>
  typeof value === "object" && value !== null && "url" in value;

function serialize(children: any): ReactNode {
  if (!Array.isArray(children)) {
    return null;
  }

  return children.map((node: any, i: number) => {
    if (!node) {
      return null;
    }

    if (node.type === "text") {
      let text = <span key={i}>{node.text}</span>;
      if (node.format & 1) {
        text = <strong key={i}>{text}</strong>;
      }
      if (node.format & 2) {
        text = <em key={i}>{text}</em>;
      }
      return text;
    }

    switch (node.type) {
      case "paragraph":
        return (
          <p key={i} className="mb-4 leading-relaxed text-gray-700">
            {serialize(node.children)}
          </p>
        );
      case "list": {
        const Tag = node.listType === "ordered" ? "ol" : "ul";
        return (
          <Tag
            key={i}
            className={`mb-6 pl-5 ${
              node.listType === "ordered" ? "list-decimal" : "list-disc"
            } space-y-2 text-gray-700`}
          >
            {serialize(node.children)}
          </Tag>
        );
      }
      case "listitem":
        return <li key={i}>{serialize(node.children)}</li>;
      case "heading": {
        const HeadingTag = node.tag as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={i} className="font-bold text-gray-900 my-4 text-xl">
            {serialize(node.children)}
          </HeadingTag>
        );
      }
      default:
        return <div key={i}>{serialize(node.children || [])}</div>;
    }
  });
}

export default function RecruitmentLivePreview({ initialJob }: Props) {
  const livePreviewServerURL = SITE_URL;

  const { data: liveData } = useLivePreview<Recruitment>({
    depth: 1,
    initialData: initialJob,
    serverURL: livePreviewServerURL,
  });

  const job = liveData ?? initialJob;

  const headerImage = isMediaUpload(job.headerImage)
    ? job.headerImage
    : undefined;
  const headerImageUrl = headerImage?.url ?? "";
  const headerImageAlt = headerImage?.alt || job.title;
  const employmentType = job.employmentType?.replace("_", "-") ?? "";
  const postedDate = job.postedDate
    ? new Date(job.postedDate).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[400px] w-full bg-gray-900">
        {headerImageUrl && (
          <Image
            src={headerImageUrl}
            alt={headerImageAlt}
            fill
            className="object-cover opacity-40"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            href="/recruitments"
            className="text-gray-300 hover:text-white mb-6 inline-flex items-center text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            オープンポジション
          </Link>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-200 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              {job.department}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="capitalize">{employmentType}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {job.location}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-brand-blue-50/50 rounded-lg p-4 mb-12 inline-block">
          <p className="text-sm text-brand-blue-900">投稿日 : {postedDate}</p>
        </div>

        <div className="space-y-12">
          {job.description && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                職務内容
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {serialize(job.description.root?.children)}
              </div>
            </section>
          )}

          {job.responsibilities && (
            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">責任</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {serialize(job.responsibilities.root?.children)}
              </div>
            </section>
          )}

          {job.requirements && (
            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                職務要件
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {serialize(job.requirements.root?.children)}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
