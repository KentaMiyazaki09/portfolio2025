"use client";

import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type ModalProps = {
  url: string;
};

const Model: React.FC<ModalProps> = ({ url }) => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            // child.receiveShadow = true;
          }
        });
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Error loading glb:", error);
      }
    );
  }, [url]);

  if (!model) return null;

  return (
    <group position={[0, -2, 0]} rotation={[Math.PI / 180.0, -0.5, 0]}>
      <primitive object={model} />
    </group>
  );
};

export default Model;
