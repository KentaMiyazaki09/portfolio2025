"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const ArchMaskBg = ({ color, maskId }: { color: string; maskId: string }) => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute"
      initial={{ y: "120%" }}
      animate={{
        y: "0%",
        transition: { duration: 0.9, ease: "linear" },
      }}
      exit={{
        y: "-120%",
        transition: { duration: 0.6, ease: "linear" },
      }}
    >
      <mask id={maskId}>
        <rect width="100%" height="100%" fill="white" />
        <motion.g>
          <rect x="0" y="90" width="100" height="300" fill="black" />
          <motion.circle cx="50" cy="0" r="20" fill="black" />
        </motion.g>
      </mask>

      <rect width="100%" height="100%" fill={color} mask={`url(#${maskId})`} />
    </motion.svg>
  );
};

export default function BgWipes() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const isWorks = pathname === "/works";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <AnimatePresence mode="wait">
        {isAbout && (
          <ArchMaskBg color="#283655" key="mask-about" maskId="mask-about" />
        )}
        {isWorks && (
          <ArchMaskBg color="#4d648d" key="mask-works" maskId="mask-works" />
        )}
      </AnimatePresence>
    </div>
  );
}
