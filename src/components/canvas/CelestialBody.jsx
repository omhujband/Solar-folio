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
  isPaused = false,
}) {
  const groupRef = useRef()
  const meshRef = useRef()
  const ringsRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Load textures conditionally
  const textures = useTexture(
    texture && ringTexture
      ? { map: texture, ringMap: ringTexture }
      : texture
        ? { map: texture }
        : ringTexture
          ? { ringMap: ringTexture }
          : {}
  )

  const planetTexture = textures.map
  const ringTextureMap = textures.ringMap

  // Initial orbit angle
  const angle = useRef(initialAngle)

  // Planet material
  const material = useMemo(() => {
    const baseConfig = {
      roughness: 0.8,
      metalness: 0.1,
      emissive: new THREE.Color(color),
      emissiveIntensity: isUnexplored ? 0.05 : 0.15,
    }

    if (planetTexture) {
      planetTexture.colorSpace = THREE.SRGBColorSpace
      return new THREE.MeshStandardMaterial({
        ...baseConfig,
        map: planetTexture,
        emissiveIntensity: isUnexplored ? 0.02 : 0.12,
      })
    }

    return new THREE.MeshStandardMaterial({
      ...baseConfig,
      color: new THREE.Color(color),
    })
  }, [planetTexture, color, isUnexplored])

  // Ring geometry with corrected UVs (CRITICAL)
  const ringGeometry = useMemo(() => {
    if (!hasRings) return null

    const innerRadius = radius * 1.4
    const outerRadius = radius * 2.2
    const geo = new THREE.RingGeometry(innerRadius, outerRadius, 128)

    const pos = geo.attributes.position
    const uv = geo.attributes.uv
    const v = new THREE.Vector3()

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      const r = v.length()
      uv.setXY(i, (r - innerRadius) / (outerRadius - innerRadius), 1)
    }

    return geo
  }, [hasRings, radius])

  // Ring material (physically correct for Saturn-style textures)
  const ringMaterial = useMemo(() => {
    if (!hasRings) return null

    if (ringTextureMap) {
      ringTextureMap.colorSpace = THREE.SRGBColorSpace

      return new THREE.MeshBasicMaterial({
        map: ringTextureMap,
        alphaMap: ringTextureMap,
        transparent: false,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    }

    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(color).offsetHSL(0, -0.2, 0.1),
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  }, [hasRings, ringTextureMap, color])

  useFrame((state, delta) => {
    if (!isPaused) {
      angle.current += orbitSpeed * delta * 60
    }

    const x = Math.cos(angle.current) * orbitRadius
    const z = Math.sin(angle.current) * orbitRadius

    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z)
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.0002
    }

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
      {/* Planet */}
      <mesh
        ref={meshRef}
        material={material}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[radius, 64, 64]} />
      </mesh>

      {/* Hover glow */}
      {hovered && (
        <mesh scale={1.4}>
          <sphereGeometry args={[radius, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.25}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Rings */}
      {hasRings && ringMaterial && ringGeometry && (
        <mesh
          ref={ringsRef}
          rotation={[Math.PI / 2, 0, 0]} // flat, tilt handled by parent
          geometry={ringGeometry}
          material={ringMaterial}
        />
      )}

      {/* Unexplored indicator */}
      {isUnexplored && (
        <mesh scale={1.08}>
          <sphereGeometry args={[radius, 24, 24]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.03}
          />
        </mesh>
      )}
    </group>
  )
}
