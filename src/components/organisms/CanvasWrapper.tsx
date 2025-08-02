"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import Model from "../atoms/canvas/GLTFModel";
import Floor from "../atoms/canvas/Floor";

import styles from "@/styles/organisms/canvasWrapper.module.css";

import { useSharedState } from "@/context/SharedStateProvider";

const CanvasWrapper: React.FC = () => {
  const { selectedId } = useSharedState();

  return (
    <div className={styles.wrapper}>
      <Canvas shadows camera={{ position: [2.5, 2, 20], fov: 45 }}>
        <directionalLight
          position={[0.7, 5, 6]}
          intensity={2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={1}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={null}>
          <Model key={selectedId} url={`/glb/${selectedId}.glb`} />
          <Floor />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 180} // 下方向の制限
          maxPolarAngle={(Math.PI / 180) * 100} // 上方向の制限
          minAzimuthAngle={-Math.PI / 3} // 左への回転制限
          maxAzimuthAngle={Math.PI / 3} // 右への回転制限
        />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
