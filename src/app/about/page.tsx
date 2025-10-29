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
    desc: "EJS / Sass / MovableType7 / WordPress / Shopify（Liquid）/ microCMS / Netlify",
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
    desc: "Advanced Blender / Three.js / React",
  },
];

const QandA = [
  {
    icon: History,
    color: "#3654ce",
    name: "フロントエンジニアを志した理由",
    desc: "Amaz◯nで買い物している時に「そもそもどうやって動いてるのだろう。みんなスマホ持っているし、Webやアプリ開発は需要が高そうだな〜」と感じた。",
  },
  {
    icon: SquareArrowRight,
    color: "#e2699a",
    name: "次の目標",
    desc: "基本的にフロントエンジニア、サブで3D。技術面にこだわるだけでなく、新しい刺激を受けて表現の幅・人脈を広げていきたい。社内だけでなく映像や3D関係の知り合いと仕事ができたら嬉しい。React19へのアップデート...やらねば。",
  },
  {
    icon: MonitorPlay,
    color: "#7d69e2",
    name: "Blenderを始めた理由",
    desc: "映像制作の知り合いが使ってたのを観て、「JavaScriptの知識あればインタラクティブな実装できるな」と考え試してるところ。",
  },
  {
    icon: MonitorPlay,
    color: "#7d69e2",
    name: "会社・仕事に対しての姿勢",
    desc: "界隈のコミュニティーや人脈のつながり、自身の成長を大事にしています。「会社や地域に貢献したい」とはあまり考えていない。よくありがちなのが「社内の環境改善推進のコアメンバーになってくれ」というもの。あくまでエンジニアという立場から情報提供・技術的な支援・相談をするという明確な役割分担がなされている会社が望ましい。",
  },
  {
    icon: MonitorPlay,
    color: "#7d69e2",
    name: "AIについて",
    desc: "OpenAIだけでなく各企業が目まぐるしい速度でアップデートを繰り返すしレイオフもするし個人開発も活発ですし...キャッチアップしきれません。エンジニア界隈ではコピペ問題が度々話題になってますが、僕のコードはAI率0%です（https://code-detector.ai/）。chatGPTはもちろん使いますが使い方はよく考えてます。",
  },
  {
    icon: MonitorPlay,
    color: "#7d69e2",
    name: "どういう人間か",
    desc: "「技術・コミュニケーションのバランスが良い」らしいです。他部署の人間と仲良くなることが多いです。飲み会やイベントは1/3ぐらいは顔出します〜、というスタンスです。",
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
