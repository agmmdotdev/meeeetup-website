import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Args = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: Args) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <NavBar />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
