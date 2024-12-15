import { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./_sidebar";
import Header from "./_header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
