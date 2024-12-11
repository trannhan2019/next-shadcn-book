import React from "react";
import Sidebar from "./_components/sidebar";

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-gray-100 pt-[85px]">
      <div className="container mx-auto flex h-full px-5">
        <Sidebar />
        <section className="flex-1 p-5">{children}</section>
      </div>
    </div>
  );
}
