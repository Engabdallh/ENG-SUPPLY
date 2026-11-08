import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";

function MainObject() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color="#FACC15"
          roughness={0.2}
          metalness={0.7}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function HeroScene() {
  return (
    <div className="hero-3d-scene">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 2]}
          color="#FACC15"
          intensity={20}
        />

        <MainObject />

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.4}
          scale={5}
          blur={2}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

export default HeroScene;