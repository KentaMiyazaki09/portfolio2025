"use client";

import { useEffect } from "react";

export default function ParticlesBoot() {
  useEffect(() => {
    import("@/lib/particlesClient").then((m) => m.startParticlesOnce());
  }, []);

  return null; // DOMに何も描画しない
}
