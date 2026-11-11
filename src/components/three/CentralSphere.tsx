"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ─── Geometric A Logo (Wireframe lines matching the provided AMBIORA logo) ──
function GeometricA() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.15;
    groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.08;
    groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
  });

  const topVertex = new THREE.Vector3(0, 0.8, 0);
  const bottomLeft = new THREE.Vector3(-0.7, -0.5, 0);
  const bottomRight = new THREE.Vector3(0.7, -0.5, 0);

  const topNode = new THREE.Vector3(0, 1.3, 0);
  const bottomLeftNode = new THREE.Vector3(-1.1, -0.9, 0);
  const bottomRightNode = new THREE.Vector3(1.1, -0.4, 0);

  const trianglePoints = useMemo(
    () => [topVertex, bottomRight, bottomLeft, topVertex],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const line1Points = useMemo(() => [topVertex, topNode], []);
  const line2Points = useMemo(() => [bottomLeft, bottomLeftNode], []);
  const line3Points = useMemo(() => [bottomRight, bottomRightNode], []);

  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        linewidth: 1,
      }),
    []
  );

  const innerLineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
        linewidth: 1,
      }),
    []
  );

  const innerScale = 0.82;
  const innerTrianglePoints = useMemo(
    () => [
      topVertex.clone().multiplyScalar(innerScale),
      bottomRight.clone().multiplyScalar(innerScale),
      bottomLeft.clone().multiplyScalar(innerScale),
      topVertex.clone().multiplyScalar(innerScale),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <group ref={groupRef} scale={0.7}>
      {/* Outer triangle */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(trianglePoints.flatMap((p) => [p.x, p.y, p.z])),
              3,
            ]}
          />
        </bufferGeometry>
        <primitive object={lineMaterial} attach="material" />
      </line>

      {/* Inner triangle */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                innerTrianglePoints.flatMap((p) => [p.x, p.y, p.z])
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <primitive object={innerLineMaterial} attach="material" />
      </line>

      {/* Connection lines to nodes */}
      {[line1Points, line2Points, line3Points].map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])),
                3,
              ]}
            />
          </bufferGeometry>
          <primitive object={lineMaterial} attach="material" />
        </line>
      ))}

      {/* Node circles at the outer vertices */}
      {[topNode, bottomLeftNode, bottomRightNode].map((pos, i) => (
        <mesh key={`node-${i}`} position={[pos.x, pos.y, pos.z]}>
          <ringGeometry args={[0.04, 0.07, 24]} />
          <meshBasicMaterial
            color={0xffffff}
            transparent
            opacity={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── Interior Floating Particles ───────────────────────────────────────────
function InternalParticles({ count = 35 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * 1.05;
      arr.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        speed: 0.1 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
        scale: 0.005 + Math.random() * 0.012,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      const drift = Math.sin(t * p.speed + p.offset) * 0.08;
      dummy.position.set(p.x + drift, p.y + drift * 0.5, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={0xffffff} transparent opacity={0.4} />
    </instancedMesh>
  );
}

// ─── Light Trails ─────────────────────────────────────────────────────────
function LightTrails() {
  const groupRef = useRef<THREE.Group>(null);

  const trails = useMemo(() => {
    const arr: { points: THREE.Vector3[]; offset: number }[] = [];
    for (let t = 0; t < 3; t++) {
      const pts: THREE.Vector3[] = [];
      const baseAngle = (t / 3) * Math.PI * 2;
      for (let i = 0; i < 30; i++) {
        const angle = baseAngle + (i / 30) * Math.PI * 0.8;
        const r = 0.6 + Math.sin(i * 0.3) * 0.3;
        pts.push(
          new THREE.Vector3(
            Math.cos(angle) * r,
            Math.sin(angle) * r * 0.6 + (t - 1) * 0.3,
            Math.sin(angle + i * 0.2) * 0.3
          )
        );
      }
      arr.push({ points: pts, offset: t * 2 });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {trails.map((trail, idx) => {
        const curve = new THREE.CatmullRomCurve3(trail.points);
        const curvePoints = curve.getPoints(40);
        return (
          <line key={idx}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[
                  new Float32Array(
                    curvePoints.flatMap((p) => [p.x, p.y, p.z])
                  ),
                  3,
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={0xffffff}
              transparent
              opacity={0.08}
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
}

// ─── Glass Outer Sphere ───────────────────────────────────────────────────
function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.35, 64, 64]} />
      <meshPhysicalMaterial
        color={0x222222}
        metalness={0.1}
        roughness={0.05}
        transmission={0.92}
        thickness={1.5}
        ior={1.5}
        envMapIntensity={0.8}
        transparent
        opacity={0.3}
        clearcoat={1}
        clearcoatRoughness={0.05}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

// ─── Floating Geometric Fragments ─────────────────────────────────────────
function GeometricFragments() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = -state.clock.elapsedTime * 0.04;
  });

  const fragments = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const r = 1.0 + Math.random() * 0.3;
      arr.push({
        position: [
          Math.cos(angle) * r,
          (Math.random() - 0.5) * 0.8,
          Math.sin(angle) * r,
        ] as [number, number, number],
        scale: 0.015 + Math.random() * 0.02,
        rotation: Math.random() * Math.PI,
      });
    }
    return arr;
  }, []);

  return (
    <group ref={groupRef}>
      {fragments.map((f, i) => (
        <Float
          key={i}
          speed={0.5 + Math.random()}
          rotationIntensity={0.3}
          floatIntensity={0.2}
        >
          <mesh position={f.position} scale={f.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshBasicMaterial
              color={0xffffff}
              transparent
              opacity={0.2}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ─── Central Sphere Main Component ────────────────────────────────────────
export default function CentralSphere() {
  return (
    <group>
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
        <GlassSphere />
        <GeometricA />
        <InternalParticles count={35} />
        <LightTrails />
      </Float>
      <GeometricFragments />
    </group>
  );
}
