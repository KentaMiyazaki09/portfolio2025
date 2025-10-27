"use client";

import PageTtl from "@/components/atoms/PageTtl";
import AboutTabs from "@/components/organisms/AboutTabs";
import {
  Globe,
  SquareDashedBottomCode,
  Columns3Cog,
  Box,
  ToolCase,
  GraduationCap,
  Wrench,
  History,
  SquareArrowRight,
  MonitorPlay,
  TvMinimal,
  Podcast,
  Utensils,
  PersonStanding,
  MicVocal,
  Clapperboard,
} from "lucide-react";

const SkillList = [
  {
    icon: Globe,
    color: "#3654ce",
    name: "開発言語",
    desc: "HTML / CSS / JavaScript / TypeScript",
  },
  {
    icon: SquareDashedBottomCode,
    color: "#e2747a",
    name: "フレームワーク",
    desc: "React（v18.2.0） / Next.js（v14.1.0） / Tailwind CSS",
  },
  {
    icon: Columns3Cog,
    color: "#bbbf82",
    name: "その他スキル",
    desc: "EJS / Sass / MovableType7 / WordPress / PHP / Shopify（Liquid）/ microCMS / Netlify",
  },
  {
    icon: Wrench,
    color: "#d1bb82",
    name: "開発環境",
    desc: "Webpack / Gulp / Node.js",
  },
  {
    icon: Box,
    color: "#74e295",
    name: "3D",
    desc: "Three.js / WebGL / Blender",
  },
  {
    icon: ToolCase,
    color: "#b074e2",
    name: "ツール",
    desc: "Windows / MacBook / GitHub / VSCode / Figma / Photoshop / Illustrator / ChatGPT",
  },
  {
    icon: GraduationCap,
    color: "#bababa",
    name: "学習中...",
    desc: "Advanced Blender / Three.js / React / Turbopack",
  },
];

const QandA = [
  {
    icon: History,
    color: "#3654ce",
    name: "フロントエンジニアを志した理由",
    desc: "Amaz◯nで買い物している時に「そもそもどうやって動いてるのだろう。みんなスマホ持っているし、Webやアプリ開発は需要が高そうだな〜」と感じた。10年前...？もう歳はとりたくない。",
  },
  {
    icon: SquareArrowRight,
    color: "#e2699a",
    name: "次の目標",
    desc: "基本的にフロントエンジニア、サブで3D。映像や3D関係の知り合いと仕事ができたら嬉しい。画面に向かうだけでなく、新しい刺激を受けて表現の幅・人脈を広げていきたい。",
  },
  {
    icon: MonitorPlay,
    color: "#7d69e2",
    name: "Blenderを始めた理由",
    desc: "映像制作の知り合いが使ってたのを観て、「JavaScriptの知識あればインタラクティブな実装できるな」と考え試してるところ。",
  },
];

const Favo = [
  {
    icon: TvMinimal,
    color: "#3654ce",
    name: "Webサイト",
    desc: (
      <a
        className="underline"
        href="https://bluehamham.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ブルーハムハム
      </a>
    ),
  },
  {
    icon: Podcast,
    color: "#872EC4",
    name: "ポッドキャスト",
    desc: (
      <a
        className="underline"
        href="https://rebuild.fm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        rebuild.fm
      </a>
    ),
  },
  {
    icon: Utensils,
    color: "#e27569",
    name: "食べ物",
    desc: "スンドゥブ、じゃがりこ",
  },
  {
    icon: PersonStanding,
    color: "#e6ca65",
    name: "芸能人",
    desc: "大泉洋",
  },
  {
    icon: MicVocal,
    color: "#e873de",
    name: "アイドル",
    desc: (
      <a
        className="underline"
        href="https://x.com/sashide_m"
        target="_blank"
        rel="noopener noreferrer"
      >
        指出毬亜
      </a>
    ),
  },
  {
    icon: Clapperboard,
    color: "#bbb4b4",
    name: "趣味",
    desc: "映画館に行く（月3回ぐらい）、漫画、アクアリウム、ゲーム",
  },
];

const AboutPage = () => {
  return (
    <div className="p-4 min-h-dvh w-full flex justify-end">
      <PageTtl text="ABOUT" />
      <AboutTabs skillList={SkillList} QandA={QandA} favo={Favo} />
    </div>
  );
};

export default AboutPage;
