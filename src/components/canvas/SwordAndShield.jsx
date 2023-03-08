import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const SwordShield = () => {
  const swordShield = useGLTF("./SwordAndShield/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={swordShield.scene}
        scale={0.25}
        position-y={-2}
        rotation-y={0}
      />
    </mesh>
  );
};

const SwordShieldCanvas = () => {
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
        <SwordShield />
      </Suspense>
    </Canvas>
  );
};
export default SwordShieldCanvas;
