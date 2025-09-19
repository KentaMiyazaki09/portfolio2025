"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

function ArchMaskBg({
  color,
  maskId,
  fromY = 120,
  toY = 0,
}: {
  color: string;
  maskId: string;
  fromY?: number;
  toY?: number;
}) {
  return (
    <motion.svg
      key={maskId}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        initial: {},
        enter: { transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        exit: { transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      <defs>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="white" />
          <motion.path
            fill="black"
            d={`M0,300 Q50,270 100,300 L100,100 L0,100 Z`}
            // d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
            initial={{ y: "120%" }}
            animate={{
              y: "0%",
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              y: "-120%",
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            }}
          />
          {/* <motion.path
            fill="white"
            d={`M0,300 Q50,270 100,300 L100,100 L0,100 Z`}
            initial={{ y: 0 }}
            animate={{
              y: toY,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              y: fromY,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
          /> */}
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={color} mask={`url(#${maskId})`} />
    </motion.svg>
  );
}

export default function BgWipes() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const isWorks = pathname === "/works";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <AnimatePresence>
        {isAbout && (
          <ArchMaskBg color="#283655" maskId={`mask-about-${pathname}`} />
        )}
        {isWorks && (
          <ArchMaskBg color="#4d648d" maskId={`mask-works-${pathname}`} />
        )}
      </AnimatePresence>
    </div>
  );
}
