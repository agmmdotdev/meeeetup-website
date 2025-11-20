import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";
import { MapPin, Clock, Building2 } from "lucide-react";

export default async function RecruitmentsPage() {
  const payload = await getPayload({ config });
  const { docs: recruitments } = await payload.find({
    collection: "recruitments",
    depth: 1,
    limit: 100,
    sort: "-postedDate",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-blue-50 px-3 py-1 text-sm font-medium text-brand-blue-700 ring-1 ring-inset ring-brand-blue-700/10 mb-4">
            採用
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            現在の求人ポジション
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            現在の求人ポジション現在の求人情報をご覧になり、あなたのスキルとキャリア目標
            に合った最適なポジションを見つけてください
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {recruitments.map((job) => (
            <div
              key={job.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {job.title as string}
              </h3>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {job.department as string}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span className="capitalize">
                    {((job.employmentType as string) || "").replace("_", "-")}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location as string}
                </div>
              </div>

              <p className="text-gray-600 mb-8 flex-grow">
                {job.shortDescription as string}
              </p>

              <div>
                <Link
                  href={`/recruitments/${job.slug}`}
                  className="inline-flex items-center justify-center rounded-md bg-brand-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-600 w-full sm:w-auto"
                >
                  ポジションを見る
                  <svg
                    className="ml-2 -mr-0.5 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
