import React from "react";

import Styles from "@/styles/page.module.css";

const TopPage = () => (
  <div className="pt-[25vw] md:pt-[20vw] pl-[16px] md:pl-[32px]">
    <h1 className="text-[clamp(1.5rem,1.875vw,2.0rem)] font-semibold tracking-widest [text-shadow:2px_2px_0_black] mb-3">
      KENTA MIYAZAKI
    </h1>
    <p className="text-[clamp(1.875rem,3.75vw,3rem)] leading-[1.2] font-extrabold [text-shadow:2px_2px_0_black]">
      <span className={Styles.hasBorder}>Front Developer</span>
      <br />
      3D <span>&</span> Web
    </p>
  </div>
);

export default TopPage;
