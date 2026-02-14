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
  metadataBase: new URL("https://portfolio2025-delta-seven.vercel.app/"),
  title: "K.Miyazaki portfolio",
  description:
    "Kenta Miyazaki ポートフォリオ。1995年生まれ。フロントエンジニア。視覚や感覚的な表現に落とし込むのが好きです。React、WebGL・Blenderを勉強中。",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "K.Miyazaki portfolio",
    description:
      "Kenta Miyazaki ポートフォリオ。1995年生まれ。フロントエンジニア。視覚や感覚的な表現に落とし込むのが好きです。React、WebGL・Blenderを勉強中。",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "K.Miyazaki portfolio OGP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K.Miyazaki portfolio",
    description:
      "Kenta Miyazaki ポートフォリオ。1995年生まれ。フロントエンジニア。視覚や感覚的な表現に落とし込むのが好きです。React、WebGL・Blenderを勉強中。",
    images: ["/ogp.jpg"],
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
