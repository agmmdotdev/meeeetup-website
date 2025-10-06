import React from "react";

type IconProps = { className?: string };

const BuildingIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3.75 21a.75.75 0 0 1-.75-.75v-14.5A2.75 2.75 0 0 1 5.75 3h6.5A2.75 2.75 0 0 1 15 5.75V7h3.25A2.75 2.75 0 0 1 21 9.75v10.5a.75.75 0 0 1-.75.75H3.75ZM6 8.25A.75.75 0 0 0 6.75 9h3.5a.75.75 0 0 0 0-1.5h-3.5A.75.75 0 0 0 6 8.25Zm0 3A.75.75 0 0 0 6.75 12h3.5a.75.75 0 0 0 0-1.5h-3.5A.75.75 0 0 0 6 11.25Zm0 3a.75.75 0 0 0 .75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75Z" />
  </svg>
);

const UserIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm8.25 8.25a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75 7.5 7.5 0 0 1 15 0Z" />
  </svg>
);

const CalendarIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M7.5 3A.75.75 0 0 1 8.25 2.25h.5a.75.75 0 0 1 .75.75V4.5h5V3a.75.75 0 0 1 .75-.75h.5A.75.75 0 0 1 16.5 3v1.5h1.75A2.75 2.75 0 0 1 21 7.25v10A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25v-10A2.75 2.75 0 0 1 5.75 4.5H7.5V3Zm-1.75 6a.75.75 0 0 0-.75.75v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5a.75.75 0 0 0-.75-.75H5.75Z" />
  </svg>
);

const MapPinIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.25a7.25 7.25 0 0 0-7.25 7.25c0 4.5 5.41 9.84 6.94 11.19a.75.75 0 0 0 1.02 0C13.84 19.34 19.25 14 19.25 9.5A7.25 7.25 0 0 0 12 2.25Zm0 9.25a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm.75 14.25a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 1.5 0Zm-.75-7.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
  </svg>
);

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
    {children}
  </button>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-gray-500">{children}</div>
);

const Value = ({ children }: { children: React.ReactNode }) => (
  <div className="text-gray-800">{children}</div>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 p-4 sm:p-5">{children}</div>
);

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-0.5 rounded-md bg-gray-100 p-2 text-gray-600">
    {children}
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-lg border bg-white shadow-sm">
          <div className="border-b p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Contact Information
            </h2>
          </div>
          <div className="divide-y">
            <Row>
              <IconBox>
                <BuildingIcon className="h-5 w-5" />
              </IconBox>
              <div>
                <Label>会社名</Label>
                <Value>MeeeetUp株式会社</Value>
              </div>
            </Row>

            <div className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <Row>
                <IconBox>
                  <UserIcon className="h-5 w-5" />
                </IconBox>
                <div>
                  <Label>代表取締役</Label>
                  <Value>髙橋　 一矢</Value>
                </div>
              </Row>
              <Row>
                <IconBox>
                  <CalendarIcon className="h-5 w-5" />
                </IconBox>
                <div>
                  <Label>設立年月日</Label>
                  <Value>2024年11月20日</Value>
                </div>
              </Row>
            </div>

            <Row>
              <IconBox>
                <MapPinIcon className="h-5 w-5" />
              </IconBox>
              <div>
                <Label>オフィス</Label>
                <Value>
                  愛知県名古屋市昭和区鶴舞一丁目2番32号 STATION Ai内
                </Value>
              </div>
            </Row>

            <Row>
              <IconBox>
                <InfoIcon className="h-5 w-5" />
              </IconBox>
              <div>
                <Label>事業概要</Label>
                <Value>顔認証を基盤としたIDプラットフォームの提供</Value>
              </div>
            </Row>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
