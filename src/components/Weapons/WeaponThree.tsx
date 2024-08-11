import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const Model: React.FC<{ model: string }> = ({ model }) => {
  const { scene } = useGLTF(model);
  const modelRef = useRef<THREE.Object3D>();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

export const WeaponThree: React.FC<{ weaponModel: string }> = ({
  weaponModel,
}) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 7, 10]} zoom={7} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.6} decay={2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Model model={weaponModel} />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />
      {/* Environment for reflections */}
      <Environment files="/assets/env/env.hdr" background={false} />
    </Canvas>
  );
};
