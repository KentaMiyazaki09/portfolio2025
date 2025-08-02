"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

export default function BgParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    // console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles_bg"
        particlesLoaded={particlesLoaded}
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: true },
          particles: {
            number: { value: 50 },
            color: { value: "#00ffff" },
            shape: { type: "edge" },
            opacity: {
              value: 0.3,
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            size: {
              value: 2,
            },
            links: {
              enable: true,
              distance: 100,
              color: "#00ffff",
              opacity: 0.1,
              width: 1.0,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              outModes: "out",
            },
          },
        }}
      />
    );
  }

  return <></>;
}
