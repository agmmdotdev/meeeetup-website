"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ElementType, ReactNode } from "react";
import type { Media, Article } from "payload-types";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

type Props = {
  initialArticle: Article;
};

const isMediaUpload = (value: Article["headerImage"]): value is Media =>
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
        const HeadingTag = (node.tag ?? "div") as ElementType;
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

export default function ArticleLivePreview({ initialArticle }: Props) {
  const livePreviewServerURL = SITE_URL;

  const { data: liveData } = useLivePreview<Article>({
    depth: 1,
    initialData: initialArticle,
    serverURL: livePreviewServerURL,
  });

  const article = liveData ?? initialArticle;

  const headerImage = isMediaUpload(article.headerImage)
    ? article.headerImage
    : undefined;
  const headerImageUrl = headerImage?.url ?? "";
  const headerImageAlt = headerImage?.alt || article.title;
  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const categoryLabels: Record<string, string> = {
    press_release: "Press Release",
    news: "News",
    media_coverage: "Media Coverage",
    case_study: "Case Study",
  };
  const categoryLabel = categoryLabels[article.category] || article.category;

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/articles"
            className="text-gray-500 hover:text-gray-900 inline-flex items-center text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Articles List
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex-grow">
            {article.title}
          </h1>
          <span className="text-gray-500 whitespace-nowrap">
            {formattedDate}
          </span>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden bg-gray-100">
          {headerImageUrl && (
            <Image
              src={headerImageUrl}
              alt={headerImageAlt}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2">
            {/* Placeholder for Flag if needed, using simple text for now */}
            <span className="text-lg">🇯🇵</span>
            <span className="font-bold text-gray-800">日本語版</span>
          </div>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            {categoryLabel}
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          {/* Intro/Description can be bolded or styled differently if needed */}
          <p className="font-medium text-gray-900 mb-6">
            {article.description}
          </p>
          {article.content && serialize(article.content.root?.children)}
        </div>
      </div>
    </div>
  );
}
