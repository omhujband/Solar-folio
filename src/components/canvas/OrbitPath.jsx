import React, { useMemo } from 'react'
import * as THREE from 'three'

export default function OrbitPath({ radius, isHighlighted = false }) {
  const geometry = useMemo(() => {
    const points = []
    const segments = 128
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          0,
          Math.sin(angle) * radius
        )
      )
    }
    
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [radius])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color={isHighlighted ? '#ffd700' : '#ffffff'}
        transparent
        opacity={isHighlighted ? 0.4 : 0.08}
        linewidth={1}
      />
    </line>
  )
}