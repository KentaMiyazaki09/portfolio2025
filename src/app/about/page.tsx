import PageTtl from "@/components/atoms/PageTtl";
import AboutTabs from "@/components/organisms/AboutTabs";
import {
  Globe,
  SquareDashedBottomCode,
  Columns3Cog,
  Box,
  ToolCase,
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
} from "lucide-react";

const SkillList = [
  {
    icon: Globe,
    color: "#3654ce",
    name: "スキル Webサイト開発",
    desc: "EJS / HTML / Sass / JavaScript / Webpack / Gulp / MovableType7 / WordPress",
  },
  {
    icon: SquareDashedBottomCode,
    color: "#e2747a",
    name: "スキル React開発",
    desc: "React / Next.js / TypeScript / Tailwind CSS / Vercel / Vite（React） / Turbopack（Next.js） / Vitest",
  },
  {
    icon: Box,
    color: "#74e295",
    name: "3D",
    desc: "WebGL / Three.js / Blender",
  },
  {
    icon: ToolCase,
    color: "#b074e2",
    name: "ツール",
    desc: "GitHub / VSCode / Figma / ChatGPT",
  },
];

const QandA = [
  {
    icon: History,
    color: "#3654ce",
    name: "フロントエンジニアを志した理由",
    desc: "Amaz◯nで買い物している時に「どうやって動いてるのだろう」と興味を持ったのがきっかけです。ちょうど世間にスマホが馴染み始めた頃だったので、今後はWebやアプリ開発は需要が高そうだ、と感じた。",
  },
  {
    icon: Box,
    color: "#7d69e2",
    name: "WebGLやBlenderを始めた理由",
    desc: "コードを書く以外のことをするのは良い息抜きになって面白いなと感じたため。また非エンジニアの知り合いとの話題にもできるので。",
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
    name: "芸能人・俳優",
    desc: "大泉洋、オマール・シー",
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
    desc: "映画館に行く（月2回ぐらい）、漫画、アクアリウム、ゲーム",
  },
];

const AboutPage = () => (
  <div className="p-4 min-h-dvh w-full flex justify-end">
    <PageTtl text="ABOUT" />
    <AboutTabs skillList={SkillList} QandA={QandA} favo={Favo} />
  </div>
);

export default AboutPage;
