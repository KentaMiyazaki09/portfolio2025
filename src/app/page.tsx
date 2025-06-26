"use client";

import React from "react";
import { motion } from "motion/react";

const TopPage: React.FC = () => {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <main className="">
        <h1>K.Miyazaki PORTFOLIO</h1>
      </main>
    </motion.div>
  );
};

export default TopPage;
