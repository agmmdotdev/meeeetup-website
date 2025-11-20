import type { ReactNode } from "react";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";

type Args = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: Args) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
