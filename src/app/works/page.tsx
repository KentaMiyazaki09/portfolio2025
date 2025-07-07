"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";
import WorksList from "@/components/organisms/WorksList";

const list = [
  { id: "hoge01010", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01011", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01012", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01013", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01014", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01015", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01016", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01017", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01018", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01020", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01021", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01022", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01023", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01024", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01025", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01026", ttl: "works01", img: "works01.jpg" },
  { id: "hoge01027", ttl: "works01", img: "works01.jpg" },
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
