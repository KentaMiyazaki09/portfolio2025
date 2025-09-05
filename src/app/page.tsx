"use client";

import React from "react";
import { motion } from "motion/react";

import Styles from "@/styles/page.module.css";

const TopPage = () => {
  return (
    <main
      data-page-title="3D & Web"
      className="fixed top-[25%] left-[16px] md:left-[32px] z-30 pointer-events-none"
    >
      <motion.div
        key="home"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-[clamp(1.5rem,1.875vw,2.0rem)] font-semibold tracking-widest [text-shadow:2px_2px_0_black] mb-3">
          KENTA MIYAZAKI
        </h1>
        <p className="text-[clamp(1.875rem,3.75vw,3rem)] leading-[1.2] font-extrabold [text-shadow:2px_2px_0_black]">
          <span className={Styles.hasBorder}>Front Developer</span>
          <br />
          3D <span>&</span> Web
        </p>
      </motion.div>
    </main>
  );
};

export default TopPage;
