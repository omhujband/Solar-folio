import React, { Suspense, useRef, useState, useCallback } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

import Sun from './Sun'
import CelestialBody from './CelestialBody'
import OrbitPath from './OrbitPath'
import { ALL_PLANETS } from '../../data/celestialBodies'

// Camera Controller with Zoom Constraints
function CameraController() {
  const { camera } = useThree()
  const controlsRef = useRef()

  useFrame(() => {
    if (controlsRef.current) {
      // Ensure camera never enters the sun
      const distanceFromCenter = camera.position.length()
      if (distanceFromCenter < 5) {
        camera.position.normalize().multiplyScalar(5)
      }
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={5}       // Can't get closer than sun's surface
      maxDistance={80}      // Can see entire solar system
      maxPolarAngle={Math.PI * 0.85}
      minPolarAngle={Math.PI * 0.15}
      panSpeed={0.5}
      zoomSpeed={0.8}
      rotateSpeed={0.5}
      target={[0, 0, 0]}    // Always centered on sun
      makeDefault
    />
  )
}

// Loading Fallback
function LoadingFallback() {
  return (
    <Html center>
      <div className="text-stardust text-sm animate-pulse">
        Loading cosmos...
      </div>
    </Html>
  )
}

// Main Scene
function Scene({ onPlanetClick, hoveredPlanet, setHoveredPlanet, isPaused }) {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.3} />

      {/* Star field background */}
      <Stars
        radius={200}
        depth={100}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={isPaused ? 0 : 0.5}
      />

      {/* The Sun */}
      <Sun onClick={() => onPlanetClick('/home')} />

      {/* Orbit paths */}
      {ALL_PLANETS.map(planet => (
        <OrbitPath
          key={`orbit-${planet.id}`}
          radius={planet.orbitRadius}
          isHighlighted={hoveredPlanet === planet.id}
        />
      ))}

      {/* Planets */}
      {ALL_PLANETS.map(planet => (
        <CelestialBody
          key={planet.id}
          {...planet}
          onClick={() => onPlanetClick(planet.path)}
          onHover={(hovered) => setHoveredPlanet(hovered ? planet.id : null)}
          isHovered={hoveredPlanet === planet.id}
          isPaused={isPaused}
        />
      ))}
    </>
  )
}

// Hover Label Overlay
function HoverLabel({ planet }) {
  if (!planet) return null

  const planetData = ALL_PLANETS.find(p => p.id === planet)
  if (!planetData) return null

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      <div className="glass-panel px-6 py-3 rounded-full animate-fade-in">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: planetData.color }}
          />
          <span className="text-starlight font-medium">{planetData.name}</span>
          <span className="text-stardust/60">·</span>
          <span className="text-stardust">{planetData.section}</span>
        </div>
      </div>
    </div>
  )
}

// Pause Indicator
function PauseIndicator({ isPaused }) {
  if (!isPaused) return null

  return (
    <div className="fixed top-6 right-6 z-40 pointer-events-none">
      <div className="glass-panel px-4 py-2 rounded-full border border-solar-gold/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-solar-gold animate-pulse" />
          <span className="text-solar-gold text-sm font-medium">Orbits Paused</span>
        </div>
      </div>
    </div>
  )
}

// Main Export
export default function SolarSystem({ isPaused }) {
  const navigate = useNavigate()
  const [hoveredPlanet, setHoveredPlanet] = useState(null)

  const handlePlanetClick = useCallback((path) => {
    navigate(path)
  }, [navigate])

  return (
    <div className="canvas-container">
      <Canvas
        camera={{
          position: [0, 25, 45],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 60, 150]} />

        <Suspense fallback={<LoadingFallback />}>
          <Scene
            onPlanetClick={handlePlanetClick}
            hoveredPlanet={hoveredPlanet}
            setHoveredPlanet={setHoveredPlanet}
            isPaused={isPaused}
          />
        </Suspense>

        <CameraController />
      </Canvas>

      {/* Hover label overlay */}
      <HoverLabel planet={hoveredPlanet} />
      
      {/* Pause indicator */}
      <PauseIndicator isPaused={isPaused} />
    </div>
  )
}