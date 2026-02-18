import { tsParticles, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let started = false;
let startPromise: Promise<void> | null = null;

export async function startParticlesOnce(id = "tsparticles_bg") {
  if (started) return;
  if (startPromise) return startPromise;

  startPromise = (async () => {
    await loadSlim(tsParticles); // エンジン読込
    const options: ISourceOptions = {
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: "transparent" },
      particles: {
        number: { value: 20 },
        color: { value: "#00ffff" },
        shape: { type: "edge" },
        opacity: { value: 0.4, animation: { enable: true, speed: 1 } },
        size: { value: 15 },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          outModes: "out",
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
