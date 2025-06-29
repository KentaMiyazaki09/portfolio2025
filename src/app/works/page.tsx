"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";

import Carousel from "@/components/organisms/Carousel";

const WorksPage: React.FC = () => {
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
          <Carousel />
        </main>
      </motion.div>
    </>
  );
};

export default WorksPage;
