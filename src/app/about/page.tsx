"use client";

import React from "react";
import { motion } from "motion/react";

const AboutPage: React.FC = () => {
  return (
    <motion.div
      key="works"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <h1>ABOUT</h1>
        <h2>SKILL</h2>
        <p>Next.js, three.js, blender</p>
      </main>
    </motion.div>
  );
};

export default AboutPage;
