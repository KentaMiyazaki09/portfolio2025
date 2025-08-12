// "use client";
import { tsParticles, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let started = false;
let startPromise: Promise<void> | null = null;

export async function startParticlesOnce(id = "tsparticles") {
  if (started) return;
  if (startPromise) return startPromise;

  startPromise = (async () => {
    await loadSlim(tsParticles); // エンジン読込
    const options: ISourceOptions = {
      fullScreen: { enable: true, zIndex: 20 },
      background: {
        color: "transparent",
      },
      particles: {
        shape: {
          type: ["circle"],
        },
        color: {
          value: {
            h: { min: 0, max: 360 },
            s: 80,
            l: 60,
          },
        },
        size: {
          value: { min: 4, max: 20 },
        },
        move: {
          enable: true,
          speed: { min: 2, max: 7 },
          direction: "none",
          outModes: "destroy",
        },
        opacity: {
          value: 0.4,
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: { min: 2, max: 10 },
          },
        },
      },
      detectRetina: true,
    };

    // すでに同IDのコンテナがあるなら再ロードしない
    if (tsParticles.dom().some((c) => String(c.id) === id)) return;

    // body直下にキャンバスを作成
    await tsParticles.load({ id, options });
    started = true;
  })();

  return startPromise;
}
