"use client";

import { useEffect, useState } from "react";

const SwiperToRotateHint = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const dismiss = () => setShow(false);

    window.addEventListener("rotate-hint-dismiss", dismiss);

    return () => window.removeEventListener("rotate-hint-dismiss", dismiss);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-[60px] left-[50%] translate-x-[-28px] z-50 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="40"
        viewBox="0 0 56 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Swipe to rotate"
      >
        <g className="mouse">
          <defs>
            <clipPath id="mouse-clip">
              <rect x="22" y="4" width="12" height="20" rx="6" />
            </clipPath>
          </defs>
          <rect x="22" y="4" width="12" height="20" rx="6" />
          <g clipPath="url(#mouse-clip)">
            <rect
              x="22"
              y="4"
              width="6"
              height="9"
              fill="currentColor"
              opacity="0.28"
            />
          </g>
          <line x1="28" y1="9" x2="28" y2="13" />
        </g>

        <text
          x="28"
          y="36"
          textAnchor="middle"
          fontSize="8"
          fill="currentColor"
          stroke="none"
        >
          swipe
        </text>
      </svg>
      <style jsx>{`
        .mouse {
          transform-box: fill-box; /* SVGの境界基準で */
          transform-origin: 50% 100%; /* 底辺中心を支点に回転 */
          animation: wave 4s ease-in-out infinite;
        }
        @keyframes wave {
          0%,
          80%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }
      `}</style>
    </div>
  );
};
export default SwiperToRotateHint;
