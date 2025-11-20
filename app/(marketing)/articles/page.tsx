import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";
import Image from "next/image";
import { Article, Media } from "payload-types";

const isMediaUpload = (value: Article["headerImage"]): value is Media =>
  typeof value === "object" && value !== null && "url" in value;

export default async function ArticlesPage() {
  const payload = await getPayload({ config });
  const { docs: articles } = await payload.find({
    collection: "articles",
    depth: 1,
    limit: 100,
    sort: "-publishedDate",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-blue-50 px-3 py-1 text-sm font-medium text-brand-blue-700 ring-1 ring-inset ring-brand-blue-700/10 mb-4">
            ニュース
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            特集記事
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            イントロダクションテキスト : MeeeetUpからの最新情報、メディア報道、プレスリリース、ケーススタディを含みます。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const headerImage = isMediaUpload(article.headerImage)
              ? article.headerImage
              : null;
            const imageUrl = headerImage?.url || "";
            const formattedDate = new Date(article.publishedDate).toLocaleDateString(
              "ja-JP",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            // Translate category value to label for display
            const categoryLabels: Record<string, string> = {
              press_release: "プレスリリース",
              news: "ニュース",
              media_coverage: "メディア報道",
              case_study: "ケーススタディ",
            };
            const categoryLabel =
              categoryLabels[article.category] || article.category;

            return (
              <div
                key={article.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col p-6 flex-grow">
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm">
                    {article.description}
                  </p>

                  <div className="text-sm text-gray-500 mt-auto">
                    {formattedDate}
                  </div>
                </div>
                <Link
                  href={`/articles/${article.slug}`}
                  className="absolute inset-0"
                >
                  <span className="sr-only">View Article</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

