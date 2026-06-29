"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function ToothModel() {
  const toothRef = useRef();

  useFrame((state) => {
    if (!toothRef.current) return;

    // Gentle constant rotation combined with mouse tracking
    const targetX = state.pointer.y * 0.4;
    const targetY = state.pointer.x * 0.4;

    // Smooth interpolation (lerp) towards target mouse angle
    toothRef.current.rotation.x = THREE.MathUtils.lerp(
      toothRef.current.rotation.x,
      targetX,
      0.1
    );
    toothRef.current.rotation.y = THREE.MathUtils.lerp(
      toothRef.current.rotation.y,
      targetY + state.clock.getElapsedTime() * 0.15,
      0.1
    );
  });

  // Premium glassmorphism material for the tooth
  const glassMaterial = (
    <meshPhysicalMaterial
      color="#e6f0fa"
      roughness={0.08}
      metalness={0.05}
      transmission={0.7}
      thickness={1.5}
      ior={1.45}
      clearcoat={1.0}
      clearcoatRoughness={0.1}
      specularIntensity={1.0}
      specularColor="#ffffff"
      sheen={0.5}
      sheenColor="#1e40af"
    />
  );

  return (
    <group ref={toothRef}>
      {/* Gentle floating effect */}
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Crown - Main Body */}
        <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.7, 0.6, 0.7, 32]} />
          {glassMaterial}
        </mesh>

        {/* Crown - Cusps (Molar details on top) */}
        <mesh castShadow position={[0.3, 0.55, 0.3]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          {glassMaterial}
        </mesh>
        <mesh castShadow position={[-0.3, 0.55, 0.3]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          {glassMaterial}
        </mesh>
        <mesh castShadow position={[0.3, 0.55, -0.3]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          {glassMaterial}
        </mesh>
        <mesh castShadow position={[-0.3, 0.55, -0.3]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          {glassMaterial}
        </mesh>

        {/* Cervix (Tooth Neck) */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.59, 0.5, 0.15, 32]} />
          {glassMaterial}
        </mesh>

        {/* Roots - Root Left */}
        <mesh castShadow position={[-0.22, -0.55, 0]} rotation={[0, 0, 0.15]}>
          <coneGeometry args={[0.22, 0.7, 16]} />
          {glassMaterial}
        </mesh>

        {/* Roots - Root Right */}
        <mesh castShadow position={[0.22, -0.55, 0]} rotation={[0, 0, -0.15]}>
          <coneGeometry args={[0.22, 0.7, 16]} />
          {glassMaterial}
        </mesh>

        {/* Floating particles around the tooth */}
        <Sparkles
          count={45}
          scale={2.2}
          size={2.5}
          speed={0.8}
          color="#1e40af"
          opacity={0.6}
        />
      </Float>
    </group>
  );
}
