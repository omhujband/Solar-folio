import React, { useState, useEffect } from 'react'

export default function DisclaimerModal({ onAccept }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Fade in on mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    setIsExiting(true)
    setTimeout(() => {
      onAccept()
    }, 500)
  }

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-void transition-opacity duration-500
        ${isVisible && !isExiting ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Subtle star background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Modal Content */}
      <div
        className={`
          relative max-w-xl mx-4 p-8 md:p-12
          glass-panel gradient-border
          transform transition-all duration-700 ease-out
          ${isVisible && !isExiting 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
          }
        `}
      >
        {/* Solar accent */}
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-solar-gold to-transparent" />

        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-solar-gold text-2xl">☀</span>
            <span className="text-mono text-stardust text-sm tracking-widest uppercase">
              Solar-folio
            </span>
          </div>
          <h1 className="text-display-md text-starlight mb-2">
            Welcome, Traveler
          </h1>
        </header>

        {/* Content */}
        <div className="space-y-4 text-body text-center mb-10">
          <p>
            You're about to explore a <em className="text-starlight not-italic">completed</em> digital 
            portfolio — a snapshot of creative work and professional milestones captured up to{' '}
            <span className="text-starlight font-medium">December 31, 2025</span>.
          </p>
          <p>
            Like a time capsule orbiting in the digital cosmos, this portfolio exists as a 
            finished artifact. The planets and their contents represent a specific moment 
            in a continuing journey.
          </p>
          <p className="text-stardust text-sm">
            New discoveries happen elsewhere. This is where they're remembered.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-stardust text-xs tracking-widest uppercase">Ready?</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleAccept}
            className="btn-primary min-w-[200px]"
            aria-label="Enter Solar-folio and begin exploring"
          >
            <span>Enter Solar-folio</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </button>
        </div>

        {/* Footer note */}
        <p className="text-center text-stardust/60 text-xs mt-6">
          Best experienced on desktop with a modern browser
        </p>
      </div>
    </div>
  )
}