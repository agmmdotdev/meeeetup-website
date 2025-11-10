import React from "react";
import Image from "next/image";
import { BadgeCheck, CalendarDays, CreditCard, Users } from "lucide-react";

const Highlight = ({
  text,
  highlights,
}: {
  text: string;
  highlights: readonly string[];
}) => {
  if (!highlights || highlights.length === 0) {
    return <>{text}</>;
  }
  const escapedHighlights = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedHighlights.join("|")})`, "g");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span key={i} className="text-brand-blue-600">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

type TopicItem = {
  text: string;
  highlights: readonly string[];
};

type Topic = {
  title: string;
  items: readonly TopicItem[];
  Icon: React.ElementType;
};

const TopicCard: React.FC<{ topic: Topic; className?: string }> = ({
  topic,
  className,
}) => {
  return (
    <div
      className={`rounded-2xl bg-white p-8 shadow-lg shadow-brand-blue-100/90 border border-brand-blue-50 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-500 text-white">
          <topic.Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-brand-blue-900">
          {topic.title}
        </h3>
      </div>
      <ul className="mt-4 space-y-3">
        {topic.items.map((item) => (
          <li key={item.text} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue-400" />
            <p className="text-base text-gray-700 leading-relaxed">
              <Highlight text={item.text} highlights={item.highlights} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const topics: readonly Topic[] = [
  {
    title: "予約・申込み",
    Icon: CalendarDays,
    items: [
      {
        text: "予約フォーム入力の手間と時間を短縮し、顧客の離脱を防ぎたい",
        highlights: ["顧客の離脱"],
      },
      {
        text: "同一人物による重複予約、空き枠が無駄になるのを防ぎたい",
        highlights: ["重複予約"],
      },
    ],
  },
  {
    title: "受付・本人確認",
    Icon: BadgeCheck,
    items: [
      {
        text: "受付の氏名・予約番号・QRコードの確認作業の手間と人件費を軽減したい",
        highlights: [],
      },
      {
        text: "来場者のQRコード忘れ（印刷・メール確認・アプリDL）でもスムーズな受付を可能にしたい",
        highlights: ["QRコード忘れ"],
      },
      {
        text: "本人確認のためのスタッフ人件費・時間コストを極限まで低減したい",
        highlights: ["人件費・時間コストを極限まで低減"],
      },
      {
        text: "コンサートやライブ会場でチケット転売防止を実現したい",
        highlights: ["チケット転売防止"],
      },
    ],
  },
  {
    title: "決済・支払い",
    Icon: CreditCard,
    items: [
      {
        text: "屋外イベント等、決済デバイスを用意しづらい",
        highlights: ["決済デバイス"],
      },
      {
        text: "両手がふさがる環境で、ハンズフリーで決済を実行したい",
        highlights: ["ハンズフリー"],
      },
      {
        text: "財布、スマートフォンレスの決済を実行したい",
        highlights: ["財布、スマートフォンレス"],
      },
    ],
  },
  {
    title: "情報共有・顧客管理",
    Icon: Users,
    items: [
      {
        text: "チェックイン後、会場に「誰がいるのか」をスタッフ間で共有したい",
        highlights: ["「誰がいるのか」"],
      },
      {
        text: "交流会やVIP対応で「目の前の人が誰か」をその場で即座に把握したい",
        highlights: ["「目の前の人が誰か」"],
      },
      {
        text: "来場者を目の前にした瞬間に、過去のユーザーデータを呼び出したい",
        highlights: ["過去のユーザーデータ"],
      },
    ],
  },
] as const;

const SectionFour: React.FC = () => {
  return (
    <section className="bg-brand-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center rounded-full bg-brand-blue-100 px-4 py-1 text-xs font-semibold text-brand-blue-600">
            Problems We Solve
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand-blue-900 sm:text-4xl">
            多くの現場で共通する課題を、
            <span className="bg-gradient-to-r from-brand-blue-500 to-brand-blue-400 bg-clip-text text-transparent">
              {" "}
              MeeeetUp{" "}
            </span>
            が解決！
          </h2>
        </div>

        {/* Desktop: image with corner cards overlay */}
        <div className="relative mx-auto mt-16 hidden items-center justify-center sm:mt-20 lg:mt-24 lg:flex">
          <div className="relative h-[640px] w-full max-w-3xl">
            <Image
              src="/section-four-banner.png"
              alt="MeeeetUpで実現する非接触・スムーズな受付のイメージ"
              fill
              sizes="(min-width: 1024px) 768px, 90vw"
              className="object-contain"
              priority
            />
          </div>

          <TopicCard
            topic={topics[0]}
            className="absolute -top-10 -left-10 z-10 w-[360px]"
          />
          <TopicCard
            topic={topics[1]}
            className="absolute -bottom-10 -left-10 z-10 w-[360px]"
          />
          <TopicCard
            topic={topics[2]}
            className="absolute -top-10 -right-10 z-10 w-[360px]"
          />
          <TopicCard
            topic={topics[3]}
            className="absolute -bottom-10 -right-10 z-10 w-[360px]"
          />
        </div>

        {/* Mobile/Tablet: stacked cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:hidden">
          {topics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
