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
    <div className={`${styles.wrapper} z-10`}>
      <Canvas shadows camera={{ position: [2.5, 2, 20], fov: 60 }}>
        <directionalLight
          position={[0, 15, 20]}
          intensity={6}
          // castShadow
          // // shadow-mapSize-width={2048}
          // // shadow-mapSize-height={2048}
          // // shadow-camera-near={0.1}
          // // shadow-camera-far={50}
          // // shadow-camera-left={-30}
          // // shadow-camera-right={30}
          // // shadow-camera-top={30}
          // // shadow-camera-bottom={-30}
        />
        <Suspense fallback={null}>
          <Model key={selectedId} url={`/glb/${selectedId}.glb`} />
          <Floor />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
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
