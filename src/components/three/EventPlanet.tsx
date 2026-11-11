"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { AmbioraEvent } from "@/data/events";

interface EventPlanetProps {
  event: AmbioraEvent;
  isHovered: boolean;
  isSelected: boolean;
  isAnyHovered: boolean;
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
}

// ─── HANDOFF: Metallic surface + circuit wireframe + digital nodes ─────────
function HandoffVisual({ isHovered, size }: { isHovered: boolean; size: number }) {
  const circuitRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (circuitRef.current) {
      circuitRef.current.rotation.y = t * 0.15;
      circuitRef.current.rotation.x = t * 0.08;
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.y = -t * 0.4;
    }
  });

  return (
    <group>
      {/* Metallic Core */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#d4d4d4"
          metalness={0.9}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Circuit-inspired geometric overlay */}
      <group ref={circuitRef}>
        <mesh scale={1.03}>
          <icosahedronGeometry args={[size, 1]} />
          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={isHovered ? 0.6 : 0.25}
          />
        </mesh>
      </group>

      {/* Moving digital data elements */}
      <group ref={nodesRef}>
        {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle, i) => {
          const r = size * 1.35;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * r, Math.sin(i * 1.2) * 0.04, Math.sin(angle) * r]}
            >
              <boxGeometry args={[0.025, 0.025, 0.025]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// ─── TRADE RUSH: Dark metallic + market graph bars + tick indicators ───────
function TradeRushVisual({ isHovered, size }: { isHovered: boolean; size: number }) {
  const barsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (barsRef.current) {
      barsRef.current.rotation.y = t * 0.1;
      barsRef.current.children.forEach((child, i) => {
        const pulse = 1 + Math.sin(t * 2 + i * 1.2) * 0.25;
        child.scale.set(1, pulse, 1);
      });
    }
  });

  return (
    <group>
      {/* Dark Metallic Core */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#222222"
          metalness={0.95}
          roughness={0.25}
          envMapIntensity={0.9}
        />
      </mesh>

      {/* Financial graph latitude lines */}
      {[-0.4, 0, 0.4].map((yOffset, i) => (
        <mesh key={i} position={[0, yOffset * size, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 1.02, size * 1.04, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={isHovered ? 0.4 : 0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Moving market indicators / vertical candlestick ticks */}
      <group ref={barsRef}>
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          const angle = (idx / 6) * Math.PI * 2;
          const r = size * 1.15;
          return (
            <mesh key={idx} position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}>
              <cylinderGeometry args={[0.008, 0.008, size * 0.5, 8]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={isHovered ? 0.8 : 0.4}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// ─── DRONE-O-MANIA: Mechanical core + counter-rotating gimbal rings ────────
function DroneOManiaVisual({ isHovered, size }: { isHovered: boolean; size: number }) {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.35;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.25;
      ring2Ref.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group>
      {/* Matte Titanium Core */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#888888"
          metalness={0.7}
          roughness={0.4}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Gyroscopic Gimbal Ring 1 */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[size * 1.35, 0.007, 12, 48]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={isHovered ? 0.8 : 0.35}
          />
        </mesh>
      </group>

      {/* Gyroscopic Gimbal Ring 2 */}
      <group ref={ring2Ref}>
        <mesh>
          <torusGeometry args={[size * 1.5, 0.006, 12, 48]} />
          <meshBasicMaterial
            color="#cccccc"
            transparent
            opacity={isHovered ? 0.6 : 0.2}
          />
        </mesh>
      </group>

      {/* Polar technical antenna markers */}
      <mesh position={[0, size * 1.15, 0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
      <mesh position={[0, -size * 1.15, 0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// ─── PROMPT WARS: Translucent refraction shell + shifting inner tokens ─────
function PromptWarsVisual({ isHovered, size }: { isHovered: boolean; size: number }) {
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (innerRef.current) {
      innerRef.current.rotation.y = t * 0.25;
      innerRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
      const s = 0.7 + Math.sin(t * 1.5) * 0.05;
      innerRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      {/* Outer Translucent Glass Shell */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhysicalMaterial
          color="#f0f0f0"
          metalness={0.1}
          roughness={0.15}
          transmission={0.82}
          thickness={0.8}
          ior={1.45}
          transparent
          opacity={0.7}
          clearcoat={0.8}
        />
      </mesh>

      {/* Shifting Inner Token Polyhedron */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[size * 0.7, 0]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={isHovered ? 0.75 : 0.35}
        />
      </mesh>
    </group>
  );
}

// ─── CASE.exe: Dark investigative obsidian + redacted data bands ───────────
function CaseExeVisual({ isHovered, size }: { isHovered: boolean; size: number }) {
  const bandsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (bandsRef.current) {
      bandsRef.current.rotation.y = -t * 0.12;
    }
  });

  return (
    <group>
      {/* Stealth Obsidian Core */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#151515"
          metalness={0.3}
          roughness={0.65}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Redacted Data Segments / Security Rings */}
      <group ref={bandsRef}>
        {[0, 1, 2].map((bandIndex) => {
          const y = (bandIndex - 1) * (size * 0.4);
          return (
            <group key={bandIndex} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[size * 1.08, size * 1.14, 24, 1, 0, Math.PI * 1.3]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={isHovered ? 0.7 : 0.25}
                side={THREE.DoubleSide}
              />
            </group>
          );
        })}
      </group>

      {/* Crosshair coordinate markers */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <ringGeometry args={[size * 1.25, size * 1.26, 32, 1, 0, Math.PI * 0.2]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={isHovered ? 0.6 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// ─── Main EventPlanet Component ───────────────────────────────────────────
export default function EventPlanet({
  event,
  isHovered,
  isSelected,
  isAnyHovered,
  onPointerOver,
  onPointerOut,
  onClick,
}: EventPlanetProps) {
  const planetRef = useRef<THREE.Group>(null);
  const targetScale = isHovered || isSelected ? 1.28 : isAnyHovered ? 0.88 : 1.0;

  useFrame(() => {
    if (!planetRef.current) return;
    // Smooth scale interpolation using THREE lerp
    planetRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const visual = useMemo(() => {
    switch (event.visualTheme) {
      case "handoff":
        return <HandoffVisual isHovered={isHovered} size={event.orbit.size} />;
      case "trade-rush":
        return <TradeRushVisual isHovered={isHovered} size={event.orbit.size} />;
      case "drone-o-mania":
        return <DroneOManiaVisual isHovered={isHovered} size={event.orbit.size} />;
      case "prompt-wars":
        return <PromptWarsVisual isHovered={isHovered} size={event.orbit.size} />;
      case "case-exe":
        return <CaseExeVisual isHovered={isHovered} size={event.orbit.size} />;
      default:
        return null;
    }
  }, [event.visualTheme, event.orbit.size, isHovered]);

  return (
    <group
      ref={planetRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        onPointerOver();
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onPointerOut();
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Interactive Hit Target Sphere (slightly larger than visual for easy clicking) */}
      <mesh visible={false}>
        <sphereGeometry args={[event.orbit.size * 1.6, 16, 16]} />
        <meshBasicMaterial />
      </mesh>

      {/* Subtle selection/hover highlight aura */}
      {(isHovered || isSelected) && (
        <mesh>
          <ringGeometry
            args={[event.orbit.size * 1.35, event.orbit.size * 1.45, 48]}
          />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* The distinct event planet visual */}
      {visual}
    </group>
  );
}
