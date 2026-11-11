"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ─── 3D Cylinder Segment between Two Vector3 Points ────────────────────────
function CylinderSegment({
  p1,
  p2,
  radius = 0.018,
  material,
}: {
  p1: THREE.Vector3;
  p2: THREE.Vector3;
  radius?: number;
  material: THREE.Material;
}) {
  const { position, quaternion, length } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const len = dir.length();
    const pos = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    const orientation = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    return { position: pos, quaternion: orientation, length: len };
  }, [p1, p2]);

  if (length === 0) return null;

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 16]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

// ─── Smooth Joint Sphere at Corners / Vertices ────────────────────────────
function JointSphere({
  position,
  radius = 0.022,
  material,
}: {
  position: THREE.Vector3;
  radius?: number;
  material: THREE.Material;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

// ─── Terminal Node Ring (Circle with Hole matching AMBIORA Logo) ───────────
function NodeRing({
  position,
  ringRadius = 0.072,
  tubeRadius = 0.015,
  material,
}: {
  position: THREE.Vector3;
  ringRadius?: number;
  tubeRadius?: number;
  material: THREE.Material;
}) {
  return (
    <mesh position={position}>
      <torusGeometry args={[ringRadius, tubeRadius, 16, 36]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

// ─── Reconstructed AMBIORA Geometric A Sculpture ──────────────────────────
function AmbioraGeometricA() {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle continuous internal animation (gentle rotation & breathing)
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.14;
    groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.06;
    groupRef.current.rotation.z = Math.sin(t * 0.08) * 0.04;
  });

  // Solid White Metallic Material with subtle self-emissive bloom
  const metallicMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0xffffff,
        emissiveIntensity: 0.38,
      }),
    []
  );

  const innerAccentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.85,
        roughness: 0.15,
        emissive: 0xffffff,
        emissiveIntensity: 0.22,
      }),
    []
  );

  // Scale factor to comfortably fit inside the 1.35 glass sphere
  const scale = 1.05;

  // Exact mathematically derived coordinates from the official AMBIORA logo:
  // Outer circle radius in normalized units = 1.0
  const topApex = useMemo(() => new THREE.Vector3(0.003 * scale, 0.433 * scale, 0), [scale]);
  const bottomL = useMemo(() => new THREE.Vector3(-0.383 * scale, -0.236 * scale, 0), [scale]);
  const bottomR = useMemo(() => new THREE.Vector3(0.389 * scale, -0.236 * scale, 0), [scale]);

  // Three terminal node centers
  const topNode = useMemo(() => new THREE.Vector3(-0.186 * scale, 0.760 * scale, 0), [scale]);
  const blNode = useMemo(() => new THREE.Vector3(-0.556 * scale, -0.536 * scale, 0), [scale]);
  const rightNode = useMemo(() => new THREE.Vector3(0.740 * scale, -0.236 * scale, 0), [scale]);

  // Main primary structural segments
  const mainSegments = useMemo(
    () => [
      // Arm 1: from Top Node down to Top Apex and along right edge to Bottom Right
      { p1: topNode, p2: topApex },
      { p1: topApex, p2: bottomR },
      // Arm 2: from Bottom Right extending right to Right Node
      { p1: bottomR, p2: rightNode },
      // Base line of triangle
      { p1: bottomR, p2: bottomL },
      // Arm 3: from Bottom Left extending down-left to Bottom Left Node
      { p1: bottomL, p2: blNode },
      // Left edge of triangle
      { p1: bottomL, p2: topApex },
    ],
    [topNode, topApex, bottomR, rightNode, bottomL, blNode]
  );

  // Inner nested A geometry (crossbar and geometric accent lines)
  const innerApex = useMemo(() => new THREE.Vector3(0.003 * scale, 0.29 * scale, 0), [scale]);
  const innerCrossL = useMemo(() => new THREE.Vector3(-0.19 * scale, -0.11 * scale, 0), [scale]);
  const innerCrossR = useMemo(() => new THREE.Vector3(0.24 * scale, -0.11 * scale, 0), [scale]);

  const innerSegments = useMemo(
    () => [
      // Inner A crossbar
      { p1: innerCrossL, p2: innerCrossR },
      // Inner left diagonal
      { p1: innerCrossL, p2: innerApex },
      // Inner right diagonal
      { p1: innerCrossR, p2: innerApex },
    ],
    [innerCrossL, innerCrossR, innerApex]
  );

  return (
    <group ref={groupRef}>
      {/* Outer Circular Boundary Ring of the AMBIORA Logo */}
      <mesh>
        <torusGeometry args={[0.96 * scale, 0.014, 20, 96]} />
        <primitive object={metallicMaterial} attach="material" />
      </mesh>

      {/* Main Structural Tubes */}
      {mainSegments.map((seg, i) => (
        <CylinderSegment
          key={`main-seg-${i}`}
          p1={seg.p1}
          p2={seg.p2}
          radius={0.018}
          material={metallicMaterial}
        />
      ))}

      {/* Inner Accent Tubes */}
      {innerSegments.map((seg, i) => (
        <CylinderSegment
          key={`inner-seg-${i}`}
          p1={seg.p1}
          p2={seg.p2}
          radius={0.012}
          material={innerAccentMaterial}
        />
      ))}

      {/* Joint Spheres at Major Vertices */}
      {[topApex, bottomL, bottomR, innerApex, innerCrossL, innerCrossR].map((pt, i) => (
        <JointSphere
          key={`joint-${i}`}
          position={pt}
          radius={0.021}
          material={metallicMaterial}
        />
      ))}

      {/* Three Distinctive Terminal Nodes */}
      <NodeRing position={topNode} ringRadius={0.072} tubeRadius={0.015} material={metallicMaterial} />
      <NodeRing position={blNode} ringRadius={0.072} tubeRadius={0.015} material={metallicMaterial} />
      <NodeRing position={rightNode} ringRadius={0.072} tubeRadius={0.015} material={metallicMaterial} />
    </group>
  );
}

