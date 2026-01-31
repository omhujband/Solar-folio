import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

// Rotating Planet for Section Page
function RotatingPlanet({ color, radius = 2, hasRings = false, tilt = 0, texture, ringTexture }) {
  const meshRef = useRef()
  const ringsRef = useRef()

  // Load textures
  const planetTexture = texture ? useTexture(texture) : null
  const ringTextureMap = hasRings && ringTexture ? useTexture(ringTexture) : null

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.001
    }
  })

  return (
    <group rotation={[0, 0, tilt]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        {planetTexture ? (
          <meshStandardMaterial
            map={planetTexture}
            roughness={0.7}
            metalness={0.2}
            emissive={color}
            emissiveIntensity={0.1}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            roughness={0.7}
            metalness={0.2}
            emissive={color}
            emissiveIntensity={0.1}
          />
        )}
      </mesh>
      
      {hasRings && (
        <mesh ref={ringsRef} rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[radius * 1.4, radius * 2.2, 64]} />
          {ringTextureMap ? (
            <meshBasicMaterial
              map={ringTextureMap}
              transparent
              opacity={0.8}
              side={THREE.DoubleSide}
            />
          ) : (
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.5}
              side={THREE.DoubleSide}
            />
          )}
        </mesh>
      )}

      {/* Ambient glow */}
      <mesh scale={1.2}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

// Sun variation for home page
function RotatingSun() {
  const meshRef = useRef()
  const glowRef = useRef()

  // Load sun texture
  const sunTexture = useTexture('/textures/2k_sun.jpg')

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }

    if (glowRef.current) {
      const pulse = Math.sin(time * 0.5) * 0.05 + 1
      glowRef.current.scale.setScalar(1.15 * pulse)
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial map={sunTexture} />
      </mesh>
      
      {/* Corona layers */}
      <mesh ref={glowRef} scale={1.15}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#ff8c00" transparent opacity={0.3} side={THREE.BackSide} />
      </mesh>
      <mesh scale={1.4}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.15} side={THREE.BackSide} />
      </mesh>
      
      <pointLight color="#ffd700" intensity={2} distance={50} />
    </group>
  )
}

export default function SectionLayout({
  title,
  subtitle,
  planetColor,
  planetRadius = 2,
  hasRings = false,
  tilt = 0,
  isSun = false,
  texture,
  ringTexture,
  children,
}) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-void flex">
      {/* Visual Side - 3D Planet */}
      <div className="w-1/2 h-screen fixed left-0 top-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#000000']} />
          
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <Suspense fallback={null}>
            {isSun ? (
              <RotatingSun />
            ) : (
              <RotatingPlanet
                color={planetColor}
                radius={planetRadius}
                hasRings={hasRings}
                tilt={tilt}
                texture={texture}
                ringTexture={ringTexture}
              />
            )}
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>

        {/* Title overlay */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="space-y-2">
            {subtitle && (
              <p className="text-stardust text-sm tracking-widest uppercase">
                {subtitle}
              </p>
            )}
            <h1 className="text-display-lg text-starlight">
              {title}
            </h1>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 btn-secondary group"
        >
          <svg 
            className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <span>Return to Orbit</span>
        </button>
      </div>

      {/* Content Side - Scrollable */}
      <div className="w-1/2 min-h-screen ml-auto">
        <div className="p-12 lg:p-16 xl:p-20">
          <div className="max-w-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}