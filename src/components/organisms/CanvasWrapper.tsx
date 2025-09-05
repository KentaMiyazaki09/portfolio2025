"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Model from "../atoms/canvas/GLTFModel";

import styles from "@/styles/organisms/canvasWrapper.module.css";

import { useSharedState } from "@/context/SharedStateProvider";

const CanvasWrapper: React.FC = () => {
  const { selectedId } = useSharedState();

  return (
    <div className={`${styles.wrapper} z-10`}>
      <Canvas shadows className="touch-none z-[100]">
        <PerspectiveCamera
          makeDefault
          position={[0, 30, 30]}
          fov={60}
          near={0.1}
          far={50}
        />
        <fog attach="fog" args={["#0b0f14", 18, 65]} />
        {/* ふわっと全体を持ち上げる環境光 */}
        <ambientLight intensity={0.35} color={"#f1f5ff"} />

        {/* 柔らかいキーライト（影を落とす） */}
        <directionalLight
          position={[8, 15, 15]}
          intensity={1.0}
          color={"#fff6f0"}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-5near={1}
          shadow-camera-far={60}
          shadow-normalBias={0.02}
        />

        {/* フィルライト（下寄り・弱く・少し青）→ 下半分が真っ黒になるのを防ぐ */}
        <directionalLight
          position={[-6, -4, 6]}
          intensity={0.35}
          color={"#a7c8ff"}
        />

        {/* ほんのりリムライト（輪郭にハイライト） */}
        <directionalLight
          position={[-10, 6, -6]}
          intensity={0.6}
          color={"#cfe8ff"}
        />

        <Suspense fallback={null}>
          <Model
            key={selectedId}
            url={`/glb/${selectedId}.glb`}
            timeScale={1}
            autoplay={true}
          />
        </Suspense>

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
