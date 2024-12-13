import React from "react";
import Sidebar from "./_sidebar";

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-gray-100 pt-[85px]">
      <div className="container mx-auto flex flex-col md:flex-row">
        <Sidebar />
        <section className="p-5">{children}</section>
      </div>
    </div>
  );
}
