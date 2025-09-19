"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const ArchMaskBg = ({
  color,
  maskId,
}: {
  color: string;
  maskId: string;
  fromY?: number;
  toY?: number;
}) => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute"
      initial={{ y: "100%" }}
      animate={{
        y: "0%",
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
      }}
      exit={{
        y: "-100%",
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* <defs>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="white" />
          <motion.path
            fill="black"
            d="M0,300 Q50,270 100,300 L100,100 L0,100 Z"
            // d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
          />
        </mask>
      </defs> */}
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
