import React, { useRef, useState } from "react";
import { Canvas, useFrame, Vector3, Euler } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { IStoryStep } from "./storyData";

function Model(props: any) {
  const { scene } = useGLTF("/assets/story/cave.glb"); // Adjust the path to your .gltf file
  return <primitive object={scene} {...props} />;
}

const CustomCamera: React.FC<{
  stepPosition: Vector3;
  stepRotation: Euler;
}> = ({ stepPosition, stepRotation }) => {
  const cameraRef = useRef<any>();
  const [lastLoggedTime, setLastLoggedTime] = useState(0);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (elapsedTime - lastLoggedTime >= 5) {
      if (cameraRef.current) {
        const { position, rotation } = cameraRef.current;
        console.log(
          `Camera position: x: ${position.x}, y: ${position.y}, z: ${position.z},`,
        );
        console.log(
          `Camera rotation: x: ${rotation.x}, y: ${rotation.y}, z: ${rotation.z},`,
        );
      }
      setLastLoggedTime(elapsedTime);
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      position={stepPosition}
      rotation={stepRotation}
      ref={cameraRef}
    />
  );
};

export const StoryScreen: React.FC<{ storyStep: IStoryStep }> = ({
  storyStep,
}) => {
  return (
    <Canvas style={{ height: "100vh", width: "auto" }}>
      <CustomCamera
        stepPosition={storyStep.position}
        stepRotation={storyStep.rotation}
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
      {/* Environment for reflections */}
      <Environment files="/assets/masterSword/env.hdr" background={false} />
    </Canvas>
  );
};
