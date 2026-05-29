import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  Environment,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Dumbbell({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: any) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={meshRef} position={position as any} rotation={rotation as any} scale={scale}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Handle */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 2.4, 32]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Handle grips */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.16, 0.16, 1.2, 32]} />
          <meshStandardMaterial color="#e59e00" emissive="#e59e00" emissiveIntensity={0.2} metalness={0.5} roughness={0.4} />
        </mesh>

        {/* Left Weights */}
        <group position={[-1.4, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.9, 0.9, 0.4, 64]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.35, 0, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.3, 64]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.6, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.2, 64]} />
            <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.4} />
          </mesh>
        </group>

        {/* Right Weights */}
        <group position={[1.4, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.9, 0.9, 0.4, 64]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.35, 0, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.3, 64]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.6, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.2, 64]} />
            <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.4} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function WeightPlate({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: any) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={position as any} rotation={rotation as any} scale={scale}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1.2, 1.2, 0.2, 64]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
          <cylinderGeometry args={[1.25, 1.25, 0.18, 64]} />
          <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Inner hole */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.22, 32]} />
          <meshStandardMaterial color="#050505" metalness={0.1} roughness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

function Kettlebell({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: any) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={position as any} rotation={rotation as any} scale={scale}>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshStandardMaterial color="#181818" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Handle */}
        <mesh position={[0, 0.8, 0]}>
          <torusGeometry args={[0.5, 0.15, 32, 100, Math.PI]} />
          <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#ffffff"
        />
        <pointLight position={[-10, -10, -10]} intensity={5} color="#e59e00" />

        <Dumbbell position={[0, 0, 0]} scale={1.2} rotation={[0.5, 0.5, 0]} />
        <Dumbbell position={[-4, 2, -3]} scale={0.8} rotation={[-0.5, 1, 0.2]} />
        <Dumbbell position={[4, -2, -2]} scale={0.7} rotation={[1, -0.4, 0.5]} />
        
        <WeightPlate position={[-3, -2, -1]} scale={0.6} rotation={[0.2, 1.5, 0.5]} />
        <WeightPlate position={[3, 2, -4]} scale={0.8} rotation={[0.5, 0.8, 0.2]} />

        <Kettlebell position={[-1.5, -2.5, 1]} scale={0.5} rotation={[0.2, -0.5, 0]} />
        <Kettlebell position={[2.5, 1.5, -1]} scale={0.4} rotation={[-0.3, 0.8, -0.2]} />

        <Sparkles
          count={250}
          scale={15}
          size={1.5}
          speed={0.4}
          opacity={0.4}
          color="#f5bf00"
        />
        <Sparkles
          count={150}
          scale={15}
          size={1}
          speed={0.2}
          opacity={0.2}
          color="#ffffff"
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
