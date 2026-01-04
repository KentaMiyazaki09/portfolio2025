import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/layouts/Navigation";
import PageTransition from "@/components/layouts/PageTransition";

import CanvasWrapper from "@/components/organisms/CanvasWrapper";

import { SharedStateProvider } from "@/context/SharedStateProvider";

import ParticlesBoot from "@/components/atoms/canvas/ParticlesBoot";
import ClickParticlesBoot from "@/components/atoms/canvas/ClickParticlesBoot";
import BgWiper from "@/components/organisms/BgWiper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.Miyazaki portfolio",
  description:
    "Kenta Miyazaki ポートフォリオ。1995年生まれ。フロントエンジニア。アイデアを視覚や感覚で伝える表現に落とし込むのが好きです。WebGL・Blenderを勉強中。",
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
        <BgWiper />
        <ParticlesBoot />
        <div className="fixed z-10 backdrop-blur-sm w-full h-full"></div>
        <SharedStateProvider>
          <Navigation />
          <CanvasWrapper />
          <PageTransition>{children}</PageTransition>
        </SharedStateProvider>
        <ClickParticlesBoot />
      </body>
    </html>
  );
}
