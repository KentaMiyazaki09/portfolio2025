"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

import Model from "../atoms/canvas/GLTFModel";

import styles from "@/styles/organisms/canvasWrapper.module.css";

import { useSharedState } from "@/context/SharedStateProvider";

import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const CanvasWrapper: React.FC = () => {
  const { selectedId } = useSharedState();

  return (
    <div className={`${styles.wrapper} z-10`}>
      <Canvas
        shadows
        className="touch-none z-[100]"
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
          gl.outputColorSpace = THREE.SRGBColorSpace; // r152+
        }}
      >
        <Environment files="/hdri/night_puresky.hdr" background={false} />

        <PerspectiveCamera
          makeDefault
          position={[0, 5, 15]}
          fov={60}
          near={0.1}
          far={50}
        />

        <Suspense fallback={null}>
          <Model
            key={selectedId}
            url={`/glb/${selectedId}.glb`}
            timeScale={1}
            autoplay={true}
          />
        </Suspense>

        <EffectComposer>
          <Bloom
            intensity={0.1} // strength
            luminanceThreshold={0.4} // threshold
            luminanceSmoothing={0.2} // ソフトしきい値
            radius={0.2} // 広がり
          />
        </EffectComposer>

        <OrbitControls
          target={[0, 1, 0]}
          makeDefault
          enablePan={false}
          enableZoom={true}
          minDistance={10}
          maxDistance={30}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 180} // 下方向の制限
          maxPolarAngle={(Math.PI / 180) * 100} // 上方向の制限
          minAzimuthAngle={-Math.PI / 3} // 左への回転制限
          maxAzimuthAngle={Math.PI / 3} // 右への回転制限
          onStart={() => window.dispatchEvent(new Event("rotate-hint-dismiss"))}
        />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
