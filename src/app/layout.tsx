import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/layouts/Navigation";
import CanvasWrapper from "@/components/organisms/CanvasWrapper";
import ClickParticles from "@/components/atoms/canvas/ClickParticles";
import BgParticles from "@/components/atoms/canvas/BgParticles";

import { AnimatePresence } from "motion/react";

import { SharedStateProvider } from "@/context/SharedStateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.Miyazaki portfolio",
  description:
    "Kenta Miyazaki ポートフォリオ。1995年生まれ。フロントエンジニア。アイデアを視覚や感覚で伝える表現に落とし込むのが好きです。新たな表現を求め、Blender・3Dアニメーションを勉強中。",
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
        className={`${inter.className} text-[clamp(1.0rem,1.9vw,1.5rem)] text-neutral-50 leading-[1.7] tracking-widest`}
      >
        <>
          <BgParticles />
          <SharedStateProvider>
            <Navigation />
            <CanvasWrapper />
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </SharedStateProvider>
          <ClickParticles />
        </>
      </body>
    </html>
  );
}
