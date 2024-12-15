import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ProgressBarProvider from "@/providers/progressbar-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "SBA | Book",
  description: "Web app for SBA",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} scroll-smooth antialiased`}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
