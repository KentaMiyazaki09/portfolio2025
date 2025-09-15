"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";
import Works from "@/components/molecules/Works";

const list = [
  {
    thumb: "/works/nowledge.png",
    url: "https://nowledge.rhino-inc.jp/",
    ttl: "Portfolio",
    tags: ["Next.js", "typescript", "Blender"],
  },
  {
    thumb: "/works/Portfolio.png",
    url: "https://portfolio2025-delta-seven.vercel.app/",
    ttl: "Nowledge",
    tags: ["Next.js", "jamstack", "microCMS", "Netlify"],
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
    tags: ["LP", "Canvas2D"],
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
    <main>
      <PageTtl text="WORKS" />
      <motion.div
        key="works"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.9 }}
      >
        <main className="min-h-dvh">
          <Works list={list} />
        </main>
      </motion.div>
    </main>
  );
};

export default WorksPage;
