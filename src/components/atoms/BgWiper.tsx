"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TextParticles = () => {
  const pathname = usePathname();
  const [mount, setMount] = useState(false);

  const [show, setShow] = useState(false);
  const [showWorks, setShowWorks] = useState(false);

  const ref = useRef<SVGRectElement | null>(null);
  const refWorks = useRef<SVGRectElement | null>(null);

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
    const el = ref.current;
    if (!el) return;

    if (show) {
      el.animate(
        [
          { transform: "translateY(120%)", opacity: 1 },
          { transform: "translateY(0%)", opacity: 1 },
        ],
        {
          duration: 500,
          easing: "linear",
          fill: "forwards",
        }
      );
    } else {
      el.animate(
        [
          { transform: "translateY(0%)", opacity: 1 },
          { transform: "translateY(-120%)", opacity: 1 },
        ],
        {
          duration: 500,
          easing: "linear",
          fill: "forwards",
        }
      );
    }
  }, [show]);

  /* worksの背景 */
  useEffect(() => {
    const el = refWorks.current;
    if (!el) return;

    if (showWorks) {
      el.animate(
        [
          { transform: "translateY(120%)", opacity: 1 },
          { transform: "translateY(0%)", opacity: 1 },
        ],
        {
          duration: 500,
          easing: "linear",
          fill: "forwards",
        }
      );
    } else {
      el.animate(
        [
          { transform: "translateY(0%)", opacity: 1 },
          { transform: "translateY(-120%)", opacity: 1 },
        ],
        {
          duration: 500,
          easing: "linear",
          fill: "forwards",
        }
      );
    }
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
            <rect
              ref={ref}
              x="0"
              y="0"
              width="100%"
              height="120%"
              fill="white"
              transform="translate(0, 120)"
            />
          </mask>
        </defs>

        {/* フィルレイヤー */}
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
            <rect
              ref={refWorks}
              x="0"
              y="0"
              width="100%"
              height="120%"
              fill="white"
              transform="translate(0, 120)"
            />
          </mask>
        </defs>

        {/* フィルレイヤー */}
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
