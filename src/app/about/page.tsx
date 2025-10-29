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
  TvMinimal,
  Podcast,
  Utensils,
  PersonStanding,
  MicVocal,
  Clapperboard,
  Annoyed,
  Laugh,
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
    desc: "EJS / Sass / MovableType7 / WordPress / Shopify（Liquid）",
  },
  {
    icon: Wrench,
    color: "#d1bb82",
    name: "開発環境",
    desc: "Webpack / Gulp",
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
    desc: "Windows PC / MacBook / GitHub / VSCode / Figma / Photoshop / Illustrator / ChatGPT",
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
    desc: "Amaz◯nで買い物している時に「どうやって動いてるのだろう」と興味を持ったのがきっかけです。僕が高校を卒業した10年前ぐらい。ちょうど世間にスマホが馴染み始めた頃。今後はWebやアプリ開発は需要が高そうだ、と感じた。",
  },
  {
    icon: SquareArrowRight,
    color: "#e2699a",
    name: "次の目標",
    desc: "引き続きフロントエンジニア、サブで3D。技術だけでなく、新しい刺激や人とのつながりを通して表現の幅を広げていきたいです。社内外で映像・3D関係の方とも一緒に仕事ができたら嬉しい。React19へのアップデート...やらねば。",
  },
  {
    icon: Box,
    color: "#7d69e2",
    name: "Blenderを始めた理由",
    desc: "映像制作の知り合いが使っているのを観て「JavaScriptの知識あればインタラクティブな実装できるな」と考えたのがきっかけ。3Dモデルは外部に頼むこともできますが、Web実装では特有の癖もあるので、自分でもBlenderを触ってみることにした。コードを書く以外のことをするのは良い刺激になって面白いです。",
  },
  {
    icon: Laugh,
    color: "#bdbdbd",
    name: "性格",
    desc: "「技術・コミュニケーションのバランスが良い」と言われます。他部署の方とも自然に話せるタイプです。飲み会やイベントは1/3ぐらいは顔出します。",
  },
  {
    icon: Annoyed,
    color: "#bdbdbd",
    name: "課題に感じていること",
    desc: "本格的なアジャイル開発の経験がまだありません。また、そのような高い技術リテラシーを持つチームでの実務経験もこれからです。Webアプリケーション構築に深く関わっていきたい一方で、経験不足も感じています。テスト実装なども意識して学んでいきたいです。",
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
