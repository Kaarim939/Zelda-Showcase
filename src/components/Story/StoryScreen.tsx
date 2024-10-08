import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { IStoryStep } from "./storyData";

function Model(props: any) {
  const { scene } = useGLTF("/assets/story/cave.glb"); // Adjust the path to your .gltf file
  return <primitive object={scene} {...props} />;
}

export const StoryScreen: React.FC<{
  storyStep?: IStoryStep;
}> = ({ storyStep }) => {
  return (
    <>
      {storyStep && (
        <Canvas style={{ height: "100vh", width: "auto" }}>
          <PerspectiveCamera
            makeDefault
            position={storyStep.position}
            rotation={storyStep.rotation}
          />
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
        </Canvas>
      )}
    </>
  );
};
