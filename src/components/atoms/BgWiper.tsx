"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TextParticles = () => {
  const pathname = usePathname();
  const [mount, setMount] = useState(false);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#fff");
  const ref = useRef<SVGRectElement | null>(null);

  useEffect(() => setMount(true), []);

  // ページ遷移時に表示ON
  useEffect(() => {
    if (pathname === "/about") {
      setColor("#4169e1");
      setShow(true);
    } else {
      setShow(false);
    }
  }, [pathname]);

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

  if (!mount) return;
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
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
        <rect width="100%" height="100%" fill={color} mask="url(#wipe-mask)" />
      </svg>
    </div>
  );
};

export default TextParticles;
