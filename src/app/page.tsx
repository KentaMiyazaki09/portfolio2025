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
      <h1 className="fixed top-0 left-0 opacity-0 pointer-events-none">
        K.Miyazaki PORTFOLIO
      </h1>
    </motion.div>
  );
};

export default TopPage;
