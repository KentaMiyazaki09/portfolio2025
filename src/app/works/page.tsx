"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";
import WorksList from "@/components/organisms/WorksList";

const list = [
  {
    id: "hoge01010",
    ttl: "works01",
    img: "works01.jpg",
  },
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
        <main className="min-h-dvh">
          <WorksList list={list} />
        </main>
      </motion.div>
    </>
  );
};

export default WorksPage;
