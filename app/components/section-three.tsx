import Image from "next/image";
import React from "react";

const header = "顔認証による";
const item1Title = "予約・申込み";
const item2Title = "受付・本人確認";
const item3Title = "決済連携";
const item4Title = "顧客管理";
const logoUrl = "/meeeetup.png";

type SvgIconProps = {
  className?: string;
};

const DocumentIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 3h6l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M13 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

const IdCheckIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="12" r="2.5" />
    <path d="M14 12h5M6 17c1.2-1.5 3-2.5 5-2.5s3.8 1 5 2.5" />
  </svg>
);

const WalletIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M16 12h4" />
    <circle cx="16" cy="12" r="1.5" />
  </svg>
);

const UsersIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <circle cx="9" cy="10" r="3" />
    <path d="M2 20c1.5-2.5 4-4 7-4s5.5 1.5 7 4" />
    <circle cx="17" cy="9" r="2" />
    <path d="M16 15c2 0 3.8.7 5 2" />
  </svg>
);

type FeatureItem = {
  title: string;
  Icon: React.FC<SvgIconProps>;
};

const items: FeatureItem[] = [
  { title: item1Title, Icon: DocumentIcon },
  { title: item2Title, Icon: IdCheckIcon },
  { title: item3Title, Icon: WalletIcon },
  { title: item4Title, Icon: UsersIcon },
];

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-white">
        {children}
      </div>
      <div className="text-sm font-medium text-gray-800 md:text-base">
        {title}
      </div>
    </div>
  );
};

const SectionThree: React.FC = () => {
  return (
    <section id="company" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-center gap-4">
          <Image src={logoUrl} alt="MeeeetUp" width={140} height={40} />
          <h2 className="text-2xl font-semibold text-sky-500 md:text-3xl">
            {header}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map(({ title, Icon }) => (
            <FeatureCard key={title} title={title}>
              <Icon className="h-10 w-10" />
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
