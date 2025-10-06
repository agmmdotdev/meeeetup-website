import React from "react";

const Highlight = ({ text, highlights }: { text: string; highlights: readonly string[] }) => {
  if (!highlights || highlights.length === 0) {
    return <>{text}</>;
  }
  const escapedHighlights = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escapedHighlights.join("|")})`, "g");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span key={i} className="text-sky-600">
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
};

const topics: readonly Topic[] = [
  {
    title: "予約・申込み",
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
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-sky-600 sm:text-5xl">
            多くの現場で共通する課題を、
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Meeeetup
            </span>
            <span className="text-sky-600">が解決！</span>
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-16 sm:mt-20 lg:mt-24">
          {topics.map((topic) => (
            <div key={topic.title}>
              <h3 className="text-2xl font-bold text-gray-900">{topic.title}</h3>
              <ul className="mt-6 space-y-4">
                {topic.items.map((item) => (
                  <li key={item.text} className="flex">
                    <span className="mr-2">・</span>
                    <p className="flex-1 text-base text-gray-700">
                      <Highlight text={item.text} highlights={item.highlights} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
