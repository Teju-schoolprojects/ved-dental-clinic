"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/20 backdrop-blur-md z-10">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin"></div>
        <div className="absolute w-6 h-6 border border-brand-accent/30 border-b-brand-accent rounded-full animate-spin-slow"></div>
      </div>
      <p className="text-[10px] font-semibold text-brand-blue uppercase tracking-widest mt-4 animate-pulse">
        Initializing 3D Space...
      </p>
    </div>
  );
}

export default function ThreeCanvas({ children, className = "h-full w-full" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`${className} bg-transparent relative flex items-center justify-center`}>
        <CanvasLoader />
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          shadows
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="bg-transparent"
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e40af" />
          <pointLight position={[10, 5, 10]} intensity={0.8} color="#0a1d37" />
          <Center>
            {children}
          </Center>
        </Canvas>
      </Suspense>
    </div>
  );
}
