"use client";

import React from "react";
import { motion } from "motion/react";

import PageTtl from "@/components/atoms/PageTtl";

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
        className="fixed bottom-[0px] left-[0px] p-4"
      >
        <main>
          <div className="border-b-2 border-black pb-4 mb-6">
            <h2 className="text-3xl font-semibold tracking-[0.07em]">
              宮崎 健太
            </h2>
            <p className="text-base tracking-[0.26em]">KENTA MIYAZAKI</p>
          </div>
          <p>
            フロントエンジニア。1995年生まれ。
            <br />
            LP制作、Wordpress、Next.jsで素敵なWEBサイト作ります。
            <br />
            新たなWEB表現を求め、3Dアニメーション（three.js, blender）を勉強中。
          </p>
        </main>
      </motion.div>
    </>
  );
};

export default AboutPage;
