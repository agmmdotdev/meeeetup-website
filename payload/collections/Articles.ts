import type { CollectionConfig } from "payload";

const FRONTEND_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }: { data?: Record<string, any> }) => {
        const slugOrId =
          typeof data?.slug === "string" && data.slug ? data.slug : data?.id;
        if (!slugOrId) {
          return null;
        }
        return `${FRONTEND_BASE}/articles/${slugOrId}`;
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "headerImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "プレスリリース", value: "press_release" },
        { label: "ニュース", value: "news" },
        { label: "メディア報道", value: "media_coverage" },
        { label: "ケーススタディ", value: "case_study" },
      ],
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Short Description (Intro)",
    },
    {
      name: "content",
      type: "richText",
      label: "Content",
      required: true,
    },
  ],
};