// Deterministic pseudo-random generator to satisfy React 19 compiler purity rules
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

// ─── Interior Floating Particles ───────────────────────────────────────────
function InternalParticles({ count = 40 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const r1 = pseudoRandom(i * 4 + 1);
      const r2 = pseudoRandom(i * 4 + 2);
      const r3 = pseudoRandom(i * 4 + 3);
      const r4 = pseudoRandom(i * 4 + 4);

      const theta = r1 * Math.PI * 2;
      const phi = Math.acos(2 * r2 - 1);
      const r = Math.cbrt(r3) * 1.1;
      arr.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        speed: 0.15 + r4 * 0.35,
        offset: r1 * Math.PI * 2,
        scale: 0.006 + r2 * 0.014,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      const driftX = Math.sin(t * p.speed + p.offset) * 0.06;
      const driftY = Math.cos(t * p.speed * 0.8 + p.offset) * 0.06;
      dummy.position.set(p.x + driftX, p.y + driftY, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial
        color={0xffffff}
        emissive={0xffffff}
        emissiveIntensity={0.8}
        transparent
        opacity={0.65}
      />
    </instancedMesh>
  );
}

// ─── Subtle Luminous Light Trails ─────────────────────────────────────────
function LightTrails() {
  const groupRef = useRef<THREE.Group>(null);

  const trails = useMemo(() => {
    const arr: { points: THREE.Vector3[] }[] = [];
    for (let t = 0; t < 3; t++) {
      const pts: THREE.Vector3[] = [];
      const baseAngle = (t / 3) * Math.PI * 2;
      for (let i = 0; i <= 32; i++) {
        const angle = baseAngle + (i / 32) * Math.PI * 1.1;
        const r = 0.85 + Math.sin(i * 0.25) * 0.25;
        pts.push(
          new THREE.Vector3(
            Math.cos(angle) * r,
            Math.sin(angle * 1.5) * 0.45 + (t - 1) * 0.2,
            Math.sin(angle) * r * 0.5
          )
        );
      }
      arr.push({ points: pts });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.06) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {trails.map((trail, idx) => {
        const curve = new THREE.CatmullRomCurve3(trail.points, true);
        const curvePoints = curve.getPoints(50);
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
              opacity={0.16}
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
}

// ─── Transparent Crystal Glass Outer Sphere ───────────────────────────────
function TransparentGlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.35, 64, 64]} />
      <meshPhysicalMaterial
        color={0xffffff}
        metalness={0.05}
        roughness={0.04}
        transmission={0.96}
        thickness={0.35}
        ior={1.35}
        transparent
        opacity={0.55}
        clearcoat={1.0}
        clearcoatRoughness={0.03}
        specularIntensity={1.0}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

// ─── Floating Geometric Fragments Outside the Sphere ───────────────────────
function GeometricFragments() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = -state.clock.elapsedTime * 0.03;
  });

  const fragments = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const r = 1.6 + (i % 2) * 0.2;
      arr.push({
        position: [
          Math.cos(angle) * r,
          ((i % 3) - 1) * 0.4,
          Math.sin(angle) * r,
        ] as [number, number, number],
        scale: 0.022 + (i % 3) * 0.008,
      });
    }
    return arr;
  }, []);

  return (
    <group ref={groupRef}>
      {fragments.map((f, i) => (
        <Float
          key={i}
          speed={0.8 + (i % 3) * 0.3}
          rotationIntensity={0.4}
          floatIntensity={0.2}
        >
          <mesh position={f.position} scale={f.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={0xffffff}
              emissive={0xffffff}
              emissiveIntensity={0.3}
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ─── Central Sphere Main Component with Internal Illumination ──────────────
export default function CentralSphere() {
  return (
    <group>
      {/* Internal Core Lights to illuminate the suspended metallic A */}
      <pointLight position={[0, 0, 0.6]} intensity={3.5} distance={5} color="#ffffff" decay={1.5} />
      <pointLight position={[0, 0, -0.6]} intensity={2.0} distance={5} color="#d4e8ff" decay={1.5} />
      <pointLight position={[0, 0.8, 0.2]} intensity={1.8} distance={4} color="#ffffff" decay={1.5} />

      <Float speed={0.9} rotationIntensity={0.06} floatIntensity={0.12}>
        <TransparentGlassSphere />
        <AmbioraGeometricA />
        <InternalParticles count={40} />
        <LightTrails />
      </Float>

      <GeometricFragments />
    </group>
  );
}
