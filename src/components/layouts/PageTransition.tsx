"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useSharedState } from "@/context/SharedStateProvider";

gsap.registerPlugin(useGSAP);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const el = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const { leavingTo, setLeavingTo } = useSharedState();

  useGSAP(
    () => {
      if (leavingTo) {
        gsap.to(el.current, {
          opacity: 0,
          y: -50,
          duration: 0.9,
          ease: "power3.in",
          onComplete: () => {
            const to = leavingTo;
            setLeavingTo(null);
            router.push(to);
          },
        });
      } else {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );
      }
    },
    { dependencies: [leavingTo], scope: el }
  );

  return (
    <div
      ref={el}
      className={`relative z-30 ${
        pathname === "/" ? "pointer-events-none" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
