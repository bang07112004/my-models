import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Dragon = () => {
  const dragon = useGLTF("./Dragon/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} position={[0, 3, 4]} />
      <primitive
        object={dragon.scene}
        scale={2.5}
        position-y={-1.5}
        rotation-y={0}
      />
    </mesh>
  );
};

const DragonCanvas = () => {
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
        <Dragon />
      </Suspense>
    </Canvas>
  );
};
export default DragonCanvas;
