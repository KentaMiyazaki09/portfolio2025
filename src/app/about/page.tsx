"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";
import AboutTabs from "@/components/organisms/AboutTabs";

const AboutPage: React.FC = () => {
  return (
    <>
      <PageTtl text="ABOUT" />
      <motion.div
        key="works"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-[0px] left-[0px] p-4 w-full"
      >
        <AboutTabs />
      </motion.div>
    </>
  );
};

export default AboutPage;
