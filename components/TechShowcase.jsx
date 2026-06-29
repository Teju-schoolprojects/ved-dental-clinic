"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Ring, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function HologramRings() {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = elapsed * 0.4;
      outerRingRef.current.rotation.y = elapsed * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = -elapsed * 0.3;
      innerRingRef.current.rotation.z = elapsed * 0.5;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = elapsed * 0.15;
      const scale = 1 + Math.sin(elapsed * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Outer Hologram Ring */}
      <group ref={outerRingRef}>
        <Ring args={[1.5, 1.53, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#1e40af" side={THREE.DoubleSide} transparent opacity={0.4} />
        </Ring>
      </group>

      {/* Inner Diagonal Ring */}
      <group ref={innerRingRef}>
        <Ring args={[1.1, 1.12, 64]} rotation={[0, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#0a1d37" side={THREE.DoubleSide} transparent opacity={0.6} />
        </Ring>
      </group>

      {/* Central Holographic Dental Scan Mesh (represented by wireframe octahedron/sphere) */}
      <mesh ref={coreRef} castShadow>
        <octahedronGeometry args={[0.7, 2]} />
        <meshBasicMaterial
          color="#1e40af"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Glow Core */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color="#1e40af" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

export default function TechShowcase() {
  return (
    <group>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.6}>
        <HologramRings />
        {/* Floating Scanner Sparkles */}
        <Sparkles
          count={60}
          scale={3.0}
          size={2.0}
          speed={1.0}
          color="#1e40af"
          opacity={0.7}
        />
      </Float>
    </group>
  );
}
