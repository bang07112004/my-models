import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Darius = () => {
  const darius = useGLTF("./Darius/scene.gltf");
  return (
    <primitive
      object={darius.scene}
      scale={0.1}
      position-y={-2.5}
      rotation-y={0}
    />
  );
};

const DariusCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          maxPolarAngl={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Darius />
      </Suspense>
    </Canvas>
  );
};
export default DariusCanvas;
