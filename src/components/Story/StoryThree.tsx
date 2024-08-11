import React from "react";
import { Canvas, Euler } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { IStoryStep } from "./storyData";
import { Vector3 } from "three";

function Model(props: any) {
  const { scene } = useGLTF("/assets/story/cave.glb"); // Adjust the path to your .gltf file
  return <primitive object={scene} {...props} />;
}

export const StoryThree: React.FC<{
  storyStep?: IStoryStep;
  nextStep: IStoryStep;
}> = ({ storyStep, nextStep }) => {
  const [springProps, set] = useSpring(() => ({
    position: storyStep ? storyStep.position : [0, 0, 0],
    rotation: storyStep ? storyStep.rotation : [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  React.useEffect(() => {
    set({
      position: nextStep.position,
      rotation: nextStep.rotation,
    });
  }, [nextStep, set]);

  return (
    <>
      {storyStep && (
        <Canvas style={{ height: "100vh", width: "auto" }}>
          <a.perspectiveCamera
            position={springProps.position as unknown as Vector3}
            rotation={springProps.rotation as unknown as Euler}
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
