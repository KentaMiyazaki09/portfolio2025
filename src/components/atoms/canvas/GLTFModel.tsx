"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

type ModelProps = {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  /** アニメ速度（再生スピード） */
  timeScale?: number;
  /** 先頭から再生するか（falseで最終フレームにジャンプして停止） */
  autoplay?: boolean;
  /** 指定のアニメ名がある場合（無ければ0番目） */
  clipName?: string;
};

const Model: React.FC<ModelProps> = ({
  url,
  position = [0, -2, 0],
  rotation = [Math.PI / 180, -0.5, 0],
  timeScale = 1,
  autoplay = true,
  clipName,
}) => {
  const group = useRef<Group>(null!);

  // GLB読み込み
  const { scene, animations } = useGLTF(url) as unknown as {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
  };

  // 影などの調整（1回だけ）
  useMemo(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        obj.castShadow = true;
      }
    });
  }, [scene]);

  // アニメーション制御
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    // すべてのクリップを 1 回だけ再生して最後で停止
    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.reset();
      action.setLoop(THREE.LoopOnce, 0);
      action.clampWhenFinished = true;
      action.enabled = true;
      action.play();
    });
  }, [actions, animations, mixer, timeScale, autoplay, clipName]);

  // 念のためmixer更新（dreiのuseAnimationsは状況により自動更新されないことがあるため）
  useFrame((_, delta) => {
    if (mixer) mixer.update(delta);
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;

// 先読み（任意）
useGLTF.preload as unknown as (url: string) => void;
