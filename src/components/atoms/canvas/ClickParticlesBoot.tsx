"use client";

import { useEffect } from "react";

export default function ClickParticlesBoot() {
  useEffect(() => {
    import("@/lib/clickParticlesClient").then((m) => m.startParticlesOnce());
  }, []);

  return null; // DOMに何も描画しない
}
