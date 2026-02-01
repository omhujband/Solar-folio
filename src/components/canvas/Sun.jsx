import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Sun({ onClick }) {
  const meshRef = useRef()
  const glowRef = useRef()
  const coronaRef = useRef()

  // Load sun texture
  const sunTexture = useTexture('/textures/2k_sun.jpg')

  // Enhanced sun material with texture
  const sunMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: sunTexture,
      color: '#ffffff',
    })
  }, [sunTexture])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Slow rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
    
    // Pulsing glow
    if (glowRef.current) {
      const pulse = Math.sin(time * 0.5) * 0.08 + 1
      glowRef.current.scale.setScalar(1.15 * pulse)
    }

    // Corona rotation
    if (coronaRef.current) {
      const pulse = Math.sin(time * 0.3) * 0.05 + 1
      coronaRef.current.scale.setScalar(1.35 * pulse)
      coronaRef.current.rotation.z += 0.0003
    }
  })

  return (
    <group onClick={onClick}>
      {/* Main sun body with texture */}
      <mesh ref={meshRef} material={sunMaterial}>
        <sphereGeometry args={[2.5, 64, 64]} />
      </mesh>

      {/* Inner glow */}
      <mesh ref={glowRef} scale={1.15}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#ff8c00"
          transparent
          opacity={0.4}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer corona */}
      <mesh ref={coronaRef} scale={1.35}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#ffd700"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Point light from sun */}
      <pointLight
        color="#ffd700"
        intensity={3}
        distance={100}
        decay={2}
      />
    </group>
  )
}