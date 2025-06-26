"use client";

import React from "react";
import { motion } from "motion/react";

import Carousel from "@/components/organisms/Carousel";

const WorksPage: React.FC = () => {
  return (
    <motion.div
      key="works"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <main className="min-h-dvh">
        <h1>WROKS</h1>
        <Carousel />
      </main>
    </motion.div>
  );
};

export default WorksPage;
