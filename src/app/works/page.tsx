import React from "react";

import PageTtl from "@/components/atoms/PageTtl";
import Works from "@/components/organisms/Works";

const list = [
  {
    thumb: "/works/Portfolio.png",
    url: "https://portfolio2025-delta-seven.vercel.app/",
    ttl: "Portfolio",
    tags: ["Next.js", "Blender"],
    comment: "Blenderはじめました。",
  },
  {
    thumb: "/works/nowledge.png",
    url: "https://nowledge.rhino-inc.jp/",
    ttl: "Nowledge",
    tags: ["Next.js", "jamstack"],
    comment:
      "チーム内の情報共有をスプシからWEBサイトへ。Next.js、microCMS、Netlifyで構成。",
  },
  {
    thumb: "/works/neutrial.png",
    url: "https://neutrial.com/",
    ttl: "neutrial",
    tags: ["Shopify", "liquid"],
    comment: "liquidを用いて部分的に更新を担当。",
  },
  {
    thumb: "/works/Beams.png",
    url: "https://www.beams.co.jp/special/beams_cultuart/",
    ttl: "Beams Cultuart",
    tags: ["Wordpress"],
    comment: "Beamsの新規サイト。様々なカルチャーにまつわる記事を発信中⚡️。",
  },
  {
    thumb: "/works/nikoand.png",
    url: "https://www.dot-st.com/nikoand/cp/202408product_zakka",
    ttl: "nikoand... キン肉マンコラボ",
    tags: ["LP", "Canvas"],
    comment: "レトロ感あるモザイクアニメーションをCanvasで実装しました。",
  },
  {
    thumb: "/works/THREE.png",
    url: "https://www.threecosmetics.com/brand/news/fragrance-finder",
    ttl: "THREE FRAGRANCE FINDER",
    tags: ["LP", "Canvas"],
    comment:
      "javascriptのclassでゴリゴリ状態管理🦍。背景のCanvasはGradient.jsというライブラリー。",
  },
  {
    thumb: "/works/tku.png",
    url: "https://www.tku.ac.jp/",
    ttl: "東京経済大学",
    tags: ["Movabletype7"],
    comment: "Movabletype7を勉強しながら実装したサイト。",
  },
  {
    thumb: "/works/kidsattic.png",
    url: "https://www.kids-attic.org/",
    ttl: "キッズアティック",
    tags: ["LP"],
    comment:
      "懐かしのサイト。ローディングロゴはデザイナーさんに1パーツずつ分けてもらった🙏",
  },
];

const WorksPage = () => (
  <div className="min-h-dvh w-full pt-[100px] md:pt-[140px] pr-[20px] pb-[50px] pl-[20px] fixed md:left-[50%] md:translate-x-[-50%] h-full overflow-auto scrollbar-hide">
    <PageTtl text="WORKS" />
    <div className="w-full md:max-w-[800px] md:m-auto">
      <Works list={list} />
    </div>
  </div>
);

export default WorksPage;
