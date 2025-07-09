import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/layouts/Navigation";
import CanvasWrapper from "@/components/organisms/CanvasWrapper";

import { AnimatePresence } from "motion/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.Miyazaki portfolio 2025",
  description:
    "Kneta Miyazaki ポートフォリオ2025。Next.jsとthree.jsで素敵なサイトを作ります。",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "vercel-toolbar": "disable",
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
        className={`inter.className text-base text-neutral-50 leading-[1.7] tracking-widest`}
      >
        <Navigation />
        <CanvasWrapper />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
