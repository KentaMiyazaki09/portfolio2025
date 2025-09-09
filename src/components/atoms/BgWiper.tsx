"use client";

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
  const pathname = usePathname();
  const [mount, setMount] = useState(false);

  const [show, setShow] = useState(false);
  const [showWorks, setShowWorks] = useState(false);

  // const ref = useRef<SVGRectElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  // const refWorks = useRef<SVGRectElement | null>(null);
  const pathRefWorks = useRef<SVGRectElement | null>(null);

  useEffect(() => setMount(true), []);

  // ページ遷移時に表示ON
  useEffect(() => {
    if (pathname === "/about") {
      setShow(true);
      setShowWorks(false);
    } else if (pathname === "/works") {
      setShowWorks(true);
      setShow(false);
    } else {
      setShowWorks(false);
      setShow(false);
    }
  }, [pathname]);

  /* aboutの背景 */
  useEffect(() => {
    const el = pathRef.current;
    let raf = 0;
    const start = performance.now();
    const from = 360;
    const to = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / 1600);
      const h = from + (to - from) * ease(t);
      if (pathRef.current) pathRef.current.setAttribute("d", archPath(h));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    if (!el) return;

    if (show) {
      if (el) {
        el.setAttribute("d", archPath(from));
        el.animate(
          [
            { transform: "translateY(120%)", opacity: 1 },
            { transform: "translateY(0%)", opacity: 1 },
          ],
          {
            duration: 1200,
            easing: "linear",
            fill: "forwards",
          }
        );
        raf = requestAnimationFrame(tick);
      }
    } else {
      if (el) {
        // el.setAttribute("d", archPath(from));
        el.animate(
          [
            { transform: "translateY(0%)", opacity: 1 },
            { transform: "translateY(-120%)", opacity: 1 },
          ],
          {
            duration: 600,
            easing: "linear",
            fill: "forwards",
          }
        );
        // raf = requestAnimationFrame(tick);
      }
    }

    return () => cancelAnimationFrame(raf);
  }, [show]);

  /* worksの背景 */
  useEffect(() => {
    const el = pathRefWorks.current;
    let raf = 0;
    const start = performance.now();
    const from = 360;
    const to = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / 1600);
      const h = from + (to - from) * ease(t);
      if (pathRefWorks.current)
        pathRefWorks.current.setAttribute("d", archPath(h));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    if (!el) return;

    if (showWorks) {
      if (el) {
        el.setAttribute("d", archPath(from));
        el.animate(
          [
            { transform: "translateY(120%)", opacity: 1 },
            { transform: "translateY(0%)", opacity: 1 },
          ],
          {
            duration: 1200,
            easing: "linear",
            fill: "forwards",
          }
        );
        raf = requestAnimationFrame(tick);
      }
    } else {
      if (el) {
        // el.setAttribute("d", archPath(from));
        el.animate(
          [
            { transform: "translateY(0%)", opacity: 1 },
            { transform: "translateY(-120%)", opacity: 1 },
          ],
          {
            duration: 600,
            easing: "linear",
            fill: "forwards",
          }
        );
        // raf = requestAnimationFrame(tick);
      }
    }

    return () => cancelAnimationFrame(raf);
  }, [showWorks]);

  if (!mount) return;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
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
            <path ref={pathRef} fill="white" transform="translate(0, 120)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="#283655"
          mask="url(#wipe-mask)"
        />
      </svg>

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
            <path ref={pathRefWorks} fill="white" />
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
