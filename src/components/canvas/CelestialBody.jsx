import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function CelestialBody({
  id,
  name,
  radius,
  color,
  orbitRadius,
  orbitSpeed,
  rotationSpeed,
  initialAngle = 0,
  hasRings = false,
  tilt = 0,
  texture,
  ringTexture,
  isUnexplored = false,
  onClick,
  onHover,
  isHovered,
}) {
  const groupRef = useRef()
  const meshRef = useRef()
  const ringsRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Load textures
  const planetTexture = texture ? useTexture(texture) : null
  const ringTextureMap = hasRings && ringTexture ? useTexture(ringTexture) : null

  // Calculate initial position
  const angle = useRef(initialAngle)

  // Planet material with texture
  const material = useMemo(() => {
    if (planetTexture) {
      return new THREE.MeshStandardMaterial({
        map: planetTexture,
        roughness: 0.8,
        metalness: 0.1,
        emissive: new THREE.Color(color),
        emissiveIntensity: isUnexplored ? 0.02 : 0.05,
      })
    }
    // Fallback to colored material if no texture
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.8,
      metalness: 0.1,
      emissive: new THREE.Color(color),
      emissiveIntensity: isUnexplored ? 0.05 : 0.1,
    })
  }, [planetTexture, color, isUnexplored])

  // Ring material
  const ringMaterial = useMemo(() => {
    if (!hasRings) return null
    
    if (ringTextureMap) {
      return new THREE.MeshBasicMaterial({
        map: ringTextureMap,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      })
    }
    
    // Fallback ring color
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(color).offsetHSL(0, -0.2, 0.1),
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    })
  }, [hasRings, ringTextureMap, color])

  useFrame((state, delta) => {
    // Update orbital position
    angle.current += orbitSpeed * delta * 60

    const x = Math.cos(angle.current) * orbitRadius
    const z = Math.sin(angle.current) * orbitRadius

    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z)
    }

    // Planet rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }

    // Ring rotation (if applicable)
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.0002
    }

    // Hover effect - scale animation
    if (meshRef.current) {
      const targetScale = hovered ? 1.15 : 1
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
    }
  })

  const handlePointerOver = (e) => {
    e.stopPropagation()
    setHovered(true)
    onHover?.(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = (e) => {
    e.stopPropagation()
    setHovered(false)
    onHover?.(false)
    document.body.style.cursor = 'default'
  }

  const handleClick = (e) => {
    e.stopPropagation()
    onClick?.()
  }

  return (
    <group ref={groupRef} rotation={[0, 0, tilt]}>
      {/* Planet body with texture */}
      <mesh
        ref={meshRef}
        material={material}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[radius, 64, 64]} />
      </mesh>

      {/* Hover glow effect */}
      {hovered && (
        <mesh scale={1.3}>
          <sphereGeometry args={[radius, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Saturn's rings */}
      {hasRings && (
        <mesh
          ref={ringsRef}
          rotation={[Math.PI / 2.5, 0, 0]}
          material={ringMaterial}
        >
          <ringGeometry args={[radius * 1.4, radius * 2.2, 64]} />
        </mesh>
      )}

      {/* Unexplored indicator */}
      {isUnexplored && (
        <mesh scale={1.1}>
          <sphereGeometry args={[radius, 16, 16]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.05}
            wireframe
          />
        </mesh>
      )}
    </group>
  )
}