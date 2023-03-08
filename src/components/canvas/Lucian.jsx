import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Lucian = () => {
  const lucian = useGLTF("./Lucian/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[0, 3, 4]} />
      <primitive
        object={lucian.scene}
        scale={0.3}
        position-y={-1.75}
        position-x={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const LucianCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
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
        <Lucian />
      </Suspense>
    </Canvas>
  );
};
export default LucianCanvas;
