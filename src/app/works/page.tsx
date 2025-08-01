"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";
import WorksList from "@/components/organisms/WorksList";

const list = [
  { id: "egg", ttl: "目玉焼き", img: "01_egg.jpg" },
  { id: "ice", ttl: "アイス", img: "02_ice.png" },
  { id: "cup", ttl: "マグカップ", img: "03_cup.png" },
];

const WorksPage = () => {
  return (
    <>
      <PageTtl text="WROKS" />
      <motion.div
        key="works"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <main className="min-h-dvh z-10">
          <WorksList list={list} />
        </main>
      </motion.div>
    </>
  );
};

export default WorksPage;
