import React from "react";
import BadgeCheckIcon from "../icons/badge-chcek";
import { CalendarIcon } from "../icons/calendar";
import Users from "../icons/users";
import CreditCardIcon from "../icons/credit-card";

const solutionsText = "Solutions / Key Features";
const header = "MeeeeetUp 顔認証による";
const item1Title = "申込・予約";
const item2Title = "受付・本人確認";
const item3Title = "決済連携";
const item4Title = "顧客管理";

type FeatureItem = {
  title: string;
  Icon: React.ElementType;
};

const items: FeatureItem[] = [
  { title: item1Title, Icon: CalendarIcon },
  { title: item2Title, Icon: BadgeCheckIcon },
  { title: item3Title, Icon: CreditCardIcon },
  { title: item4Title, Icon: Users },
];

const SectionThree: React.FC = () => {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-brand-blue-200/80 px-4 py-2 text-sm font-semibold text-brand-blue-600">
          {solutionsText}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          {header}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue-500 to-sky-400 text-white">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-800">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
