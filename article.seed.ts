import { getPayload } from "payload";
import config from "./payload.config";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import type { Article } from "./payload-types";

dotenv.config();

type ArticleSeedEntry = {
  title: string;
  slug: string;
  category: Article["category"];
  description: string;
  content: string;
};

type RichTextValue = Article["content"];

const generateRichText = (text: string): RichTextValue => ({
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
            text: text,
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
      // Try to find a suitable image in public folder
      const possibleImages = ["section-two-banner.webp", "meeeetup.png"];
      let filePath = "";
      let fileName = "";

      for (const img of possibleImages) {
        const p = path.resolve(process.cwd(), `public/${img}`);
        if (fs.existsSync(p)) {
          filePath = p;
          fileName = img;
          break;
        }
      }

      if (filePath) {
        const fileBuffer = fs.readFileSync(filePath);
        const uploadedMedia = await payload.create({
          collection: "media",
          data: {
            alt: "Article Header Image",
          },
          file: {
            data: fileBuffer,
            name: fileName,
            mimetype: fileName.endsWith("webp") ? "image/webp" : "image/png",
            size: fileBuffer.length,
          },
        });
        headerImageId = uploadedMedia.id;
        console.log("Created default media asset for seeding.");
      } else {
        console.warn(
          "No existing media found and no suitable public images found. Seeding might fail if required fields are missing."
        );
      }
    } catch (e) {
      console.error("Failed to upload default media:", e);
    }
  }

  if (!headerImageId) {
    console.warn(
      "Skipping article generation because no Media item could be found or created."
    );
    return;
  }

  const articles: ArticleSeedEntry[] = [
    {
      title: "MeeeetUpが顔認識イベントプラットフォームを正式に発表",
      slug: "meeeetup-launches-facial-recognition-platform",
      category: "press_release",
      description:
        "MeeeetUpが顔認識イベントプラットフォームを正式にリリース 次世代のイベント...",
      content:
        "MeeeetUpは、顔認識技術を活用した革新的なイベントプラットフォームを正式にリリースしました。このプラットフォームは、イベントの受付、セキュリティ、ネットワーキングを効率化し、参加者にシームレスな体験を提供します。",
    },
    {
      title: "2024年のイベントテックトレンド予測",
      slug: "2024-event-tech-trends",
      category: "news",
      description:
        "2024年に注目すべきイベントテクノロジーのトレンドについて解説します。",
      content:
        "2024年は、AIと生体認証技術がイベント業界に革命をもたらす年となるでしょう。特に顔認識技術は、非接触での入場管理やパーソナライズされた体験の提供において中心的な役割を果たすと予測されています。",
    },
    {
      title: "大手カンファレンスでのMeeeetUp導入事例",
      slug: "major-conference-case-study",
      category: "case_study",
      description:
        "5000人規模のテックカンファレンスでMeeeetUpが導入され、受付時間が大幅に短縮されました。",
      content:
        "先日開催されたTechSummit 2024において、MeeeetUpの顔認識チェックインシステムが導入されました。従来は1人あたり30秒かかっていた受付時間が、顔パスによりわずか3秒に短縮され、参加者から高い評価を得ました。",
    },
    {
      title: "TechCrunchにMeeeetUpが掲載されました",
      slug: "meeeetup-featured-in-techcrunch",
      category: "media_coverage",
      description:
        "世界的なテクノロジーメディアTechCrunchにて、MeeeetUpの革新的な取り組みが紹介されました。",
      content:
        "TechCrunchの記事「未来のイベント体験」において、MeeeetUpが特集されました。記事では、プライバシーに配慮した顔認識技術の実装や、イベント主催者向けのデータ分析機能について詳しく報じられています。",
    },
  ];

  for (const articleData of articles) {
    try {
      // Check if exists
      const existing = await payload.find({
        collection: "articles",
        where: {
          slug: { equals: articleData.slug },
        },
      });

      if (existing.docs.length > 0) {
        console.log(`Skipping ${articleData.slug}, already exists.`);
        continue;
      }

      await payload.create({
        collection: "articles",
        data: {
          title: articleData.title,
          slug: articleData.slug,
          category: articleData.category,
          publishedDate: new Date().toISOString(),
          description: articleData.description,
          content: generateRichText(articleData.content),
          headerImage: headerImageId,
        },
      });
      console.log(`Created article: ${articleData.title}`);
    } catch (e) {
      console.error(`Failed to create ${articleData.title}:`, e);
    }
  }

  console.log("Seeding complete.");
  process.exit(0);
};

seed();
