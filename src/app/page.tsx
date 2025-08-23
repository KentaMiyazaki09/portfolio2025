"use client";

import React from "react";
import { motion } from "motion/react";

import Styles from "@/styles/page.module.css";

const TopPage = () => {
  return (
    <div className="fixed top-[25%] left-[16px] md:left-[32px] z-30">
      <motion.div
        key="home"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[clamp(1.125rem,1.875vw,1.5rem)] font-semibold tracking-widest [text-shadow:2px_2px_0_black] opacity-80 mb-3">
          KENTA MIYAZAKI
        </h1>
        <p className="text-[clamp(1.875rem,3.75vw,3rem)] leading-[1.2] font-extrabold [text-shadow:2px_2px_0_black]">
          <span className={Styles.hasBorder}>Front Developer</span>
          <br />
          3D <span className="opacity-80">&</span> Web
        </p>
      </motion.div>
    </div>
  );
};

export default TopPage;
