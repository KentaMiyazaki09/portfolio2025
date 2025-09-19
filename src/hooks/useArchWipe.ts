import { useEffect, useRef } from "react";

export type Target = "/about" | "/works" | null;

type Options = {
  from: number;
  to: number;
  shapeMs?: number; // アーチ補間の時間
  inMs?: number; // スライドインの時間
  outMs?: number; // スライドアウトの時間
  easing?: (t: number) => number;
  makePath: (h: number) => string;
  prevPage: string | null;
  // onCloseEnd: () => void;
};

export function useArchWipe(
  ref: React.RefObject<SVGPathElement>,
  show: Target,
  mine: Target,
  {
    from,
    to,
    shapeMs = 1600,
    inMs = 1200,
    outMs = 800,
    easing = (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
    makePath,
    prevPage,
  }: // onCloseEnd,
  Options
) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 既存アニメ中断（Web Animations API）
    el.getAnimations?.().forEach((a) => a.cancel());

    // 形状補間の tick
    const start = performance.now();
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / shapeMs);
      const h = from + (to - from) * easing(t);
      el.setAttribute("d", makePath(h));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    if (show === mine) {
      // ページ一致時、下から入ってくる
      el.animate(
        [
          { transform: "translateY(120%)", opacity: 1 },
          { transform: "translateY(0%)", opacity: 1 },
        ],
        { duration: inMs, easing: "linear", fill: "forwards" }
      );
      rafRef.current = requestAnimationFrame(tick);
    } else {
      // ページ不一致時、上に抜ける
      if (prevPage === mine) {
        el.animate(
          [
            { transform: "translateY(0%)", opacity: 1 },
            { transform: "translateY(-120%)", opacity: 1 },
          ],
          { duration: outMs, easing: "linear", fill: "forwards" }
        );

        // onCloseEnd();
      }
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [
    show,
    ref,
    from,
    to,
    shapeMs,
    inMs,
    outMs,
    easing,
    makePath,
    mine,
    prevPage,
    // onCloseEnd,
  ]);
}
