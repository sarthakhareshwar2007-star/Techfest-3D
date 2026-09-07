import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Float, Stars, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

export default function Scene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  const torusKnotRef = useRef<THREE.Mesh>(null);
  const dodecahedronRef = useRef<THREE.Mesh>(null);
  const cylinderRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const offset = scroll.offset; // 0 to 1

    if (group.current) {
      // Ultra-smooth lerp for camera movement
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, offset * 60, 0.04);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, offset * Math.PI * 3, 0.04);
    }

    // Elegant, slow object rotations
    if (sphereRef.current) sphereRef.current.rotation.x += delta * 0.2;
    if (sphereRef.current) sphereRef.current.rotation.y += delta * 0.3;
    
    if (torusRef.current) torusRef.current.rotation.x += delta * 0.3;
    if (torusRef.current) torusRef.current.rotation.y += delta * 0.15;
    
    if (icosahedronRef.current) icosahedronRef.current.rotation.x -= delta * 0.2;
    if (icosahedronRef.current) icosahedronRef.current.rotation.z += delta * 0.15;
    
    if (octahedronRef.current) octahedronRef.current.rotation.x += delta * 0.25;
    if (octahedronRef.current) octahedronRef.current.rotation.y += delta * 0.3;
    
    if (torusKnotRef.current) torusKnotRef.current.rotation.x -= delta * 0.2;
    if (torusKnotRef.current) torusKnotRef.current.rotation.y += delta * 0.25;
    
    if (dodecahedronRef.current) dodecahedronRef.current.rotation.x += delta * 0.2;
    if (dodecahedronRef.current) dodecahedronRef.current.rotation.z += delta * 0.25;

    if (cylinderRef.current) cylinderRef.current.rotation.x += delta * 0.3;
    if (cylinderRef.current) cylinderRef.current.rotation.z += delta * 0.2;

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.02;
      particlesRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <>
      <color attach="background" args={['#02000a']} />
      <fog attach="fog" args={['#02000a', 5, 45]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={3} color="#00ffff" />
      <directionalLight position={[-10, -10, -5]} intensity={3} color="#ff00ff" />
      <pointLight position={[0, -20, 0]} intensity={5} color="#00ffff" distance={50} />
      <pointLight position={[0, -40, 0]} intensity={5} color="#ff00ff" distance={50} />
      
      <Stars radius={100} depth={50} count={6000} factor={4} saturation={1} fade speed={1.5} />
      <Sparkles count={400} scale={25} size={3} speed={0.5} opacity={0.6} color="#00ffff" />
      <Sparkles count={400} scale={25} size={3} speed={0.5} opacity={0.6} color="#ff00ff" />

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
      </EffectComposer>

      <group ref={group}>
        {/* Section 1 */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5} position={[3, 0, -5]}>
          <mesh ref={sphereRef}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshDistortMaterial color="#1a0033" envMapIntensity={1} clearcoat={1} clearcoatRoughness={0.1} metalness={0.9} roughness={0.1} distort={0.5} speed={3} />
          </mesh>
          <mesh scale={[1.3, 1.3, 1.3]} rotation={[Math.PI/2, 0, 0]}>
            <torusGeometry args={[1.8, 0.02, 32, 100]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
          </mesh>
        </Float>

        {/* Section 2 */}
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[-4, -10, -4]}>
          <mesh ref={torusRef}>
            <torusGeometry args={[1.2, 0.4, 32, 100]} />
            <meshStandardMaterial color="#00ffff" wireframe emissive="#00ffff" emissiveIntensity={0.5} />
          </mesh>
          <mesh scale={[0.95, 0.95, 0.95]}>
             <torusGeometry args={[1.2, 0.4, 32, 100]} />
             <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} thickness={0.5} />
          </mesh>
        </Float>

        {/* Section 3 */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5} position={[4, -20, -6]}>
          <mesh ref={icosahedronRef}>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#ff00ff" wireframe emissive="#ff00ff" emissiveIntensity={0.5} />
          </mesh>
          <mesh scale={[0.9, 0.9, 0.9]}>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#1a0033" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>

        {/* Section 4 */}
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[-3, -30, -5]}>
          <mesh ref={octahedronRef}>
            <octahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial color="#00ffff" wireframe emissive="#00ffff" emissiveIntensity={0.5} />
          </mesh>
          <mesh scale={[0.8, 0.8, 0.8]}>
            <octahedronGeometry args={[1.2, 0]} />
            <meshPhysicalMaterial color="#00ffff" metalness={0.9} roughness={0.1} clearcoat={1} />
          </mesh>
        </Float>

        {/* Section 5 */}
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[3, -40, -4]}>
          <mesh ref={torusKnotRef}>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#ff00ff" wireframe emissive="#ff00ff" emissiveIntensity={1} />
          </mesh>
        </Float>

        {/* Section 6 */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={[-4, -50, -5]}>
          <mesh ref={dodecahedronRef}>
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#00ffff" wireframe emissive="#00ffff" emissiveIntensity={0.8} />
          </mesh>
          <mesh scale={[0.95, 0.95, 0.95]}>
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshPhysicalMaterial color="#ff00ff" transmission={0.9} roughness={0} thickness={1} />
          </mesh>
        </Float>

        {/* Section 7 */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[3, -60, -5]}>
          <mesh ref={cylinderRef}>
            <cylinderGeometry args={[1, 1, 2.5, 32]} />
            <meshStandardMaterial color="#ff00ff" wireframe emissive="#ff00ff" emissiveIntensity={0.8} />
          </mesh>
          <mesh scale={[0.9, 0.9, 0.9]}>
            <cylinderGeometry args={[1, 1, 2.5, 32]} />
            <meshPhysicalMaterial color="#1a0033" metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>

        {/* Decorator elements */}
        <group ref={particlesRef}>
          {Array.from({ length: 120 }).map((_, i) => (
            <mesh
              key={i}
              position={[
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 80 - 30,
                (Math.random() - 0.5) * 40
              ]}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            >
              <boxGeometry args={[0.15, 0.15, 0.15]} />
              <meshStandardMaterial 
                color={Math.random() > 0.5 ? "#00ffff" : "#ff00ff"} 
                emissive={Math.random() > 0.5 ? "#00ffff" : "#ff00ff"} 
                emissiveIntensity={1.5} 
                wireframe={Math.random() > 0.3} 
              />
            </mesh>
          ))}
        </group>
      </group>
    </>
  );
}
