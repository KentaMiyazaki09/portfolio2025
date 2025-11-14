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

const CanvasWrapper: React.FC = () => {
  const { selectedId } = useSharedState();

  return (
    <div className={`${styles.wrapper} z-10`}>
      <Canvas
        shadows
        className="touch-none z-[100]"
      >
        {/* <Environment files="/hdri/night_puresky.hdr" background={false} environmentIntensity={0.3} /> */}

        /** 前方から照らすライト */
        <directionalLight
          intensity={2}
          position={[0, 0, 5]}
          castShadow
        />

        /** 上から照らすライト */
        <directionalLight
          intensity={0.8}
          position={[0, 10, 8]}
        />

        /** 逆光（後ろから照らすライト） */
        <directionalLight
          intensity={0.8}
          position={[-2, 1, -3]}
        />

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
