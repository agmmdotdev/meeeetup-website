import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import type { Recruitment } from "payload-types";
import RecruitmentLivePreview from "./RecruitmentLivePreview";

export default async function RecruitmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "recruitments",
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

  const job = docs[0] as Recruitment;

  return <RecruitmentLivePreview initialJob={job} />;
}
