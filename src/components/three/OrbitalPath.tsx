"use client";

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
  const targetOpacity = isHighlighted ? 0.35 : isAnyHighlighted ? 0.05 : 0.12;

  return (
    <group rotation={tilt}>
      {/* Precision circular orbital ring on the XZ plane */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius, radius + 0.004, 128]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={targetOpacity}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
