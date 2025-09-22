"use client";

import React from "react";

import PageTtl from "@/components/atoms/PageTtl";
import Works from "@/components/molecules/Works";

const list = [
  {
    thumb: "/works/Portfolio.png",
    url: "https://nowledge.rhino-inc.jp/",
    ttl: "Portfolio",
    tags: ["Next.js", "Blender"],
  },
  {
    thumb: "/works/nowledge.png",
    url: "https://portfolio2025-delta-seven.vercel.app/",
    ttl: "Nowledge",
    tags: ["Next.js", "jamstack"],
  },
  {
    thumb: "/works/neutrial.png",
    url: "https://neutrial.com/",
    ttl: "neutrial",
    tags: ["Shopify"],
  },
  {
    thumb: "/works/Beams.png",
    url: "https://www.beams.co.jp/special/beams_cultuart/",
    ttl: "Beams Cultuart",
    tags: ["Wordpress"],
  },
  {
    thumb: "/works/nikoand.png",
    url: "https://www.dot-st.com/nikoand/cp/202408product_zakka",
    ttl: "nikoand... キン肉マンコラボ",
    tags: ["LP", "Canvas"],
  },
  {
    thumb: "/works/THREE.png",
    url: "https://www.threecosmetics.com/brand/news/fragrance-finder",
    ttl: "THREE FRAGRANCE FINDER",
    tags: ["LP", "Canvas"],
  },
  {
    thumb: "/works/tku.png",
    url: "https://www.tku.ac.jp/",
    ttl: "東京経済大学",
    tags: ["Movabletype7"],
  },
  {
    thumb: "/works/kidsattic.png",
    url: "https://www.kids-attic.org/",
    ttl: "キッズアティック",
    tags: ["LP"],
  },
];

const WorksPage = () => {
  return (
    <div className="min-h-dvh w-full pt-[100px] md:pt-[140px] pr-[20px] pb-[50px] pl-[20px] fixed md:left-[50%] md:translate-x-[-50%] h-full overflow-auto scrollbar-hide">
      <PageTtl text="WORKS" />
      <div className="w-full md:max-w-[800px] md:m-auto">
        <Works list={list} />
      </div>
    </div>
  );
};

export default WorksPage;
