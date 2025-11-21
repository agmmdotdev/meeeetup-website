import { getPayload } from "payload";
import config from "./payload.config";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import type { Recruitment } from "./payload-types";

dotenv.config();

const departments = [
  "マーケティング部",
  "エンジニアリング部",
  "人事部",
  "営業部",
  "カスタマーサポート",
];
const locations = ["日本", "リモート", "東京", "大阪", "福岡"];
const employmentTypes: Recruitment["employmentType"][] = [
  "full_time",
  "part_time",
  "contract",
  "internship",
];

type RecruitmentSeedEntry = Omit<
  Recruitment,
  "id" | "updatedAt" | "createdAt"
>;
type RecruitmentRichText = Recruitment["description"];

const generateDescription = (title: string): RecruitmentRichText => ({
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    children: [
      {
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            mode: "normal",
            text: `これは${title}の募集要項です。私たちは情熱的な個人を探しています。`,
            type: "text",
            style: "",
            detail: 0,
            format: 0,
            version: 1,
          },
        ],
      },
    ],
    direction: "ltr",
  },
});

const seed = async () => {
  const payload = await getPayload({ config });

  let headerImageId = null;

  // Check for existing media
  const media = await payload.find({ collection: "media", limit: 1 });

  if (media.docs.length > 0) {
    headerImageId = media.docs[0].id;
  } else {
    // Try to upload a local file if no media exists
    try {
      const filePath = path.resolve(process.cwd(), "public/meeeetup.png");
      if (fs.existsSync(filePath)) {
        const fileBuffer = fs.readFileSync(filePath);
        const uploadedMedia = await payload.create({
          collection: "media",
          data: {
            alt: "MeeeetUp Logo Default",
          },
          file: {
            data: fileBuffer,
            name: "meeeetup.png",
            mimetype: "image/png",
            size: fileBuffer.length,
          },
        });
        headerImageId = uploadedMedia.id;
        console.log("Created default media asset for seeding.");
      } else {
        console.warn(
          "No existing media found and public/meeeetup.png not found. Seeding might fail if required fields are missing."
        );
      }
    } catch (e) {
      console.error("Failed to upload default media:", e);
    }
  }

  if (!headerImageId) {
    console.warn(
      "Skipping recruitment generation because no Media item could be found or created."
    );
    return;
  }

  const recruitments: RecruitmentSeedEntry[] = [];

  for (let i = 1; i <= 10; i++) {
    const title = `Recruitment Position ${i}`;
    const slug = `position-${i}`;
    const department =
      departments[Math.floor(Math.random() * departments.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const employmentType =
      employmentTypes[Math.floor(Math.random() * employmentTypes.length)];

    const job: RecruitmentSeedEntry = {
      title,
      slug,
      department,
      location,
      employmentType,
      postedDate: new Date().toISOString(),
      shortDescription: `これは${title}の短い説明です。素晴らしい機会です。`,
      description: generateDescription(title),
      responsibilities: generateDescription(`${title}の責任`),
      requirements: generateDescription(`${title}の要件`),
      headerImage: headerImageId,
    };

    recruitments.push(job);
  }

  for (const job of recruitments) {
    try {
      // Check if exists
      const existing = await payload.find({
        collection: "recruitments",
        where: {
          slug: { equals: job.slug },
        },
      });

      if (existing.docs.length > 0) {
        console.log(`Skipping ${job.slug}, already exists.`);
        continue;
      }

      await payload.create({
        collection: "recruitments",
        data: job,
      });
      console.log(`Created recruitment: ${job.title}`);
    } catch (e) {
      console.error(`Failed to create ${job.title}:`, e);
    }
  }

  console.log("Seeding complete.");
  process.exit(0);
};

seed();
