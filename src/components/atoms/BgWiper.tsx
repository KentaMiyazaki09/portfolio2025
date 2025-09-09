"use client";

import { Target, useArchWipe } from "@/hooks/useArchWipe";
import { usePreviousPathname } from "@/hooks/usePreviousPathname";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * @param h 波の高さ（大きいほど山が高い）
 */
const archPath = (h: number) => {
  const y = Math.max(0, h);
  const cy = Math.max(0, h - 30);
  return `M0,${y} Q50,${cy} 100,${y} L100,100 L0,100 Z`;
};

const TextParticles = () => {
  // 初回マウントの処理
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  // ページ遷移時に表示ON
  const pathname = usePathname();
  const [show, setShow] = useState<Target>(null);
  useEffect(() => {
    if (pathname === "/about") {
      setShow("/about");
    } else if (pathname === "/works") {
      setShow("/works");
    } else {
      setShow(null);
    }
  }, [pathname]);

  /* SVG背景のアニメーションを実行 */
  const pathRefAbout = useRef<SVGPathElement | null>(null);
  const pathRefWorks = useRef<SVGRectElement | null>(null);

  const prevPage = usePreviousPathname();

  useArchWipe(pathRefAbout, show, "/about", {
    from: 300,
    to: 0,
    makePath: archPath,
    prevPage,
  });
  useArchWipe(pathRefWorks, show, "/works", {
    from: 300,
    to: 0,
    makePath: archPath,
    prevPage,
  });

  if (!mount) return;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      {/* about背景 */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute"
      >
        <defs>
          <mask id="wipe-mask">
            <rect width="100%" height="100%" fill="black" />
            <path
              ref={pathRefAbout}
              fill="white"
              transform="translate(0, 120)"
            />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="#283655"
          mask="url(#wipe-mask)"
        />
      </svg>

      {/* works背景 */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute"
      >
        <defs>
          <mask id="wipe-mask-works">
            <rect width="100%" height="100%" fill="black" />
            <path
              ref={pathRefWorks}
              fill="white"
              transform="translate(0, 120)"
            />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="#4d648d"
          mask="url(#wipe-mask-works)"
        />
      </svg>
    </div>
  );
};

export default TextParticles;
