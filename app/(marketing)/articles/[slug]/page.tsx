import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import type { Article } from "payload-types";
import ArticleLivePreview from "./ArticleLivePreview";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "articles",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
  });

  if (!docs.length) {
    notFound();
  }

  const article = docs[0] as Article;

  return <ArticleLivePreview initialArticle={article} />;
}
