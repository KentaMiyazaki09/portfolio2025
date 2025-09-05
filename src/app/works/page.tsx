"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";
import WorksList from "@/components/organisms/WorksList";

const list = [
  { id: "art_eggs", ttl: "目玉焼き", img: "egg.png" },
  { id: "10_room", ttl: "10日でBlender4入門", img: "room.png" },
  { id: "ice", ttl: "アイス", img: "02_ice.png" },
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
          <WorksList list={list} />
        </main>
      </motion.div>
    </main>
  );
};

export default WorksPage;
