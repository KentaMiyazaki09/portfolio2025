"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function ClickParticles() {
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
  };

  if (init) {
    return (
      <Particles
        className="pointer-events-none"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
