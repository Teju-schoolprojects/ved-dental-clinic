"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ImplantModel() {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  
  // Refs for exploded parts
  const crownRef = useRef();
  const abutmentRef = useRef();
  const screwRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    // Rotate group based on mouse movement
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.8 + state.clock.getElapsedTime() * 0.1,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.4,
      0.08
    );

    // Target Y positions for exploded vs. assembled state
    const targetCrownY = hovered ? 0.6 : 1.6;
    const targetAbutmentY = hovered ? -0.1 : 0.2;
    const targetScrewY = hovered ? -0.7 : -1.2;

    // Lerp positions
    if (crownRef.current) {
      crownRef.current.position.y = THREE.MathUtils.lerp(
        crownRef.current.position.y,
        targetCrownY,
        0.1
      );
    }
    if (abutmentRef.current) {
      abutmentRef.current.position.y = THREE.MathUtils.lerp(
        abutmentRef.current.position.y,
        targetAbutmentY,
        0.1
      );
    }
    if (screwRef.current) {
      screwRef.current.position.y = THREE.MathUtils.lerp(
        screwRef.current.position.y,
        targetScrewY,
        0.1
      );
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* CROWN: Premium Porcelain Ceramic Crown */}
      <group ref={crownRef} position={[0, 1.6, 0]}>
        {/* Main Crown Geometry */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.65, 0.55, 0.6, 32]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.08}
            metalness={0.0}
            transmission={0.3}
            thickness={0.8}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        {/* Cusps details */}
        <mesh position={[0.25, 0.3, 0.25]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} clearcoat={1.0} />
        </mesh>
        <mesh position={[-0.25, 0.3, 0.25]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} clearcoat={1.0} />
        </mesh>
        <mesh position={[0.25, 0.3, -0.25]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} clearcoat={1.0} />
        </mesh>
        <mesh position={[-0.25, 0.3, -0.25]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} clearcoat={1.0} />
        </mesh>
        {/* Connection core at bottom of crown */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
          <meshStandardMaterial color="#eeeeee" roughness={0.2} />
        </mesh>
      </group>

      {/* ABUTMENT: Premium Gold Titanium Abutment */}
      <group ref={abutmentRef} position={[0, 0.2, 0]}>
        {/* Connector ring */}
        <mesh castShadow position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.28, 0.38, 0.15, 32]} />
          <meshStandardMaterial color="#e5c158" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Center post */}
        <mesh castShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.38, 0.28, 0.3, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.15} />
        </mesh>
        {/* Screw insert */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
          <meshStandardMaterial color="#c5a028" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* SCREW: Medical Grade Titanium Implant Fixture */}
      <group ref={screwRef} position={[0, -1.2, 0]}>
        {/* Collar */}
        <mesh castShadow position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
          <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Core Body */}
        <mesh castShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.2, 0.8, 32]} />
          <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.25} />
        </mesh>
        {/* Threads (stacked toruses for simulation) */}
        {[-0.3, -0.1, 0.1, 0.3].map((yOffset, index) => (
          <mesh key={index} position={[0, yOffset, 0]}>
            <torusGeometry args={[0.32 - index * 0.02, 0.05, 12, 32]} />
            <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.25} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
