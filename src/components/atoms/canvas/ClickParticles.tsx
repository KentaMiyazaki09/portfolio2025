"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

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
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: true },
          background: {
            color: "transparent",
          },
          particles: {
            shape: {
              type: "circle",
            },
            color: {
              value: "#ffffff",
            },
            size: {
              value: 5,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              outModes: "destroy",
            },
            opacity: {
              value: 1,
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
                quantity: 10,
              },
            },
          },
        }}
      />
    );
  }

  return <></>;
}
