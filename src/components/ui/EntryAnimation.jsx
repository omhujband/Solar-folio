import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function EntryAnimation({ onComplete }) {
  const containerRef = useRef(null)
  const sunRef = useRef(null)
  const raysRef = useRef([])
  const planetsRef = useRef([])
  const [phase, setPhase] = useState('darkness') // darkness | ignition | reveal | complete

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setPhase('complete')
        setTimeout(onComplete, 300)
      }
    })

    // Phase 1: Darkness (brief pause)
    tl.to({}, { duration: 0.5 })

    // Phase 2: Sun ignition
    tl.call(() => setPhase('ignition'))
    tl.fromTo(
      sunRef.current,
      { 
        scale: 0, 
        opacity: 0,
        filter: 'blur(20px)'
      },
      { 
        scale: 1, 
        opacity: 1, 
        filter: 'blur(0px)',
        duration: 1.5, 
        ease: 'power2.out' 
      }
    )

    // Sun glow expansion
    tl.to(
      sunRef.current,
      {
        boxShadow: '0 0 100px 30px rgba(255, 215, 0, 0.4), 0 0 200px 60px rgba(255, 140, 0, 0.2)',
        duration: 0.8,
        ease: 'power1.out'
      },
      '-=0.8'
    )

    // Phase 3: Rays emanate
    tl.fromTo(
      raysRef.current,
      { scaleX: 0, opacity: 0 },
      { 
        scaleX: 1, 
        opacity: 0.6, 
        duration: 0.6, 
        stagger: 0.05,
        ease: 'power2.out'
      },
      '-=0.4'
    )

    // Phase 4: Planets fade in
    tl.call(() => setPhase('reveal'))
    tl.fromTo(
      planetsRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      },
      '-=0.2'
    )

    // Final fade
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      },
      '+=0.3'
    )

    return () => tl.kill()
  }, [onComplete])

  // Planet positions (simplified for animation)
  const planets = [
    { color: '#b5b5b5', size: 8, orbit: 80 },   // Mercury
    { color: '#e6c87a', size: 12, orbit: 110 }, // Venus
    { color: '#4a90d9', size: 14, orbit: 145 }, // Earth
    { color: '#cd5c5c', size: 10, orbit: 180 }, // Mars
    { color: '#d4a574', size: 28, orbit: 230 }, // Jupiter
    { color: '#f4d59e', size: 24, orbit: 280 }, // Saturn
    { color: '#7de3f4', size: 18, orbit: 330 }, // Uranus
    { color: '#4b70dd', size: 16, orbit: 375 }, // Neptune
  ]

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-void overflow-hidden"
    >
      {/* Sun */}
      <div
        ref={sunRef}
        className="absolute w-16 h-16 rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, #fff5e6 0%, #ffd700 40%, #ff8c00 100%)',
          boxShadow: '0 0 40px 10px rgba(255, 215, 0, 0.3)',
        }}
      />

      {/* Sun rays */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={el => raysRef.current[i] = el}
          className="absolute origin-left opacity-0"
          style={{
            width: '150px',
            height: '2px',
            left: '50%',
            top: '50%',
            transform: `rotate(${i * 30}deg)`,
            background: 'linear-gradient(90deg, rgba(255, 215, 0, 0.6), transparent)',
          }}
        />
      ))}

      {/* Orbiting planets */}
      {planets.map((planet, i) => (
        <div
          key={i}
          ref={el => planetsRef.current[i] = el}
          className="absolute rounded-full opacity-0"
          style={{
            width: planet.size,
            height: planet.size,
            backgroundColor: planet.color,
            left: `calc(50% + ${planet.orbit}px)`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${planet.size / 2}px ${planet.color}40`,
          }}
        />
      ))}

      {/* Loading indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <p className="text-stardust text-sm tracking-widest uppercase animate-pulse">
          {phase === 'darkness' && 'Initializing...'}
          {phase === 'ignition' && 'Igniting Sol...'}
          {phase === 'reveal' && 'Mapping orbits...'}
          {phase === 'complete' && 'Welcome'}
        </p>
      </div>
    </div>
  )
}