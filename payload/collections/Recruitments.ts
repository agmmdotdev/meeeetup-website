import type { CollectionConfig } from "payload";

const FRONTEND_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const Recruitments: CollectionConfig = {
  slug: "recruitments",
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }: { data?: Record<string, any> }) => {
        const slugOrId =
          typeof data?.slug === "string" && data.slug ? data.slug : data?.id;
        if (!slugOrId) {
          return null;
        }
        return `${FRONTEND_BASE}/recruitments/${slugOrId}`;
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
      name: "department",
      type: "text",
      required: true,
      label: "Department",
    },
    {
      name: "location",
      type: "text",
      required: true,
      label: "Location",
    },
    {
      name: "employmentType",
      type: "select",
      required: true,
      options: [
        { label: "Full-time", value: "full_time" },
        { label: "Part-time", value: "part_time" },
        { label: "Contract", value: "contract" },
        { label: "Internship", value: "internship" },
      ],
    },
    {
      name: "postedDate",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      label: "Short Description (for card view)",
    },
    {
      name: "description",
      type: "richText",
      label: "Job Description (Intro)",
      required: true,
    },
    {
      name: "responsibilities",
      type: "richText",
      label: "Responsibilities",
    },
    {
      name: "requirements",
      type: "richText",
      label: "Requirements",
    },
  ],
};
