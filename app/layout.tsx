import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "MeeeetUp — 顔認証で、予約から受付・決済・顧客管理まで",
    template: "%s | MeeeetUp",
  },
  description:
    "MeeeetUp は顔認証を基盤とした社会インフラ。予約・申込み、受付・本人確認、決済連携、顧客管理をワンストップで実現。情報入力や本人確認の手間をなくし、オフライン体験をなめらかにアップグレードします。",
  applicationName: "MeeeetUp",
  keywords: [
    "MeeeetUp",
    "顔認証",
    "予約",
    "受付",
    "本人確認",
    "決済",
    "顧客管理",
    "チェックイン",
    "イベント",
    "ハンズフリー決済",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "MeeeetUp",
    title: "MeeeetUp — 顔認証で、予約から受付・決済・顧客管理まで",
    description:
      "MeeeetUp は顔認証を基盤とした社会インフラ。予約・申込み、受付・本人確認、決済連携、顧客管理をワンストップで実現。",
    images: [
      {
        url: "/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "MeeeetUp プラットフォームのヒーローイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeeeetUp — 顔認証で、予約から受付・決済・顧客管理まで",
    description:
      "予約・申込み、受付・本人確認、決済連携、顧客管理をワンストップで提供する MeeeetUp。",
    images: [
      {
        url: "/hero-banner.webp",
        alt: "MeeeetUp ヒーローイメージ",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <NavBar />
          <main className="flex-1 pt-24 ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
