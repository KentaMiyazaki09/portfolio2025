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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`inter.className text-base tracking-wider text-neutral-50`}
      >
        <Navigation />
        <CanvasWrapper />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
