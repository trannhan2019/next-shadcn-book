import React from "react";
import Header from "./_header";
import Footer from "./_footer";
import ScrollTop from "@/components/scroll-top";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative !scroll-smooth">
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
