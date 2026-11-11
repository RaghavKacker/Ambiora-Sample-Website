"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface OrbitalPathProps {
  radius: number;
  tilt: [number, number, number];
  isHighlighted: boolean;
  isAnyHighlighted: boolean;
}

export default function OrbitalPath({
  radius,
  tilt,
  isHighlighted,
  isAnyHighlighted,
}: OrbitalPathProps) {
  // Generate smooth 128-point circular curve for the orbit line
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return pts;
  }, [radius]);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]));
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [points]);

  const targetOpacity = isHighlighted ? 0.32 : isAnyHighlighted ? 0.05 : 0.12;

  return (
    <group rotation={tilt}>
      {/* Subtle thin orbit line */}
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={targetOpacity}
          linewidth={1}
        />
      </line>
    </group>
  );
}
