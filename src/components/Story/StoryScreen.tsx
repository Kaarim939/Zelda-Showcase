import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { SectionTitle } from "../SectionTitle";

function Model(props: any) {
  const { scene } = useGLTF("/assets/masterSword/scene.gltf"); // Adjust the path to your .gltf file
  return <primitive object={scene} {...props} />;
}

export const StoryScreen: React.FC = () => {
  return (
    <>
      <SectionTitle title="Characters" />
      <Canvas style={{ height: "100vh", width: "auto" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
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
        <Model />
        <OrbitControls />
        {/* Environment for reflections */}
        <Environment files="/assets/masterSword/env.hdr" background={false} />
      </Canvas>
    </>
  );
};
