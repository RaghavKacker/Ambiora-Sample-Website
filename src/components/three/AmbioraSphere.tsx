"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

// ─── Geometric A Logo (wireframe lines matching the provided logo) ─────────
function GeometricA() {
  const groupRef = useRef<THREE.Group>(null);

  // Slowly rotate the A
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.15;
    groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.08;
    groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
  });

  // The logo geometry: triangle with extending lines and node circles
  // Triangle vertices (scaled to ~1.4 radius)
  const topVertex = new THREE.Vector3(0, 0.8, 0);
  const bottomLeft = new THREE.Vector3(-0.7, -0.5, 0);
  const bottomRight = new THREE.Vector3(0.7, -0.5, 0);

  // Outer circle node positions (on a circle of radius ~1.3)
  const topNode = new THREE.Vector3(0, 1.3, 0);
  const bottomLeftNode = new THREE.Vector3(-1.1, -0.9, 0);
  const bottomRightNode = new THREE.Vector3(1.1, -0.4, 0);

  // Create line geometry for the triangle
  const trianglePoints = useMemo(
    () => [topVertex, bottomRight, bottomLeft, topVertex],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Create line geometry for the connection lines (vertex to node)
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

  // The inner triangle (slightly smaller, creating the double-line effect)
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

      {/* Node circles at the ends */}
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

// ─── Interior floating particles ──────────────────────────────────────────
function InternalParticles({ count = 40 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      // Random position inside a sphere (radius ~1.1)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * 1.1;
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

// ─── Light trails (thin curves that orbit slowly inside) ──────────────────
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

// ─── Orbital rings ────────────────────────────────────────────────────────
function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  const rings = [
    { radius: 1.55, opacity: 0.12, tilt: [0.3, 0, 0] },
    { radius: 1.65, opacity: 0.06, tilt: [0.1, 0.5, 0.2] },
    { radius: 1.75, opacity: 0.04, tilt: [-0.2, 0.3, -0.1] },
  ];

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh
          key={i}
          rotation={ring.tilt as [number, number, number]}
        >
          <ringGeometry args={[ring.radius, ring.radius + 0.003, 128]} />
          <meshBasicMaterial
            color={0xffffff}
            transparent
            opacity={ring.opacity}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── Glass sphere ─────────────────────────────────────────────────────────
function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
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

// ─── Floating geometric fragments ─────────────────────────────────────────
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

// ─── Scene lighting ───────────────────────────────────────────────────────
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.6}
        color={0xffffff}
      />
      <directionalLight
        position={[-3, -2, 4]}
        intensity={0.3}
        color={0xdddddd}
      />
      <pointLight
        position={[0, 0, 3]}
        intensity={0.4}
        color={0xffffff}
        distance={8}
      />
      <pointLight
        position={[0, 2, -2]}
        intensity={0.2}
        color={0xcccccc}
        distance={6}
      />
    </>
  );
}

// ─── Responsive camera ───────────────────────────────────────────────────
function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    const isMobile = size.width < 768;
    (camera as THREE.PerspectiveCamera).fov = isMobile ? 55 : 42;
    camera.position.z = isMobile ? 5.5 : 4.8;
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

// ─── Assembled 3D scene ──────────────────────────────────────────────────
function AmbiSphereScene() {
  return (
    <>
      <ResponsiveCamera />
      <SceneLighting />
      <Environment preset="night" />

      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
        <GlassSphere />
        <GeometricA />
        <InternalParticles count={35} />
        <LightTrails />
      </Float>

      <OrbitalRings />
      <GeometricFragments />
    </>
  );
}

// ─── Static fallback ─────────────────────────────────────────────────────
function StaticFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-4 rounded-full border border-white/[0.06]" />
        {/* Simplified A symbol using SVG */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.7"
        >
          <circle cx="100" cy="100" r="85" strokeOpacity="0.15" />
          {/* Triangle */}
          <polygon
            points="100,40 55,130 145,130"
            fill="none"
            strokeOpacity="0.6"
          />
          {/* Inner triangle */}
          <polygon
            points="100,55 65,120 135,120"
            fill="none"
            strokeOpacity="0.3"
          />
          {/* Extension lines */}
          <line x1="100" y1="40" x2="100" y2="15" strokeOpacity="0.5" />
          <line x1="55" y1="130" x2="30" y2="155" strokeOpacity="0.5" />
          <line x1="145" y1="130" x2="170" y2="120" strokeOpacity="0.5" />
          {/* Nodes */}
          <circle cx="100" cy="15" r="4" fill="none" strokeOpacity="0.6" />
          <circle cx="30" cy="155" r="4" fill="none" strokeOpacity="0.6" />
          <circle cx="170" cy="120" r="4" fill="none" strokeOpacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

// ─── Exported component ──────────────────────────────────────────────────
export default function AmbioraSphere() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setCanRender3D(!!gl);
    } catch {
      setCanRender3D(false);
    }

    // Check reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!canRender3D || prefersReducedMotion) {
    return <StaticFallback />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <AmbiSphereScene />
    </Canvas>
  );
}

