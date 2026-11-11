"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { AMBIORA_EVENTS, AmbioraEvent } from "@/data/events";
import CentralSphere from "./CentralSphere";
import EventPlanet from "./EventPlanet";
import OrbitalPath from "./OrbitalPath";

interface OrbitalSceneProps {
  hoveredEventId: string | null;
  selectedEventId: string | null;
  onHoverEvent: (id: string | null) => void;
  onSelectEvent: (id: string) => void;
  reducedMotion?: boolean;
}

// ─── Individual Orbiting Planet Node with Smooth Transform Updates ─────────
function OrbitingPlanetNode({
  event,
  scaleMultiplier,
  isHovered,
  isSelected,
  isAnyHovered,
  onHover,
  onSelect,
  reducedMotion,
}: {
  event: AmbioraEvent;
  scaleMultiplier: number;
  isHovered: boolean;
  isSelected: boolean;
  isAnyHovered: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
  reducedMotion?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const angleRef = useRef(event.orbit.initialAngle);
  const euler = useMemo(() => new THREE.Euler(...event.orbit.tilt), [event.orbit.tilt]);
  const effectiveRadius = event.orbit.radius * scaleMultiplier;

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      // Slow down to 15% speed on hover/select as per requirements
      const speedFactor = isHovered || isSelected ? 0.15 : 1.0;
      angleRef.current += event.orbit.speed * speedFactor * delta;
    }

    // Compute raw 2D circular position on tilted orbital plane
    const x0 = Math.cos(angleRef.current) * effectiveRadius;
    const z0 = Math.sin(angleRef.current) * effectiveRadius;

    // Transform by orbital inclination tilt
    const pos = new THREE.Vector3(x0, 0, z0).applyEuler(euler);
    groupRef.current.position.copy(pos);
  });

  return (
    <group ref={groupRef}>
      <EventPlanet
        event={event}
        isHovered={isHovered}
        isSelected={isSelected}
        isAnyHovered={isAnyHovered}
        onPointerOver={() => onHover(event.id)}
        onPointerOut={() => onHover(null)}
        onClick={() => onSelect(event.id)}
      />
    </group>
  );
}

// ─── Responsive Camera Controller ──────────────────────────────────────────
function ResponsiveOrbitalCamera({ onScaleChange }: { onScaleChange: (scale: number) => void }) {
  const { camera, size } = useThree();

  useEffect(() => {
    const isMobile = size.width < 640;
    const isTablet = size.width >= 640 && size.width < 1024;

    const persCamera = camera as THREE.PerspectiveCamera;

    /* eslint-disable react-hooks/immutability */
    if (isMobile) {
      persCamera.fov = 52;
      persCamera.position.set(0, 1.2, 8.8);
      onScaleChange(0.72);
    } else if (isTablet) {
      persCamera.fov = 46;
      persCamera.position.set(0, 1.0, 7.8);
      onScaleChange(0.85);
    } else {
      persCamera.fov = 42;
      persCamera.position.set(0, 0.8, 7.2);
      onScaleChange(1.0);
    }

    persCamera.lookAt(0, 0, 0);
    persCamera.updateProjectionMatrix();
    /* eslint-enable react-hooks/immutability */
  }, [camera, size, onScaleChange]);

  return null;
}

// ─── Atmospheric Scene Lighting ────────────────────────────────────────────
function OrbitalLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 8, 6]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-6, -3, 5]} intensity={0.6} color="#dbeafe" />
      <pointLight position={[0, 1.5, 5.5]} intensity={1.5} distance={16} color="#ffffff" />
      <pointLight position={[0, -2, -3]} intensity={0.5} distance={10} color="#999999" />
    </>
  );
}

// ─── Main Orbital Scene ───────────────────────────────────────────────────
export default function OrbitalScene({
  hoveredEventId,
  selectedEventId,
  onHoverEvent,
  onSelectEvent,
  reducedMotion = false,
}: OrbitalSceneProps) {
  const [scaleMultiplier, setScaleMultiplier] = useState(1.0);

  const handleScaleChange = useCallback((scale: number) => {
    setScaleMultiplier(scale);
  }, []);

  const isAnyHovered = !!hoveredEventId || !!selectedEventId;

  return (
    <>
      <ResponsiveOrbitalCamera onScaleChange={handleScaleChange} />
      <OrbitalLighting />
      <Environment preset="night" />

      {/* Central AMBIORA Glass Sphere */}
      <CentralSphere />

      {/* Five Orbital Paths */}
      {AMBIORA_EVENTS.map((event) => (
        <OrbitalPath
          key={`path-${event.id}`}
          radius={event.orbit.radius * scaleMultiplier}
          tilt={event.orbit.tilt}
          isHighlighted={hoveredEventId === event.id || selectedEventId === event.id}
          isAnyHighlighted={isAnyHovered}
        />
      ))}

      {/* Five Orbiting Event Planets */}
      {AMBIORA_EVENTS.map((event) => (
        <OrbitingPlanetNode
          key={`planet-${event.id}`}
          event={event}
          scaleMultiplier={scaleMultiplier}
          isHovered={hoveredEventId === event.id}
          isSelected={selectedEventId === event.id}
          isAnyHovered={isAnyHovered}
          onHover={onHoverEvent}
          onSelect={onSelectEvent}
          reducedMotion={reducedMotion}
        />
      ))}
    </>
  );
}
