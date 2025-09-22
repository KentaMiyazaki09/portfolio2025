"use client";

import PageTtl from "@/components/atoms/PageTtl";
import AboutTabs from "@/components/organisms/AboutTabs";

const AboutPage = () => {
  return (
    <div className="p-4 min-h-dvh w-full flex justify-end">
      <PageTtl text="ABOUT" />
      <AboutTabs />
    </div>
  );
};

export default AboutPage;
